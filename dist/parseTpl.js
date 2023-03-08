"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
/**
 * 解析模版
 * @param type
 * @returns
 */
function parseTpl(type = 'default') {
    const basePath = path.resolve(__dirname, `../template/${type}`);
    return {
        /**
         * 拷贝模版目录
         * @param projectPath
         */
        copy(projectPath) {
            fs.copySync(path.resolve(basePath, 'tpl'), projectPath);
        },
        /**
         * 生成 package.json
         * @param projectPath
         * @param meta
         */
        createPackageJson(projectPath, meta) {
            const { projectName } = meta;
            // 读取模版
            let tpl = fs.readFileSync(path.resolve(basePath, 'package.json.tpl')).toString();
            // 替换展位符号
            tpl = tpl.replaceAll('{{projectName}}', projectName);
            // 写入文件
            fs.writeFileSync(path.resolve(projectPath, 'package.json'), tpl);
        }
    };
}
exports.default = parseTpl;
