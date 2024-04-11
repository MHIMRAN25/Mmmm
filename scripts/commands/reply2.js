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
	if(react.includes("wish") || react.includes("birthday") || react.includes("birthday")) {
		var msg = {
				body: "-🎂🌼HAPPY BIRTHDAY TO YOU🌼🎂-"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
