import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";

function Login (){
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.
            message));
    };

    return(<div className="login">

        <div className="login_logo">
            <img src="../public/kisspng-discord-logo-twitch-tv-instant-messaging-gamer-approxeng-approximate-engineering-arduino-pi-c-5b74f70b17e8a2.6424527015343920750979.png"/>
        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>)
}

export default Login;