function Footer(props:any) {
    console.log(props);
    
    return (
        <>
            <h1>Footer Component</h1>
            <p>parent name - {props.userName}</p>
        </>
    )
}

export default Footer