


const Text = (props:any)=>{
    return(
        <p style={{fontSize:props.size||"1rem",fontWeight:props.weight||"normal",textAlign:props.align||"center",marginTop:props.marginTop||"0"}}>{props.children}</p>
    )
}


export default Text;