import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'
import { AvatarGenerator } from 'random-avatar-generator';

function SidebarChat({id,name,addChat}) {
    const generator = new AvatarGenerator();


    const createChat = () => {
        const roomName = prompt("Enter new room name");

        if(roomName){
            // Database
        }
    };

    return !addChat ? (
        <div className="sidebarChat">
            <div className="sidebarChat__avatar">
                <Avatar src={generator.generateRandomAvatar()} />
            </div>
            <div className="sidebarChat__info">
               <h2>{name}</h2>
               <p>Last message.....</p> 
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
