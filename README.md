# Introduction
一款用于快速生成 [cli 开发模版] 的 cli 工具

## Install
```
npm install cligetter -g
```

## Usage
获取帮助信息
```
cligetter -h
```
创建一个默认的 cli 开发模版
```sh
# cligetter new <projectName>
cligetter new my-cli
```
创建一个指定模版的相对生成路径, 默认为执行命令时所在目录
```sh
# cligetter new <projectName> --path=<path>
cligetter new my-cli --path=./
```