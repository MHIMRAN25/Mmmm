module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Des Bủh - Dựa trên demo của manhIT", /* vui lòng k sửa credit :) */
	description: "Tắt Bot",
	commandCategory: "Admin",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{

   const permission = ["61556202264295"];
    if (!permission.includes(event.senderID)) return api.sendMessage("কোনো প্রকার ভুল করে থাকলে দূঃখীত", event.threadID, event.messageID);

api.sendMessage("Some problems cause temporary shutdown",event.threadID, () =>process.exit(0))}
