import { Avatar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import { AvatarGenerator } from 'random-avatar-generator';

function SidebarChat() {
    
    const [state, setState]= useState('');

    useEffect(() => {
       var generator = new AvatarGenerator();
       setState(generator.generateRandomAvatar())
    }, [state])
    return (
        <div className="sidebarChat">
            <div className="sidebarChat__avatar">
                <Avatar src={state} />
            </div>
            <div className="sidebarChat__info">
               <h2>Room Name</h2>
               <p>Last message.....</p> 
            </div>
        </div>
    )
}

export default SidebarChat
