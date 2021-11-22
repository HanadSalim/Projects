import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

import './Sidebar.css';
import db from "./firebase";
import {onSnapshot, collection} from "firebase/firestore";

function Sidebar() {
const [room, setroom] = useState([])
useEffect(
    () => 
        onSnapshot(collection(db, "rooms"),(snapshot)=>
        setroom(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
    )
    , []);

    return (
        <div className="sidebar">
            <div className="sidebar__header"> 
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
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
                <input placeholder="Search or start new chat" type="text"/>
              </div>
          </div>
            </div>
          <div className="sidebar__chats">
              <SidebarChat addChat/>
              {room.map(room=> (
                  <SidebarChat key={room.id} id={room.id} name={room.name}/>
              ))}
          </div>
        </div>
    )
}

export default Sidebar
