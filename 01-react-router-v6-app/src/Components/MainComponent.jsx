//  ********************************************************************************
//  **********  /01-react-router-v6-app/src/Components/MainComponent.jsx  **********
//  ********************************************************************************


import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProtectedRoute } from './ProtectedRoute'
import { Home } from './Pages/Home';
import { SearchPage } from './Pages/SearchPage';
import { TacosPage } from './Pages/TacosPage';
import { TacosDetails } from './Pages/TacosDetails';
import { TacosIndex } from './Pages/TacosIndex';
import { Login } from './Pages/Login';
import { NotFoundPage } from './Pages/NotFoundPage';



//  -------------------------------------
//  ----------  MAINCOMPONENT  ----------
//  -------------------------------------
export const MainComponent = () => {


    return (

        <main className='main'>


            {/* <nav className='navbar'>
                    <ul className='navbar-ul'>
                        <li className='navbar-li'> <a href='/'> Home </a> </li>
                        <li className='navbar-li'> <a href='/search-page'> Search Page </a> </li>
                    </ul>
                </nav> */}

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/search-page' element={<ProtectedRoute> <SearchPage /> </ProtectedRoute>} />

                {/* -----  rutas anidadas  ----- */}
                <Route path='/tacos/:taco' element={<ProtectedRoute> <TacosPage /> </ProtectedRoute>} >

                    {/* -----  utilizando index router  ----- */}
                    <Route index element={<TacosIndex />} />

                    <Route path='details' element={<TacosDetails />} />

                </Route>

                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>

        </main>


    )
}



//  -----  Validación de las props  -----
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,    // 'children' es obligatorio y puede ser cualquier nodo React
    // También puedes validar cualquier otra prop que estés pasando en ...props si es necesario
};
