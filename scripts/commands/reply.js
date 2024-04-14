const fs = require("fs");
module.exports.config = {
    name: "sad",
  version: "1.0.0",
  permission: 0,
  credits: "mh-imran",
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
	if(react.includes("ঈদুল ফিতর") ||
     react.includes("eid") || 
react.includes("happy") || react.includes("ईद मुबारक") || react.includes("이드 무바라크") || react.includes("عيد مبارك") ||
react.includes("hlw") ||
react.includes("ঈদ মোবারক") || react.includes("Īda mōbāraka") || react.includes("🫡") ||
react.includes("মোবারক") ||
react.includes("ঈদ") ||
react.includes("ইদ") ||
react.includes("Eid") ||  
react.includes("eid Mobarak") ||
react.includes("🌜")) {
		var msg = {
				body: "~ ঈদ মোবারক🌜🤗!!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌜", event.messageID, (err) => {}, true)
		}
if(react.includes("wish") || react.includes("birthday") || react.includes("birthday")) {
		var msg = {
				body: "-🎂🌼HAPPY BIRTHDAY TO YOU🌼🎂-"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌼", event.messageID, (err) => {}, true)
}
if(react.includes("السلام عليكم") || 
react.includes("السلام") || react.includes("असलमु अलैकुम") || react.includes("assalamu") || react.includes("assalamu alaikum") ||
react.includes("সালামের উত্তর") ||  
react.includes("アッサラーム・アライクム") ||
react.includes("阿萨拉穆·阿拉库姆")) {
		var msg = {
				body: "~ وعليكم السلام و الرحمة وبركاته🥰!!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	if(react.includes("salamer uttor") || react.includes("السلامعليكم") || react.includes("assalamualaykum") ||
react.includes("assalamulaikum") ||
react.includes("আসসালামুআলাইকুম") ||
react.includes("असलमुअलैकुम") ||
react.includes("아살라무알라이쿰") ||  
react.includes("阿萨拉穆阿拉库姆") ||
react.includes("ওয়ালাইকুম সালাম") ||
react.includes("ওয়ালাইকুমুসসালাম")||
react.includes("ওয়ালাইকুমআসসালাম")||
react.includes("ওয়ালাইকুম আসসালাম") ||
react.includes("walaikumusalam")||
react.includes("ailaikum assalam")||
 react.includes("walaikum assalm")||
react.includes("ভুল সালাম দিলে কি হয়")) {
		var msg = {
				body: "~ ❌একটি হরফ ভুল পড়ার কারণে শব্দের সাথে সাথে অর্থের ও পরিবর্তন ঘটে,তাই দয়া করে সঠিক ভাবে সালাম নেন এবং দেন। সালাম➡السَّلَامُ عَلَيْكُمْ وَرَحْمٰةُ اللهِ وَبَرَكَاته✅। সালামের উত্তর ➡️~ وعليكم السلام و الرحمة وبركاته ✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true)
		}
if(react.includes("তুই সালাম দে তো") || react.includes("tui salam de to") || react.includes("salam kaiche deti he") || react.includes("salam kemne dey")) {
		var msg = {
				body: "❌ One word wrong means change of meaning. So please give salam correctly➡️Arabic- السلام عليكم و الرحمة✅ ا➡️বাংলা - আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি✅➡️English ল- assalamu alaikum wa Rahmatullah✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true)
		}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

               };

	
