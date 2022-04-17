const mongoose = require("mongoose");
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
module.exports =StuModel
