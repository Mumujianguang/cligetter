import cac from 'cac';
import create from './actions/create';

const cli = cac();

cli.help().version('1.0.0')

cli
    .command('new <projectName>', 'create a new cli project')
    .option('--path [path]', 'provide a root path to create project, default: ./')
    .option('-t, --template [type]', 'template type, support: "blank", "cac"')
    .action(create)

cli.parse();

