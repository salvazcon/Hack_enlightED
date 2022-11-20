const fs = require("fs").promises;
const path = require("path");
const { checkModule, checkProperties } = require("./validate");

async function CmdHandler(client, dir) {
    let files = await fs.readdir(path.join(__dirname, dir));
    for (let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) CmdHandler(client, path.join(dir, file));
        else {
            if (file.endsWith(".js")) {
                let cmdName = file.substring(0, file.indexOf(".js"));
                try {
                    let cmdModule = require(path.join(__dirname, dir, file));
                    if (checkModule(cmdName, cmdModule)) {
                        if (checkProperties(cmdName, cmdModule)) {
                            let { aliases } = cmdModule;
                            client.commands.set(cmdName, cmdModule);
                            if (aliases.length > 0)
                                aliases.forEach(alias => client.commands.set(alias, cmdModule));
                        }
                    }
                } catch (err) {
                    console.error(
                        "There was an error initializing the **" + cmdName + "** Commands",
                        err
                    );
                    client.commands.set(cmdName, {
                        run: async (client, message, args) =>
                            message.channel.send(
                                "That Commands is not loaded due to error: " + err
                            ),
                        description: "That Commands is not loaded due to error.",
                        aliases: [],
                    });
                }
            }
        }
    }
}

async function EventHandler(client, dir) {

    let files = await fs.readdir(path.join(__dirname, dir));
    for (let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) await EventHandler(client, path.join(dir, file));
        else {
            if (file.endsWith(".js")) {
                let eventName = file.substring(0, file.indexOf(".js"));
                try {
                    let eventModule = require(path.join(__dirname, dir, file));
                    client.on(eventName, eventModule.bind(null, client));
                } catch (err) {
                    console.error(
                        "There was an error initializing the " + eventName + " Events",
                        err
                    );
                }
            }
        }
    }
}

module.exports = {
    EventHandler,
    CmdHandler,
};
