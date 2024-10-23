//  ***********************************************************
//  **********  /01-react-router-v6-app/src/App.jsx  **********
//  ***********************************************************


//  -------------------------------
//  ----------  IMPORTS  ----------
//  -------------------------------
import './App.css'
import { HeaderComponent } from './Components/HeaderComponent';
import { MainComponent } from './Components/MainComponent';


//  ---------------------------
//  ----------  APP  ----------
//  ---------------------------
export const App = () => {

    return (

        <div className='app'>

            <HeaderComponent />
            <MainComponent />

        </div>
    )
}