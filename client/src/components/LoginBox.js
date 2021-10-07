import Label from "./Label";
import Input from "./Input";

export default function Form() {
  return (
    <div className="login-box">
      <form className="login-box--form">
        <Label for="login-email" text="Email"/>
        <Input placeholder="Enter your email" type="email" id="login-email"/>
        <Label for="login-password" text="Password" />
        <Input placeholder="Enter your password" type="password" id="login-password"/>
        <button className="btn"><a>Login</a></button>
      </form>
      <h3 className="login-box--or">(or)</h3>
      <button className="btn">
        <a>Sign in with Google</a>
      </button>
      <h4 className="login-box--end">New User? <a href="/sign-up">Sign up!</a></h4>
    </div>
  );
}
