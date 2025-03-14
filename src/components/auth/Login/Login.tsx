import { SignIn, SignInButton, SignUp, SignUpButton } from "@clerk/clerk-react";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="container">
      <SignIn>
        <SignInButton />
      </SignIn>
    </div>
  );
};

export default Login;
