///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////            IMPORTS               //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component, useState, useEffect } from 'react';
import faker from 'faker';
import { StaticRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { GlassMagnifier } from 'react-image-magnifiers';
import styled from 'styled-components';
import { createMemoryHistory } from 'history';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {FiTruck} from 'react-icons/fi';
import {FiUserCheck} from 'react-icons/fi';
import {FiCheckSquare} from 'react-icons/fi';
import {FiTool} from 'react-icons/fi';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiFillTag} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {FiMenu} from 'react-icons/fi';
import {FiSearch} from 'react-icons/fi';
import {FaRegStar} from 'react-icons/fa';
const history = createMemoryHistory();


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////             MAIN                 //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledMainBody = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #dfdfdf;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif; 
  flex-direction: column;
  align-items: center;
  
`;
const StyledMainWrapper = styled.div`
  width: 1100px;
  min-height: 90vh;
  margin: 10px;
  margin-top: 0;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px 5px rgba(0,0,0,0.5);
  transform: translateY(-20px);



  @media (max-width: 1100px){
    width: 100%;
    margin:0;
  }
`;
const StyledMainColumn = styled.div`
  display: flex;
  width: 100%;
`;
const StyledMainProductColumn = styled.div`
  display: flex;
  width: 900px;
  flex-direction: row;


  @media (max-width: 700px){
    flex-direction: column-reverse;
    

    div{
      width: 100%;
      height: auto;
    }
  }


  
  
