const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');


module.exports = {
    name: 'kick',
    description: 'Kicks a selected member.',
     // devOnly: Boolean,
    testOnly: false,
    options: [
        {

            name: 'target-user',
            description: 'The user to kick',
            type: ApplicationCommandOptionType.Mentionable,
            required: true,

        },
        {

            name: 'reason',
            description: 'Reason of the user\'\s kick.',
            type: ApplicationCommandOptionType.String,
            required: true,

        }
],
    deleted: false,
    permissionsRequired: [PermissionFlagsBits.KickMembers],
    botPermissions: [PermissionFlagsBits.KickMembers],
    callback: async (client, interaction) => {
      

        let kickmember = interaction.options.get('target-user').user.id;

        const embed = new EmbedBuilder()
  .setTitle(`${interaction.options.get('target-user').user.username} has been kicked!`)
  .setDescription(`${interaction.options.get('target-user').member} has been kicked because of the reason: \"${interaction.options.get('reason').value}\".\n\n${interaction.options.get('target-user').member} was kicked by ${interaction.user}`)
  .setImage("https://cdn.discordapp.com/attachments/1251003482782306357/1251686755426631811/image.png?ex=666f7ba1&is=666e2a21&hm=6aa8e91b7411d0cf07627fd7698a46e81ae4c9bf09408711dcbe347968f14bb2&")
  .setColor("#006400");

        
 interaction.guild.members.kick(kickmember);

  await interaction.reply({ embeds: [embed] });

    }
}