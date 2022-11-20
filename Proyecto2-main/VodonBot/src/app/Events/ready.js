module.exports = async client => {
    console.log(`> ${client.user.username} is online`);
    await client.user.setActivity("Hackaton", "PLAYING");
    await client.user.setStatus("online"); 
};
