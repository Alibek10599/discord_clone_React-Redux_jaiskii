import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
//import InfoOutlineIcon from "@material-ui/icons/InfoOutLined";
import CallIcon from "@material-ui/icons/Call";
import {Avatar} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import {selectUser} from "./features/counter/userSlice";
import {useSelector} from "react-redux";
import {auth} from "./firebase";


function Sidebar (){
    const user = useSelector(selectUser);

    return(<div className ="sidebar">
      <h2>sidebar</h2>
        <div className="sidebar_top">
            Alibek10599
            <ExpandMoreIcon/>
        </div>

        <div className="sidebar_channels">
            <div className="sidebar_channelsHeader">
                <div className="sidebar_header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                </div>
                <AddIcon className="sidebar_addChannel" />
            </div>
        </div>
        <div className="sidebar_channelsList">
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
        </div>
        <div className="sidebar_voice">
            <SignalCellularAltIcon className="sidebar_voiceIcon"
            fontsize="large"/>
            <div className="sidebar_voiceInfo">
                <h3>Voice connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebar_voiceIcons">
                <svg className="MuiSvgIcon-root" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>
                <CallIcon/>
            </div>
        </div>

        <div className="sidebar_profile">
            <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
            <div className="sidebar_profileInfo">
                <h3>{user.displayName}</h3>
                <p>{user.uid.substring(0,5)}</p>
            </div>

            <div className="sidebar_profileIcons>">
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
            </div>
        </div>

    </div>)
}
export default Sidebar;