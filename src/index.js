require('dotenv').config();








const { Client, IntentsBitField, Events, ModalBuilder , EmbedBuilder, ActionRowBuilder,TextInputStyle, ButtonBuilder, TextInputBuilder, ButtonStyle, ComponentType, TextInputAssertions, escapeMaskedLink, embedLength, transformResolved, ContextMenuCommandAssertions, ChannelManager } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const { name } = require('./commands/utilites/ra');

//const { MessageActivityType } = require('discord.js/typings');



// Pass the 'language' parameter to specify the language (optional).
// Defaults to 'en' if no valid language code is provided.


const client = new Client({

    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],

});


eventHandler(client);






client.login(process.env.PASSWORD);