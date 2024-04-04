module.exports.config = {
    name: "birthday",
  version: "1.0.0",
  permission: 0,
  credits: "Mirai",
  description: "Countdown to birthday",
  prefix: true, 
  category: "Tiện ích", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
module.exports.run = function ({ event, api }) {
    const t = Date.parse(" March 28, 2025 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🎂🎉 The remaining time until admin's birthday is: 🎂🍷\n»${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây«`, event.threadID, event.messageID);
}
