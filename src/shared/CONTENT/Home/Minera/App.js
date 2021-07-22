///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////         IMPORTS                  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component, useState, useEffect } from 'react';
import faker from 'faker';
import { StaticRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { GlassMagnifier } from 'react-image-magnifiers';
import styled from 'styled-components';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {FiMenu} from 'react-icons/fi';
import {FiSearch} from 'react-icons/fi';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();




///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////         MAIN APP                 //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const StyledMainBody = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif; 
`;
const StyledMainWrapper = styled.div`
  width: 1100px;
  min-height: 90vh;
  margin: 10px;
  background-color: white;


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
  flex-direction: row;


  @media (max-width: 700px){
    flex-direction: column-reverse;
    

    div{
      width: 100%;
      height: auto;
    }
  }


  
  
`;
class April extends Component {
  state = {
    shopName:'APRIL', 
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
      },
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

        {title: 'Dla niej',
         sortValue:'dla niej',
         subCategories:[
          {title:'Sneakersy', sortValue:'sneakersy'},
          {title:'Buty zimowe', sortValue:'buty zimowe'},
          {title:'Klapki', sortValue:'klapki'}]},

        {title: 'Dla niego',
         sortValue:'dla niego',
          subCategories:[
            {title:'Sneakersy', sortValue:'sneakersy'},
            {title:'Buty zimowe', sortValue:'buty zimowe'},
            {title:'Klapki', sortValue:'klapki'}]},

        {title: 'Dla dzieci',
         sortValue:'dla dzieci',
         subCategories:[
          {title:'Sneakersy', sortValue:'sneakersy'},
          {title:'Buty zimowe', sortValue:'buty zimowe'},
          {title:'Klapki', sortValue:'klapki'}]},
        

    ],
    products: [],
    searchQuery:'',
    images:['https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-6_large.png?format=webp&v=1530129477'],

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
      <StyledMainWrapper>
      <Router history={history}>
        <HeaderApril
          shopName = {this.state.shopName}
          cart = {this.state.cart}
          nav = {this.state.nav}
          deleteFromCart = {this.deleteFromCart}
          setSearchQuery = {this.setSearchQuery}
          searchQuery = {this.state.searchQuery}
          changeQuantityOfProduct = {this.changeQuantityOfProduct}
        />
        
          <Switch>

            <Route exact path="/">
              <CategoryLeft
                products = {this.state.products}
              />
              <BanerWide/>
              <CategoryRight
                products = {this.state.products}
              />
              <DoubleBanerSmall/>
             
              <Hashtag text='most.popular'/>
              
              

              
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
      </Router>
      </StyledMainWrapper>
    </StyledMainBody>
     );
  }
}
export default April;

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
    align-items: center;

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
        justify-content: center;
    }
    
    img{
        height: 100%;
        width: 100%;
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
            margin: 0;
            position: relative;
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
    <Hashtag text='about.us'/>
    <StyledAboutWrapper>
        <section>
                <div>
                    <h1>Nasza Historia</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic  </p>
                </div>
        </section>
        <section>
            
                <div>
                    <h1>Nasza Misja</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic  </p>
                </div>
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
    background-color: #f5edeb;
    height: 300px;
    display: flex;
    over-flow: hidden;
    font-family: 'Inter', sans-serif; 
    position: relative;

    :hover{
        img{
            transform: scale(1.1);
        }
    }

    @media (max-width: 700px){

        height: 200px;
        
    }
`;
const StyledBanerWideText = styled.div`
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    align-items: flex-start;
    justify-content: center;
    color: #dbaab0;
    =
    right: 10px;

    h2{
        margin: 20pxpx;
        font-weight: 100;
        color: black;

        
    }
    h1{
        margin: 0px;
        font-size: 50px;
        background: black;
        color: #f5edeb;
        
    }

    a{
        text-decoration: underline;
        color: black;

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
        background-color: #dbaab0;
    }


    @media (max-width: 600px){
        padding-left: 20px;
        width: 100%;
        margin: 0;
        display:none;

        a{
            width: 200px;
        }
    
    }

`;
const StyledBanerWideImage = styled.div`
    width: 50%;
    height: 100%;
    cursor: pointer;
    right: 0;
    overflow: hidden;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;



    img{
        position: absolute;
        width: auto;
        height: auto;
        transition: 0.2s;
    }

    @media (max-width: 600px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img{
            width: 100%;
            height: auto;
        }
        

        
    }
`;
const BanerWide = () => {
    return ( <>
    <StyledBanerWideWrapper>
        <StyledBanerWideText>
            <h1>New arrivals</h1>
            <h2>Nowe stylowe swetry</h2>
            <Link>Sprawdź →</Link>
          
        </StyledBanerWideText>

        <StyledBanerWideImage>
            <img src="https://officialpsds.com/imageview/rx/3y/rx3y01_large.png?1529098422" alt='baner'></img>
        </StyledBanerWideImage>
        
    </StyledBanerWideWrapper>
    
    </> );
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
////////////////////////          CATEGORY LEFT                 ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledCategoryLeftWraper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
`;
const StyledCategoryLeftTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    curosor: pointer;

    img{
        width: auto;
        height: 300px;
        box-sizing: border-box;
        padding: 20px;
    }
`;
const StyledCategoryLeftProducts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    a{
    width: 30%;
    min-width: 150px;
    height: 48%;
    max-height: 250px;
    text-decoration: none;
    }
`;
const StyledCategoryLeftProduct = styled.div`
width: 100%;
height: 100%;
cursor: pointer;
transition: 0.2s;
box-sizing: border-box;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

img{
    width: 50%;
    height: auto;
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
    transition: 0.2s;
    text-align: center;
}
h5{
    margin: 0;
    color: #b0b0b0;
    padding-left: 10px;
    text-align: center;

}

:hover{
    z-index: 10;

    h4{
        color: pink
    }
}
`;
const CategoryLeft = (props) => {

    let products = [...props.products];
    const [sortVal, setsortVal] = useState('dla niego');
    let categoryArr = []
    

    
    const searchForCategory = () => {
        if(products.length === 0){
            const product = {
                name: 'Product',
                id: 'example',
                images: ['https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=webp&v=1530129458'],
                price: '19.99'
            }
            for(let i = 0; i < 20; i++){
                categoryArr.push(product)
            }
     
        }else{
            products.map(product => {
                if(product.category === sortVal){
                    categoryArr.push(product)
                }
            })
        }
        
       
    }
    searchForCategory();


    let productsInGrid = categoryArr.splice(0,6).map(product=>{
      
            return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledCategoryLeftProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                    
                </StyledCategoryLeftProduct>
                </Link>
            )
        
        
    })


    return ( 
        <>
        <StyledCategoryLeftWraper>
            <StyledCategoryLeftTitle>
                <h1>#forher</h1>
                <img src='https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='category'></img>
            </StyledCategoryLeftTitle>
            <StyledCategoryLeftProducts>
                {productsInGrid}
            </StyledCategoryLeftProducts>
        </StyledCategoryLeftWraper>

        </>
     );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////          CATEGORY RIGHT                ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

const StyledCategoryRightWraper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
`;
const StyledCategoryRightTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    curosor: pointer;

    img{
        width: auto;
        height: 300px;
        box-sizing: border-box;
        padding: 20px;
    }
`;
const StyledCategoryRightProducts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    a{
    width: 30%;
    min-width: 150px;
    height: 48%;
    max-height: 250px;
    text-decoration: none;
    }
`;
const StyledCategoryRightProduct = styled.div`
width: 100%;
height: 100%;
cursor: pointer;
transition: 0.2s;
box-sizing: border-box;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

img{
    width: 50%;
    height: auto;
}
h4{
    margin: 0;
    margin-top: 5px;
    color: black;
    padding-left: 10px;
    transition: 0.2s;
    text-align: center;
}
h5{
    margin: 0;
    color: #b0b0b0;
    padding-left: 10px;
    text-align: center;

}

:hover{
    z-index: 10;

    h4{
        color: pink
    }
}
`;
const CategoryRight = (props) => {

    let products = [...props.products];
    const [sortVal, setsortVal] = useState('dla niego');
    let categoryArr = []
    

    
    const searchForCategory = () => {
        if(products.length === 0){
            const product = {
                name: 'Product',
                id: 'example',
                images: ['https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=webp&v=1530129458'],
                price: '19.99'
            }
            for(let i = 0; i < 20; i++){
                categoryArr.push(product)
            }
     
        }else{
            products.map(product => {
                if(product.category === sortVal){
                    categoryArr.push(product)
                }
            })
        }
        
       
    }
    searchForCategory();


    let productsInGrid = categoryArr.splice(0,6).map(product=>{
      
            return(
                <Link to={"/product/"+product.id} key={product.id}>
                <StyledCategoryRightProduct>
                    
                        <img src={product.images[0]} alt={product.name}></img>
                        <h4>{product.name}</h4>
                        <h5>{product.price} PLN</h5>
                    
                </StyledCategoryRightProduct>
                </Link>
            )
        
        
    })



    return ( 
        <>
        <StyledCategoryRightWraper>
            
            <StyledCategoryRightProducts>
                {productsInGrid}
            </StyledCategoryRightProducts>

            <StyledCategoryRightTitle>
                <h1>#forhim</h1>
                <img src='https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='category'></img>
            </StyledCategoryRightTitle>
        </StyledCategoryRightWraper>

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
//////////////////////              DOUBLE BANER SMALL               //////////////////////////////////
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
        width: 100%;

        
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
                    <img src='https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png' alt='product'></img>
                </StyledDoubleBanerSmallImage>
                <StyledDoubleBanerSmallText className='styledText'>
                    <h2>NIKE ROSHE v2 </h2>
                    <h3>TERAZ 30% TANIEJ</h3>
                </StyledDoubleBanerSmallText>
            </StyledDoubleBanerSmallBig>
            <StyledDoubleBanerSmallBig>
                <StyledDoubleBanerSmallImage className='styledImage'>
                    <img src='https://www.nicepng.com/png/full/945-9457426_sneakers-png-photo-nike-shoes-com-2018-new.png' alt='product'></img>
                </StyledDoubleBanerSmallImage>
                <StyledDoubleBanerSmallText className='styledText'>
                    <h2>NIKE  Xt - 2 </h2>
                    <h3>TERAZ 30% TANIEJ</h3>   
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
    height: 400px;
    font-family: 'Inter', sans-serif; 
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    overflow: hidden;

    a{
        color:black;
        text-decoration: none;
    }

    img{
        align-self: center;
    }

    @media (max-width: 1000px){
        div>input{
            display: none
        }
    }
   
`;
const  StyledHeaderLogo = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    font-weight: 700;
    padding-left: 50px;
    padding-right: 100px;
    font-size: 30px;
    z-index: 2;
    display: flex;
    
    h1{
        margin: 0;
        padding: 50px;
        padding-left: 0;
    }

    @media (max-width: 400px){
        padding: 0;
        padding-left: 10px;
    }
`;
const StyledHeaderNav = styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    font-weight: 700;
    


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
        transition: 0.5s;
        position: relative;
        overflow: hidden;
        
    }

    li::before{
        content: '';
        width: 100%;
        height: 2px;
        background: black;
        position: absolute;
        left: -100%;
        bottom: 0;
        transition: 0.5s;
    }
    li::after{
        content: '';
        width: 100%;
        height: 2px;
        background: black;
        position: absolute;
        right: -100%;
        top: 0;
        transition: 0.5s;
    }

    li:hover{

        ::before{
            left: 0;
        }

        ::after{
            right: 0;
        }
    }
    img{
        height: 30px;
    }

    @media (max-width: 800px ){
        justify-content: flex-end;
        position: relative;

        ul{
            flex-direction: column;
            position: fixed;
            top: 300px;
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
    position: fixed;
    top: 350px;
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

    @media (max-width: 700px){
        position: ${props => props.show? 'fixed': 'absolute'};
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
    img{
        height: auto;
        max-height: 50px;
        width: 50px;
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
    align-items: flex-end;
    cursor: pointer;
    padding-bottom: 10px;

    input{
        display: none;
        position: absolute;
        right: 100px;
        top: 0px;
        padding: 10px;
        width: 100px;
        
    }

    @media (max-width: 800px){
        a{
            color: black !important;
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
const StyledHeaderDecoration = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;

    img{
        width: 100%;
        height: auto;
    }
`;
const HeaderApril = (props) => {

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
            <StyledHeaderDecoration>
                <img src='https://cdn.pixabay.com/photo/2017/02/24/21/00/door-2096367_960_720.jpg' alt=''></img>
            </StyledHeaderDecoration>
            <StyledHeaderLogo>
                <h1><Link to='/'>{props.shopName}</Link></h1>
            </StyledHeaderLogo>
            <StyledHeaderNav>
                <ul id='menu'>
                    {displayNav}
                </ul>
            </StyledHeaderNav>
                
            <StyledHeaderNav>
                <StyledHeaderSubWrapper style={{fontSize: '30px', marginRight: '10px', marginLeft: '5px'}}>
                   

                    <StyledHeaderMobileMenuBtn>
                        <FiMenu style={{fontSize: '25px', marginRight: '10px', marginLeft: '5px'}} onClick={showMobileMenu}/> 
                    </StyledHeaderMobileMenuBtn>  
                    
                    <div style={{height: '100%',display: 'flex', alignItems: 'flex-end', alignSelf: 'flex-end'}}>
                        <input  id='searchbar' onChange={(event) => props.setSearchQuery(event.target.value)} value={props.searchQuery} placeholder="wyszukaj"></input>
                        <Link to='/category'><FiSearch onClick={showSearchBar} style={{fontSize: '25px', marginRight: '10px', marginLeft: '5px'}}/></Link>
                    </div>
                
                    <StyledHeaderCartIcon onClick={showCart}>
                        <FiShoppingCart style={{fontSize: '25px', marginRight: '20px', cursor:'pointer'}} ></FiShoppingCart>
                        {quantity>0? <StyledHeaderCartNoti>{quantity}</StyledHeaderCartNoti>: null}
                    </StyledHeaderCartIcon>
              
                    <StyledHeaderShadow onClick={showCart} show={isCartShowed}></StyledHeaderShadow>

                    <StyledHeaderCart show={isCartShowed}>
                    {displayProductsInCart}
                    {props.cart.length === 0? <p>Twój koszyk jest pusty</p>: null}
                    {props.cart.length !== 0? <a href="http://ckz.ec-at.com/">Przejdz do koszyka →</a>: null}
                </StyledHeaderCart>
                </StyledHeaderSubWrapper> 
            </StyledHeaderNav>
        </StyledHeaderWrapper>
        </>
     );
};


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