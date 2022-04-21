import React, { useContext } from 'react'
import Chat from './Chat'
import { RoomContext } from './context/roomContext'

function Welcome(){
    const [context, setContext] = useContext(RoomContext)
    const {selected} = context 
    return(selected?
        <Chat />:<div className='chat'>welcome message</div>
    )
}

export default Welcome