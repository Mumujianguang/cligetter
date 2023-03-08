"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const create_1 = require("./actions/create");
const cli = (0, cac_1.default)();
cli.help().version('1.0.0');
cli
    .command('new <projectName>', 'create a new cli project')
    .option('--path [path]', 'provide a root path to create project, default: ./')
    .action(create_1.default);
cli.parse();
