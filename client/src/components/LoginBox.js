import Label from "./Label";
import Input from "./Input";
import {GoogleLogin} from 'react-google-login';
const googleLoginSuccess = (res) =>{
console.log(res);
}
const clientID = '206596429698-8tvsa4ucuavuk20nphvqla9aec3t3qfe.apps.googleusercontent.com';

const googleLoginFailure = (err)=>{
  console.log(err);
  console.log("Google Auth was unsuccessfull");
}

export default function Form() {
  return (
    <div className="login-box">
      <form className="login-box--form">
        <Label for="login-email" text="Email"/>
        <Input placeholder="Enter your email" type="email" id="login-email"/>
        <Label for="login-password" text="Password" />
        <Input placeholder="Enter your password" type="password" id="login-password"/>
        <button className="btn"><a href="/">Login</a></button>
      </form>
      <h3 className="login-box--or">(or)</h3>
      <GoogleLogin clientId="206596429698-8tvsa4ucuavuk20nphvqla9aec3t3qfe.apps.googleusercontent.com" render={(renderprops)=>(
        <button className="btn" onClick={renderprops.onClick}>
        Sign in with Google
      </button>
      )}
      onSuccess = {googleLoginSuccess}
      onFailure = {googleLoginFailure}
      cookiePolicy="single_host_origin"
      >
      </GoogleLogin>
      <h4 className="login-box--end">New User? <a href="/sign-up">Sign up!</a></h4>
    </div>
  );
}
