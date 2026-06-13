import { useEffect, useRef, useState } from "react";

function Hooks() {
    // 
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Added')
    const userText: any = useRef("");


    useEffect(() => {
        console.log('useEffect  1 called')
        setCount(count + 1)
        return () => {
            console.log('useEffect 1 cleanup called')
        }
    }, [])

    useEffect(() => {
        console.log('useEffect 2 called')
    }, [count])
    const inputFocus = () => {
        userText.current.focus()
    }

    useEffect(() => {
        inputFocus()
    }, [])

    return (
        <div>
            <input type="text" ref={userText} />
            <button onClick={() => inputFocus()}>focus</button>
            <hr />
            <h1>Hooks</h1>
            <p>Count: {count}</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Name: {name}</h1>
            <button className="btn btn-primary" onClick={() => setName('Naveen PV')}>Change Name</button>
        </div>
    );
}

export default Hooks;