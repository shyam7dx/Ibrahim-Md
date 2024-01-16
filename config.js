const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "starboy audio" ;  
global.video= "starboy video" ;
global.devs = "13304089487"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="shyam7dx@gmail.com"
global.location="Thiruvannamalai,Tamilnadu,India"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.pairing_code = "https://replit.com/shyam7dx/Starboy-Bot";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/shyam7dx/Ibrahim-Md";
global.gurl = process.env.GURL  || "wa.me/13304089487";
global.website =process.env.GURL|| "wa.me/13304089487" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/c28f8504a8d78d60373b5.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13304089487";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Starboy-Bot Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪʙʀᴀʜɪᴍ-ᴍᴅ ʙʏ ɪʙʀᴀʜɪᴍ 』```",

 
  author: process.env.PACK_AUTHER || "ɪʙʀᴀʜɪᴍ",
  packname: process.env.PACK_NAME || "⚡ɪʙʀᴀʜɪᴍ-ᴍᴅ🔥",
  botname : process.env.BOT_NAME  || "ɪʙʀᴀʜɪᴍ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ɪʙʀᴀʜɪᴍ",


  sessionName:process.env.SESSION_ID|| "",  // BRO IBBU PUT YOUR SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SHYAM",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
