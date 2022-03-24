import { createContext } from "react";

const RoomContext = createContext()

const RoomProvider = ({ children }) => {
  const [room, setroom] = useState([])
  const [chat, setchat] = useState("")
    return (
        <RoomContext.Provider value={{ room, chat}}>
          {children}
        </RoomContext.Provider>
      );
    };