import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'


function ProtectRoutes() {
    
    const { loggedIn } = useSelector(state => state.login)

    return (
        loggedIn ? <Outlet/> : <Navigate to="/sign" replace/>
    )
}

export default ProtectRoutes