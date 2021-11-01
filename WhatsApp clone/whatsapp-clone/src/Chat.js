import {Search, AttachFile, MoreVert} from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Chat.css"

function Chat() {
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
                <div className="chat__body"></div>
                <div className="chat__footer"></div>
        </div>
    )
}

export default Chat
