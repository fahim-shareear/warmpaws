import { Children, use } from "react";
import { AuthContext } from "../../Authentications/AuthContext";
import { Navigate, useLocation } from "react-router";

const Privateroutes = ({children}) =>{
    const {user, loading} = use(AuthContext);

    const location = useLocation();

    if(loading) {
        return <span className="loading loading-spinner text-success absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    };

    if(user){
        return children;
    };

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default Privateroutes