const { ChannelSelectMenuInteraction, Client } = require('discord.js');
const { testServer } = require('../../../config.json');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');
const areCommandsDifferent = require('../../utils/areCommandsDifferent');

module.exports = async (client) => {
   
   try {
    const localCommands = getLocalCommands();
    const applicationCommands = await getApplicationCommands(client, testServer);

    for (const localCommand of localCommands) {
        const {name, description, options} = localCommand;

        const existingCommand = await applicationCommands.cache.find(
            (cmd) => cmd.name === name
        );

        if (existingCommand) {
            if (localCommand.deleted) {
                await applicationCommands.delete(existingCommand.id);
                console.log(`The ${name} command has been deleted.`);
                continue;
            }
            if (areCommandsDifferent(existingCommand, localCommand)) {
            await applicationCommands.edit(existingCommand.id, {
                description,
                options,
            });
            console.log(`The ${name} command has been edited.`)
            }
        } else {
            if (localCommand.deleted) {
                console.log(`Skipped the ${name} command`);
                continue;
            }

            await applicationCommands.create({
                name,
                description,
                options,

            });
            console.log(`Registered the ${name} command.`)
        }
    }
   } catch (error) {
    console.log(error);
   }
};