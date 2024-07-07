const { ActivityType } = require('discord.js');

module.exports = (client) => {

client.user.setActivity({
 name: "Los Angeles City Roleplay",
 type: ActivityType.Watching
});


}