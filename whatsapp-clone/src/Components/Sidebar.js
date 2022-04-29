import React, { useContext, useEffect, useState } from 'react';
import {Avatar, IconButton } from '@mui/material';
import SidebarChat from '../Components/SidebarChat';
import { AvatarGenerator } from 'random-avatar-generator';
import '../CSS/Sidebar.css';
import db, { auth, logout } from "../firebase";
import {onSnapshot, collection, addDoc} from "firebase/firestore";
import { DonutLargeOutlined, MoreVertOutlined, SearchOutlined, Chat } from '@mui/icons-material';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router';
import { onAuthStateChanged } from 'firebase/auth';

function Sidebar() {
    const [room, setroom] = useState([])
    const [chat, setchat] = useState("")
    const navigate = useNavigate()
    const [context, setContext] = useContext(UserContext)
    const {uId,uProfile,uDisplayName} = context
    const createChat = (event) => {
        if(chat!==""){
            event.preventDefault()
            const generator = new AvatarGenerator();
            addDoc(collection(db, "rooms"), {
                name: chat,
                messages: [],
                profile:generator.generateRandomAvatar()
            })
            setchat("")
        }
        }

    useEffect(
        () => 
            onSnapshot(collection(db, "rooms"),(snapshot)=>
            setroom(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        )
        , []);

    function getInputValue(event){
        setchat(event.target.value)
    }

    function signOut(){
        logout()
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/')
            } 
        })
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header"> 
                <Avatar src={uProfile} />
                <div className="sidebar__headerRight" >
                <IconButton>
                        <DonutLargeOutlined />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlined />
                    </IconButton>
                </div>
            </div> 
            <div className="search__container">

          <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                <SearchOutlined />
                <form onSubmit={createChat}>
                <input placeholder="Search or start new chat" onChange={getInputValue} value={chat}/>
                </form>
              </div>
          </div>
            </div>
            <div className="sidebar__chats__wrap">
                
          <div className="sidebar__chats">
              {room.map(room=> (
                  <SidebarChat key={room.id} id={room.id} name={room.name} profile={room.profile} messages={room.messages}/>
                  ))}
          </div>
            </div>
            <p>displayname:{uDisplayName} and id:{uId}</p>
            <button className='logout-button' onClick={signOut}>logout</button>
        </div>
    )
}

export default Sidebar
