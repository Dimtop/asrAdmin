import { Message } from "rsuite"


const Error = (props:any)=>{

    return(
        <Message showIcon type="error" duration={1000}>
            {props.message}
        </Message>
    )
}

export default Error