import {AttachFile, MoreVert, InsertEmoticon, Mic, SearchOutlined} from '@mui/icons-material'
import {Avatar, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { RoomContext } from '../context/roomContext'
import Message from '../Components/Message'
import db from "../firebase";
import { doc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import "../CSS/Chat.css"

function Chat() {
    // when you type in the input Field store in state
    const [input,setInput]=useState('')
    // ContextApi
    const [context, setContext] = useContext(RoomContext)
    const {roomName,profile,roomId,history} = context 
    //Once loaded and on change do the following
    useEffect(() => {
        let isMounted = true  
        if (isMounted) onSnapshot(doc(db,"rooms",roomId),(doc)=>{
            console.log(doc.data().messages)
            setContext({roomName:roomName,profile:profile,roomId:roomId,history:doc.data().messages,selected:true})
            return () =>{isMounted=false}
        })
    }, [roomId]);
    
    // click enter to display message
    
    const sendMessage = async (e) =>{
        if(roomId!==""){
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes();
            e.preventDefault();
            const docRef = doc(db, "rooms", roomId);
            //add a new message to the "messages" array field.
            await updateDoc(docRef, {
                messages: arrayUnion({
                //user:{auth.username},
                message:input,
                time:time
            }) })
            
        }
        setInput('')
    }
    
    // Using Context api to update the chat title, profile and ****CHAT NEXT****
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
                    {history.map(element=><Message time={element.time} message={element.message}  />)}  
                     
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
