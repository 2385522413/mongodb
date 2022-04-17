const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/database");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
//数据库连接成功
db.once("open", function () {
    // we're connected!
    console.log("success");
});

//创建约束
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female"
    },
    address: String
});

//创建模型
var StuModel = mongoose.model("student", stuSchema);

/*//向数据库中插入一个文档
StuModel.create({
    name: "guwen",
    age: 24,
    gender: "male",
    addresss: "卧龙镇"
}, (err) => {
    if(!err){
        console.log("插入成功");
    }
});*/
/*
StuModel.create({
    name: "gushang",
    age: 30,
    gender: "male",
    addresss: "卧龙镇"
}, (err) => {
    if(!err){
        console.log("插入成功");
    }
});
*/
//四个参数  第一个 查询条件 第二个投影 第三个查询选项  第四个回调函数
/*StuModel.find({name:"guwen"},(err,docs)=>{
    if (!err) {
        console.log(docs);
    }
})*/
/*StuModel.find({},"name -_id age",{skip:1},(err,docs)=>{
    if (!err) {
        console.log(docs);
    }
})*/
StuModel.findOne({name:"gushang"},(err,docs)=>{
    if (!err) {
        console.log(docs);
        console.log(StuModel);
        console.log(docs instanceof StuModel);
/**
 * docs.toObject  转对象
 * docs.toJson  转json
 * */
        docs.age=99
        console.log(docs);

    }
})
