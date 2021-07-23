import express from 'express';
import cors from 'cors';
import { renderToString} from 'react-dom/server';
import App from '../shared/App';
import React from 'react';
import { serialize } from 'uri-js';
import { matchPath, StaticRouter } from 'react-router-dom';
import routes from '../shared/routes'
import { ServerStyleSheet } from 'styled-components';
import fetch from 'node-fetch';
import fs from 'fs';
import { request } from 'http';
import bodyParser from 'body-parser';

const app = express()



const sheet = new ServerStyleSheet()

app.use(cors())

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())




app.post('/uploadTemplateString/:page', function (req,res, next) {

    
    if(req.params.page === 'home'){
        fs.writeFile("./src/shared/Home.js", req.body.template, (err)=>{
            if(err) console.log(err)
            else res.send('Successfuly updeted home page!')
            console.log('Successfuly updeted home page!')

        })
    }else if( req.params.page === 'category'){
        fs.writeFile("./src/shared/Categry.js", req.body.template, (err)=>{
            if(err) console.log(err)
            else res.send('Successfuly updeted category page!')
            console.log('Successfuly updeted category page!')
        })
    }else if (req.params.page === 'product') {
        fs.writeFile("./src/shared/Product.js", req.body.template, (err)=>{
            if(err) console.log(err)
            else res.send('Successfuly updeted product page!')
            console.log('Successfuly updeted product page!')
        })
    }else{
        res.send('Wrong parameter')
    }

})







//TODO tutaj zrobić 3 różne fetche do displayera dla homepage/categorypage/productPage
// i w zależności od przeakzanego typu i nazwy szablonu wyszukać w folderze np home  a po nazwie konkretny szablon w którym będzie plik App.js który należt wysłać



app.get('*', (req,res,next) => {
    const activeRoute = routes.find((route)=> matchPath(req.url, route)) || {}
    const sheet = new ServerStyleSheet();

    const name = 'konrad' //do serialize przekazywaćinfo bobrane z DB odnośnie styli i wybranego szablonu itd
    const markup = renderToString(sheet.collectStyles(<StaticRouter location={req.url} context={{}}><App data={name}/></StaticRouter>))


res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title> ecat creator </title>
            <script src='/bundle.js' defer></script>
            ${sheet.getStyleTags()}
            <script>window.__INITIAL_DATA_ = ${serialize(name)}</script>
            <link rel="stylesheet" href="App.css">
        </head>
        <body>
            <div id='app'>${markup}</div>
        <body/>
    </html>
    
    `)

})

app.listen(4000, () =>{
    console.log('server run  on 4000')
})