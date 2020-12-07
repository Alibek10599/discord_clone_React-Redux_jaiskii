import React, {useEffect} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/counter/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import {login, logout} from './features/counter/userSlice'


function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(()=>{
        auth.onAuthStateChanged((authUser) =>{
            console.log("user is", authUser);
            if(authUser){
                // logged user
                dispatch(login({
                    uid : authUser.uid,
                    photo : authUser.photoURL,
                    email : authUser.email,
                    displayName: authUser.displayName
                })
                );
            } else{
                // logged out
                dispatch(logout());
            }
        })
    }, [dispatch])
  return (
    <div className="app">
        {user ? (
            <>
        <Sidebar/>
        <Chat/>
        </>
            ):(
                <Login/>
        )}
    </div>
  );
}

export default App;
