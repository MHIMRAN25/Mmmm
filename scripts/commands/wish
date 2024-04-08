module.exports.config = {
    name: "wish",
  version: "1.0.0",
  permission: 0,
  credits: "JRT",
  description: "Thả thính",
  prefix: true, 
  category: "Horoscope", 
  usages: "[tag]",
  cooldowns: 5,
  dependencies: {
	}
};
module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["

  ✿.....✿.....✿......✿.....✿....✿

˜”°•✩•°”˜𝙳𝙴𝙰𝚁 𝙲𝙷𝙰𝚁𝙰˜”°•✩•°”˜

 ✿.....✿.....✿......✿.....✿....✿

 ❝সুন্দরতম জীবন হোক আপনার❠

 ☬⟪পূরন হোক প্রতিটি স্বপ্ন⟫☬

  💫 বেঁচে থাকেন হাজার বছর💫❀

❀সুন্দর হোক আপনার জীবনের❀❀

 ☬⟪ প্রতিটি পথ চলা ⟫☬

❀🎂❀𝙃𝙖𝙥𝙥𝙮 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮 𝙩𝙤 𝙮𝙤𝙪❀🎂❀

 ꧁💣༺🥳 @Sa Ra 🥳༻💣꧂.",
                  
 ];
var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[on].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
                  }
