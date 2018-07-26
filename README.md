使用puppeteer下载instagram上我喜欢的图片，待优化。

## 准备工作
### 安装依赖
当执行`npm i`时记得打开命令行代理，否则puppeteer库可能安装出现异常

### 创建.env文件
.env文件用于储存账号密码，示例：
```
USER_NAME = webb
USER_PASSWORD = 123
```

### 使用shadowsocks代理
1. 确保浏览器可以正常浏览外网
2. 本地的shadowsock服务位于1080端口

### fly
运行脚本时需要关闭命令行代理，否则会无法启动puppeteer，然后运行`npm run start`
