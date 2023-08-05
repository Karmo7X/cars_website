import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext =createContext()

export const AuthContextProvider=({children})=>
{
    const [currentUser , setCurrentUser]=useState()
    

    const login =async(inputs)=>
    {
        try{
            const res =await axios.post('http://localhost:5000/api/v1/auth/login',{
            headers:{
                Accept:"application/json"
            }
        } ,inputs)

        setCurrentUser(res.data)
        }
        catch(error)
        {
               console.log(error.response.data)
        }
        
    }



    return(
        <AuthContext.Provider value={{login }}>
            {children}
        </AuthContext.Provider>

    )

}