import { Children, use } from "react";
import { AuthContext } from "../../Authentications/AuthContext";
import { Navigate, useLocation } from "react-router";

const Privateroutes = ({children}) =>{
    const {user, loading} = use(AuthContext);

    const location = useLocation();

    if(loading) {
        return <span className="loading loading-spinner text-success absolute top-50% left-50% transform translate-y-(-50%) translate-x-(-50%)"></span>
    };

    if(user){
        return children;
    };

    return <Navigate state={location?.pathname} to={"/login"}></Navigate>

};

export default Privateroutes