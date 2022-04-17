import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import './SidebarChat.css'
import { RoomContext } from './context/roomContext'
 
function SidebarChat({id,name,profile}) {
    // eslint-disable-next-line
    const [context, setContext] = useContext(RoomContext)
    function logIt(){
        setContext({roomName:name,profile:profile,roomId:id,history:[1,2,2]})
    }

    
    return (
 
        <div className="sidebarChat "onClick={logIt} >
            <div className="sidebarChat__avatar">
                <Avatar src={profile} />
            </div>
            <div className="sidebarChat__info">
            <span>{name}</span>
            <p>{id}</p> 
             <div className='border'></div></div>
           
            
        </div>
       
    )
}

export default SidebarChat
