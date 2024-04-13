const axios = require("axios");
module.exports.config = {
    name: "sim2",
  version: "1.0.0",
  permission: 0,
  credits: "mh-imran",
  description: "Simsimi ChatBot by Simsimi.fun",
  prefix: true, 
  category: "sim", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	},
guide: {
			en: '   {pn} <word>: chat with simsimi'
				+ '\n   Example:{pn} hi'
		},

langs: {
		en: {
			chatting: 'Already Chatting with sim...',
			error: 'What?'
		}
	},

	onStart: async function ({ args, message, event, getLang }) {
		if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				console.log(err)
				return message.reply(getLang("error"));
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
		if (!isUserCallCommand) {
			return;
		}
		if (args.length > 1) {
			try {
				const langCode = await threadsData.get(event.threadID, "settings.lang") || global.GoatBot.config.language;
				const responseMessage = await getMessage(args.join(" "), langCode);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}
		}
	}
};
	if (event.type == "message_reply") {
                uid = event.messageReply.senderID
                return api.removeUserFromGroup(uid, event.threadID)
            } else {
                if (!args[0]) return api.sendMessage(`Vui lòng tag hoặc reply người cần kick`, event.threadID, event.messageID)
                else {
                    if (args[0] == "all") {
                        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
                        for (let idUser in listUserID) {
                            setTimeout(() => {
                                return api.removeUserFromGroup(idUser, event.threadID)
                            }, 1000)
                        }
                    }
                }
            }
        }
    } catch {
        return api.sendMessage('ccc', event.threadID, event.messageID);
    }
			    

async function getMessage(yourMessage, langCode) {
	try {
		const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=en&message=${yourMessage}&filter=true`);
		if (!res.data.success) {
			throw new Error('API returned a non-successful message');
		}
		return res.data.success;
	} catch (err) {
		console.error('Error while getting a message:', err);
		throw err;
	}
}

