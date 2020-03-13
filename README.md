# blog2.0
ramoneando blog 2nd version with nodejs

## [Node.js Blog Tutorial](https://vegibit.com/node-js-blog-tutorial/)

tl;dr

`mkdir nodejs-blog-tutorial` create directory  
`cd nodejs-blog-tutorial` access directory  
`npm init` creates package.json  
`npm i startbootstrap-clean-blog` installs package + node_modules directory  
`npm i express` installs package  
`npm i nodemon` installs package  
`touch index.js` creates file  
`mkdir public` creates directory  

edit index.js
```javascript
const express = require('express');
 
const app = new express();
 
app.use(express.static('public'));
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});
```


