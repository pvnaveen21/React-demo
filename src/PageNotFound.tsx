import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const route = useNavigate()

    const PageNotFoundFun = () => {
        route('/login')
    }

    return (
        <>
            <h1>Page Not Found</h1>
            <button className="btn btn-success" onClick={() => PageNotFoundFun()}>Home</button>
        </>
    )
}
export default PageNotFound