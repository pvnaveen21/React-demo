import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard(){
    const logStatus = !!localStorage.getItem('refresh-value');
    return(
        <>
            {logStatus ? <Outlet></Outlet> : <Navigate to="login" />}
        </>
    )
}