require("dotenv").config();

module.exports = async (client, message) => {

    if (message.author.bot === true) return;
    if (!message.guild.me.hasPermission("SEND_MESSAGES") && !message.guild.me.permissionsIn(message.channel.id).has("SEND_MESSAGES")) return;
    
    let prefix = "!";
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);

    if (cmd) {
        try { await cmd.run(client, message, args); } 
        catch (e) { console.log(e) }
    }
};
