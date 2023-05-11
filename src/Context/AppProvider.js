import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { data } from "../Data/data";

const AppContext =createContext();

export default function AppProvider({children}){
    const[users,setUsers] = useState(data)
    return(
        <AppContext.Provider 
            value={{
                users,
                setUsers
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const AppState = ()=>{
    return useContext(AppContext)
}
