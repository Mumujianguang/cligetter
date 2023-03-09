import * as fs from "fs";
import * as path from "path";
import { lightCyan } from "kolorist";
import parseTpl from "../parseTpl";

/**
 * 创建 cli 模版
 * @param projectName 
 * @param options 
 */
export default function create(projectName: string, options: Record<string, any>) {
    const cwd = process.cwd();
    const { path: rootPath = cwd, template } = options;

    const projectPath = path.resolve(rootPath, projectName)
    // 存在同名目录直接退出
    if (fs.existsSync(projectPath)) {
        console.log(`directory already exists: ${projectName}`);
        return
    }

    // 创建项目根目录
    fs.mkdirSync(projectPath);

    // 生成模版
    const tpl = parseTpl(template);
    tpl.copy(projectPath)
    tpl.createPackageJson(projectPath, {
        projectName
    })

    // 下一步操作
    console.log(lightCyan('\ncreate success. next run:'));
    console.log(`  \n1. cd ${projectName}`);
    console.log('  \n2. npm install');
    console.log('  \n3. npm run dev\n');
}