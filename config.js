const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"0NVZaU4O00Vpq8nRkyLpwSfc0qCrfpC4l6AxIBtlfG0="},"public":{"type":"Buffer","data":"Z90WvtGXCV6hwK9YZn7QS8xNbhcI1hnG+sDUu2ARUFw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sAfm8GhC1wwmaTPh5YBevWWggNlEHOnBT1wQTE0HPnM="},"public":{"type":"Buffer","data":"cDSQoG5OQjnMj6id/zrxvYHwOUyux4eNrhH+Q6VTTkk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QA4+sjDcZwEpPej6+hsmsCpJ80kB9Wmoqtf8S18xSVE="},"public":{"type":"Buffer","data":"LA+Wv704OMQF2xJKgJ6mzq4jd+qyhVBr4yHMnn0krGQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8LYSDdYzJPQSPO7p27ZmAdxJDoA3W3kpIIMC81h723E="},"public":{"type":"Buffer","data":"EKdgdNH8ddnnS6o4cHcYlDBJNKGHHGjii0cn+cVTikw="}},"signature":{"type":"Buffer","data":"QKCIRlY+i8U0YCyrr+8bs9a12t4NlaRGRYZLPN8uhRTq5afO5RzVT9mgclgW27hN9QZvrm2ZASYIbrf54Rx+BA=="},"keyId":1},"registrationId":181,"advSecretKey":"j1JGjwGGn+eUJibGUydilQQXKEi7o54CZVtvIV7uau8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"oXGBYQktTQaHNoXNTep5wQ","phoneId":"d8fa21f2-b417-43c2-964e-02ce0ea5cd25","identityId":{"type":"Buffer","data":"JfEOFviQbWIdYvzt4CmOOsTrzmo="},"registered":true,"backupToken":{"type":"Buffer","data":"TQyK+D+C6y7P+bYgcfyuzP4fWC8="},"registration":{},"pairingCode":"J8X38G1B","me":{"id":"254798515052:11@s.whatsapp.net","name":"~Prince rocky wry ,¿¿??"},"account":{"details":"CPiJqdgHEL79mrQGGB4gACgA","accountSignatureKey":"vrzJsz265pn3akRRjOh1E0epBA6TqxIzSAZ7jqumrQ8=","accountSignature":"Xa1i9GVlVym29R7kVWPWr7dRdanOh5D9lc6pEWubSWO7XoqIUvqsbYURXgsNN025s9JmNzz8e8cZk1h7tTA4BQ==","deviceSignature":"dLtqYqGHAr181T3EDQ1HlQr00+vtG4Z/AGUG0+r++e1CNUJ0QhWMF9r5EKzyMXycNVnxRILcs6+hk0BNAQxJAQ=="},"signalIdentities":[{"identifier":{"name":"254798515052:11@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb68ybM9uuaZ92pEUYzodRNHqQQOk6sSM0gGe46rpq0P"}}],"platform":"smba","lastAccountSyncTimestamp":1720106699,"myAppStateKeyId":"AAAAAA9/"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
