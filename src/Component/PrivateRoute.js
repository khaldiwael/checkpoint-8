import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, isAuth }) => {
   return (
       isAuth === false ? children : <Navigate to='/login' replace />
   )
}

export default PrivateRoute