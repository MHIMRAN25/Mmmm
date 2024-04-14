
module.exports.config = {
    name: "supportg",
  version: "1.0.0",
  permission: 0,
  credits: "Loid Butter",
  description: " en: Add user to support group",
  prefix: true, 
  category: "support", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	},
 guide: {
      en: "╔════ஜ۩۞۩ஜ═══╗\n\nTo use this command, simply type adda.\n\n╚════ஜ۩۞۩ஜ═══╝",
    },

  // onStart is a function that will be executed when the command is executed
  onStart: async function ({ api, args, message, event }) {
    const supportgroupId = "7504170572959060"; // ID of the adda group

    const threadID = event.threadID;
    const userID = event.senderID;

    // Check if the user is already in the our adda group
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      // User is already in the our adda group
      api.sendMessage(
        "╔════ஜ۩۞۩ஜ═══╗\n\nYou are already in the support group. If you didn't find it, please check your message requests or spam box.\n\n╚════ஜ۩۞۩ஜ═══╝",
        threadID
      );
    } else {
      // Add user to the support group
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("╔════ஜ۩۞۩ஜ═══╗\n\nFailed to add user to support group:\n\n╚════ஜ۩۞۩ஜ═══╝", err);
          api.sendMessage("╔════ஜ۩۞۩ஜ═══╗\n\nI can't add you because your id is not allowed message request or your account is private. please add me then try again...\n\n╚════ஜ۩۞۩ஜ═══╝", threadID);
        } else {
          api.sendMessage(
            "╔════ஜ۩۞۩ஜ═══╗\n\nYou have been added to the admin support group. If you didn't find the box in your inbox, please check your message requests or spam box.\n\n╚════ஜ۩۞۩ஜ═══╝",
            threadID
          );
        }
      });
    }
  },
};
