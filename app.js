var express = require('express'),
	    	app =express();

        	var port = process.env.PORT || 3000;
	
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>res.render("index"));
app.get('/register',(req,res)=>res.render('registerPage'));
app.get('/schedule',(req,res)=>res.render('schedulePage'));

app.listen(port,()=> console.log(`Server running on port ${port}`));