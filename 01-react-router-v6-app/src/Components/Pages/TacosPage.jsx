//  **********************************************************************************
//  **********  /01-react-router-v6-app/src/Components/Pages/TacosPage.jsx  **********
//  **********************************************************************************


import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "../NavLink";

//  ----------------------------------
//  ----------  TACOS PAGE  ----------
//  ----------------------------------
export const TacosPage = () => {

    const home = '/';
    const { taco } = useParams();

    return (

        <div className='container-page'>

            <h1> TACO {taco} </h1>

            {/* -----  para las rutas anidadas  ----- */}
            <Outlet />

            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'> <NavLink to={home}> Home </NavLink> </li>
                    <li className='navbar-li'> <NavLink to='details'> Ir a los detalles </NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}

