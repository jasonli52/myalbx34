//封装路由模块
//引入express
const express = require("express");
//引入user控制器模块
const pagesControllers = require("../controllers/pagesControllers");

//引入router
//router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router();
//前台页面
router
  .get("/", pagesControllers.getIndexPage)
  .get("/list", pagesControllers.getListPage)
  .get("/detail", pagesControllers.getDetailPage)
  //后台页面
  .get("/admin", pagesControllers.getAdminPage);
//暴露路由模块
module.exports = router;
