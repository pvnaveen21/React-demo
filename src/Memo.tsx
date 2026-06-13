import React from "react";

function Memo(props:any) {
    console.log('Memo component rendered');
    return (
        <div>
            <h1>Memo</h1>
            <p>Name: {props.name}</p>
            <button className="btn btn-primary" onClick={props.changeNameFun}>Change Name</button>
            <button className="btn btn-secondary" onClick={() => props.getChildData('1')}>Send Data to Parent</button>
        </div>
    )
}

export default React.memo(Memo);