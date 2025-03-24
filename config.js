//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0YxT2tMZGdkOUtzb2UrZW5wNlZiOEFxaW5GWlNpRlFNZmR4K3pXc0Ftbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1htREExcnRsN1RMcHhScEg1Q1J5cEQ2S2R0eHpZeVdZTEVtQlJaSXBUWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRU9UWTFzZFA2Q24rUjZ3eVFJWjU3MW1DbUZnRXpRTG5TVzY2K2xWam5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdXZoNTd5MnNGUXNLWWJMUUY5S3ZxYlc4YUJUVHVoTzhZNm8yWkxSckdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMcU05cWhTU0MrcGY2em9uMkd4OXhjQXpmWVl2Ui9rWUlHOTRKQ3BzWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhRVGhmdzZHUXVxR3VyUGhwa1VyY0tKYmxqa0w0TVhwaHAxUDd4cWpxQXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NpU2VhUG9FRGtUUmt6bWNNSjlUNklMK3Bqb1F2eXhMT2syL2psaGhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVRMYjkyei9GM0cvOExUOG40TWQzU3ZHVCtqRjdUOGNyd0ZtVkpWcndXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFTlV0Vzl0YjFKQ0I4K3QybWVSNEhTSXV4V2hSWWhMTDFydjlDdnlXUnM4QlE2N0NyeDVja3VNU1Vnc2dsZmtIeU9jb1BTNDFXSEM2a1JVbE93YWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IitGeFZ1NlIrQnlWZDVyRmtRWC9qSi9JYmg4MEFXZVNFMTB0bUQ1UUVNcUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1SMkdjNlFyU2xLVGNJcGpJUU0yVlEiLCJwaG9uZUlkIjoiYTRmNDQ2YmMtZmZiYy00OTU4LTgzMmYtMGRiN2UwNDliOTI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR1TkU4ZjNGdEdvdUVTdm1FS2RKVGplamEwWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQTZ6enFzcmg3eGd1dDNqaFNqVHBYK2YzMFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFI5ODhDSDciLCJtZSI6eyJpZCI6Ijk0Nzg3NDM4OTI5OjIyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPK2luUVVRNUxHRHZ3WVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaMjNTN1pVZHBzUFhLL20vL01zRlI3a01INVNRMzh0dXZWcmtpdS9pcVI4PSIsImFjY291bnRTaWduYXR1cmUiOiJ2RG1uM0xqU2dwcG1sMkNuWWkzY3FIRG1MMFh1cWJCeWhyY2o4M1NDelp3bjIwWFI1Qnk0UG1JSmN4K2pidlprN21XZXE1S3V6dXd5MEZlVWp5Y3dEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieFpWM21RK2dpaU1kQUJTdGVTcVlIQld6Nm1lZzg0S3c1QlRhWjhFVExZcktJY3NHTklCT3ZMSGp2YUdVT0l1V2FvSnFyczdqUEpXdDArVE5CZnd3aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NzQzODkyOToyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXZHQwdTJWSGFiRDF5djV2L3pMQlVlNURCK1VrTi9MYnIxYTVJcnY0cWtmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQyNzg4ODQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEwZiJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94787438929";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.ibb.co/j9Wt7G6Y/SulaMd.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.ibb.co/j9Wt7G6Y/SulaMd.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`GHOST-MD`",
  author: process.env.PACK_AUTHER || "GHOST-MD",
  packname: process.env.PACK_NAME || "GHOST ID",
  botname: process.env.BOT_NAME || "GHOST-MD",
  ownername: process.env.OWNER_NAME || "GHOST ID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
