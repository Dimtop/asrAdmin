import Text from "../text/text.component"
import { Link } from "react-router-dom"


const Forbidden = (props:any)=>{
    return(
        <>
            <Text>Δεν έχετε δικαίωμα προβολής αυτής της σελίδας.</Text>
            <Link to="/login">Συνδεθείτε</Link>
        </>
    )
}


export default Forbidden;