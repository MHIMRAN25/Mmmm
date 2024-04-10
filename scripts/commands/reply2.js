const fs = require("fs");
module.exports.config = {
    name: "wish",
  version: "1.0.0",
  permission: 0,
  credits: "John Lester",
  description: "Just Respond",
  prefix: true, 
  category: "Kawsar", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("hlw sara") || react.includes("hey sara") || 
react.includes("sara") || 
react.includes("Sara") ||
react.includes("SARA") ||
react.includes("সারা") ||
react.includes("ছাড়া") || 
react.includes("chara") || 
react.includes("cara") ||
react.includes("CHARA") ||        react.includes("tara") || 
react.includes("@Sa ra") ||
react.includes("@SA RA") ||
react.includes("সা রা") || 
react.includes("পচাঁপ্রতি") || 
react.includes("পানি চোরা রানু মন্ডল") ||
react.includes("miss sara") ||
react.includes("mrs.moon") ||
react.includes("sara") ||
react.includes("sara") || 
react.includes(" s a r a") ||
react.includes("Sara") ||
react.includes("sAra") ||
react.includes("saRa") ||
react.includes("wish") ||
react.includes("SaRa") || 
react.includes("happy birthday") ||
react.includes("Happy birthday sara") ||
react.includes("happy birthday sara") ||
react.includes("wish sara") ||
react.includes("wish sara") ||
react.includes("wishsara") || 
react.includes("wish chara") || 
react.includes("Wish") || 
react.includes("sala") || react.includes("tara") || react.includes("sara") || react.includes("mariyam")) {
		var msg = {
				body: "- 

✿~~🌼~✿~🌼~~✿~~🌼~~✿~~🌼~✿~🌼~~✿

  ˜°★✩★°˜ DEAR FD SARA ˜°★✩★°˜
  ❀🎂❀𝙃𝙖𝙥𝙥𝙮 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮 𝙩𝙤 𝙮𝙤𝙪❀🎂❀
✿~~🌼~✿~🌼~~✿~~🌼~~✿~~🌼~✿~🌼~~✿
-!🌼"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
