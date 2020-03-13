const express = require('express');
// const expressEdge = require('express-edge');
// const popper = require('popper');
const app = new express();
 
app.use(express.static('public'));
// app.use(expressEdge);
// app.use(popper);
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    // res.render('index');
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});
