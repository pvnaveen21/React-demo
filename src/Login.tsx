import { useNavigate } from "react-router-dom"

function Login(){
    const route = useNavigate()

    const loginFun =()=>{
        localStorage.setItem('refresh-value', "naveenpv21")
        route('/')
    }

    return(
        <>
            <h1>Welcome !</h1>
            <button className="btn btn-success" onClick={()=>loginFun()}>Log in</button>
        </>
    )
}
export default Login