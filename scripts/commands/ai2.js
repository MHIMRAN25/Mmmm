const axios = require('axios');
module.exports.config = {
    name: "ai2",
  version: "1.0.0",
  permission: 0,
  credits: "mh-imran",
  description: "Ask anything",
  prefix: true, 
  category: "ai", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	},
}{

  onStart: async function ({ message, args, api, event }) {
    const { messageID, threadID } = event;
    const response = args.join(" ");
    if (!response) return api.sendMessage("How may I help you?", threadID, messageID);
    try {
      const res = await axios.get(`https://sim.ainz-project.repl.co/others/gpt?prompt=${response}`);
      const respond = res.data.result;
      api.sendMessage(respond, threadID, messageID);
    } catch (error) {
      api.sendMessage("An error occurred while making the API request.", threadID, messageID);
    }
  }
};
