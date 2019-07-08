//引入express模板
const express = require("express");
//引入ejs模板
const ejs = require("ejs");
//引入路由模块
const router = require("./router/router.js");
//创建应用
const app = express();
//添加对指定端口的监听
//设置ejs模板引擎
app.set("view engine", "ejs");
//指定模板文件的目录,后期使用ejs的时候就可以参照这个目录进行ejs文件查询
app.set("views", "views");
app.listen(3000, (req, res) => {
  console.log("http://127.0.0.1:3000");
});
//添加静态资源的托管
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));
//添加路由配置
app.use(router);
