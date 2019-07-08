//引入express模板
const express = require("express");
//引入fs
const fs = require("fs");
//创建应用
const app = express();
//添加对指定端口的监听
app.listen(3000, (req, res) => {
  console.log("http://127.0.0.1:3000");
});
//添加静态资源的托管
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));
//添加路由配置
app.get("/", (req, res) => {
  fs.readFile(__dirname + "/views/admin/index.html", (err, data) => {
    if (err) {
      res.end("404");
    } else {
      res.end(data);
    }
  });
});
