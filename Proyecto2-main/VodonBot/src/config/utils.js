const {join} = require('path');
const chalk = require('chalk');
const utilsFolder = join(__dirname, '../helpers/utils');

module.exports = async (client) => {
    client.utils = {};
    const utilFiles = client.config.utils;

    for (let i = 0; i < utilFiles.length; i++) {
        const utilName = utilFiles[i];
        console.log(`${chalk.green('Successfully')} loading util ${chalk.bold(utilName)}`);
        let util;
        try {
            util = require(join(utilsFolder, utilName));
            if (!util) {
                console.error('empty util');
                continue;
            }
            if (typeof util.name != 'string' || typeof util.construct != 'function') return;
            client.utils[util.name] = await util.construct(client);
        } catch (err) {
            console.error(err);
            console.error(`${chalk.red('Failed')} loading util ${chalk.bold(utilName)}`);
        }
    }
};
