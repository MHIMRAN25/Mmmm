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
				body:" HAPPY birthday 

  ",
                  
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
