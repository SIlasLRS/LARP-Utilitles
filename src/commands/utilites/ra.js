const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
    name: 'ra',
    description: 'Log a ride along',
     // devOnly: Boolean,
    testOnly: false,
      permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.SendMessages],
    options: [

        {

            name: 'person',
            description: 'Who did you do the ride along with?.',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        
    {

        name: 'type-of-ra',
        description: 'What type of ride along was it?.',
        type: ApplicationCommandOptionType.String,
        required: true,
    },

    {

        name: 'notes',
        description: 'What did the person do.',
        type: ApplicationCommandOptionType.String,
        required: true,
    },
    {

        name: 'passed',
        description: 'Did they pass or fail?',
        type: ApplicationCommandOptionType.Boolean,
        required: true,
    },
],
    //deleted: false,

    callback: async (client, interaction) => {
       
       const user = interaction.options.get('person').value; 
       const ra = interaction.options.get('type-of-ra').value; 
       const notes = interaction.options.get('notes').value; 
       const passed = interaction.options.get('passed').value; 
       let channel = interaction.guild.channels.cache.get('1160328722486935563');

        const embed = new EmbedBuilder()
  .setTitle("Ride along log!")
  .setDescription(`${interaction.user} Has logged a ride along please look at the info below.`)
  .addFields(
    {
      name: "Person",
      value: `<@${user}>`,
      inline: true
    },
    {
      name: "Type of Ride along",
      value: `${ra}`,
      inline: true
    },
    {
      name: "Notes",
      value: `${notes}`,
      inline: true
    },
    {
      name: "Passed?",
      value: `${passed}`,
      inline: true
    },
  )
  .setColor("#00ff00");

await channel.send({ embeds: [embed] });
interaction.reply({ephemeral: true, content: "Success!"})

    }
}