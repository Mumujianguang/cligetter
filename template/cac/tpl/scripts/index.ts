import cac from 'cac';

const cli = cac();

cli.help().version('1.0.0')

cli
    .command('log <msg>', 'print log')
    .option('--level [level]', 'log level')
    .action((log, options) => {
        console.log(log, options)
    })

cli.parse();