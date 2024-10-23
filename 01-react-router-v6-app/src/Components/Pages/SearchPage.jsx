//  ***********************************************************************************
//  **********  /01-react-router-v6-app/src/Components/Pages/SearchPage.jsx  **********
//  ***********************************************************************************


//import { Link } from "react-router-dom";
import { NavLink } from '../NavLink'

//  -----------------------------------
//  ----------  SEARCH PAGE  ----------
//  -----------------------------------
export const SearchPage = () => {

    //  -----  rutas  -----
    const tacos = [
        'cochinita',
        'chili',
        'carnita',
        'quesadilla'
    ];


    return (

        <div className='container-page'>

            <h1> SEARCH PAGE </h1>

            <ul className='navbar-ul'>

                {tacos.map(taco => (
                    <li key={taco} className='navbar-li'>
                        <NavLink to={`/tacos/${taco}`}> {taco} </NavLink>
                    </li>
                ))}

            </ul>

        </div>
    )
}