const rc = require("./index.js");

rc("./notReal", function(err,data){
    if(err) console.log(err);
    if(data){
        console.log(data.name);
    }
})
