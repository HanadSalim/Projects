import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import './SidebarChat.css'
import { RoomContext } from './context/roomContext'
 
function SidebarChat({id,name,profile}) {

    const [context, setContext] = useContext(RoomContext)
    function logIt(){
        setContext({roomName:name,profile:profile})
    }
    return (
        <div className="border_b">
            <div className="sidebarChat "onClick={logIt} >
                <div className="sidebarChat__avatar">
                    <Avatar src={profile} />
                </div>
                <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{id}</p> 
                </div>
            </div>
        </div>
    )
}

export default SidebarChat
