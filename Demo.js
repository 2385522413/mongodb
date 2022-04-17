require("./tools/mongo_connect");
const sutmodule = require("./modules/studentModule");
console.log(sutmodule);
sutmodule.find({},(err,doc)=>{
    if (!err) {
        console.log(doc);
    }
})
