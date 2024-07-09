import { Button } from "@/components/ui/button";
import React from "react";

function Login({ onLoginClick }) {
  return (
    <div>
      <Button onClick={onLoginClick}>Login with facebook</Button>
    </div>
  );
}

export default Login;
