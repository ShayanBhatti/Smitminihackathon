export default function Button(prop, click){
    return(<>
    
    <button onClick={click} >{prop.title} </button>
    </>);
}