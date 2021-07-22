import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100;
    height: 450px;
    min-height: 500px;
    box-sizing: border-box;
    margin: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;

    >div{
        margin-left: 10px;
        margin-left: 20px;
    }

    a{
        text-decoration: none;
    }

`;
const StyledPreview = styled.div`
    width: 500px;
    height: 100%;
    flex-grow: 1;
    background: var(--whiteTrans);
`;
const StyledColumn1 = styled.div`
    width: 300px;
    height: 100%;
    background: var(--whiteTrans);
    display: flex;
    flex-direction: column; 
    align-items: center;

    

`;
const StyledColumn2 = styled.div`
    width: 300px;
    height: 100%;
    background: var(--whiteTrans);
    display: flex;
    flex-direction: column; 
   

    .edit-btns{
        display: flex;
        flex-direction: column;

        button{
            background: transparent;
            border: 1px solid transparent ;
            color: var(--darkPink);
            font-size: 17px;
            padding: 20px;
            margin: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        button: hover{
            border: 1px solid black;
        }

        span{
            color: white;;
            font-size: 14px;
            padding: 10px;
        }
    }

`;
const StyledColumnLog = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0;

    .shop-data{
        width: 100%;
        min-height: 200px;
        background: var(--whiteTrans);
        margin-bottom: 10px;
    }
    .shop-change-log{
        width: 100%;
        background: var(--whiteTrans);
        min-height: 200px;
    }


`;

const Home = () => {
    return ( 
        <>
        <StyledWrapper>
            <StyledColumnLog>
                <div className="shop-data">
                    Info o sklepie
                </div>
                <div className="shop-change-log">
                    Logi o zmianach w szablonach
                </div>
            </StyledColumnLog>
            <StyledColumn1>
                Jakieś info
            </StyledColumn1>
            <StyledColumn2>
                Jakieś info
            </StyledColumn2>
            <StyledPreview>
                Podgląd obecnego szablonu
            </StyledPreview>
        </StyledWrapper>
        </>
     );
}
 
export default Home;
