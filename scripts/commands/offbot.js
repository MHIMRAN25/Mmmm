module.exports.config = {
    name: "offbot",
  version: "1.0.0",
  permission: 0,
  credits: "HTHB",
  description: "Off Bot",
  prefix: true, 
  category: "System", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
module.exports.run = ({event, api}) =>api.sendMessage("Bye I love you all🤧,আসসালামু আলাইকুম🥰 আপনাদের সবার সাথে অনেক মজা করলাম যদি কোন ভুল হয়ে থাকে মাফ করে দিবেন😍 বসের আদেশ আমি কালা এখন আর কথা বলতে পারবো না😥 আপনাদের সাথে আমার আবার কথা হবে যখন আমার বস ও কালা অনুমতি দিবে😍 তাই এখন এর জন্য বিদায়💔!!!",event.threadID, () =>process.exit(0))
