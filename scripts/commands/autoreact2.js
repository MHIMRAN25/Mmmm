const fs = require("fs");
module.exports.config = {
    name: "autoreactv2",
  version: "1.0.0",
  permission: 0,
  credits: "John Lester",
  description: "No Prefix",
  prefix: true, 
  category: "no prefix", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase()
	if (event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("असलमु अलैकुम")==0 || event.body.indexOf("Asslamu alaikum")==0 || event.body.indexOf("السلام عليكم ")==0 || event.body.indexOf("아살라무 알라이쿰")==0 || event.body.indexOf("আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি")==0 || event.body.indexOf("সালামের উত্তর")==0 || event.body.indexOf("アッサラーム・アライクム")==0 || event.body.indexOf("阿萨拉穆·阿拉库姆")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "وعليكم السلام و الرحمة وبركاته🥰"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("السلامعليكم")==0 || event.body.indexOf("assalamualaikum")==0 || event.body.indexOf("assalamulaikum")==0 || event.body.indexOf("আসসালামুআলাইকুম")==0 || event.body.indexOf("असलमुअलैकुम")==0 || event.body.indexOf("아살라무알라이쿰")==0 || event.body.indexOf("阿萨拉穆阿拉库姆")==0 ||   event.body.indexOf("ভুল সালাম দিলে কি হয়")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "❌ One word wrong means change of meaning. So please give salam correctly➡️ السَّلَامُ عَلَيْكُمْ وَرَحْمٰةُ اللهِ وَبَرَكَاته✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("tahole salam kivabe dite hoy")==0 || event.body.indexOf("tui salam de to")==0 || event.body.indexOf("তাহলে সালাম কিভাবে দেয়")==0 || event.body.indexOf("তুই সালাম দে তো")==0 &&
!bot.includes(event.senderID))  {var msg = {
    body: "Arabic- السلام عليكم و الرحمة✅"
    body: "বাংলা - আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি✅"
    body:"English - assalamu alaikum wa Rahmatullah✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		};
if (event.body.indexOf("وعليكمالسلام ")==0 || event.body.indexOf("وعليكم")==0 || event.body.indexOf("আলাইকুম সালাম")==0 || event.body.indexOf("ওয়ালাইকুমুসসালাম")==0 || event.body.indexOf("ওয়ালাইকুম সালাম")==0 || event.body.indexOf("ওয়ালাইকুম সালাম")==0 || event.body.indexOf("ওয়ালাইকুমসালাম")==0 || event.body.indexOf("walaikumussalam")==0 || event.body.indexOf("walaikumsalam")==0 || event.body.indexOf("walaikumu salam")==0 || event.body.indexOf("walaykum salam")==0 || event.body.indexOf("hay")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "❌ One word wrong means change of meaning. So please give salam correctly➡️وعَلَيْكُمُ السَّلَامْ وَرَحْمٰةُ اللهِ وَبَرَكَاتُه✅"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true)
		};
if(event.body.indexOf("bts biot")==0 || event.body.indexOf("bts")==0 || event.body.indexOf("BTS")==0 || event.body.indexOf("Bts")==0 || 
!bot.includes(event.senderID))  {
  var msg = { 		
       body: " ঐ তুই ব@ল পাকনা পিচ্চি না!🤣"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		};

	if (event.body.indexOf("bobo")==0 || event.body.indexOf("Bobo")==0 || event.body.indexOf("gago")==0 || event.body.indexOf("Gago")==0 || event.body.indexOf("suntukan")==0 || event.body.indexOf("kantutin")==0 || event.body.indexOf("hayop")==0 || event.body.indexOf("kantutin")==0 || event.body.indexOf("Hayop")==0 || event.body.indexOf("hindot")==0 || event.body.indexOf("Hayup")==0 || event.body.indexOf("hayup")==0 || event.body.indexOf("tangina")==0 || event.body.indexOf("Tangina")==0 || event.body.indexOf("tang ina")==0 || event.body.indexOf("Tang ina")==0 || event.body.indexOf("bwesit")==0 || event.body.indexOf("Bwesit")==0 || event.body.indexOf("Piste")==0 || event.body.indexOf("piste")==0 || event.body.indexOf("argh")==0 || event.body.indexOf("pota")==0 || event.body.indexOf("Pota")==0 || event.body.indexOf("puta")==0 || event.body.indexOf("fuckyou")==0 || event.body.indexOf("pakyu")==0 || event.body.indexOf("pakyo")==0 || event.body.indexOf("may bold")==0 || event.body.indexOf("kingina")==0 || event.body.indexOf("Kingina")==0 || event.body.indexOf("King ina")==0 || event.body.indexOf("HAHAHA")==0 || event.body.indexOf("May bold")==0 || event.body.indexOf("baliw")==0 || event.body.indexOf("bubu")==0 || event.body.indexOf("mabaho")==0 || event.body.indexOf("Mabaho")==0 || event.body.indexOf("manyakis")==0 || event.body.indexOf("manyakol")==0 ||event.body.indexOf("ambobo")==0 || event.body.indexOf("walang utak")==0 || event.body.indexOf("Walang utak")==0 || event.body.indexOf("send bold")==0 || event.body.indexOf("Send bold")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("😂")==0 || event.body.indexOf("🤣")==0 || 
event.body.indexOf("bold ni")==0 || event.body.indexOf("Bold ni")==0 || event.body.indexOf("may bold si")==0 || event.body.indexOf("May bold si")==0 || event.body.indexOf("deputa")==0 || event.body.indexOf("Deputa")==0 || event.body.indexOf("hahaha")==0 || event.body.indexOf("amp")==0 || event.body.indexOf("Amp")==0 || event.body.indexOf("tanga")==0 || event.body.indexOf("Tanga")==0 || event.body.indexOf("bastos")==0 || event.body.indexOf("Bastos")==0 || event.body.indexOf("Punyeta")==0 || event.body.indexOf("punyeta")==0 || event.body.indexOf("Hahaha")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
