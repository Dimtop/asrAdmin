import { Panel,Loader} from "rsuite";
import Text from "../text/text.component";



const Widget = (props:any)=>{
    return(
    <Panel className="widget" shaded bordered  header={<Text size="2rem" align="left">{props.title}</Text>}>
    {
        props.loading?
        <Loader/>
        :
        props.children
    }
    </Panel>
    )
}


export default Widget;