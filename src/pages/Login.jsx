import { Button } from "@/components/ui/button";
import React from "react";

function Login() {

    const onClick = () => {

        checkLoginState();
    }
    return <div>
        <Button onClick={onClick}>
            Login with facebook
        </Button>
    </div>;
}

export default Login;
