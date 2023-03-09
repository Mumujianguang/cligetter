{
  "name": "{{projectName}}",
  "version": "1.0.0",
  "description": "",
  "main": "dist/cli.js",
  "type": "module",
  "scripts": {
    "dev": "pnpm run build -w",
    "build": "rollup --config rollup.config.ts --configPlugin typescript"
  },
  "bin": {
    "{{projectName}}": "./bin/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^24.0.1",
    "@rollup/plugin-node-resolve": "^15.0.1",
    "@rollup/plugin-typescript": "^11.0.0",
    "@types/fs-extra": "^11.0.1",
    "@types/node": "^18.14.6",
    "@types/prettier": "^2.7.2",
    "cac": "^6.7.14",
    "fs-extra": "^11.1.0",
    "kolorist": "^1.7.0",
    "prettier": "^2.8.4",
    "rollup": "^3.18.0",
    "tslib": "^2.5.0",
    "typescript": "^4.9.5"
  }
}
