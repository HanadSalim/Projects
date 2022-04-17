import {AttachFile, MoreVert, InsertEmoticon, Mic, SearchOutlined} from '@mui/icons-material'
import {Avatar, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { RoomContext } from './context/roomContext'
import Message from './Message'
import db from "./firebase";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import "./Chat.css"

function Chat() {
    // when you type in the input Field store in state
    const [input,setInput]=useState('')
    const [context, setContext] = useContext(RoomContext)
    const {roomName,profile,roomId,history,selected} = context 
    // const x = db.collection('rooms').where(firebase.firestore.FieldPath.documentId(), '==', roomId).get()
    // const roomref = doc(db, "rooms", roomId)
    // useEffect(()=>{
    //      setContext({history:docSnap.data().messages})
    // })
        

    // click enter to display message
    const sendMessage = async (e) =>{
        if(roomId!==""){
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes();
            e.preventDefault();
            console.log(input)
            const docRef = doc(db, "rooms", roomId);
            const docSnap = await getDoc(docRef)
            //add a new message to the "messages" array field.
            await updateDoc(docRef, {
                messages: arrayUnion({
                //user:{auth.username},
                message:input,
                time:time
            }) })

            if (docSnap.exists()) {
                let x = docSnap.data().messages
                x.forEach(element => {
                        console.log(element.message)
                });
            // console.log("Document data:", docSnap.data().messages);
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }

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
                    {/* once selected map through array and display messages */}
                    {selected?<p></p>:(history.map(element=><Message  />))}  
                     
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
