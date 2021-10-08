const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const user = require("../models/user");

exports.signup = (req,res,next) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let access = "Viewer";
    console.log(req.body);
    userModel.findOne({
        email:email
    })
    .then((userData) => {
        if(userData){
            return res.status(409).json({
                msg:"user Already exists"
            });
        }
        return bcrypt.hash(password,12)
    })
    .then((pass) => {
        let userDoc = new userModel({
            name:name,
            email:email,
            password:pass,
            accessType:access
        })
        return userDoc.save();
    })
    .then(() => {
        return res.status(201).json({
            msg:"registered successfully"
        });
    })
    .catch(err => console.log(err))
}
exports.login = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    let userCred;
    userModel.findOne({
        email:email
    })
    .then((userData) => {
        if(!userData){
            return res.status(404).json({
                msg:"user not found kindly register first"
            })
        }
        userCred = userData;
        return bcrypt.compare(password,userData.password);
    })
    .then((result) => {
        if(!result){
            return res.status(401).json({
                msg:"invalid password"
            })
        }
        let token = jwt.sign({
            email:email,
            id:userCred._id
        },"mernstackdev");
        return res.status(200).json({
            msg:"successfully logged in",
            token:token
        })
    })
}


exports.access = (req, res) => {
    let modifiedAccess = req.body.modAccess;
    let targetEmail = req.body.targetEmail;
    let token = req.body.token;
    jwt.verify(token, "mernstackdev", (err, decoded) => {
        if(!err){
            userModel.findOne({
                email:decoded.email
            })
            .then((userData) => {
                if(!userData){
                    return res.status(404).json({
                        msg:"user not found kindly register first"
                    });
                }
                //console.log(userData);
                if(userData.accessType === "Admin"){
                    userModel.updateOne({email: targetEmail}, {accessType: modifiedAccess},(err) => {
                        if(!err){
                            return res.status(200).json({
                                msg: "success"
                            });
                        }else{
                            return err;
                        };
                    });
                }else {
                    return res.status(401).json({
                        msg:"You are not the admin"
                    });
                }
                
            })
        }
    })
}