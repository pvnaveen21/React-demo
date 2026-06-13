import Header from "./Header";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Layouts() {
    return (
        <>
            <Header></Header>
            <div style={{display:'flex'}}>
                <div className="me-5" style={{borderRight:'1px solid black'}}>
                    <Nav></Nav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}