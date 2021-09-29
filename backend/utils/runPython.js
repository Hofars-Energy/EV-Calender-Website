const { spawn } = require("child_process");

const callPython = (res) => {
    const python = spawn('python', ['./pyscript.py']);

    let pyData ;

    python.on("data", function (data) {
        console.log(data);
        console.log("hello")
        pyData = data;
    })
    python.on("close",() => {
        res.send('stdout');
    })
    python.on("error",(err) => {
        console.log(err);
    })
}
 
module.exports = callPython;