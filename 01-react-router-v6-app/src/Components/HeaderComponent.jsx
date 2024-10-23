//  **********************************************************************************
//  **********  /01-react-router-v6-app/src/Components/HeaderComponent.jsx  **********
//  **********************************************************************************


import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'
import { NavLink } from './NavLink'


//  ---------------------------------------
//  ----------  HEADERCOMPONENT  ----------
//  ---------------------------------------
export const HeaderComponent = () => {

    return (

        <header className='header'>
            <a href="https://vitejs.dev" target="_blank"> <img src={viteLogo} className="logo" alt="Vite logo" /> </a>

            <h1>
                REACT ROUTER V6 APP
                &nbsp; &nbsp; &nbsp; -  &nbsp; &nbsp; &nbsp;
                🚀 &nbsp; 😊 &nbsp; TonyChollo &nbsp; 🚀 &nbsp; 😊
                &nbsp; &nbsp; &nbsp; -  &nbsp; &nbsp; &nbsp;
            </h1>

            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'> <NavLink to='/' > Home </NavLink> </li>
                    <li className='navbar-li'> <NavLink to='/search-page' > Search Page </NavLink> </li>
                </ul>
            </nav>

            <a href="https://react.dev" target="_blank"> <img src={reactLogo} className="logo react" alt="React logo" /> </a>
        </header>

    )

}