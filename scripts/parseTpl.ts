import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * 解析模版
 * @param type 
 * @returns 
 */
export default function parseTpl(type = 'default') {
    const basePath = path.resolve(__dirname, `../template/${type}`);

    return {
        /**
         * 拷贝模版目录
         * @param projectPath 
         */
        copy(projectPath: string) {
            fs.copySync(path.resolve(basePath, 'tpl'), projectPath)
        },
        /**
         * 生成 package.json
         * @param projectPath 
         * @param meta 
         */
        createPackageJson(projectPath: string, meta: { projectName: string }) {
            const { projectName } = meta;

            // 读取模版
            let tpl = fs.readFileSync(path.resolve(basePath, 'package.json.tpl')).toString()

            // 替换展位符号
            tpl = tpl.replaceAll('{{projectName}}', projectName);

            // 写入文件
            fs.writeFileSync(path.resolve(projectPath, 'package.json'), tpl)
        }
    }
}