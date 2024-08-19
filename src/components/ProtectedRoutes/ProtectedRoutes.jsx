import { Navigate } from "react-router-dom"
const ProtectedRoutes = ({ children, user }) => {
    return user ? children : <Navigate to="/login"></Navigate>
}

export default ProtectedRoutes