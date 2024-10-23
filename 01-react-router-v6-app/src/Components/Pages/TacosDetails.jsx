//  *************************************************************************************
//  **********  /01-react-router-v6-app/src/Components/Pages/TacosDetails.jsx  **********
//  *************************************************************************************


import { useParams } from "react-router-dom";


//  ----------------------------------
//  ----------  TACOS PAGE  ----------
//  ----------------------------------
export const TacosDetails = () => {

    const { taco } = useParams();

    return (

        <div className='container-page'>
            <h1> Taco - {taco} - Details </h1>
        </div>
    )
}