//  *********************************************************************************
//  **********  /01-react-router-v6-app/src/Components/ProtectedRoute.jsx  **********
//  *********************************************************************************


import PropTypes from 'prop-types'
import { useAuth } from './Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


//  ----------------------------------------
//  ----------  RUTAS PROTEGIDAS  ----------
//  ----------------------------------------
export const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useAuth();
    const location = useLocation();

    //if (!isAuthenticated) return <Navigate to='/login' />
    if (!isAuthenticated) return <Navigate to='/login' state={{ location }} />

    return children;
}


//  -----  Validación de las props  -----
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,    // 'children' es obligatorio y puede ser cualquier nodo React
    // También puedes validar cualquier otra prop que estés pasando en ...props si es necesario
};