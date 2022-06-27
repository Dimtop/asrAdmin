import Text from "../text/text.component"
import { Link } from "react-router-dom"

const NotFound = (props:any)=>{
    return(
        <>
            <Text>Η σελίδα που ζητήσατε δεν βρέθηκε.</Text>
            <Link to="/">Επιστρέψτε στην αρχή</Link>
        </>
    )
}


export default NotFound;