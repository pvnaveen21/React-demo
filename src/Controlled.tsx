import { useState } from "react";

function Controlled() {
    const [value, setValue] = useState('Hello')
    return (
        <div>
            <h2>Controlled Component</h2>
            <input type="text" value = {value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
}   

export default Controlled;