`;
const StyledMainInfos = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  display: flex;

  @media(max-width: 600px){
    height: auto;
    flex-direction: column;
  }
`;
const StyledMainInfo  = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #3d98dd;
  background-color: #f5f5f5;
  justify-content: center;
  flex-direction: column;

  svg{
    font-size: 35px;
    margin: 0 5px;
    padding: 20px;
  }
  span{
    margin: 0;
    color: black;
    font-weight: 700;
  }

  p{
    font-size: 10px;
    color: gray;
    padding: 20px;
    text-align: center;
  }
  
  @media(max-width: 600px){
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  
`;
class Agora extends Component {
  state = {
    shopName:'Agora', 
    cart:[],
    nav:[
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Sklep',
        url: '/category'
      },
      {
        title: 'O nas',
        url: '/about'
      },
      {
        title: 'Kontakt',
        url: '/contact'
      }
    ],
    footer:[
      {navs:[
        {header: 'Meble',
        content: [
                {title:'Kanapy', url:''},
                {title:'Stoły', url:''},
                {title:'Krzesła', url:''},
                {title:'Lampy', url:''},
                ]
        },
        {header: 'Ozdoby',
        content: [
                {title:'Kanapy', url:''},
                {title:'Stoły', url:''},
                {title:'Krzesła', url:''},
                {title:'Lampy', url:''},
                ]
        },
        {header: 'Informacje',
        content: [
                {title:'Produkty', url:''},
                {title:'Wysyłka', url:''},
                {title:'Zwroty', url:''},
                {title:'Reklamacje', url:''},
                {title:'O nas', url:''},
                ]
        },
          ],
      },
      {socials :[
              {title:'facebook', icon:<AiOutlineFacebook/>,url:'',active:true},
              {title:'instagram', icon:<AiOutlineInstagram/>,url:'',active:true},
              {title:'youtube', icon:<AiOutlineYoutube/>,url:'',active:true},
              {title:'linkedin', icon:<AiOutlineLinkedin/>,url:'',active:true},
              {title:'googleplus', icon:<AiOutlineGooglePlus/>,url:'',active:true},
              ]


      },
      {newsletter : [{active:true}]}
      
    ],
    opinions:[
      {
        name: 'Ania',
        city: 'Oświęcim',
        content: 'Zamówiłam sofe w poniedziałek w czwartek była już u mnie. Polecam!'
      },
      {
        name: 'Marcin',
        city: 'Kraków',
        content: 'Dobre jakościowo produkty, szybka wysyłka, świetny kontakt ze sprzedawcą, ogólne wrażenia zdecydowanie na plus'
      },
      {
        name: 'Julia',
        city: 'Szczecin',
        content: 'Produkt zgodny z opisem, dobre wykonanie, polecam'
      },
      {
        name: 'Rafał',
        city: 'Malbork',
        content: 'wszystko zgodnie z opisem, dobry kontakt ze sprzedawcą.'
      }
    ],
    categories: [

        {title: 'Kurtki',
         sortValue:'kurtki',
         subCategories:[
            {title:'Przeciw deszczowe',sortValue:'przeciw deszczowe'}]},

        {title: 'Spodnie',
         sortValue:'spodnnie',
          subCategories:[
            {title:'Krótkie', sortValue:'krótkie'},
            {title:'Długie', sortValue:'Długie'},
            {title:'Robocze', sortValue:'robocze'}]},

        {title: 'Inne',
         sortValue:'inne',
         subCategories:[
            {title:'Plecaki', sortValue:'plecaki'},
            {title:'Buty', sortValue:'buty'},
            {title:'Nordic walking', sortValue:'nordic walking'}]},

    ],
    products: [],
    searchQuery:'',
    images:[
      'https://wspinanie.pl/wp-content/uploads/2015/01/1985-Limited-Mountain-Jacket-1.jpg',
      'https://www.polstor.pl/upload/shop_product_lang/kurtka-meska-columbia-everett-mountain-trademark-jacket-phoenix-blue-dark-compass/variants/full/F17_1683661_489_f.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVegUoJFbHAf2XhJREUzvJ68ObE855X0g7w&usqp=CAU',
      'https://www.trekkinn.com/f/13655/136550240/the-north-face-1985-seasonal-mountain-jacket.jpg',
      'https://media.netgun.pl/cache/f9/7b/f97b6cf63b46b72c5dd63f4588313938.jpg',
      'https://cdni.llbean.net/is/image/wim/501342_33379_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2'






    ],

    refresh: 0,
   }

   refresh = () => {
     this.setState({
       refresh: this.state.refresh + 1
     })
     localStorage.setItem('cart', JSON.stringify(this.state.cart));

   }
   addToCart = (product) => {
     if(product[0].quantity === 0){
       return
     }
     
      let cart = [...this.state.cart]
      let isInArray = false;

    if(cart.length === 0){
      cart.push(product)
        this.setState({
          cart
        },this.refresh)

    }else{
      for(let i = 0; i <= cart.length -1; i++){
        if(cart[i][0].id === product[0].id){
          // cart[i][0].quantity = product[0].quantity;
          cart[i][0].quantity++;

          if(cart[i][0].quantity > cart[i][0].availableQuantity){
            cart[i][0].quantity = cart[i][0].availableQuantity;
          }

          isInArray = true;
          this.setState({
            cart
          },this.refresh)
         }
       
      }
      if(!isInArray){
        cart.push(product)
        this.setState({
          cart
        },this.refresh)
      }


      
    }



   }
   deleteFromCart = (productId) => {
    let cart = [...this.state.cart]
      for(let i = 0; i < cart.length ; i++ ){
        if(cart[i][0].id === productId){
           cart.splice(i,1)
        }
      }
    this.setState({
      cart
    },this.refresh)

    
   }
   setSearchQuery = (query) => {
    this.setState({
      searchQuery:query
    })
   }

   //random functions just for test purposes 

   randomImage = () => {
    let random = Math.floor(Math.random() * (this.state.images.length - 0)) + 0;

    return this.state.images[random]
  }
  randomCategory = (type) => {
    let random = Math.floor(Math.random() * (this.state.categories.length - 0)) + 0;

    if(type === 'main'){
      return this.state.categories[random].sortValue
    }else if( type ==='sub'){
      let random1 = Math.floor(Math.random() * (this.state.categories[random].subCategories.length - 0)) + 0;
      return this.state.categories[random].subCategories[random1]
    }

  }
  randomAdditionalImages = () => {
    let imagesArr = []
    for(let i = 0; i < 2; i++){
      imagesArr.push(this.randomImage())
    }

    return imagesArr
  }
  randomAttributes = () => {
    let atributesArr = []

    for(let i = 0 ; i < 3; i++){
      atributesArr.push(faker.commerce.productMaterial())
      atributesArr.push(faker.commerce.product())
      atributesArr.push(faker.commerce.color())
    }
    
    return atributesArr

  }

   //random functions just for test purposes 



   componentDidMount() {
        let products = [...this.state.products]
        for(let i = 0; i < 100; i++){

        products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          longDescription: faker.lorem.paragraph() +faker.lorem.paragraph(),
          subCategory: this.randomCategory('sub'),
          category: this.randomCategory('main'),
          price: faker.commerce.price(),
          quantity: 1,
          availableQuantity: 10,
          relatedProducts: [],
          images: this.randomAdditionalImages(),
          atributes: this.randomAttributes(),
          
        })

        this.setState({products})

        

      }
      if(JSON.parse(localStorage.getItem('cart'))){
        this.setState({
          cart: JSON.parse(localStorage.getItem('cart'))
        })
      }

   }
   changeQuantityOfProduct = (id, action) => {
    let cart = [...this.state.cart]
 
      for(let i = 0; i<= cart.length -1; i++){
        if(cart[i][0].id === id && action === 'plus'){
          cart[i][0].quantity++
          if(cart[i][0].quantity > cart[i][0].availableQuantity){
            cart[i][0].quantity = cart[i][0].availableQuantity
          }
        }else if(cart[i][0].id === id && action === 'minus'){
          cart[i][0].quantity--
          if(cart[i][0].quantity < 0){
            cart[i][0].quantity = 0;
          }
        }
        
      }
    
    this.setState({
      cart
    },this.refresh)
   }

  
  render() { 

  

    return ( 
      <StyledMainBody>

<Router history={history}>
<HeaderMinera
          shopName = {this.state.shopName}
          cart = {this.state.cart}
          nav = {this.state.nav}
          deleteFromCart = {this.deleteFromCart}
          setSearchQuery = {this.setSearchQuery}
          searchQuery = {this.state.searchQuery}
          changeQuantityOfProduct = {this.changeQuantityOfProduct}
        />

      <StyledMainWrapper>
          <StyledMainInfos>
            <StyledMainInfo>
              <FiTruck/>
              <span>Darmowa dostawa</span>
              <p>Darmowa dostawa niezależnie od wielkości zamówienia</p>
            </StyledMainInfo>
            <StyledMainInfo>
              <FiCheckSquare/>
              <span>Gwarancja 24 miesiące</span>
              <p>Wszystkie produkty objęte są 24 miesięczną gwarancją</p>
            </StyledMainInfo>
            <StyledMainInfo>
              <FiUserCheck/>
              <span>Doradztwo</span>
              <p>Potrzebujesz porady? Napisz do nas!</p>
            </StyledMainInfo>
            <StyledMainInfo>
              <FiTool/>
              <span>Serwis 24/7</span>
              <p>Nasz serwis jest do twojej dyspozycji 7 dni w tygodniu!</p>
            </StyledMainInfo>
          </StyledMainInfos>
        
        
          <Switch>
            
            <Route exact path="/">
              <DoubleBanerLeft />
              <ProductGridwithTag 
                products = {this.state.products}
              />
              <BanerWide/>
              <BigProductsGrid
                products = {this.state.products}
              />
              <Counter/>
              <DoubleBanerSmall/>
              <Carousel 
                products = {this.state.products}
              />
              <Hashtag text='become.superhero'/>
              <ProductsGrid
                products = {this.state.products}
                categories = {this.state.categories}
              />
             
            </Route>

            <Route exact path="/category">
              <StyledMainColumn>
                  <Sidebar
                    setSearchQuery = {this.setSearchQuery}
                    categories={this.state.categories}
                    products = {this.state.products}
                    
                  />
                  <CategoryDisplay
                    products = {this.state.products}
                    searchQuery = {this.state.searchQuery}
                  />
              </StyledMainColumn>
            </Route>

            <Route exact path="/product/:id">
              <StyledMainColumn>
                <StyledMainColumn>
                  <Sidebar
                    setSearchQuery={this.setSearchQuery}
                    categories={this.state.categories}
                    products = {this.state.products}
                  />
                  <StyledMainProductColumn>
                  <ProductDescription
                    products={this.state.products}
                  />
                  <ProductProps
                   products={this.state.products}
                    addToCart = {this.addToCart}
                  />
                  </StyledMainProductColumn>
                </StyledMainColumn>
                 
              </StyledMainColumn>
            </Route>

          <Route exact path="/blog">
            
          </Route>

          <Route exact path="/about">
              <About/>
          </Route>

          <Route exact path="/contact">
              <Contact />
          </Route>


        </Switch>
        <Footer
          categories={this.state.categories}
          footer = {this.state.footer}
          shopName = {this.state.shopName}
        />
      
      </StyledMainWrapper>
    </Router>
    </StyledMainBody>
     );
  }
}
export default Agora;

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////             ABOUT                //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledAboutWrapper = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    margin-top: 100px 0;
    box-sizing: border-box;
    padding: 20px;
    height: auto;
    align-items: center;
    position: relative;
    flex-direction: column;

    span{
        width: 600px;
        height: 300px;
        position: absolute;
        border: 2px solid black;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    section{
        display: flex;
        width: 100%;
        height: 400px;
        align-items: center;
        z-index: 10;
    }
    img{
        height: 400px;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    }
    div{
        width: 50%;
        height: 300px;
        background: rgba(245, 245, 245,1);
        box-sizing: border-box;
        padding: 20px;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    }
    h1{
        margin: 10px;
    }
    p{
        font-style: italic;
        font-size: 15px;
    }
    @media (max-width: 700px){
        span{
            display: none;
        }
        img{
            width: 100%;
            height: auto;
        }
        section{
            flex-direction: column;
            height: auto;
        }
        div{
            width: 100%;
            height: auto;
        } 
    }
    @media (max-width: 900px){
        section{
            flex-direction: column;
            height: auto;
        }
    }

`;
const About = () => {
    return (  <>
    <StyledAboutWrapper>
        <span></span>
        <section>
            <img src='https://cdn.pixabay.com/photo/2019/10/06/22/23/fire-4531325_960_720.jpg' alt='shop'></img>
                <div>
                    <h1>Agora's Lifestyle</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic  </p>
                </div>
        </section>
        <section>
            
                <div>
                    <h1>Ubranie na każde warunki</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic  </p>
                </div>
                <img src='https://cdn.pixabay.com/photo/2016/03/09/22/49/ice-climbing-1247606_960_720.jpg' alt='shop'></img>
        </section>
    </StyledAboutWrapper>
    
    </>
     );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////          BANER WIDE              //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const StyledBanerWideWrapper = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    margin: 20px;
    background-color: transparent;
    height: 300px;
    display: flex;
    over-flow: hidden;
    font-family: 'Inter', sans-serif; 
`;
const StyledBanerWideText = styled.div`
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    align-items: flex-start;
    color: black;

    h2{
        margin: 0px;
        font-weight: 100;
    }
    h1{
        margin: 0px;
        color: #1582c2;
    }
    button{
        border: none;
        background-color: #3e3e3e;
        padding: 10px 50px;
        color: white;
        margin-top: 20px;
        transition: 0.2s;
        cursor: pointer;
    }
    button:hover{
        background-color: #f3b518;
    }
    @media (max-width: 600px){
        padding-left: 20px;
        width: 100%;
        margin: 0;

        a{
            width: 200px;
        }
    }
`;
const StyledBanerWideImage = styled.div`
    width: 50%;
    height: 100%;

    img{
        width: auto;
        height: 100%;
    }
    @media (max-width: 600px){
            display: none;   
    }
`;
const BanerWide = () => {
    return ( <>
    <StyledBanerWideWrapper>
        <StyledBanerWideText>
            <h2>LETNIA KOLEKCJA </h2>
            <h1>DO 30% TANIEJ</h1>
            <Link to='/product'><button>Sprawdź szczegóły</button></Link>
        </StyledBanerWideText>
        <StyledBanerWideImage>
            <img src="https://www.onlygfx.com/wp-content/uploads/2020/05/sale-stamp-4.png" alt='baner'></img>
        </StyledBanerWideImage>
        
    </StyledBanerWideWrapper>
    
    </> );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////         BIG PRODUCTS GRID              ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledBigProductsGridWrapper = styled.div`
    height: 400px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    flex-wrap: wrap;

    @media(max-width: 1100px){
        height: auto;
        flex-wrap: wrap;
        justify-content: space-around;
    }

`;
const StyledBigProductsGridColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px;
    box-sizing: border-box;

    @media (max-width: 500px){
        width: 100%;
        overflow: hidden;
    }
`;
const StyledBigProductsGridRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;

    a{
        width: 100%;
        text-decoration: none;
    }
`;
const StyledBigProductsGridThinColumn = styled.div`
    display: flex;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;

`;
const StyledBigProductsGridBaner = styled.div`
    width: 100%;
    min-height: 50%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;

    img{
        height: 100%;
        width: auto;
    }
`;
const StyledBigProductsGridSmallBaner = styled.div`
    width: 100%;
    min-height: 50%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;

    img{
    height: auto;
    width: 100%;
}
`;
const StyledBigProductsGridProduct = styled.div`
width: 200px;
height: 100%;
cursor: pointer;
transition: 0.2s;
background-color: white;
padding: 20px;
box-sizing: border-box;
border: 5px solid transparent;
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
align-items: center;

img{
    max-height: 70%;
    width: 100px;
    height: auto;
 
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
    font-size: 13px;
    text-align: center;
}
h5{
    margin: 0;
    color: #b0b0b0;
    padding-left: 10px;
    font-size: 12px;
    color: #1582c2;
}

:hover{
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    z-index: 10;
}
@media(max-width: 700px){
    margin:0;
    border: none;
}
`;
const BigProductsGrid = (props) => {

    

    const products1 = [...props.products].splice(0,2);
    const products2 = [...props.products].splice(2,2);
    const products3 = [...props.products].splice(4,2);

    if(props.products.length === 0 ){
        const product = {
            name: "product",
            price: '29,99',
            images: ['https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=webp&v=1530129477'],
            id: 'example'
        }

        for(let i = 0; i< 2; i++){
            products1.push(product);
            products2.push(product);
            products3.push(product);
        }

    }


    const displayProducts1 = products1.map(product => {

        return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledBigProductsGridProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name? product.name : 'produkt'}</h4>
                        <h5>{product.price? product.price : '19.99'} PLN</h5>
                    
                </StyledBigProductsGridProduct>
                </Link>
        )
    })
    const displayProducts2 = products2.map(product => {

        return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledBigProductsGridProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                    
                </StyledBigProductsGridProduct>
                </Link>
        )
    })
    const displayProducts3 = products3.map(product => {

        return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledBigProductsGridProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                    
                </StyledBigProductsGridProduct>
                </Link>
        )
    })



    return ( 
        <StyledBigProductsGridWrapper>
            <StyledBigProductsGridColumn>
                <StyledBigProductsGridRow>
                    {displayProducts1}
                </StyledBigProductsGridRow>
                <StyledBigProductsGridRow>
                    <StyledBigProductsGridSmallBaner>
                        <img src='https://cdn.pixabay.com/photo/2018/06/01/23/05/glass-3447456_960_720.jpg' alt='baner'></img>
                    </StyledBigProductsGridSmallBaner>
                </StyledBigProductsGridRow>
            </StyledBigProductsGridColumn>
                
            <StyledBigProductsGridColumn>
                <StyledBigProductsGridRow>
                    {displayProducts2}
                </StyledBigProductsGridRow>
                <StyledBigProductsGridRow>
                    {displayProducts3}
                </StyledBigProductsGridRow>
            </StyledBigProductsGridColumn>

            <StyledBigProductsGridThinColumn>
               <StyledBigProductsGridBaner>
                   <img src='https://s14761.pcdn.co/wp-content/uploads/2019/01/Waterproof-Jacket-Group-test-MTB-ENDURO-8888-1140x760.jpg' alt='baner'></img>
               </StyledBigProductsGridBaner>
            </StyledBigProductsGridThinColumn>


        </StyledBigProductsGridWrapper>

     );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////               CAROUSEL                 ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledCarouselWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 200px;
    display: flex;
    overflow: hidden;
    font-family: 'Inter', sans-serif; 
    position:relative;

`;
const StyledCarouselSmall = styled.div`
    height: 200px;
    flex-grow: 10px
    position: relative;
    overflowX: scroll;
    display: flex;
    align-items: center;
    transition: 0.5s;
    background: translateX(${props => props.offset || 0 });
    padding-left: 100px;
    padding-right: 200px;
    background: white;

    a{
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column ;
        text-decoration: none;
        color: black;
    }

    @media (max-width: 700px){
        
    }
`;
const StyledCarouselProduct = styled.div`
width: 200px;
height: 100%;
cursor: pointer;
transition: 0.2s;
background-color: white;
padding: 20px;
box-sizing: border-box;
border: 5px solid transparent;
display: flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
align-items: center;

img{
    max-height: 70%;
    width: 100px;
    height: auto;
 
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
    font-size: 13px;
    text-align: center;
}
h5{
    margin: 0;
    color: #b0b0b0;
    padding-left: 10px;
    font-size: 12px;
    color: #1582c2;
}


:hover{
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    z-index: 10;
}

@media(max-width: 700px){
    margin:0;
    border: none;
}
`;
const StyledCarouselArrow = styled.div`
    height: 200px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    transition: 0.5s;
    background: white;
    z-index: 30;
    position: absolute;
    background: #F5F5F5;
    

    button{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        font-size: 20px;
        cursor: pointer;
        border:1px solid black;
    }

    button:hover{
        border: 1px solid black;
    }

    @media(max-width: 700px){
        padding: 0;
    }

`;
let offset = 0;

const Carousel = (props) => {

const products = [...props.products].splice(0,20);

if(props.products.length === 0 ){
    const product = {
        name: "product",
        price: '29,99',
        images: ['https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=webp&v=1530129477'],
        id: 'example'
    }

    for(let i = 0; i< 10; i++){
        products.push(product)
    }
}

const [refresh, setrefresh] = useState(0);

const moveSlider = (direction) => {

    if(direction === 'left'){
        offset += 210;

        if(offset >= 210){
            offset = -((products.length -5) * 210 );
        }
         
       
    }
    if(direction === 'right'){
        offset -= 210;
        if(offset < -((products.length -5) * 210 )){
            offset = 0;
        }
       
    }
    setrefresh(refresh +1)
}

const displayProducts = products.map(product => {

    return(
            <Link to={"/product/"+product.id} key={product.id}>
            <StyledCarouselProduct>
                
                    <img src={product.images[0]} alt={product.name}></img>
                    <h4>{product.name}</h4>
                    <h5>{product.price} PLN</h5>
                
            </StyledCarouselProduct>
            </Link>
    )
})


    return ( 
        <>
        <StyledCarouselWrapper>
                <StyledCarouselArrow>
                    <button onClick={()=>moveSlider('left')}>←</button>
                </StyledCarouselArrow>
            <StyledCarouselSmall style={{transform: `translateX(${offset}px)`}}>
            {displayProducts}
            </StyledCarouselSmall>
                <StyledCarouselArrow style={{right: 0}}>
                    <button onClick={()=>moveSlider('right')}>→</button>
                </StyledCarouselArrow>
        </StyledCarouselWrapper>

        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////          CATEGORY DISPLAY              ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const StyledCategoryDisplayWrapper = styled.div`
    flex-grow: 1;
    width:900px;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 80px;
    position: relative;

    a{
        color: black;
        text-decoration: none;
    }

    select{
        position: absolute;
        right: 250px;
        margin-top: -50px;
        padding: 10px;
    }



    @media (max-width: 700px){
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-top: 150px;

        select{
            right: 10px;
            margin-top: -100px;
        }

    h4{
        top: -45px!important;
    }

        
    }


`;
const StyledCategoryDisplayProduct = styled.div`
    width: 200px;
    height: auto;
    min-height: 300px;
    cursor: pointer;
    transition: 0.2s;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 5px;
    box-sizing: border-box;
    padding: 10px;
    
    img{
        width: 100%;
        height: auto;
        z-index: 10;
        transition: 0.2s;
    }

    
    a{
        height: auto;
    }

    :hover{
        img{
            transform: scale(1.2);
        z-index: 10;
        }
    }

    @media (max-width: 700px){
        width: 150px;
    
        img{
            width: 100%;
            height: auto;
        }
    }
`;
const StyledCategoryDisplayPriceBrackets = styled.div`
        position: absolute;
        right: 50px;
        margin-top: -50px;
        height: 40px;
        width: 190px;
        border: 1px solid rgba(0,0,0,0.6);
        border-radius: 2px;
        font-size: 13px;
        font-family: arial;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 5px ;
        cursor: pointer;
        padding: 10px;

        

        h6{
            margin: 0;
        }


        @media (max-width: 700px){
            margin-top: -50px;
            right: 10px;
        }
`;
const StyledCategoryDisplayPriceModal = styled.div`
        position: absolute;
        top: 30px;
        right: 0;
        width: 150px;
        padding: 10px;
        height: auto;
        border: 1px solid black;
        background: white;
        z-index: 100;

        display: none;

        input[type='range'] {
            overflow: hidden;
            -webkit-appearance: none;
            background-color: #bbb;
          }
          
          input[type='range']::-webkit-slider-runnable-track {
            height: 10px;
            -webkit-appearance: none;
            color: #ddd;
            margin-top: -1px;
          }
          
          input[type='range']::-webkit-slider-thumb {
            width: 10px;
            -webkit-appearance: none;
            height: 10px;
            cursor: ew-resize;
            background: #000;
            box-shadow: -80px 0 0 80px #bbb;
          }
          

        
`;
const StyledCategoryDisplayDescription = styled.div`
width: 100%;
height: 100px;
position: relative;



h4{
    margin: 0;
    color: black;
}



h5{
    margin: 0;
    color: red;
    padding-left: 10px;
    align-self: flex-end;

}
`;
const StyledCategoryDisplayDescriptionSmall = styled.section`
    box-sizing: border-box;
    padding: 5px;
    display: flex;
flex-direction: column; 
   
    z-index:1;
    box-shadow: -5px 5px 10px 5px rgba(0,0,0,0.1)
`;
const CategoryDisplay = (props) => {
    window.scroll(0, 0)

    let query = props.searchQuery
    const [sortBy, setsortBy] = useState('priceUp');
    const [isPriceModalShown, setisPriceModalShown] = useState(false);
    const [minSortPrice, setminSortPrice] = useState(0);
    const [maxSortPrice, setmaxSortPrice] = useState(9999999999);

    

    const sort = (a, b) =>{

    if(sortBy === 'alphabetDown'){
        if(a.name < b.name){
            return -1;
        }else if( a.name > b.name){
            return 1;
        }else{
            return 0;
        }
    }else if(sortBy === 'alphabetUp'){
        if(a.name > b.name){
            return -1;
        }else if( a.name < b.name){
            return 1;
        }else{
            return 0;
        }
    }else if(sortBy === 'priceUp'){
        if(Math.abs(a.price) < Math.abs(b.price)){
            return -1;
        }else if( a.price > b.price){
            return 1;
        }else{
            return 0;
        }       
    }else if(sortBy === 'priceDown'){
        if(Math.abs(a.price) > Math.abs(b.price)){
            return -1;
        }else if( a.price < b.price){
            return 1;
        }else{
            return 0;
        }
    }

    
    }

    const sortByPrice = (a,b) => {
        if(Math.abs(a.price) < Math.abs(b.price)){
            return -1;
        }else if( a.price > b.price){
            return 1;
        }else{
            return 0;
        }       
    }
    


    let sortedByPrice = [...props.products.sort(sortByPrice)];
    let sortedProducts = props.products.sort(sort);

    let minPrice = 0;
    let maxPrice = 0;

    if(sortedByPrice.length> 0){
        minPrice = sortedByPrice[0].price;
        maxPrice = sortedByPrice[sortedByPrice.length-1].price;
    }


    const setPriceBrackets = (type,value) => {
        if(type === 'min'){
            setminSortPrice(value)
        }else if (type === 'max'){
            setmaxSortPrice(value)
        }
       
    }





    const showPriceModal = () =>{
        if(!isPriceModalShown){
            document.getElementById('priceModal').style.display='block';
        }else{
            document.getElementById('priceModal').style.display='none';
        }

        setisPriceModalShown(!isPriceModalShown)
    }

    const products = sortedProducts.map(product => {
        if(
            product.name.toUpperCase().includes(query.toUpperCase()) ||
            product.subCategory.title.toUpperCase().includes(query.toUpperCase()) || 
            product.category.toUpperCase().includes(query.toUpperCase())  ){
            
            if(product.price*1 >= minSortPrice*1 && product.price*1 <= maxSortPrice*1){
            return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledCategoryDisplayProduct>
                    
                        <img alt={product.name} src={product.images[0]}></img>
                        <StyledCategoryDisplayDescription>
                            <StyledCategoryDisplayDescriptionSmall>
                                <h4>{product.name}</h4>
                                <h5>{product.price} PLN</h5>
                            </StyledCategoryDisplayDescriptionSmall>
                        </StyledCategoryDisplayDescription>
                    
                </StyledCategoryDisplayProduct>
                </Link>
            )}
        }
    })

 
    return ( 
        <>

            <StyledCategoryDisplayWrapper>
                <h4 style={{padding: '10px 10px',margin:0, marginTop:  '-50px', position:'absolute', left: 0, top: 0}}>{query}</h4>
                <select onChange={(event) => setsortBy(event.target.value)}>
                    <option value='alphabetDown'>Alfabetycznie A-Z</option>
                    <option value='alphabetUp'>Alfabetycznie Z-A</option>
                    <option value='priceUp'>Cena rosnąco</option>
                    <option value='priceDown'>Cena malejąco</option>
                </select>
                
                <StyledCategoryDisplayPriceBrackets onClick={showPriceModal}>
                    <p>Cena od {minSortPrice} zł do {maxSortPrice < 99999999? maxSortPrice: 'max'} zł</p>
                    <StyledCategoryDisplayPriceModal id='priceModal'>
                        Cena od:{minSortPrice} zł
                        <input min='0' max={maxPrice} onChange={(e)=>{setPriceBrackets('min',e.target.value)}}  type='range'></input>
                        Cena do: {maxSortPrice < 99999999? maxSortPrice: 'max'} zł
                        <input  min={minPrice} max={maxPrice} onChange={(e)=>{setPriceBrackets('max',e.target.value)}}  type='range'></input>
                      
                    </StyledCategoryDisplayPriceModal>
                </StyledCategoryDisplayPriceBrackets>
                
                {products}
            </StyledCategoryDisplayWrapper>
        </>

     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                SIDEBAR                 ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledCategorySidebarWrapper = styled.div`
    width: 350px;
    height: auto;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    position: relative;


    ul{
        list-style: none;
        padding-left: 0;
        width: 80%;
    }
    li{
        cursor: pointer;
        padding: 5px 10px;
        padding-left: 0;
        transition: 0.2s;
        width: 100%;
    }

    h5{
        padding-right: 80px;
        margin: 10px;
        cursor: pointer;
        font-size: 20px;
    }
    a{
        text-decoration: none;
        color:black;
    }

    li:hover{
        background-color: red;
        color: white;
    }
    button{
        width:100%;
        display: flex;
        font-size: 15px;
        border: none;
        padding: 10px;
        background: transparent;
        cursor: pointer;
    }

    button:hover{
        color:white;
    }

    h3{
        border-top: 2px solid #f4f4ec;
        width: 100%;
    }

    #sidebar{
        left: 0;
    }

    @media (max-width: 700px){
        width: 100vw;
        position: absolute;
        z-index: 100;
        background: white;
        height: 100%;
        left: -350px;

        h3{
            display: none;
        }

        #sidebar{
            left: -350px;
        }


    }
    
`;
const StyledCategorySidebarRecommend = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        text-decoration: none;
    }
    
    @media (max-width: 700px){
        display: none;
    }
`;
const StyledCategorySidebarProduct = styled.div`
width: 200px;
height: auto;
cursor: pointer;
transition: 0.2s;
background-color: white;
box-sizing: border-box;
padding: 5px;

img{
    width: 100%;
    height: auto;
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
}
h5{
    margin: 0;
    color: #b0b0b0;
    padding-left: 10px;
    font-size: 15px;

}


:hover{
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    z-index: 10;
}


`;
const StyledCategorySidebarShowNavBtn = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    right: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    

    @media (max-width: 700px){
        display: flex;
    }
`;
const StyledCategorySidebarNav = styled.div`
    height: auto;
    width: 100%;

    button{
        font-weight: 700;
    }

`;
const StyledCategorySidebarSubNav = styled.div`
    padding-left: 15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    


    button{
        font-weight: 100!important;
        transition: 0.2s;
    }
    button:hover{
        background-color: red;
        color: white;
    }
`;
const Sidebar = (props) => {

    let isSidebarHidden = true;

    const displayCategories = props.categories.map(category => {

        let subCategories;
        
        if(category.subCategories.length !== 0){
            subCategories= category.subCategories.map(subcat => {
                return(
                    <StyledCategorySidebarSubNav key={category.id}>
                        <Link to='/category'><button  value={subcat.sortValue} onClick={(event) => props.setSearchQuery(event.target.value)}>{subcat.title}</button></Link>
                    </StyledCategorySidebarSubNav>
                )
            })
        }

        if(category.subCategories.length === 0){
            console.log(category.sortValue)
            return(
                <StyledCategorySidebarNav key={category.id}>
                <li ><Link to='/category'><button  value={category.sortValue} onClick={(event) => props.setSearchQuery(event.target.value)}>{category.title}</button></Link></li>
                </StyledCategorySidebarNav>
               )
        }else{
            return(
                <StyledCategorySidebarNav key={category.id}>
                <li ><Link to='/category'><button  value={category.sortValue} onClick={(event) => props.setSearchQuery(event.target.value)}>{category.title}</button></Link></li>
                    {subCategories}
                </StyledCategorySidebarNav>
            )}
    
       
    })
            
    const showSideBar = () => {
        if(!isSidebarHidden){
            document.getElementById('sidebar').style.left = ('-350px')
            document.getElementById('sideBarArrow').style.transform = ('rotate(0deg)')
            document.getElementById('StyledShowNavBtn').style.right = ('-40px');

        }else if(isSidebarHidden){
            document.getElementById('sidebar').style.left = ('0')
            document.getElementById('sideBarArrow').style.transform = ('rotate(-180deg)')
            document.getElementById('StyledShowNavBtn').style.right = ('0px');
        }

        isSidebarHidden = !isSidebarHidden
    }
     


    let products = [...props.products];
    products.splice(2,products.length);

    const showRecomended = products.map((product)=>{
        for(let i = 0; i <=2; i++){
            return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledCategorySidebarProduct>
                        <img src={product.images[0]} alt='product'></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                </StyledCategorySidebarProduct>
                </Link>
            )
        }
    })

    return ( 
        <>
            <StyledCategorySidebarWrapper id='sidebar'>
                <h3>Kategorie</h3>

                    <StyledCategorySidebarShowNavBtn onClick={showSideBar} id='StyledShowNavBtn'>
                        <AiOutlineArrowRight id='sideBarArrow'/>
                    </StyledCategorySidebarShowNavBtn>
                    
                        <ul>
                            {displayCategories}
                        </ul>
                
        
                <h3>Polecane</h3>
                
                <StyledCategorySidebarRecommend>
                    {showRecomended}
                </StyledCategorySidebarRecommend>


            </StyledCategorySidebarWrapper>

        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                CONTACT                 ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledContactWrapper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-content: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 50px;
    margin: 50px 0;

    @media (max-width: 700px){
        width: 100%;
        height: auto;
        padding: 0 10px;
     
    }

`;
const StyledContactSubWrapper = styled.div`
    width: 80%;
    display: flex;
    height: 100%;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);

    @media (max-width: 700px){
        flex-direction: column;
        width: 100%;
        height: auto;
        
     
    }

`;
const StyledContactColumn = styled.div`
    width: 50%;
    height: 100%;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img{
        width: 100%;
        height: 100%;
    }

    textarea{
        width: 300px;
        height: 100px;
        font-family: arial;
        box-sizing: border-box;
        padding: 10px;
        background: #F3F3F3;
        border: none;
    }
    input{
        width: 200px;
        padding: 10px;
        background: #F3F3F3;
        border: none;
    }

    button{
        width: 200px;
        padding: 10px;
        margin-bottom: 100px;
        border: none;
        cursor: pointer;
        transition: 0.2s; 
    }

    button:hover{
        color: white;
        background: black;
    }

    @media (max-width: 700px){
        width: 100%;
        height: auto;

        textarea{
            width: 90%;
            margin: 10px 0;
        }
        input{
            width: 80%;
            margin: 10px 0;
        }
     
    }

    

`;
const Contact = () => {
    return ( 
        <>
        <Hashtag text='contact' style={{height:'100px!important'}}/>
        <StyledContactWrapper>
    
            <StyledContactSubWrapper>
                <StyledContactColumn>
                    <img alt='product' src='https://www.pngall.com/wp-content/uploads/8/Scratch-Transparent.png'></img>
                </StyledContactColumn>
                <StyledContactColumn>
                    
                    <textarea placeholder='Wiadomość'></textarea>
                    <input type='text' placeholder='Imię'></input>
                    <input type='text' placeholder='E-mail'></input>
                    <button>Wyślij</button>
                </StyledContactColumn>

            </StyledContactSubWrapper>
        </StyledContactWrapper>
        </>
     );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////                COUNTER                 ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const StyledCounterWrapper = styled.div`
    width: 100%;
    background-color: #222222;
    box-sizing: border-box;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    cursor: pointer;


   h1{
       margin: 0;
       text-transform: uppercase;
       font-size: 20px;
       margin-top: 20px;
       color: white;
   }



`;
const StyledCounterRow = styled.div`
    display: flex;
    flex-direction: row;

div{
    margin: 20px;
    background: black;
    width: 50px;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: red;

    span{
        color: White;
    }
}

@media(max-width: 700px){
    width: 100%;
    margin: 0px;
    justify-content: center;

    div{
        min-width: 50px;
    }

}
`;
let curD = 0;
let curH = 0;
let curM = 0;
let curS = 0;

const Counter = (props) => {

    const [refresh, setrefresh] = useState(0);


    const countdown = () => {
        const now = new Date().getTime();
        const countDate = new Date('December 17, 2021 00:00:00').getTime();
        const gap = countDate - now;
      
        const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
      
        const textDay = Math.floor(gap / day),
          textHour = Math.floor((gap % day) / hour),
          textMinute = Math.floor((gap % hour) / minute),
          textSecond = Math.floor((gap % minute) / second);
      


         curD = textDay;
         curH = textHour;
         curM = textMinute;
         curS = textSecond;
         
         setrefresh(refresh + 1)

      };
      
      setTimeout(() => {
        setInterval(countdown, 1000);
      }, 1000);

  
      


    return ( <>
        <StyledCounterWrapper>
            <h1><AiFillTag/> Wietrzenie magazynów <AiFillTag/></h1>
            <StyledCounterRow>
                <div><span>{curD}</span>D</div>
                <div><span>{curH}</span>H</div>
                <div><span>{curM}</span>M</div>
                <div><span>{curS}</span>S</div>
            </StyledCounterRow>
            
        </StyledCounterWrapper>
        
    
    </> );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////              DOUBLE BANER LEFT                 //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const StyledDoubleBanerLeftWrapper = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    height: 400px;
    display: flex;
    overflow: hidden;
    font-family: 'Inter', sans-serif; 
`;
const StyledDoubleBanerLeftBig = styled.div`
    width: 50%;
    height: 100%;
    background-color: #eeeeee;
    box-sizing: border-box;
    display: flex;
`;
const StyledDoubleBanerLeftImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: 100%;
        height: auto;
    }
`;
const StyledDoubleBanerLeftText = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h2{
        margin: 0;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    p{
        font-size: 11px;
        color: gray;
        padding: 20%;
        padding-top: 0;
        padding-bottom: 0;
    }
    h3{
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        color: #434c7e;
    }
    a{
        cursor: pointer;
        padding: 15px 10px;
        font-size: 12px;
        font-weight: 700;
        color: black;
        text-decoration: none;
    }
    
    @media (max-width: 700px){
        padding: 5px;
    }

    
`;
const DoubleBanerLeft = () => {
    return ( 
        <>
        <StyledDoubleBanerLeftWrapper>
            <StyledDoubleBanerLeftBig>
                <StyledDoubleBanerLeftText>
                    <h2>Kurtki Prosto</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry. Lorem Ipsum has been the industry's 
                         standard dummy text ever since the 1500s, when an unknown printer 
                         took a galley</p>

                    <h3>NOWA KOLEKCJA</h3>
                    <Link to='/category'>Zobacz więcej →</Link>
                </StyledDoubleBanerLeftText>
                
            </StyledDoubleBanerLeftBig>
            <StyledDoubleBanerLeftBig>
                <StyledDoubleBanerLeftImage>
                    <img src='https://sportstylestory.com/gfx/big/prosto_kurtka_meska_prosto_inuit_2_black_75761.jpg' alt='baner'></img>
                </StyledDoubleBanerLeftImage>
            </StyledDoubleBanerLeftBig>
        
        </StyledDoubleBanerLeftWrapper>

        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////              DOUBLE BANER SMALL                //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const StyledDoubleBanerSmallWrapper = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    margin: 20px;
    height: 200px;
    display: flex;
    font-family: 'Inter', sans-serif; 
    justify-content: space-between;
    position: relative;
`;
const StyledDoubleBanerSmallBig = styled.div`
    width: 49%;
    height: 100%;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: row;
    transition: 0.2s;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    .styledImage{
        transition: 0.2s;
    }
    .styledText{
        transition: 0.2s;
    }

    :hover{

        .styledImage{
            transform: translateX(100%);
        }
        .styledText{
            left: 0;
            right: auto;
        }
    }

`;
const StyledDoubleBanerSmallImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: auto;
    
    


    
    img{
        width: auto;
        max-height: 100%;

        
    }
    @media (max-width: 700px){
            width: 100%;
        img{
            width: 100%;
        }
    }
`;
const StyledDoubleBanerSmallText = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    left: auto;
    
    h2{
        margin: 0;
        font-size: 25px;
        font-weight: 400;
    }
    h3{
        margin: 0;
        font-size: 12px;
        font-weight: 100;
    }
    a{
        cursor: pointer;
        padding: 15px 10px;
        font-size: 12px;
        font-weight: 700;
        color: black;
        text-decoration: none;
    }

    @media (max-width: 700px){
        padding: 5px;
        display: none;
    }
    
`;
const DoubleBanerSmall = () => {
    return ( 
        <>
        <StyledDoubleBanerSmallWrapper>
            <StyledDoubleBanerSmallBig>
                <StyledDoubleBanerSmallImage className='styledImage'>
                    <img src='https://www.evertrek.pl/userdata/public/gfx/34178/1.jpg' alt='product'></img>
                </StyledDoubleBanerSmallImage>
                <StyledDoubleBanerSmallText className='styledText'>
                    <h2>Buty treckingowe</h2>
                    <h3>KAITEKI</h3>
                    
                </StyledDoubleBanerSmallText>
            </StyledDoubleBanerSmallBig>
            <StyledDoubleBanerSmallBig>
                <StyledDoubleBanerSmallImage className='styledImage'>
                    <img src='https://outdoorlive.pl/wp-content/uploads/2020/07/Salewa_Alptrek_5510_Backpack_premium_navy.png' alt='product'></img>
                </StyledDoubleBanerSmallImage>
                <StyledDoubleBanerSmallText className='styledText'>
                    <h2>Plecaki turystyczne </h2>
                    <h3>SALEVA</h3>
                    
                </StyledDoubleBanerSmallText>
            </StyledDoubleBanerSmallBig>
           
        </StyledDoubleBanerSmallWrapper>

        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////                   FOOTER                      //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledFooterWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
`;
const StyledFooterBottomFooter = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    color:#ccc;
    justify-content: space-between;

    div{
        font-size: 30px;
        font-weight: 700;

    }
    p{
        font-size: 12px;
    }

`;
const Footer = (props) => {


    return ( <>
    <StyledFooterWrapper>
        <StyledFooterBottomFooter>
            <div>{props.shopName}</div>
            <p>© {props.shopName},  All rights reserved. Powered by ec-at</p>
        </StyledFooterBottomFooter>
    </StyledFooterWrapper>
    
    </> );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////                   HASHTAG                      /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledHashtagWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif; 
    overflow: hidden;
    position: relative;
    background-color: #f7e9e9;

    h1{
        font-size: 25px;
        position: absolute;
    }
`;
const Hashtag = (props) => {
    return ( <>
        <StyledHashtagWrapper>
            <h1>#{props.text}</h1>
        </StyledHashtagWrapper>
        
    
    </> );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////                    HEADER                      /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledHeaderWrapper = styled.div`
    width: 100%;
    height: 500px;
    font-family: 'Inter', sans-serif; 
    display: flex;
    flex-direction: column;

    a{
        color:black;
        text-decoration: none;
    }

    @media (max-width: 1000px){
        div>input{
            display: none
        }
    }
   
`;
const  StyledHeaderLogo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
    background: #20232b;
    background-image:  url('https://www.pngall.com/wp-content/uploads/8/Scratch-Transparent.png');
    background-size: cover;
    justify-content: center;
    font-size: 50px;
    font-family: Impact, fantasy;
    
    
    a{
        color: black;
        text-shadow: 0 0 5px gray;
    }

    img{
        width: 500px;
        height: auto;
    }

    @media (max-width: 600px){
        padding: 0;

        img{
            max-width: 100%;
            height: auto;
        }
        
    }
`;
const StyledHeaderNav = styled.div`
    display: flex;
    flex-grow: 1;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: #20222d;    


    ul{
        display: flex;
        list-style: none;
        padding: 0;
    }
    
    li{
        padding: 5px 10px;
        font-weight: 300px;
        cursor: pointer;
        margin: 0 5px;
        transition: 0.2s;
        position: relative;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 13px;

    }
    a{
        color: white;
    }
    li:hover{
        transform: scale(1.2)
    }
    img{
        height: 30px;
    }

    @media (max-width: 800px ){
        justify-content: flex-end;
        position: relative;

        ul{
            flex-direction: column;
            position: absolute;
            top: 100px;
            right: 1000px;
            background: black;
            color: white;
            width: 100vw;
            height: auto;
            z-index: 1000;
            transition: 0.5s;
        }
        li{
            height: 60px;
            display: flex;
            align-items-center;
        }
        li:hover{
            transform: none;
        }
        a{
            color: white;
            font-size: 20px;
            width: 100vw;
            padding: 20px 20px;
           
        }
    }

    
`;
const StyledHeaderCartNoti = styled.div`
    width: 15px;
    height: 15px;
    background: red;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    animation: pop 2s linear infinite ;


    @keyframes pop{
        0%{transform: scale(1)}
        50%{transform: scale(1.1)}
        100%{transform: scale(1)}
    }
`;
const StyledHeaderCart = styled.div`
    width: 350px;
    height: auto;
    max-height: 300px;
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.2);
    background: white;
    position: absolute;
    top: 100px;
    right: 0;
    display: ${props => props.show? 'flex': 'none'};
    flex-direction: column;
    overflow-y: scroll;
    z-index: 101;


    a{
        border: none;
        padding: 15px 0px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        font-weight: 700;
        margin-top: 30px;
        width: auto;
        background: white;
        color: black;
        font-size: 15px!important;
    }

    a:hover{
        color: white;
        background: black;
        
    }
    p{
        font-size: 15px;
    }
`;
const StyledHeaderShadow = styled.div`
 position: absolute;
 width: 100vw;
 height: 100vh;
 left: -50%;
 top: 0;
 display: ${props => props.show? 'flex': 'none'};
 z-index: 100;


`;
const StyledHeaderProduct = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    pading: 10px;
    border-bottom: 1px solid #c9c9c9;
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    button{
        height: 20px;
        color: red;
        font-weight: 700;
        border: none;
        background: transparent;
        padding-right: 15px;
        cursor: pointer;
        font-size: 15px;
    }
    a{
        height: auto;
        
        margin: 0;
        font-size: 12px;
        display: flex;
        align-items: center;
        padding: 0;
    }

    a:hover{
        background: transparent;
        color: black;
    }

    button:hover{
        filter: brightness(0.5)

    }


    img{
        height: 100%;
        width: 50px;
    }
    p{
        height: auto;
        padding: 5px 0;
        margin: 0;
        font-size: 12px;
        display: flex;
        align-items: center;
    }


`;
const StyledHeaderSubWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;

    input{
        display: none;
        position: absolute;
        right: 100px;
        top: 30px;
        padding: 10px;
        
    }

    @media (max-width: 800px){
        a{
            color: white !important;
            width: auto !important;
        }
    }
    
    @media (max-width: 1000px){
        input{
            right: 10px;
            top: 100px;
        }
    }

`;
const StyledHeaderCartIcon = styled.div`
    position: relative;
`;
const StyledHeaderMobileMenuBtn = styled.div`
    display: none;

    @media (max-width: 800px){
        display: block;
    }
`;
const HeaderMinera = (props) => {

const [isCartShowed, setisCartShowed] = useState(false);
let quantity = 0;
let isMobileNavVisable = false;
let isSearchBarVisable = false;


const getQuantityOfProducts = () => {
    
    for(let i = 0; i<props.cart.length; i++){
        quantity += props.cart[i][0].quantity
    }

}
getQuantityOfProducts()

const showMobileMenu = () => {
    if(isMobileNavVisable){
        document.getElementById('menu').style.right= '1000px';
    }else if(!isMobileNavVisable){
        document.getElementById('menu').style.right= 0;
    }

    isMobileNavVisable = !isMobileNavVisable
}

const showSearchBar =() => {
    if(isSearchBarVisable){
        document.getElementById('searchbar').style.display= 'none';
    }else if(!isMobileNavVisable){
        document.getElementById('searchbar').style.display= 'block';
    }

    isSearchBarVisable = !isSearchBarVisable
}



const displayNav = props.nav.map(navigation => {
        return(
        <li key={navigation.title}  ><Link onClick={showMobileMenu} to={navigation.url}>{navigation.title}</Link></li>
        )
        
})

const showCart = () => {
        setisCartShowed(!isCartShowed)
}
const displayProductsInCart = props.cart.map(product => {
    return(
        <StyledHeaderProduct key={product[0].id}>
            <Link to={"/product/"+product[0].id}>
            <img src={product[0].images[0]} alt='product'></img>
            <p>{product[0].name}({(product[0].quantity)} szt)</p>
            </Link>
            <button onClick={()=>props.changeQuantityOfProduct(product[0].id, 'minus')}>-</button>
            <button onClick={()=>props.changeQuantityOfProduct(product[0].id, 'plus')}>+</button>
            <button onClick={() => props.deleteFromCart(product[0].id)}>x</button>
        </StyledHeaderProduct>
    )
})





    return ( 
        <>
        <StyledHeaderWrapper>
            
            <StyledHeaderNav>
                <ul id='menu'>
                    {displayNav}
                </ul>
                
                <StyledHeaderSubWrapper style={{fontSize: '30px', marginRight: '10px', marginLeft: '5px'}}>
                    <StyledHeaderMobileMenuBtn>
                        <FiMenu style={{fontSize: '25px', marginRight: '10px', marginLeft: '5px'}} onClick={showMobileMenu}/> 
                    </StyledHeaderMobileMenuBtn>  
                    
                    <div style={{height: '100%',display: 'flex', alignItems: 'center', alignSelf: 'flex-end'}}>
                        <input  id='searchbar' onChange={(event) => props.setSearchQuery(event.target.value)} value={props.searchQuery} placeholder="wyszukaj"></input>
                        <Link to='/category'><FiSearch onClick={showSearchBar} style={{fontSize: '25px', marginRight: '10px', marginLeft: '5px'}}/></Link>
                    </div>
                
                    <StyledHeaderCartIcon onClick={showCart}>
                        <FiShoppingCart style={{fontSize: '25px', marginRight: '20px', cursor:'pointer', color: 'white'}} ></FiShoppingCart>
                        {quantity>0? <StyledHeaderCartNoti>{quantity}</StyledHeaderCartNoti>: null}
                    </StyledHeaderCartIcon>
              
                    <StyledHeaderShadow onClick={showCart} show={isCartShowed}>
                </StyledHeaderShadow>
                    <StyledHeaderCart show={isCartShowed}>
                    {displayProductsInCart}
                    {props.cart.length === 0? <p>Twój koszyk jest pusty</p>: null}
                    {props.cart.length !== 0? <a href="http://ckz.ec-at.com/">Przejdz do koszyka →</a>: null}
                </StyledHeaderCart>


                </StyledHeaderSubWrapper> 
            </StyledHeaderNav>
            <StyledHeaderLogo>
                {/* <h1><Link to='/'>{props.shopName}</Link></h1> */}
                <img src='https://hurtpiwa.pl/wp-content/uploads/2019/11/bluemoonlogotransparent.png' alt='Logo'></img>
            </StyledHeaderLogo>
        </StyledHeaderWrapper>
        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////             PRODUCT DESCRIPTION                /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledProductDescriptionWrapper = styled.div`

    width: 50%;
    height: 600px;
    margin-top: 0px;
    box-sizing: border-box;
    padding: 20px;
    position: relative;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    img{
        height: auto;
    }

    p{
        padding: 20px;
        font-size: 15px;
        margin-bottom:0
    }

`;
const StyledProductDescriptionDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    height: auto !important;

    h3{
        margin: 0;
        align-self: flex-start;
    }
    h5{
        margin: 0;
        align-self: flex-end;
        color: red;
    }
    p{
        font-size: 12px;
    }
`;
const StyledProductDescriptionImages = styled.div`
    width: 100% !important;
    height: 105px !important;
    display: flex;
    justify-content: flex-start !important;
    box-sizing: border-box;
    overflow: hidden;
    overflow-x: scroll;
    padding-top: 5px;
    
    &::-webkit-scrollbar {
        width: 1px;
        height: 4px;
        border: 1px solid black;
        
    }
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #000;
    }
    

    div{
        min-width: 100px;
        height: 100%;
        box-sizing:border-box;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: center; 
        cursor: pointer;  
        border:1px solid transparent; 
    }
    div:hover{
        border:1px solid #ddd;
    }


   


`;
const ProductDescription = (props) => {

    useEffect(()=>{
        searchForProduct();
    })

    const [shownImage, setshownImage] = useState('');

    let product = props.products.filter(product => product.id === props.match.params.id)

   
    const searchForProduct = () => {
            document.getElementById('productLongDescription').textContent=product[0].longDescription;
            if(shownImage === ''|| !product[0].images.includes(shownImage)){
                console.log(product[0].images.includes(shownImage))  
                setshownImage(product[0].images[0]);
            }
    }
    
    const displayImages = product[0].images.map(image => {
            return(
                <div onClick={() => setshownImage(image)} style={{backgroundImage:"url("+image+")",width: '100px', height:'100px',}} alt='product'></div>
            )
        })

        
        

    

    return ( 

        <>
        <StyledProductDescriptionWrapper>
       
            <GlassMagnifier
                imageSrc={shownImage}
                imageAlt="product"
            />
        
       
            <StyledProductDescriptionImages>
                {displayImages}
            </StyledProductDescriptionImages>
            
            <StyledProductDescriptionDescription>
                <p id="productLongDescription"></p>
            </StyledProductDescriptionDescription>
            
        </StyledProductDescriptionWrapper>
        </>
     );
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////               PRODUCT PROPS                    /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledProductPropsWrapper = styled.div`

    width: 50%;
    height: 600px;
    margin-top: 100px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    button{
        width: 50%;
        height: 30px;
        border: none;
        background-color: black;
        color: white;
        cursor: pointer;
        transition: 0.2s;
        margin: 20px;
    }


    button:hover{
        border: 1px solid black;
        background: transparent;
        color: black;
    }

    select{
        width: 50%;
        margin: 20px;

    }
    
`;
const StyledProductPropsDescription = styled.div`
    display: flex;
    flex-direction: column;


    h3{
        margin: 0;
        align-self: flex-start;
    }
    h5{
        margin: 0;
        align-self: flex-start;
        color: red;
    }
    p{
        font-size: 12px;
    }
`;
const ProductProps = (props) => {
    window.scrollTo(0, 0);

    
    
    const searchForProduct = () => {
        let product = props.products.filter(product => product.id === props.match.params.id)
   
            document.getElementById('productName').textContent=product[0].name;
            document.getElementById('productDescription').textContent=product[0].description;
            document.getElementById('productPrice').textContent=product[0].price +' PLN';

           
            productName = product[0].name;
            productPrice = product[0].price +' PLN';
            productDescription = product[0].description;
       
    }

    let currentProduct = props.products.filter(product => product.id === props.match.params.id);
    
    useEffect(()=>{
        searchForProduct();
    })





    let productName = '';
    let productPrice = '';
    let productDescription = '';

    return ( 

        <>
        <StyledProductPropsWrapper>
            <StyledProductPropsDescription>
                <h3 id="productName">{productName}</h3>
                <h5 id="productPrice">{productPrice}</h5>
                <p id="productDescription">{productDescription}</p>
            </StyledProductPropsDescription>
            Wybierz kolor:
            <select>
                <option>Złota</option>
                <option>Srebrna</option>
            </select>
            Wybierz wysokość:
            <select>
                <option>100cm</option>
                <option>125cm</option>
                <option>150cm</option>
            </select>
            <button onClick={()=>props.addToCart(currentProduct)}>Dodaj do koszyka</button>
        </StyledProductPropsWrapper>

        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////          PRODUCTS GRID           //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledProductsGridWrapper = styled.div`
    margin: 20px;
    flex-grow: 1;
    height: auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledProductsGridNav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    button, button::after {
        width: 150px;
        height: 50px;
        font-size: 12px;
        font-family: 'Bebas Neue', cursive;
        background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        box-shadow: 6px 0px 0px #00E6F6;
        outline: transparent;
        position: relative;
        margin: 20px;
        cursor: pointer;
        transition: 0.2s;
      }

      button:hover{
          transform: scale(1.1);
      }
      
     
    
      
     
`;
const StyledProductsGridContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: space-evenly;

    a{
        color: black;
        text-decoration: none;
    }
`;
const StyledProductsGridProduct = styled.div`
width: 200px;
height: 200px;
cursor: pointer;
transition: 0.2s;
background-color: white;
box-sizing: border-box;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;


img{
    width: 100%;
    height: auto;
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
}
h5{
    margin: 0;
    color: #b0b0b0;
    padding-left: 10px;

}

:hover{
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    z-index: 10;
}
`;
const ProductsGrid = (props) => {

    let products = [...props.products];
    const [sortVal, setsortVal] = useState('dla niego');
    let categoryArr = []
    

    
    const searchForCategory = () => {
        products.map(product => {
            if(product.category === sortVal){
                categoryArr.push(product)
            }
        })
        categoryArr.splice(4,categoryArr.length-3)
    }
    searchForCategory();

    let productsInGrid = categoryArr.map(product=>{
      
            return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledProductsGridProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                    
                </StyledProductsGridProduct>
                </Link>
            )
        
        
    })


    const setSortValue = (val) =>  {
        setsortVal(val);
    }

    let categories = props.categories.slice(0,3)
    const displayCategories = categories.map(category => {
        for(let i = 0; i< 2; i++){
            return <button key={category.sortValue} onClick={() => setSortValue(category.sortValue)}>{category.title}</button>
        }
        
    })
    


    return ( 
        <>
        <StyledProductsGridWrapper>
            <StyledProductsGridNav>
                {displayCategories}
                {/* <button onClick={() => setSortValue('Krzesło')}>Krzesła</button>
                <button  onClick={() => setSortValue('Kanapy')}  >Kanapy</button>
                <button onClick={() => setSortValue('Inne')}  >Inne</button> */}
            </StyledProductsGridNav>
            <StyledProductsGridContent>

                    {productsInGrid}
                
            </StyledProductsGridContent>


        </StyledProductsGridWrapper>
        </>
     );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////          PRODUCTS GRID WITH TAG          //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledProductGridWithTagWrapper = styled.div`
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledProductGridWithTagContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: space-evenly;

    a{
        color: black;
        text-decoration: none;
        width: 25%;
    }
`;
const StyledProductGridWithTagProduct = styled.div`
width: 100%;
height: 250px;
cursor: pointer;
transition: 0.2s;
background-color: white;
box-sizing: border-box;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: auto;
    height: 200px;
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
}
h5{
    margin: 0;
    margin-bottom: 10px;
    color: #b0b0b0;
    padding-left: 10px;

}

:hover{
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    z-index: 10;
}
`;
const StyledProductGridWithTagTag = styled.div`
    width: 25%;
    height: 250px;
    cursor: pointer;
    transition: 0.2s;
    background-color: #222222;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #1582c2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    svg{
        font-size: 40px;
    }

    h1{
        color: white;
        text-transform: uppercase;
        margin: 5px;
        font-size: 20px;
    }
    p{
        font-size: 13px;
        color: gray;
        text-align: center;
        margin: 0;
    }
`;
const ProductGridwithTag = (props) => {

    let products = [...props.products];
    let productsArr = []

    if(products.length > 0){
        productsArr = products.slice(0,3);
    }else{
        const product = {
            name: "product",
            price: '29,99',
            images: ['https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=webp&v=1530129477'],
            id: 'example'
        }

        for(let i = 0; i< 3; i++){
            productsArr.push(product)
        }
    }
    
    
    
    
    let productsInGrid = productsArr.map(product=>{
      
            return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledProductGridWithTagProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                    
                </StyledProductGridWithTagProduct>
                </Link>
            )
        
        
    })
    
    


    return ( 
        <>
        <StyledProductGridWithTagWrapper>
            <StyledProductGridWithTagContent> 
                <StyledProductGridWithTagTag>
                    <FaRegStar/>
                    <h1>Popularne</h1>
                    <p>Najczęściej kupowane produkty</p>
                </StyledProductGridWithTagTag>
                    {productsInGrid}
            </StyledProductGridWithTagContent>
        </StyledProductGridWithTagWrapper>
        </>
     );
}