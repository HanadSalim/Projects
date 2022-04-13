import {AttachFile, MoreVert, InsertEmoticon, Mic, SearchOutlined} from '@mui/icons-material'
import {Avatar, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { RoomContext } from './context/roomContext'
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
                    <div className={!true?"chat__message": "chat__message chat__sender"}>
                        {/* <span className="chat__name">Hanad Salim</span> */}
                        <p className='chat__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsam tempore perspiciatis reiciendis a sit repellendus ipsa, non adipisci, explicabo assumenda fuga nesciunt iusto maxime voluptate? Tenetur odit facilis numquam.</p>
                    <span className="chat__time">4:15pm</span>
                    </div>
                    <div className={!false?"chat__message": "chat__message chat__sender"}>
                        <span className="chat__name">Hanad Salim</span>
                        <p className='chat__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa at quis voluptatem enim, eius rem vitae ipsum aperiam neque pariatur officiis harum earum laudantium. Dolor, aspernatur accusamus mollitia vel possimus fugiat soluta maxime officia culpa, accusantium, dicta nisi eum eaque rerum! Placeat ut rerum fugiat reprehenderit consequuntur blanditiis iste.</p>
                    <span className="chat__time">4:15pm</span>
                    </div>
                    
                    
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
