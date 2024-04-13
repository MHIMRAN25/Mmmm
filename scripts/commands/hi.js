const fs = require("fs");
module.exports.config = {
    name: "i",
  version: "1.0.0",
  permission: 0,
  credits: "mh imran",
  description: "hihihi",
  prefix: true, 
  category: "no prefix", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (
react.includes(" kala tor admin") ||
react.includes("MH.IMRAN") || 
react.includes("kala tor malik ke") || 
react.includes("mh imran") ||
) {
		var msg = {
				body: "এটা হলো আমার বসের ফেসবুক আইডি🙂https://www.facebook.com/profile.php?id=61556202264295",
				attachment: fs.createReadStream(__dirname + `/cache/Screenshot_20240208_105509.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
