import React, {createContext, useState } from "react";

export const  UserContext = createContext(null)

const {Provider} = UserContext

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    uId:"",
    uProfile:"",
    uDisplayName:"",
    
  })
 
    return <Provider value={[state, setState]}>{children}</Provider>
    };

    UserProvider.context = UserContext
    export default UserProvider

    