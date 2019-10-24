

"use strict "

const express = require('express');
const app = express();

app.set('view engine', 'pug');
//app.use(express.static(css_klasörü)); //static dosyalar path ini göstermek için
app.get('/', (req, res) => {
    //res.send("hello express");
    res.render('index', { name: 'noaahhh', age: '21' })
})

app.get('/contact/:id/:yas?', (req, res) => {
    res.send(req.params);
    res.render('contact')
})


app.post('/home', (req, res) => {
    //res.send("hello express");
    res.render('home')
})
app.all('/index', (req, res) => {
    res.send('burası all metodu')
})

app.listen(8000, () => {
    console.log("expess server is activated!")
});