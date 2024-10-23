//  ********************************************************************************
//  **********  /01-react-router-v6-app/src/Components/Hooks/useAuth.jsx  **********
//  ********************************************************************************


import { useContext } from 'react'
import { AuthContext } from './authContext';


//  ----------  USEAUTH  ----------
export const useAuth = () => {
    
    const auth = useContext(AuthContext);
    
    if (!auth) throw new Error("useAuth debe estar usado dentro de un AuthProvider");
    return auth;
};




