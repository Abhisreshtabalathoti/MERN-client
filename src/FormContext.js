import { createContext,useState } from "react";
export const FormContext=createContext();
export const FromProvider=({childComp})=>{
    const [localDB,setDB]=useState([])
    return(
        <FormContext.Provider
        value={{localDB,setDB}}>
            {childComp}
        </FormContext.Provider>
    );
}
