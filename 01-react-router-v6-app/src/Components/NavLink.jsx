//  **************************************************************************
//  **********  /01-react-router-v6-app/src/Components/NavLink.jsx  **********
//  **************************************************************************


import { NavLink as NavLinkReactRouterV6 } from 'react-router-dom';
import PropTypes from 'prop-types';


//  -------------------------------
//  ----------  NAVLINK  ----------
//  -------------------------------
export const NavLink = ({ to, children, ...props }) => {

    return (
        <NavLinkReactRouterV6
            {...props}
            className={({ isActive }) => isActive ? 'is-active' : ''}
            to={to}>
            {children}
        </NavLinkReactRouterV6>
    )

}


//  -----  Validación de las props  -----
NavLink.propTypes = {
    to: PropTypes.string.isRequired,        // 'to' es obligatorio y debe ser un string
    children: PropTypes.node.isRequired,    // 'children' es obligatorio y puede ser cualquier nodo React
    // También puedes validar cualquier otra prop que estés pasando en ...props si es necesario
};