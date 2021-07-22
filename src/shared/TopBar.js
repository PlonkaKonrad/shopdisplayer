import React from 'react';


import styled from 'styled-components';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {FaBrush} from "react-icons/fa";
import {FaChalkboard} from "react-icons/fa";
import {FaList} from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";
import {FaSave} from "react-icons/fa";
import {CgArrowRightR} from "react-icons/cg";
import {CgArrowLeftR} from "react-icons/cg";
import {FaHome} from "react-icons/fa";

const StyledWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    font-family: var(--font);


    .ecat-logo{
        height: 100%;
        position: relative;
        width: 180px;
        margin-right: 20px;
    }
    .ecat-logo img{
        height: 100%;
    }
    
    .ecat-logo::before {
        content: "Creator";
        position: absolute;
        right: 40px;
        bottom: -15px;
        color: var(--pink);
        font-size: 15px;
        font-family: var(--fancyfont);
    
    }

    button{
        font-size: 15px;
        padding: 5px;
        margin-right: 10px;
        background: var(--whiteTrans);
        color:var(--pink);
        cursor: pointer;
        border: 1px solid transparent;
    }

    button:hover{
        border: 1px solid var(--pink);
    }

    span{
        color: white;
        margin-left: 10px;
    }
    

`;

const TopBar = (props) => {


    const apiSetTemplate = (type) => {
        const shopID = props.shopID;
        const shopUrl = '&url=' + encodeURIComponent(shopUrl);
        
        
        
        if(type === 'Home'){
            fetch(`http://localhost:3000/apiSetTemplate/${shopID}/${type}/${props.chosenHomeTemplate}`)
        }else if(type === 'Category'){
            fetch(`http://localhost:3000/apiSetTemplate/${shopID}/${type}/${props.chosenCategoryTemplate}`)
        }else if(type === 'Category'){
            fetch(`http://localhost:3000/apiSetTemplate/${shopID}/${type}/${props.chosenProductTemplate}`)
        }
            
    }

    return ( 
        <>
            <StyledWrapper>
           
                    <div className='ecat-logo'>
                            <img src='https://ec-at.com/premium/wp-content/uploads/2021/02/logo-ecat-biale-full-1.png'></img>
                    </div>
               

                <Switch>
                    <Route exact path='/'>
                        <Link to="/step1"><button ><FaChalkboard/> <span>Edytuj stronę główną</span></button></Link>
                        <Link to="/step2"><button ><FaList/> <span>Edytuj stronę Kategorii</span></button></Link>
                        <Link to="/step3"><button ><FaShoppingBag/> <span>Edytuj stronę Produktu</span></button></Link>
                    </Route>

                    <Route exact path='/step1'>
                        <Link to="/"><button ><FaHome/> <span>Pulpit</span></button></Link>
                        <Link to="/"><button onClick={()=>apiSetTemplate("Home")}><FaList/> <span>Zapisz i opublikuj</span></button></Link>
                    </Route>

                    <Route exact path='/step2'>
                        <Link to="/"><button ><FaHome/> <span>Pulpit</span></button></Link>
                        <Link to="/"><button onClick={()=>apiSetTemplate("Category")}><FaList/> <span>Zapisz i opublikuj</span></button></Link>
                    </Route>

                    <Route path='/step3'>
                        <Link to="/"><button ><FaHome/> <span>Pulpit</span></button></Link>
                        <Link to="/"><button onClick={()=>apiSetTemplate("Product")}><FaList/> <span>Zapisz i opublikuj</span></button></Link>
                    </Route>
                </Switch>

            

            </StyledWrapper>
        </>
     );
}
 
export default TopBar;