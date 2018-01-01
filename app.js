var express = require("express"),
    app     = express(),
    port = process.env.port || 3000,
    boydParser = require("body-parser");




app.listen(port,function(){
    console.log("application is runnig on " + port);
});

