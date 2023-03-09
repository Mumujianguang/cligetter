import { defineConfig, RenderedChunk } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import * as prettier from 'prettier'

function cjsContextPlugin() {
    const ctx = prettier.format(`
        import { fileURLToPath } from 'url';
        import { dirname } from 'path';
        import { createRequire } from 'module';

        const __filename = fileURLToPath(import.meta.url)
        const __dirname = dirname(__filename)
        const require = createRequire(import.meta.url)
    `, {
        tabWidth: 4
    });

    return {
        name: 'cjs-context-plugin',
        renderChunk(code: string, chunk: RenderedChunk) {            
            code = code.replace(/(import[\s\S]*?;[\s\S])*/, ($) => {
                return `${$}${ctx}`
            })
            
            return {
                code
            }
        }
    }
}

export default defineConfig({
    input: {
        cli: 'scripts/index.ts' 
    },
    output: {
        format: 'esm',
        dir: 'dist',
        chunkFileNames: 'chunks/[hash].js'
    },
    plugins: [
        resolve(),
		commonjs(),
        typescript(),
        cjsContextPlugin()
    ]
})