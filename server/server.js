const express=require("express");
const app=express();
var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    next();
};
app.use(allowCrossDomain);

//index返回的json
app.get("/server/data/index", function (request, response) {
    var data = require('./data/index');//要获取的json文件
    response.send(data);
})


//magazine返回的json
app.get("/server/data/magazine", function (request, response) {
    var data = require('./data/magazine');//要获取的json文件
    response.send(data);
})

//carts返回的json
app.get("/server/data/carts",function(request,response){
    var data=require('./data/carts');//要获取的json文件
    response.send(data);
})

//protect返回的数据
app.get("/server/data/protect",function(request,response){
    var data=require('./data/protect');//要获取的json对象
    response.send(data);
})

//shared返回的数据
app.get("/server/data/shared",function(request,response){
    var data=require('./data/shared');//要获取的json对象
    response.send(data);
})

app.listen('4000', function () {
    console.log('服务开启成功')
});