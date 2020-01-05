const express = require('express');
const app = express();

const server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.set('views', __dirname + '/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use( '/' ,express.static(__dirname + '/'));
app.get('/',function(req,res){
    res.render('index.html');
});