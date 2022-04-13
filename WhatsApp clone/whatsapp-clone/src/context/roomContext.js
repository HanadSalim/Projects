import React, {createContext, useState } from "react";

export const  RoomContext = createContext(null)

const {Provider} = RoomContext

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    roomName: "Click a chat",
    profile:"",
    chatHistory:{}
  })
 
    return <Provider value={[state, setState]}>{children}</Provider>
    };

    RoomProvider.context = RoomContext
    export default RoomProvider

    