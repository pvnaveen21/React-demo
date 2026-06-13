import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import AuthGuard from "./AuthGuard"
import Layouts from "./Layouts"
import About from "./About"
import ListRender from "./ListRender"
// import LifeCycleParent from "./LifeCycleParent"
import UnControlled from "./UnControlled"
import Controlled from "./Controlled"
import Hooks from "./Hooks"
import ComA from "./ComA"
import ParentCom from "./ParentCom"
import Api from "./Api"

function MyRoutes() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<AuthGuard></AuthGuard>}>
                    <Route index element={<Navigate to="home" replace />} /> 
                    <Route path="home" element={<Home></Home>}> </Route>
                    <Route path="header" element={<Header></Header>}> </Route>
                </Route> */}
                <Route index element={<Navigate to="collection" replace />} />
                <Route path="/" element={<AuthGuard></AuthGuard>}>
                    <Route path="collection" element={<Layouts></Layouts>}>
                        <Route index element={<Navigate to="/collection/home" replace />} />
                        <Route path="home" element={<Home></Home>}> </Route>
                        <Route path="about" element={<About></About>}> </Route>
                        <Route path="list" element={<ListRender></ListRender>}> </Route>
                        {/* <Route path="lc" element={<LifeCycleParent></LifeCycleParent>}> </Route> */}
                        <Route path="controlled" element={<Controlled></Controlled>}> </Route>
                        <Route path="uncontrolled" element={<UnControlled></UnControlled>}> </Route>
                        <Route path="hooks" element={<Hooks></Hooks>} /> 
                        <Route path="usecontext" element={<ComA></ComA>} />
                        <Route path="memo" element={<ParentCom></ParentCom>} /  >   
                        <Route path="api" element={<Api></Api>}/>
                    </Route>
                </Route>
                {/* <Route path="header" element={<Header></Header>}> </Route>
                <Route path="nav" element={<Nav></Nav>}> </Route> */}

                <Route path="login" element={<Login></Login>}> </Route>

                <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
            </Routes>
        </>
    )
}

export default MyRoutes