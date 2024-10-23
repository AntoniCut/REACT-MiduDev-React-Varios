//  *****************************************************************************
//  **********  /01-react-router-v6-app/src/Components/Pages/Home.jsx  **********
//  *****************************************************************************


import reactLogo from '../../assets/react.svg'

//  ----------------------------
//  ----------  HOME  ----------
//  ----------------------------
export const Home = () => {

    return (

        <div className='container-page'>
            <h1> HOME </h1>
            <img src={reactLogo} style={{ height: '400px' }} className="logo react" alt="React logo" />
        </div>
    )
}