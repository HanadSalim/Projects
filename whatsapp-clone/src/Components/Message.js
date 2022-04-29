import React, { useContext } from 'react';
import {UserContext} from '../context/userContext';
function Message({currentUser,user,message,time}){

    return(currentUser==user.id?
   
    <div className="chat__message chat__sender right">
        <p className='chat__text'>{message}</p>
        <p className="chat__time">{time}</p>
    </div> :<div className="chat__message left">
        <p className="chat__name">{user.name}</p>
        <p className='chat__text'>{message}</p>
        <p className="chat__time">{time}</p></div>
)
}

export default Message