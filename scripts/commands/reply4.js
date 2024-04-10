const fs = require("fs");
module.exports.config = {
  name: "salam2",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "kawsar", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(
react.includes("salam kemne ney") ||
react.includes("salamer uttor") || react.includes("السلامعليكم") || react.includes("assalamualaykum") ||
react.includes("assalamulaikum") ||
react.includes("আসসালামুআলাইকুম") ||
react.includes("असलमुअलैकुम") ||
react.includes("아살라무알라이쿰") ||  
react.includes("阿萨拉穆阿拉库姆") ||
react.includes("ভুল সালাম দিলে কি হয়")) {
		var msg = {
				body: "~ ❌ One word wrong means change of meaning. So please give salam correctly➡️ السَّلَامُ عَلَيْكُمْ وَرَحْمٰةُ اللهِ وَبَرَكَاته✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

               }

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
if (react.includes("tahole salam kivabe dite hoy") ||
     react.includes("তাহলে সালাম কিভাবে দেয়") || 
react.includes("তুই সালাম দে তো") || react.includes("tui salam de to") || react.includes("salam kaiche deti he") || react.includes("salam kemne dey")) {
		var msg = {
				body: "~ ❌ One word wrong means change of meaning. So please give salam correctly➡️Arabic- السلام عليكم و الرحمة✅ ا"
     body: ❌ One word wrong means change of meaning. So please give salam correctly➡️বাংলা - আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি✅"
    body:body:"English - assalamu alaikum wa Rahmatullah✅
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

               }
