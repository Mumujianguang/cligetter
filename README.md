# Introduction
一款用于快速生成 ***[cli 开发模版]*** 的 cli 工具

(A cli tool for quickly generating ***cli development template***)

[![version](https://img.shields.io/npm/v/cligetter.svg)](https://www.npmjs.com/package/cligetter)
[![downloads](https://badgen.net/npm/dt/cligetter)](https://www.npmjs.com/package/cligetter)

## Install
```
npm install cligetter -g
```

## Usage

#### Get help
```
cligetter -h
```

Create a default cli development template
```sh
cligetter new <projectName>
cd <projectName>
npm install
npm run dev
```

### -t, --template
You can specify the template type. Currently, ***blank*** and ***cac*** are supported.

For example, use ***cac***:
```sh
cligetter new my-cli -t cac
cd my-cli
npm install
npm run dev
```
The ***cac*** template is packaged with rollup by default,
after the builder starts, you can enter:
```sh
node ./bin/cli.js -h
```
or:
```sh
npm link
my-cli -h
```
Next, you can start developing your cli from ***scripts/index.ts***

### --path
When creating a template, you can specify the directory through the path option
```sh
cligetter new <projectName> --path=<path>
```