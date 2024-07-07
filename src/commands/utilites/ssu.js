const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

module.exports = {
    name: 'ssu',
    description: 'Use this command to begin the SSU process',
     // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
        {
            name: 'required-mods',
            description: 'Required amount of mods/admins.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        }
    ],
    deleted: false,
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.SendMessages],
    callback: async (client, interaction) => {
        rqmods = interaction.options.get('required-mods').value; 

        const row = new ActionRowBuilder();

        row.components.push(
             button1 = new ButtonBuilder().setCustomId("Yeah").setLabel("Yes").setStyle(ButtonStyle.Success),
             
            
        );
        const embed = new EmbedBuilder()
        .setTitle("Confirmation")
        .setDescription(`Is this correct? You need ${rqmods} Mods/Admins to start and the public SSU voting?\n\n If not just press **"Dismiss Message"**.`)
        .setColor(0x00FF00);

        const log = new EmbedBuilder()
        .setTitle("Audit Log")
        .setDescription(`${interaction.user} Has recieved the Confirmation to start an SSU`)
        .setColor(0xFF0000)
        .addFields({ name: 'Required Mods:', value: `${rqmods}`, inline: true });
        let channel = interaction.guild.channels.cache.get('1160230748545097789');
        await interaction.deferReply({ ephemeral: true });

        interaction.editReply({ embeds: [embed], components: [row]});

        channel.send({ embeds: [log] });

        const filter = (int) => int.user.id === int.user.id

var userids = [];
var userids = [];
var rqmods;
var randomElement;

client.on('interactionCreate', async (int) => {
    try {
        
    
        
        
        if (!int.isButton()) return;
        console.log(int.customId);
        
            

       
            let channel = int.guild.channels.cache.get('1160229979276185661');
            let logschannel = int.guild.channels.cache.get('1160230748545097789');
            //await int.deferReply();
           const Yeslog = new EmbedBuilder()
           .setTitle("Audit Log")
           .setDescription(`${int.user} Has started the Mod voting proccess for a SSU`)
           .setColor(0xFFFF00);
        
            const Nolog = new EmbedBuilder()
           .setTitle("Audit Log")
           .setDescription(`${int.user} Has canceled to start the Mod voting proccess for a SSU`)
            .setColor(0xFFFF00);

        
           

            
            const requestlog = new EmbedBuilder()
            .setTitle("SSU Request")
            .setDescription(`${int.user} Has requested to start a SSU has needs ${rqmods} mods/admins.\n\nAre there enough mods/admins?`)
            .setColor(0x00FF00);

           
        
            const requestacclog = new EmbedBuilder()
            .setTitle("Starting SSU")
            .setDescription(`${int.user}has achieved the ${rqmods} mods needed for a SSU\n\n A SSU will commence.`)
            .setColor(0xFFFF00);
            
           
            const row = new ActionRowBuilder();
        
            row.components.push(
            
                  
                  new ButtonBuilder().setCustomId("Yes").setEmoji("<:greenMark:1244593704040267797>").setLabel(`~ 0`).setStyle(ButtonStyle.Success),
                  
              )

             
              if (int.customId === 'Yeah') {
                    await int.deferReply({ ephemeral: true })

                await int.editReply("Success!");
            reqmsg = await channel.send({ embeds: [requestlog], components: [row], content:"<@&1198675362838741133>" });
               console.log(reqmsg.id);
               
               
                logschannel.send({ embeds: [Yeslog] });
                
                
              };

              
        
           
            } catch (error) {
                console.log(error)
            };
           
            var collector = reqmsg?.createMessageComponentCollector({ componentType: ComponentType.Button, filter });

           
                await collector?.on('collect', async (int) => {
                  
                    
                   
                        
                  
    
                   
                       
                    
                        
                       
                    //console.log(int.customId);      
                    
                 
                      if (int.customId === "Yes") {
                       
                        try {
                            
                            await int.deferReply({ ephemeral:true});
                
                       
                        // console.log(int);
                         if (!userids.includes(int.user.id)) {
                        
                       console.log(userids, userids.length);
                         userids.includes(int.user.id);
                         userids.push(`${int.user.id}`);
                         userids.includes(int.user.id);
                       console.log(userids, userids.length);
                        
                 
                         const button = new ButtonBuilder().setCustomId(`Yes`).setEmoji("<:greenMark:1244593704040267797>").setLabel(`~ ${userids.length}`).setStyle(ButtonStyle.Success);
                     
                     const row2s = new ActionRowBuilder().addComponents(button);
                       
                         
                        // console.log(row.components);
                         
                        await int.message.edit({
                             components: [row2s]
                         });
                        await int.editReply("Success!")
                 
                     } else  {
                        if (userids.includes(int.user.id)) {

                        
                       
                        console.log(userids, userids.length);
                         userids = userids.filter(e => e !== `${int.user.id}`);
                        console.log(userids, userids.length);
                         const button = new ButtonBuilder().setCustomId(`Yes`).setEmoji("<:greenMark:1244593704040267797>").setLabel(`~ ${userids.length}`).setStyle(ButtonStyle.Success);
                     
                         const row2s = new ActionRowBuilder().addComponents(button);

             
                        int.message.edit({
                             components: [row2s]
                         });
                        int.editReply({content: "Success!", ephemeral: true});
                    }
                        
                     };
                    } catch (error) {
                          console.log(error)  ;
                    };
                 };
                

                 if (rqmods <= userids.length) {
                    const players = [4,6,8];
                    const ssulog = new EmbedBuilder()
                    .setTitle("Audit Log")
                    .setDescription(`${int.user} Has achieved all mods/admins required to start the Public Voting for a SSU.`)
                    .setColor(0xFFFF00);
                    //const randomElement = players[Math.floor(Math.random() * players.length)];
                    randomElement = 8;
                    const ssumsg = new EmbedBuilder()
                    .setTitle("Server Startup")
                    .setDescription(`We need ${randomElement} players to start an SSU!
                    
                    Click the green checkmark to vote on the SSU`)
                    .setImage("https://cdn.discordapp.com/attachments/1160229979276185661/1247021992830566545/SSUV.png?ex=665e833b&is=665d31bb&hm=67ecabe92bffe0334330661456dfb758a6d8c525bbce1ecbbf5334f146d326e3&")
                    .setColor(0x00FF00);
                    const channel2 = int.guild.channels.cache.get('1160229979276185661');
                    int.message.delete();
                    
                    
                    let logschannel = int.guild.channels.cache.get('1160230748545097789');
                    let ssuchannel = int.guild.channels.cache.get('1159664296125546577');
                    
                    const infoembed = new EmbedBuilder()
  .setTitle("Los Angeles Server Start Up Information")
  .setDescription("# LARP | Server Start Up Info\n————————————————\n•  Server Startups Are Normally Scheduled within the following times.\n————————————————\n***Weekdays • <t:1717878600:t>  - <t:1717880400:t> ***\n***Weekends • <t:1717858800:t>  - <t:1717873200:t> ***\n————————————————\nPlease understand that there will not always be a server start up everyday.\n————————————————")
  .setImage("https://cdn.discordapp.com/attachments/1160328877617455255/1249064771962277928/SUPPORT.png?ex=6665f1b8&is=6664a038&hm=4208d25bb28d5d6032f52d2b970e5616e008f26fbaf48ecff270a4865f7a8629&");

                    logschannel.send({ embeds: [ssulog] });

                    const button = new ButtonBuilder().setCustomId(`Sure`).setEmoji("<:greenMark:1244593704040267797>").setLabel(`~ 0`).setStyle(ButtonStyle.Success);
                     
                     const row = new ActionRowBuilder().addComponents(button);

                     ssuchannel.bulkDelete(100);
                        console.log("success");
                        int.editReply('Success!');
                         ssuchannel.send({ embeds: [infoembed] });
                         votingmsg = await ssuchannel.send({  embeds: [ssumsg], components: [row] });
                         var collector2 = votingmsg.createMessageComponentCollector({ componentType: ComponentType.Button, filter });
             
             
             
                       

                     userids = [];

                    

                   // Public SSU Voting collector
                 

                };

                collector2?.on('collect', async (int) => {
                    if (int.customId === "Sure") {
                        try {
                            
                           
                       await int.deferReply({ ephemeral:true });
                    if (!userids.includes(int.user.id)) {
                   
                         console.log(userids, userids.length);
                          userids.includes(int.user.id);
                          userids.push(`${int.user.id}`);
                          userids.includes(int.user.id);
                      console.log(userids, userids.length);
                         
                  
                          const button = new ButtonBuilder().setCustomId(`Sure`).setEmoji("<:greenMark:1244593704040267797>").setLabel(`~ ${rqmods}`).setStyle(ButtonStyle.Success);
                      
                      const row2s = new ActionRowBuilder().addComponents(button);
                        
                          
                         //console.log(row.components);
                          
                         if (int.message) {
                            await int.message.edit({
                                components: [row2s]
                            });
                        };
                          int.editReply("Success!");
                  
                      } else if (userids.includes(int.user.id)) {
                        
                         console.log(userids, userids.length);
                          userids = userids.filter(e => e !== `${int.user.id}`);
                         console.log(userids, userids.length);
                          const button = new ButtonBuilder().setCustomId(`Sure`).setEmoji("<:greenMark:1244593704040267797>").setLabel(`~ ${userids.length}`).setStyle(ButtonStyle.Success);
                      
                          const row2s = new ActionRowBuilder().addComponents(button);
 
                        if (int.message) {
                            await int.message.edit({
                                components: [row2s]
                            });
                        };
                          
                          int.editReply("Success!");
                         
                      };

                    

                      if (1 <= userids.length) {
                        int.message.delete();
                        let ssuchannel = int.guild.channels.cache.get('1159664296125546577');
    
                        const logssu = new EmbedBuilder()
                        .setTitle("Audit Log")
                        .setDescription(`${int.user} has achieved all players and mods needed for an SSU`)
                        .setImage("https://cdn.discordapp.com/attachments/1244381210390564967/1250218149215993938/SUPPORT.png?ex=666d6fa2&is=666c1e22&hm=44a85034149cc19f25197cdd828f35d4ecaf2d90dac1995f2bcc84007b689ced&")
                        .setColor("#0ff000")
                        .setTimestamp();
                        let logschannel = interaction.guild.channels.cache.get('1160230748545097789');
                        logschannel.send({embeds: [logssu]})

                        const stringFormation = (a, b, c) => {
                            return a + b + c;
                        };
        
                       
                        
                        
                        
                        userids.forEach((element) => {const mentions = (stringFormation("<@",`${element}`,">"))
                    
                    
                        console.log(
                            mentions
                        );
                        
                        ssuchannel.send({content: `${mentions}`})
                     
        
                    });

                    const embed = new EmbedBuilder()
  
  .setTitle("Server Startup!")
  .addFields(
    {
      name: "A SSU is happening right now!",
      value: "Join by press the \"Quick Join\" button",
      inline: true
    },
  )
  .setImage("https://cdn.discordapp.com/attachments/1160229979276185661/1247021994218750116/SSU.png?ex=665e833b&is=665d31bb&hm=9d950c2dc9e9ab948ff9aa89e63577c58e555c9d0cc44ece4907c1df39838be7&")
  .setColor("#00ff00");

  const quickjoin = new ButtonBuilder()
  .setLabel('Quick Join')
  .setStyle(ButtonStyle.Link)
  .setURL('https://policeroleplay.community/join/AvUKD');

  const row = new ActionRowBuilder()
			.addComponents(quickjoin );

await ssuchannel.send({ embeds: [embed],  components: [row], content: '<@&1160356965550141511>' });
                    
                    userids = [];
    
                        
                       
    
                    };
               
                    } catch (error) {
                            console.log(error)
                    };
                    };
                    
                });
                
             
                
           
                
               
            
            
        
                });
            });
        
            
            
        }

    
}