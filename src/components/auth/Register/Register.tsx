import { SignUp, SignUpButton } from "@clerk/clerk-react";
import React from "react";

const Register = () => {
  return (
    <div className="container">
      <SignUp>
        <SignUpButton />
      </SignUp>
    </div>
  );
};

export default Register;
