import { Button } from "@/components/ui/button";
import React from "react";

function Login() {
  const onLoginClick = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        FB.api("/me", { fields: "name, email" }, function (response) {
          document.getElementById("profile").innerHTML =
            "Good to see you, " +
            response.name +
            ". i see your email address is " +
            response.email;
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  };

  return (
    <div>
      <Button onClick={onLoginClick}>Login with facebook</Button>
    </div>
  );
}

export default Login;
