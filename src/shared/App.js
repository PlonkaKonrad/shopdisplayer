import React, { Component } from 'react';
import routes from './routes'
import {Route} from 'react-router-dom';
import Home from './Home';
import styled from 'styled-components';

// import MainPage from './CREATOR/COMPONENTS/MainPage/MainPage';
// import Step1 from './CREATOR/COMPONENTS/Step1/Step1';
// import Step2 from './CREATOR/COMPONENTS/Step2/Step2';
// import Step3 from './CREATOR/COMPONENTS/Step3/Step3';
// import Step4 from './CREATOR/COMPONENTS/Step4/Step4';


const StyledWrapper = styled.div`
width:100%;
height: 100vh;
overflow: hidden;
background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
background-image: url(https://manager.ec-at.com/resources/img/bg/2.jpg);
background-repeat: no-repeat;
background-size: cover;
font-family: var(--font);
display: flex;
flex-direction: column;
`;


class App extends Component {
    state = { 
        shopID: 'dn2u383237bfy4328by43f4',
        shopUrl: 'http://localhost:8000',
        shopData:{}, 
        backgroundImage: 'url(https://manager.ec-at.com/resources/img/bg/2.jpg)',
        chosenHomeTemplate: 'Cactac',
        chosenCategoryTemplate: 'Minera',
        chosenProductTemplate: 'Minera',
     }
    render() { 
        return ( 
            <>
                <StyledWrapper>
                {/* ROUTING */}
                    {routes.map(({path, exact, component:C, ...rest })=>(
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => (
                                <C/> 
                            )}
                        />
                    ) )}
                {/* ROUTING */}
                </StyledWrapper>
            </>
         );
    }
}
 
export default App;
