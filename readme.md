# Auto.js DevTools

## 环境配置

本工具依赖于[Node.js](https://nodejs.org)，并且只有通过Node.js内置的npm指令才可安装。

Node.js安装完成后，运行：

```bash
npm i -g autojs-dev
```

或者安装到工程目录
```
npm i -S autojs-dev
```

支持的指令：
```bash
autojs create <filename> # 根据模板创建脚本文件

autojs cap [filename] # 对adb列表的第一个设备进行截图

autojs new [projectName] # 新建Auto.js项目，可选用npm或yarn进行npm install操作

autojs build # 根据配置文件编译脚本

autojs img # 启动找图素材加载服务
```

## 开发计划

- [x] 项目构建脚手架
  - [x] 项目配置文件
  - [x] 脚本自动生成命令
    - [x] 使用autojs.json配置工程
- [ ] 可供使用的便捷模块
  - [ ] 找图模块
  - [ ] 其他（可在issue提出建议，将酌情选择开发）
- [x] 模块打包工具
- [x] 截屏命令（需要自己配置好adb并开启adb server）
- [x] 找图素材服务
- [x] 自动构建工具
- [ ] 其他（可在issue提出建议）

## 本项目依赖模块

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[![Webpack Logo](https://webpack.js.org/assets/icon-square-big.svg)](http://webpack.js.org/)
