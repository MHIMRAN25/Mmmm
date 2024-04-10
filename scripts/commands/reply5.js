const fs = require("fs");
module.exports.config = {
    name: "salam3",
  version: "1.0.1",
  permission: 2,
  credits: "John Lester",
  description: "No Prefix",
  prefix: true, 
  category: "no prefix", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
if (react.includes("tahole salam kivabe dite hoy") ||
     react.includes("তাহলে সালাম কিভাবে দেয়") || 
react.includes("তুই সালাম দে তো") || react.includes("tui salam de to") || react.includes("salam kaiche deti he") || react.includes("salam kemne dey")) {
		var msg = {
				body: "❌ One word wrong means change of meaning. So please give salam correctly➡️Arabic- السلام عليكم و الرحمة✅ ا➡️বাংলা - আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি✅➡️English ল- assalamu alaikum wa Rahmatullah✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

               }
