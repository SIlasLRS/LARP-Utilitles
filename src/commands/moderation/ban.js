const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans a member from the server.',
    // devOnly: Boolean,
   // testOnly: true,
    options: [
        {

            name: 'target-user',
            description: 'The user to ban',
            type: ApplicationCommandOptionType.Mentionable,
            required: true,

        },
        {

            name: 'reason',
            description: 'Reason of the user\'\s ban.',
            type: ApplicationCommandOptionType.String,
            required: true,

        }
],
permissionsRequired: [PermissionFlagsBits.BanMembers],
botPermissions: [PermissionFlagsBits.BanMembers],


    callback: async (client, interaction) => {
        let banmember = interaction.options.get('target-user').user.id

        const embed = new EmbedBuilder()
  .setTitle(`${interaction.options.get('target-user').user.username} has been banned!`)
  .setDescription(`${interaction.options.get('target-user').member} has been banned because of the reason: \"${interaction.options.get('reason').value}\".\n\n${interaction.options.get('target-user').member} was banned by ${interaction.user}`)
  .setImage("https://cdn.discordapp.com/attachments/1159664550874984519/1249923605903577198/image.png?ex=666c5d52&is=666b0bd2&hm=b2cd7450ed32599cbad4461b3cb00874c52cfe7b517fed4855a2f25c52b2a44c&")
  .setColor("#ff0000");

        interaction.guild.members.ban(banmember)

        

await interaction.reply({ embeds: [embed] });

        
    }
}