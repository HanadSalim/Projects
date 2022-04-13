import {AttachFile, MoreVert, InsertEmoticon, Mic, SearchOutlined} from '@mui/icons-material'
import {Avatar, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { RoomContext } from './context/roomContext'
import Message from './Message'

import "./Chat.css"

function Chat() {
    // when you type in the input Field store in state
    const [input,setInput]=useState('')
    // click enter to display message
    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(input)
        setInput('')
    }
    
    // Using Context api to update the chat title, profile and ****CHAT NEXT****
    const [context] = useContext(RoomContext)
    const {roomName,profile,roomId} = context
    

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={profile} className="profile__pic"/>
               
                <div className="chat__headerInfo">
                    <h4>{roomName}</h4>
                    <p>{roomId}</p>
                </div>
                
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>  
                <div className="chat__body">
                    <Message />   
                </div>
                <div className="chat__footer">
                    <div className='left'>
                        <IconButton><InsertEmoticon/></IconButton>
                        <IconButton><AttachFile/></IconButton>

                    </div>
                    <form>
                        <input value={input} onChange={(e)=>setInput(e.target.value)}type="text" placeholder="Type a message"></input>
                        <button onClick={sendMessage}type="submit">Send message</button>
                    </form>
                    <div className='right'><Mic/></div>
                    
                </div>
        </div>
    )
}

export default Chat
