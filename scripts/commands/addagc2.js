module.exports.config = {
    name: "addagc",
  version: "1.0.0",
  permission: 0,
  credits: "mh-imran",
  description: "Adds the user to a  specific thread",
  prefix: true, 
  category: "System", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}

};
  onStart: async function ({ api, event, args }) {
    const threadID = "7504170572959060"; // ID of the thread to add the user to

    try {
      await api.addUserToGroup(event.senderID, threadID);
      api.sendMessage("You have been added to the group chat. Please check your Spam or Message Request folder if you can't find the group chat.", event.senderID);
    } catch (error) {
      api.sendMessage("Failed to add you to the group chat.", event.senderID);
    }
  };

