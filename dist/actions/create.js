"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const parseTpl_1 = require("../parseTpl");
/**
 * 创建 cli 模版
 * @param projectName
 * @param options
 */
function create(projectName, options) {
    const cwd = process.cwd();
    const { path: rootPath = cwd } = options;
    const projectPath = path.resolve(rootPath, projectName);
    // 存在同名目录直接退出
    if (fs.existsSync(projectPath)) {
        console.log(`directory already exists: ${projectName}`);
        return;
    }
    // 创建项目根目录
    fs.mkdirSync(projectPath);
    // 生成模版
    const tpl = (0, parseTpl_1.default)();
    tpl.copy(projectPath);
    tpl.createPackageJson(projectPath, {
        projectName
    });
    // 下一步操作
    console.log(chalk.blue('\ncreate success. next run:'));
    console.log(`  \n1. cd ${projectName}`);
    console.log('  \n2. npm install');
    console.log('  \n3. npm run dev\n');
}
exports.default = create;
