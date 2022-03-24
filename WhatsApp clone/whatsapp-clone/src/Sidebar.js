import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import { AvatarGenerator } from 'random-avatar-generator';
import './Sidebar.css';
import db from "./firebase";
import {onSnapshot, collection, addDoc} from "firebase/firestore";

function Sidebar() {
const [room, setroom] = useState([])
const [chat, setchat] = useState("")


useEffect(
    () => 
        onSnapshot(collection(db, "rooms"),(snapshot)=>
        setroom(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
    )
    , []);

    function getInputValue(event){
    setchat(event.target.value)
}

const createChat = (event) => {
   if(chat!==""){
    event.preventDefault()
    const generator = new AvatarGenerator();
    addDoc(collection(db, "rooms"), {
        name: chat,
        history: [],
        profile:generator.generateRandomAvatar()
      })
      setchat("")
   }
}

    return (
        <div className="sidebar">
            <div className="sidebar__header"> 
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div> 
            <div className="search__container">

          <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                <SearchIcon />
                <form onSubmit={createChat}>
                <input placeholder="Search or start new chat" onChange={getInputValue} value={chat}/>
                </form>
              </div>
          </div>
            </div>
          <div className="sidebar__chats">
              {room.map(room=> (
                  <SidebarChat key={room.id} id={room.id} name={room.name} profile={room.profile}/>
              ))}
          </div>
        </div>
    )
}

export default Sidebar
