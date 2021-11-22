import {Search, AttachFile, MoreVert, InsertEmoticon, Mic} from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
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

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen.....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <Search/>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>  
                <div className="chat__body">
                    <p className={!true?"chat__message": "chat__message chat__sender"}>
                        <span className="chat__name">Hanad Salim</span>hiii
                    <span className="chat__time">4:15pm</span>
                    </p>
                    
                </div>
                <div className="chat__footer">
                    <InsertEmoticon/>
                    <form>
                        <input value={input} onChange={(e)=>setInput(e.target.value)}type="text" placeholder="Type a message"></input>
                        <button onClick={sendMessage}type="submit">Send message</button>
                    </form>
                    <Mic/>
                </div>
        </div>
    )
}

export default Chat
