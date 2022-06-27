import { createContext, useContext } from "react"
import { toaster, useToaster } from "rsuite"

export const ToasterContext = createContext(toaster)
export const useToasterContext = ()=> useContext(ToasterContext)

const ToasterProvider = (props:any)=>{

    const toaster = useToaster()

    
    return (
        <ToasterContext.Provider value={toaster}>
            {props.children}
        </ToasterContext.Provider>
    )
}


export default ToasterProvider
