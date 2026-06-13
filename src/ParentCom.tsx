import { useCallback, useState } from "react";
import Memo from "./Memo";

function ParentCom(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Added More');

    const changeName = useCallback(() => {
        setName('Naveen pv')
    }, [name]);

    const getChildData = useCallback((data: any) => {
        console.log('Data from child - ', data);
    }, [])
    return(
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increment Count</button>
            <hr />
            <Memo name={name}  changeNameFun={changeName} getChildData={getChildData}/>
        </div>
    )
    

}
export default ParentCom;