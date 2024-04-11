module.exports.config = {
    name: "onbot",
  version: "1.0.0",
  permission: 0,
  credits: "HTHB",
  description: "Bật Bot",
  prefix: true, 
  category: "adminbot", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = ({event, api}) =>api.sendMessage("এসে পারেছি সালাম দাও তারাতাড়ি",event.threadID, () =>process.enter(0))
