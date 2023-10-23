import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../Hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    // const location = useLocation();

    if(isAdminLoading || loading){
        return <progress className="progress w-56"></progress>;
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' ></Navigate>
};

export default AdminRoute;