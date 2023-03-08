# Introduction
一款用于快速生成 [cli 开发模版] 的 cli 工具

## Install
```
npm install @ray/quick-cli -g
```

## Usage
获取帮助信息
```
quick-cli -h
```
创建一个默认的 cli 开发模版
```sh
# quick-cli new <projectName>
quick-cli new my-cli
```
创建一个指定模版的相对生成路径, 默认为执行命令时所在目录
```sh
# quick-cli new <projectName> --path=<path>
quick-cli new my-cli --path=./
```