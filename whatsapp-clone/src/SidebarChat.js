import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import './SidebarChat.css'
import { RoomContext } from './context/roomContext'
import { doc,getDoc} from "firebase/firestore";
import db from "./firebase";
 
function SidebarChat({id,name,profile}) {
    // eslint-disable-next-line
    const [context, setContext] = useContext(RoomContext)
    function logIt(){
        const fetchData = async() => {
            try {
                const docRef = doc(db, "rooms", id);
                const response = await getDoc(docRef)
                if (response.exists) {
                    setContext({roomName:name,profile:profile,roomId:id,history:response.data().messages,selected:true}) 
                }
            } catch(err) {
                console.error(err);
            }

        }
        fetchData();

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
