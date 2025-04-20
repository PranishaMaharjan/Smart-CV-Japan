import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignIn,
} from "@clerk/clerk-react";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="container">
      <SignedOut>
        <SignIn></SignIn>
      </SignedOut>
    </div>
  );
};

export default Login;
