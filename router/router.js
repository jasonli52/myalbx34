//封装路由模块
//引入express
const express = require("express");
//引入user控制器模块
const userControllers = require("../controllers/userControllers");
//引入fs
const fs = require("fs");
//引入router
//router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router();

router.get("/", userControllers.getIndexPage);
//暴露路由模块
module.exports = router;
