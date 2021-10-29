import Label from "./Label";
import Input from "./Input";

export default function Form() {
  return (
    <div className="signup-box">
      <form className="signup-box--form">
        <Label for="signup-email" text="Email" />
        <Input placeholder="Enter your email" type="email" id="signup-email" />
        <Label for="signup-password" text="Password" />
        <Input
          placeholder="Enter a password"
          type="password"
          id="signup-password"
        />
        <Label for="signup-confirm-password" text="Confirm Password" />
        <Input
          placeholder="Confirm password"
          type="password"
          id="signup-confirm-password"
        />
        <button className="btn">
          <a>Login</a>
        </button>
      </form>
      <h3 className="signup-box--or">(or)</h3>
      <button className="btn">
        <a>Sign in with Google</a>
      </button>
      <h4 className="signup-box--end">
        New User? <a href="/sign-up">Sign up!</a>
      </h4>
    </div>
  );
}
