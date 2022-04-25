import React from 'react';

function Message({message,time}){
    return(<div className={!false?"chat__message": "chat__message chat__sender"}>
    <span className="chat__name">Hanad </span>
    <p className='chat__text'>{message}</p>
<span className="chat__time">{time}</span>
</div>)
}

export default Message