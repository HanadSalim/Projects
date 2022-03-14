import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

 function SidebarChat({id,name,profile}) {
    return (
        <div className="sidebarChat">
            <div className="sidebarChat__avatar">
                <Avatar src={profile} />
            </div>
            <div className="sidebarChat__info">
               <h2>{name}</h2>
               <p>{id}</p> 
            </div>
        </div>
    )
}

export default SidebarChat
