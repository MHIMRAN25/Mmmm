const fs = require("fs");

module.exports.config = {
    name: "sara",
  version: "1.0.0",
  permission: 0,
  credits: "MH-IMRAN",
  description: "hihihi",
  prefix: true, 
  category: "no prefix", 
  usages: "[tag]",
  cooldowns: 5,
  dependencies: {
	}
};
module.exports.config = {

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sara")==0 || event.body.indexOf("সারা")==0 || event.body.indexOf("chara")==0 || event.body.indexOf("@Sa Ra")==0) {
		var msg = {
				body: "

  ✿.....✿.....✿......✿.....✿....✿

˜”°•✩•°”˜ 𝙳𝙴𝙰𝚁 𝙾𝙸𝚂𝙷𝙴 ˜”°•✩•°”˜

 ✿.....✿.....✿......✿.....✿....✿

 ❝সুন্দরতম জীবন হোক আপনার❠

 ☬⟪পূরন হোক প্রতিটি স্বপ্ন⟫☬

  💫 বেঁচে থাকেন হাজার বছর💫❀

❀সুন্দর হোক আপনার জীবনের❀❀

 ☬⟪প্রতিটি পথ  চলা এটা দিয়ে দিবো⟫☬
		
❀🎂❀𝙃𝙖𝙥𝙥𝙮 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮 𝙩𝙤 𝙮𝙤𝙪❀🎂❀	
 ꧁💣༺🥳 @Sa Ra 🥳༻💣꧂",
                  
 ];
var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions)",
				attachment: fs.createReadStream(__dirname + `/cache/`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
