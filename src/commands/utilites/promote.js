const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
    name: 'promote',
    description: 'Promote the ongoing session!',
     devOnly: true,
    // testOnly: Boolean,
    options: [ {
        name: 'status',
        description: 'Is the server full, low, or alot of players?',
        type: ApplicationCommandOptionType.String,
        choices: [

           {
            name: "full",
            value: "full"
           },

           {
            name: "low",
            value: "low"
           },
           
           {
            name: "high",
            value: "high"
           }          

        ],
        required: true,
    },
    {
        name: 'number-of-players',
        description: 'How many players are in the server?',
        type: ApplicationCommandOptionType.Number,
        required: true,
    }],

permissionsRequired: [PermissionFlagsBits.Administrator],
botPermissions: [PermissionFlagsBits.SendMessages],
    //deleted: false,


    callback: (client, interaction) => {
        let ssuchannel = interaction.guild.channels.cache.get('1159664296125546577');
        let promotestatus = interaction.options.get('status').value;
        let promoteplayers = interaction.options.get('number-of-players').value;

        const logpromote = new EmbedBuilder()
  .setTitle("Audit Log")
  .setDescription(`${interaction.user} has promoted the current session.`)
  .addFields(
    {
      name: "Status:",
      value: `${promotestatus}`,
      inline: true
    },
    {
      name: "Players",
      value: `${promoteplayers}`,
      inline: true
    },
  )
  .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666d6fa2&is=666c1e22&hm=44a85034149cc19f25197cdd828f35d4ecaf2d90dac1995f2bcc84007b689ced&")
  .setTimestamp();

        const embed = new EmbedBuilder()
  .setTitle("LARP Utilites | Promotion")
  .setDescription("We are currently full! \n\nTry to join us for some incredible scenes!")
  .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666a23e2&is=6668d262&hm=e3b1f58c66bd48074b6806e0fb6112f15f920718e1e7369b5498372abb7fe980&")
  .setTimestamp();


  const quickjoin = new ButtonBuilder()
  .setLabel('Quick Join')
  .setStyle(ButtonStyle.Link)
  .setURL('https://policeroleplay.community/join/AvUKD');

  const embed2 = new EmbedBuilder()
  .setTitle("LARP Utilites | Promotion")
  .setDescription(`We are currently at ${promoteplayers} players! \n\nThats only a little, so join for some amazing roleplays!`)
  .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666a23e2&is=6668d262&hm=e3b1f58c66bd48074b6806e0fb6112f15f920718e1e7369b5498372abb7fe980&")
  .setTimestamp();


  const quickjoin2 = new ButtonBuilder()
  .setLabel('Quick Join')
  .setStyle(ButtonStyle.Link)
  .setURL('https://policeroleplay.community/join/AvUKD');

  const row2 = new ActionRowBuilder()
            .addComponents(quickjoin2 );

            const embed3 = new EmbedBuilder()
    .setTitle("LARP Utilites | Promotion")
    .setDescription(`We are currently at ${promoteplayers} players! \n\nWe may be full soon, so join right now for some amazing roleplays!`)
    .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666a23e2&is=6668d262&hm=e3b1f58c66bd48074b6806e0fb6112f15f920718e1e7369b5498372abb7fe980&")
    .setTimestamp();
  
  
    const quickjoin3 = new ButtonBuilder()
    .setLabel('Quick Join')
    .setStyle(ButtonStyle.Link)
    .setURL('https://policeroleplay.community/join/AvUKD');
  
    const row3 = new ActionRowBuilder()
              .addComponents(quickjoin3 );
  


  

  const row = new ActionRowBuilder()
			.addComponents(quickjoin );

 if (promotestatus === "full") {
    ssuchannel.send({ embeds: [embed], components: [row] })
    interaction.reply({content: 'Success!', ephemeral: true})

 }
 if (promotestatus === "low") {
    ssuchannel.send({ embeds: [embed2], components: [row2] })
    interaction.reply({content: 'Success!', ephemeral: true})

 }
 if (promotestatus === "high") {
    ssuchannel.send({ embeds: [embed3], components: [row3] })
    interaction.reply({content: 'Success!', ephemeral: true})

 }

 let logschannel = interaction.guild.channels.cache.get('1160230748545097789');
 logschannel.send({embeds: [logpromote]})

  
    }
}