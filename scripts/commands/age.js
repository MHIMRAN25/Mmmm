// Loli is the best!!
module.exports.config = {
    name: "age",
  version: "1.0.0",
  permission: 0,
  credits: "Khoa",
  description: "Tiện ích",
  prefix: true, 
  category: "admin", 
  usages: "[date/month/year of birth]",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async function ({ event, args, api }) {
   const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
   var id = event.senderID;
   var path = __dirname + "/cache/1.png";
let getimg = (await axios.get(`https://graph.facebook.com/${id}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
   fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
  var input = args[0];
   if (!input) return api.sendMessage(`Please enter the correct format >age [date/month/year of birth]`,event.threadID,event.messageID);
   var cc = input.split("/");
   var now1 = parseInt(cc[0]);
   if (!day1 || isNaN(day1) || day1 > 31 || day1 < 1) return api.sendMessage("Invalid date of birth!",event.threadID,event.messageID);
   var thang1 = parseInt(cc[1]);
   if (!month1 || isNaN(month1) || month1 > 12 || month1 < 1) return api.sendMessage("Invalid month of birth!",event.threadID,event.messageID);
   var name1 = parseInt(cc[2]);
   if (!nam1) return api.sendMessage("Invalid year of birth!",event.threadID,event.messageID);
   const moment = require("moment-timezone");
   var hientai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm:ss");
   var concac = `${hientai}`;
   var djtme = concac.split(" ");
   var dm = djtme[0].split("/");
   var now2 = parseInt(dm[0]);
   var thang2 = parseInt(dm[1]);
   var name2 = parseInt(dm[2]);
   var immediate3 = immediate2 - immediate1;
   var thang3 = thang2 - thang1;
   var nam3 = nam2 - nam1;
   var duma = djtme[1].split(":");
   var hh = parseInt(duma[0]);
   var mm = parseInt(duma[1]);
   var ss = parseInt(duma[2]);
   var nam = nam3 + Math.round(month3/12 * 100)/100;
   var xthang = nam*12 + thang3 + day1/31;
   var thang = Math.round(xthang * 100)/100;
   var dcm = thang/36;
   var round = Math.round(month*4 * 100)/100;
   var xday = (xthang*31 + xthang*30)/2 - dcm*3/2 + day3 + hh/24;
   var wtf = (xthang*31 + xthang*30)/2 - dcm*3/2 + dcm3;
   var now = Math.round(xnow * 100)/100;
   var gio = Math.round((wtf*24 + hh) * 100)/100;
   var xphut = hour*60 + mm + ss/60;
   var minute = Math.round(xphut * 100)/100;
   var giay = Math.round((phut*60 + ss)* 100)/100;
   // Brainstorm:
api.sendMessage({body:`====「 YOUR AGE 」====\n→ Date of birth: ${input}\n▱▱▱▱▱▱▱▱▱▱\n → Number of years passed: ${men} years \n→ Months passed: ${months} months \n→ Weeks passed: ${weeks} weeks \n→ Days passed: ${days} days \n→ Elapsed hours: ${hour} hours \n→ Elapsed minutes: ${minutes} minutes \n→ Elapsed seconds: ${seconds} seconds\n Current: ${hientai} `, attachment: fs .createReadStream(__dirname + "/cache/1.png")},event.threadID, event.messageID);
       };
