import React from "react";
import {Avatar} from "@material-ui/core";
import "./Message.css"

function Message (){
    return(<div>
        <Avatar/>
        <div className="massage_info">
            <h4>Alibek10599
            <span className="message_timestamp">this is a timestamp
            </span>
            </h4>
            <p>Some message</p>
        </div>
    </div>)
}

export default Message;