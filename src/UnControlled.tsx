import { useRef } from "react";

function UnControlled() {
    const userText:any = useRef('');
    const getValue = () => {       
         console.log(userText.current.value);
    }
    return (
        <div>
            <h2>UnControlled Component</h2>
            <input type="text"  ref={userText}/>
            <button onClick={() => getValue()}>Show Value</button>
        </div>
    );
}   

export default UnControlled;