const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/database");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
//数据库连接成功
db.once("open", function () {
    // we're connected!
    console.log("连接 success");
});
