import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    height: 450px;
    display: flex;
    justify-content: center;
    margin: 20px;

`;
const StyledView = styled.div`
    width: 600px;
    height: 100%;
    background: var(--whiteTrans);
    overflow-y: auto;
    position: relative;
    margin: 0 10px;

`;
const Info = styled.div`
    width: 250px;
    height: 100%;
    background: var(--whiteTrans);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    margin-left: 20px;

    h1{
       display: flex;
       justify-content: center;
       color: white;
       font-size: 20px;
    }
`;
const StyledStyle = styled.div`
    width: 250px;
    height: 100%;
    background: var(--whiteTrans);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    position: relative;
`;
const StyledPreview = styled.div`
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    overflow: hidden;
   

    img{
        width: 100%;
        transition: 0.2s;
    }

    img: hover{
        filter: brightness(0.5);
    }
`;
const StyledPage = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;

    span{}

`;
const StyledPageStyle = styled.div`
    width: 90%;

`;
const StyledCover = styled.div`
    height: 100vh;
    width: 100%;
    background-color: transparent;
    position: sticky;
    top: 0;
    z-index: 1000;
`;


const Step2 = () => {
    return ( 
        <StyledWrapper>
            <Info>
                <h1>Wybierz styl strony Kategorii</h1>
                {/* {displayMainPages} */}
            </Info>
            <StyledView>
                {/* {displayPreview} */}
            </StyledView>
            <StyledStyle>
                {/* {displayStyler} */}
            </StyledStyle>
        </StyledWrapper>
     );
}
 
export default Step2;
