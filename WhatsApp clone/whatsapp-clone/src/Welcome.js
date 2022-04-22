import React, { useContext } from 'react'
import Chat from './Chat'
import { RoomContext } from './context/roomContext'
import './Welcome.css'
function Welcome(){
    const [context, setContext] = useContext(RoomContext)
    const {selected} = context 
    return(selected?
        <Chat />:
        <div className='wc'>
            <div className='wrapper'>
                <div className='pc'>
                    <div className='image'></div>
                </div>
                <div className='tc'>
                    <div className='heading'>
                        <h1>WhatsApp Web</h1>
                        <div><b>NEW</b></div>
                    </div>
                    <div className='text'>
                    Now send and receive messages without keeping your phone online.<br/>
                    Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Welcome