const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
    name: 'ssd',
    description: 'Use this command to shut down the ongoing session.',
     devOnly: false,
    // testOnly: Boolean,
    // options: Object[],
    deleted: false,
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.SendMessages],
    callback: async (client, interaction) => {

        const ssdlog = new EmbedBuilder()
  .setTitle("Audit Log")
  .setDescription(`${interaction.user} has shut down the current session.`)
  .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666d6fa2&is=666c1e22&hm=44a85034149cc19f25197cdd828f35d4ecaf2d90dac1995f2bcc84007b689ced&")
  .setColor("#ff0000")
  .setTimestamp();

        
        const embed = new EmbedBuilder()
  .setTitle("Server Shutdown")
  .setDescription("The session has ended, have a good night.\n\nGreat session!")
  .setImage("https://cdn.discordapp.com/attachments/1160229979276185661/1248750940627013652/image.png?ex=66657630&is=666424b0&hm=be5f2ba5508818cda388cd82de49ab34d01852875967b89f56f8c374a8d31767&")
  .setColor("#ff0000");

  const infoembed = new EmbedBuilder()
  .setTitle("Los Angeles Server Start Up Information")
  .setDescription("# LARP | Server Start Up Info\n————————————————\n•  Server Startups Are Normally Scheduled within the following times.\n————————————————\n***Weekdays • <t:1717878600:t>  - <t:1717880400:t> ***\n***Weekends • <t:1717858800:t>  - <t:1717873200:t> ***\n————————————————\nPlease understand that there will not always be a server start up everyday.\n————————————————")
  .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666d6fa2&is=666c1e22&hm=44a85034149cc19f25197cdd828f35d4ecaf2d90dac1995f2bcc84007b689ced&");

  let ssuchannel = interaction.guild.channels.cache.get('1159664296125546577');
  let logschannel = interaction.guild.channels.cache.get('1160230748545097789');
  // int.deferReply({ ephemeral: true });
  ssuchannel.bulkDelete(100).then(( async  ) => {
  console.log("success");
  interaction.reply({content: 'Success!', ephemeral: true})

ssuchannel.send({ embeds: [infoembed] });
 ssuchannel.send({ embeds: [embed], ephemeral: false });
 logschannel.send({embeds: [ssdlog]})

 



 });
}


}