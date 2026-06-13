import { useNavigate } from "react-router-dom"
import './index.css'

export default function Nav() {
    const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/collection/home')
        }
        else if (type == 2) {
            route('/collection/about')
        }
        else if (type == 3) {
            localStorage.removeItem('refresh-value')
            route('/login')
        }
        else if (type == 4) {
            route('/collection/lc')
        }
        else if (type == 5) {
            route('/collection/controlled')
        }
        else if (type == 6) {
            route('/collection/uncontrolled')
        }
        else if (type == 7) {
            route('/collection/hooks')
        }
        else if (type == 8) {
            route('/collection/usecontext')
        }
        else if (type == 9) {
            route('/collection/memo')
        }
        else if (type == 10) {
            route('/collection/api')
        }
    }
    return (
        <>
            <div>
                <button className="nav-btn" onClick={() => navFun(1)}>Home</button>
            </div>
            <button className="nav-btn" onClick={() => navFun(2)}>About</button>

            <div>
                <button className="nav-btn" onClick={() => navFun(4)}>Life Cycle </button>
            </div>
            <div>
                <button className="nav-btn" onClick={() => navFun(5)}>Controlled </button>
            </div>
            <div>
                <button className="nav-btn" onClick={() => navFun(6)}>UnControlled </button>
            </div>
            <div>
                <button className="nav-btn" onClick={() => navFun(7)}>Hooks </button>    
            </div>
            <div>
                <button className="nav-btn" onClick={() => navFun(8)}>UseContext </button>    
            </div>
            <div>
                <button className="nav-btn" onClick={() => navFun(9)}>Memo </button> 
            </div>
            <div>
                <button className="nav-btn" onClick={() => navFun(10)}>API </button> 
            </div>

            <div>
                <button className="nav-btn" onClick={() => navFun(3)}>Logout</button>
            </div>
        </>
    )
}