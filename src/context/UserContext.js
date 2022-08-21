import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ( {children} ) => {
    
    const [loggedIn,setLoggedIn]  = useState('false')

    
    

    return <UserContext.Provider value={{loggedIn,setLoggedIn}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;
