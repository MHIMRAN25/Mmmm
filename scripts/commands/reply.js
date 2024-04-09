const fs = require("fs");
module.exports.config = {
    name: "sad",
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
	if(react.includes("i love you") ||
     react.includes("love") || 
react.includes("hi") || react.includes("ईद मुबारक") || react.includes("이드 무바라크") || react.includes("عيد مبارك") ||
react.includes("hlw") ||
react.includes("ঈদ মোবারক") || react.includes("Īda mōbāraka") || react.includes("🫡") ||
react.includes("মোবারক") ||
react.includes("ঈদ") ||
react.includes("ইদ") ||
react.includes("Eid") ||  
react.includes("eid Mobarak") ||
react.includes("🥰")) {
		var msg = {
				body: "- অগ্রিম ঈদ মোবারক🌜🤗!!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

               }
