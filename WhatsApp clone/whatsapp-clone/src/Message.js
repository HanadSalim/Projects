import React from 'react';

function Message(prop){
    return(<div className={!false?"chat__message": "chat__message chat__sender"}>
    <span className="chat__name">Hanad Salim</span>
    <p className='chat__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa at quis voluptatem enim, eius rem vitae ipsum aperiam neque pariatur officiis harum earum laudantium. Dolor, aspernatur accusamus mollitia vel possimus fugiat soluta maxime officia culpa, accusantium, dicta nisi eum eaque rerum! Placeat ut rerum fugiat reprehenderit consequuntur blanditiis iste.</p>
<span className="chat__time">4:15pm</span>
</div>)
}

export default Message