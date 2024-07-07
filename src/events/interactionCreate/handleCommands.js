const {devs, testServer} = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);

        if (!commandObject) return;

        if (commandObject.devOnly) {
            if (!devs.includes(interaction.member.id)) {
                interaction.reply({
                    content: '🔨 Only Developers can run this command!',
                    ephemeral: true,

                });
                return;
            }
        }

        
        if (commandObject.testOnly) {
            if (!(interaction.guild.id === testServer)) {
                interaction.reply({
                    content: "💻 This command is in the testing phase, this can't be ran here.",
                    ephemeral: true,

                });
                return;
            }
        }

        if (commandObject.permissionsRequired?.length) {
            for (const permission of commandObject.permissionsRequired) {
                if (!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: '💻 You do not have the needed permissions to run this command.',
                        ephemeral: true,
    
                    });
                    return;
                }

            }
        }
        if (commandObject.botPermissions?.length) {
            for (const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;

                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: `🤖 The bot dosen't have the needed permissions to continue.`,
                        ephemeral: true,
    
                    });
                    return;
                }
            }
        }

        await commandObject.callback(client, interaction);
     } catch (error) {
        console.log(error);
        
    }
};