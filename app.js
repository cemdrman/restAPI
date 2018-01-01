var express = require("express"),
    app     = express(),
    port = process.env.port || 3000,
    boydParser = require("body-parser");

    app.use(boydParser.json());
    app.use(boydParser.urlencoded({extended:true}));

    app.get("/",function(req,res){
        res.json(
            {message:'test api'}
        );
    });

app.listen(port,function(){
    console.log("application is runnig on " + port);
});

