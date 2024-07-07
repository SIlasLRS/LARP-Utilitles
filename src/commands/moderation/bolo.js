const { ApplicationCommandOptionType,ButtonBuilder,ButtonStyle, Events, ActionRowBuilder, PermissionFlagsBits, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle   } = require('discord.js');
const cheerio = require("cheerio")
const axios = require("axios")

const rp = require('request-promise');
const $ = require('cheerio');
module.exports = {
    name: 'banbolo',
    description: 'Request a ban bolo on a player or moderator.',
     // devOnly: Boolean,
    //testOnly: false,
    // options: Object[],
    //deleted: false,
    permissionsRequired: [PermissionFlagsBits.KickMembers],
    botPermissions: [PermissionFlagsBits.KickMembers],
    callback: async (client, interaction) => {
        const modal = new ModalBuilder()
			.setCustomId('banbolomodal')
			.setTitle('Ban Bolo Modal');

            const idname = new TextInputBuilder()
			.setCustomId('name')
		    // The label is the prompt the user sees for this input
			.setLabel("What is their Roblox username?")
            .setPlaceholder('Example: SIlasLRS')
            .setMaxLength(200)
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Paragraph);

            const explain = new TextInputBuilder()
			.setCustomId('explainInput')
			.setLabel("What did this person do?")
            .setMaxLength(1_024)
            .setPlaceholder('Explain in detail what the person did.')
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

            const images = new TextInputBuilder()
            .setCustomId('imageInput')
            .setLabel("Please put proof of your ban request.")
            .setMaxLength(1_024)
            .setPlaceholder('Example: https://imgur.com/a/....')
            // Paragraph means multiple lines of text.
            .setStyle(TextInputStyle.Paragraph);
    
            const thirdActionRow = new ActionRowBuilder().addComponents(images);
    


            const firstActionRow = new ActionRowBuilder().addComponents(idname);
            const secondActionRow = new ActionRowBuilder().addComponents(explain);

            modal.addComponents(firstActionRow, secondActionRow,thirdActionRow);

            await interaction.showModal(modal);
            
            async function getId(name){
                try {
                const response = await axios.post(`https://users.roblox.com/v1/usernames/users`, {
                    "usernames": [name],
                    "excludeBannedUsers": true
                })
                const data = response.data.data[0];
                return data.id
                }
                catch(err){return}
              }
              
              async function main(){
                console.log(await getId("SIlasLRS"))
              }
              
              main()
              
              client.on(Events.InteractionCreate, async interaction => {
                  if (!interaction.isModalSubmit()) return;
              
                
                
               
              
                  if (interaction.customId === 'banbolomodal') {
              
                  
                     
                      let bonbolochannel = interaction.guild.channels.cache.get('1249692945498505307');
              
                      let username = interaction.fields.getTextInputValue('name');
              
                      const id = await getId(username);
                     
                      const explain  = interaction.fields.getTextInputValue('explainInput');
                      const images  = interaction.fields.getTextInputValue('imageInput');
              
                     // console.log(name ,explain, images);
              
                      const url = `https://thumbnails.roblox.com/v1/users/avatar?userIds=${id}&size=100x100&format=Png&isCircular=false`;
                      if (url === 'https://thumbnails.roblox.com/v1/users/avatar?userIds=undefined&size=100x100&format=Png&isCircular=false') {
              
                          interaction.reply({ephemeral:true, content:"Sorry, but that user is invaild, please try again later."})
              
                      };
                      rp(url)
                      .then(async function(html){
                        //success!
                       
                        let str = html;
                        let res = str.match(/https?:\/\/[^\s]+/)[0];
                       /// console.log(`${res}`);
              
                        const embed = new EmbedBuilder()
                .setTitle("Ban Bolo!")
                .setDescription(`${interaction.user} has submitted a Ban bolo. Please read all of the information below.`)
                .addFields(
                  {
                    name: "Roblox UserID",
                    value: `${id}`,
                    inline: true
                  },
                  {
                    name: "Roblox Username",
                    value: `${username}`,
                    inline: true
                  },
                  {
                    name: "Explanation",
                    value: `${explain}`,
                    inline: true
                  },
                  {
                    name: "Status",
                    value: `Unbanned`,
                    inline: true
                  },
                  {
                    name: "Images and videos",
                    value: `${images}`,
                    inline: true
                  },
                )
              
              
               
              
                .setImage('https://cdn.discordapp.com/attachments/1244381210390564967/1251678196441550880/image.png?ex=666f73a9&is=666e2229&hm=40a8b5d67d836d535e138e0b2aa8436bae304707eb7c9ee1710c3000cf27bf91&')
                .setThumbnail(`${res}`);
              
              
                const confirm = new ButtonBuilder()
                          .setCustomId('confirm1')
                          .setLabel('Confirm Ban')
                          .setStyle(ButtonStyle.Success);
              
                    const row = new ActionRowBuilder()
                          .addComponents(confirm);
              
              await bonbolochannel.send({ embeds: [embed], components: [row] });
              
               await      interaction.reply({ephemeral:true, content:'Thank you for the report! This will be logged.'})
                      })
                      .catch(function(err){
                        console.log(err);
                      });
              
                      
              
                      
              
                    
                    
              
              
                  }
              });
              
              
              
              client.on(Events.InteractionCreate, async interaction => {
                try {
                  
                  if (!interaction.isButton()) return;
                 // console.log(interaction);
              if (interaction.customId === "confirm1") {
              
                const modal = new ModalBuilder()
                .setCustomId('1q')
                .setTitle('Appealable? Modal');
              
                      const appeal = new TextInputBuilder()
                .setCustomId('appealable')
                  // The label is the prompt the user sees for this input
                .setLabel("Is this ban Appealable?")
                      .setPlaceholder('Yes or no?')
                      .setMaxLength(100)
                  // Short means only a single line of text
                .setStyle(TextInputStyle.Short);
              
              
                const actionRow = new ActionRowBuilder().addComponents(appeal);
              
                modal.addComponents(actionRow);
              
               await interaction.showModal(modal);
              
               
              }
                } catch (error) {
                 console.log(error); 
                }
              
              
              
              });
              
              client.on(Events.InteractionCreate, async interaction => {
                  if (!interaction.isModalSubmit()) return; 
                if (interaction.customId === '1q') {
              
                  const uid = await interaction.message.embeds[0].data.fields[0].value
               const aofui = await axios.get(`https://users.roblox.com/v1/users/${uid}`)
              
               
              const appealable  = interaction.fields.getTextInputValue('appealable');
              
              
              
              
               const user = await interaction.message.embeds[0].data.fields[1].value
               const reason = await interaction.message.embeds[0].data.fields[2].value
              
               console.log(user);
               const url = `https://thumbnails.roblox.com/v1/users/avatar?userIds=${uid}&size=100x100&format=Png&isCircular=false`;
               rp(url) 
                      .then(async function(html){
                        //success!
                       
                        let str = html;
                        let res = str.match(/https?:\/\/[^\s]+/)[0]; 
              
               const embed = new EmbedBuilder()
                .setTitle(`${user} has been banned!`)
                .setDescription(`## All of ${aofui.data.name}'s Ban and Roblox information:`)
                .addFields(
                  {
                    name: "Responsible moderator",
                    value: `${interaction.user}`,
                    inline: true
                  },
                  {
                    name: "Reason of ban",
                    value: `${reason}`,
                    inline: true
                  },
                  {
                    name: "Appealable?",
                    value: `${appealable}`,
                    inline: true
                  },
                  {
                    name: "Roblox Name",
                    value: `${aofui.data.name}`,
                    inline: true
                  },
                  {
                    name: "Roblox Display Name",
                    value: `${aofui.data.displayName}`,
                    inline: true
                  },
                  {
                    name: "Roblox ID",
                    value: `${aofui.data.id}`,
                    inline: true
                  },
                  {
                    name: "Verified badge? (Roblox)",
                    value: `${aofui.data.hasVerifiedBadge}`,
                    inline: true
                  },
                  {
                    name: "Banned? (On Roblox)",
                    value: `${aofui.data.isBanned}`,
                    inline: true
                  },
                )
                .setThumbnail(`${res}`);
              
              
                const showdescription = new ButtonBuilder()
                .setCustomId('showdescription')
                .setLabel('Description')
                .setStyle(ButtonStyle.Primary);
              
                const row = new ActionRowBuilder()
                .addComponents(showdescription);
              
               await interaction.deferReply();
               
               const bannedmsg = await interaction.editReply({embeds:[embed], components: [row]});
              
               const receivedEmbed = interaction.message.embeds[0];
               console.log(bannedmsg.guild); 
              
               console.log(bannedmsg.url);
               
               
               receivedEmbed.fields[3] = { value: `[Banned](${bannedmsg.url})`, name: 'Status', inline: true }
              
              
               const confirm = new ButtonBuilder()
                          .setCustomId('confirm2')
                          .setLabel('Confirm Ban')
                          .setDisabled(true)
                          .setStyle(ButtonStyle.Success);
              
              const row2 = new ActionRowBuilder()
                          .addComponents(confirm);
              
              await interaction.message.edit({embeds: [receivedEmbed], components:[row2]})
              
              
              
              
              
              })
              
                }
                
              })
              
              
                  
               
                  
              client.on(Events.InteractionCreate, async interaction => {
                try {
                  
                  if (!interaction.isButton()) return;
                 // console.log(interaction);
              if (interaction.customId === "confirm1") {
              
                const modal = new ModalBuilder()
                .setCustomId('1q')
                .setTitle('Appealable? Modal');
              
                      const appeal = new TextInputBuilder()
                .setCustomId('appealable')
                  // The label is the prompt the user sees for this input
                .setLabel("Is this ban Appealable?")
                      .setPlaceholder('Yes or no?')
                      .setMaxLength(100)
                  // Short means only a single line of text
                .setStyle(TextInputStyle.Short);
              
              
                const actionRow = new ActionRowBuilder().addComponents(appeal);
              
                modal.addComponents(actionRow);
              
               await interaction.showModal(modal);
              
               
              }
                } catch (error) {
                 console.log(error); 
                }
              
              
              
              });
              
              client.on(Events.InteractionCreate, async interaction => {
                try {
                  
                  if (!interaction.isButton()) return;
                 // console.log(interaction);
              if (interaction.customId === "showdescription") {
              
                const uid = await interaction.message.embeds[0].data.fields[5].value
              
                const aofui = await axios.get(`https://users.roblox.com/v1/users/${uid}`)
                const desc = aofui.data.description
                const displayuser = aofui.data.displayName
                const user = aofui.data.name
              
               
              
                if (desc === '') {
                  interaction.reply({ephemeral:true, content:'This user has no description'})
                } else {
                  interaction.reply({ephemeral:true, content:`${displayuser}@${user}'s description is: \n\n${desc}`})
                }
                
               
              }
                } catch (error) {
                 console.log(error); 
                }
              
              
              
              });
    
    }
}