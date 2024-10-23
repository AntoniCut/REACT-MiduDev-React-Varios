//  ******************************************************************************
//  **********  /01-react-router-v6-app/src/Components/Pages/Login.jsx  **********
//  ******************************************************************************

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";


//  -----------------------------
//  ----------  LOGIN  ----------
//  -----------------------------
export const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();
    
    //const location = useLocation();
    const { state } = useLocation();

    console.log("location -> ",  location);
    console.log("state?.location?.pathname -> ",  state?.location?.pathname);
    
    const handleClick = () => {
        
        login();
        const pathName = state?.location?.pathname ?? '/';
        navigate( pathName );
    }

    return (
        <div className='container-page'>
            <h1> LOGIN </h1>
            <button onClick={handleClick}> Login </button>
        </div>
    )
}