# `Vue`项目从无到有的部署上`Github page`
[知乎](https://www.zhihu.com/people/yan-yang-nian-hua-120/activities)

[个人博客](https://rain120.github.io/)

[Github](https://github.com/Rain120)
### 准备工作
 - Nodejs安装
  
[Node官网下载](http://nodejs.cn/download/)
![下载页面](https://user-gold-cdn.xitu.io/2018/10/19/1668c933cfd5c7e0?w=1559&h=770&f=png&s=121790)

建议安装在非系统盘的英文目录下
    
![查看版本](https://user-gold-cdn.xitu.io/2018/10/19/1668c970dca6d72b?w=428&h=250&f=png&s=14032)
    
`Node`环境配置
    
新建文件夹 --- `node_cache` 和 `node_global`(`npm install -g package-name`)
    
![新建文件夹](https://user-gold-cdn.xitu.io/2018/10/19/1668c9a675e657ba?w=1096&h=478&f=png&s=66982)
    
创建完文件后，需要更改 `npmrc` 中的 `perfix` 和 `cache`
```
npm config set prefix "E:\Program Files (x86)\Nodejs\node_global"
npm config set cache "E:\Program Files (x86)\Nodejs\node_cache"
```
    
你需要替换你的安装目录
    
  - Vue-cli安装
```
npm run -g vue
vue -V
```

1. 创建`Vue`项目
```
vue init webpack project-name
```
    
![初始化项目](https://user-gold-cdn.xitu.io/2018/10/19/1668cc57c327240d?w=1217&h=258&f=png&s=37423)
    
![初始化项目](https://user-gold-cdn.xitu.io/2018/10/19/1668cc612eab58e6?w=1142&h=384&f=png&s=57814)
2. 修改`Vue`项目配置

`config/index.js` --> `build` --> `assetsPublicPath` --> `/` --> `./`

`build/webpack.prod.conf.js` --> `new HtmlWebpackPlugin` --> `removeAttributeQuotes` --> `true` --> `false`
`.gitignore` --> `注释/dist/`
![修改assetsPublicPath](https://user-gold-cdn.xitu.io/2018/10/19/1668cd5fd4c5d7c1?w=914&h=817&f=png&s=127782)
![修改removeAttributeQuotes](https://user-gold-cdn.xitu.io/2018/10/19/1668cd66b436ccb8?w=949&h=874&f=png&s=178960)

![修改.gitignore](https://user-gold-cdn.xitu.io/2018/10/19/1668ce98b65284ce?w=745&h=503&f=png&s=48112)
3. 项目打包
```
    npm run build 
```
![npm run build](https://user-gold-cdn.xitu.io/2018/10/19/1668ce43810ea0ee?w=1223&h=779&f=png&s=108140)
4. 项目测试
```
在使用http-server前，需要安装 npm i -g http-server
http-server ./dist
```
    
![http-server ./dist](https://user-gold-cdn.xitu.io/2018/10/19/1668cd108a5be0e2?w=677&h=153&f=png&s=27830)
5. 创建`Github`项目
    
![创建Github项目](https://user-gold-cdn.xitu.io/2018/10/19/1668ccabedc34a0e?w=1218&h=671&f=png&s=94520)
6. 本地`Vue`项目`Push`到[Github](https://github.com)官网
 ```
git init
    
git add .
    
git commit -m 'init vue project'
    
git remote add origin git@github.com:Rain120/demo.git 
    
git pull origin master --allow-unrelated-histories
    
git push -u origin master
```
    
![git init](https://user-gold-cdn.xitu.io/2018/10/19/1668ceb04fdd8a9e?w=685&h=50&f=png&s=9575)

![git add .](https://user-gold-cdn.xitu.io/2018/10/19/1668ced534ba145c?w=1016&h=742&f=png&s=156122)

![git commit -m 'init vue project'](https://user-gold-cdn.xitu.io/2018/10/19/1668cee33ad5485a)

![git pull && git push](https://user-gold-cdn.xitu.io/2018/10/19/1668cf142646bffa?w=835&h=636&f=png&s=91771)
7. `Github Setting` -- 配置`Github page`

Settings
![Settings](https://user-gold-cdn.xitu.io/2018/10/19/1668ccb537300271?w=1265&h=567&f=png&s=73363)
Github Pages
![Github Pages](https://user-gold-cdn.xitu.io/2018/10/19/1668ccba505d40f0?w=1109&h=558&f=png&s=58842)
Save Setting
![Save Setting](https://user-gold-cdn.xitu.io/2018/10/19/1668ccbff2c2c1c2?w=1214&h=680&f=png&s=73071)
最后可以在 `https://rain120.github.io/demo/dist/`，可以看到部署上线的效果（这个仓库我会在演示完后删掉，请自行测试）