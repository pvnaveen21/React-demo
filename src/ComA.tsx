import { useState } from "react";
import ComB from "./ComB";
import UserContext from "./UserContext";

function ComA() {
    const [name] = useState("Naveen pv");
    return (
        <div>
            <UserContext.Provider value={name}>
                <h1>Component A</h1>
                <ComB></ComB>
            </UserContext.Provider>
        </div>
    );
}

export default ComA;