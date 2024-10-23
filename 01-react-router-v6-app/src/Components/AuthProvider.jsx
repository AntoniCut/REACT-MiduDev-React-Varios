//  *******************************************************************************
//  **********  /01-react-router-v6-app/src/Components/AuthProvider.jsx  **********
//  *******************************************************************************


import PropTypes from 'prop-types'
import { useState } from 'react';
import { AuthContext } from './Hooks/authContext';


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAutentificated] = useState(false);
    const login = () => setIsAutentificated(true);
    const logout = () => setIsAutentificated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}



//  -----  Validación de las props  -----
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,    // 'children' es obligatorio y puede ser cualquier nodo React
    // También puedes validar cualquier otra prop que estés pasando en ...props si es necesario
};