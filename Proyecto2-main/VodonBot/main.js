console.time('startup');
const {readdirSync} = require("fs");

(() => {
    process.on('uncaughtException', (err) => {
        console.error(err);
        process.exit(1);
    });
})();

require("dotenv").config();
global.Discord = require('discord.js');

let utilsArray = [];
const u = readdirSync("./src/helpers/utils");
u.forEach(c => {
    if (c.endsWith(".js")) {
        let filename = c.substring(0, c.length - 3);
        utilsArray.push(filename);
    }
});

global.config = Object.assign({}, {
    utils: utilsArray,
}, {});

const {CmdHandler, EventHandler} = require("./src/config/cmdhandler");

// Conectar a discord
const client = new Discord.Client({ ws: { intents: undefined }});
client.config = config;

//      COMMAND HANLDER       //
(async () => {
    try {
        client.commands = new Discord.Collection();
        await (require('./src/config/utils'))(client);
        await EventHandler(client, "../app/Events"); 
        await CmdHandler(client, "../app/Commands");
        await client.login(process.env.token);
    } catch (err) {
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }
})();

console.timeEnd('startup');