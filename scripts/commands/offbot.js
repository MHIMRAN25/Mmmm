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

   const permission = ["100069871358798","100016391528397","100064518163993"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Xin cái tuổi để off?", event.threadID, event.messageID);

api.sendMessage("Bye! hẹn gặp lại các bạn🐸",event.threadID, () =>process.exit(0))}