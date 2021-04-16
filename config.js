const ownerNumber = ["50498798682@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '50498798682' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Bienvenido usuario ${numero}\n\nEscribe ${prefix}menu para ver la lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adios puto o puta ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Hola ${numero}\n\nNo hagas spam EDAR-BOT`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'api key do imgbb, crie sua conta e pegue a key'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '𝐁𝐑𝐈𝐙𝐀𝐒 𝐁𝐎𝐓\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Seu número esta bloqueado, ou seja não ouvindo você 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Eliminado*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu é adm ent n vou te banir por mandar um tipo de mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho com antiporn ativado, ja sabe né...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu é adm ent n vou te banir por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Eliminado...'
// mensagem de ban no antilink

const adminmsglink = 'Enlace detectado pero sos admin'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso esta na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Tubimos un problema con los servidores, intenta nuevamente'
// mensagem de erro

const notregister = `*Comando no registrado, escriba ${prefix}menu para ver la lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'zy soy lindo y muy guapo🌚🔥'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'ESCRIBE EL COMANDO !yamete , asi jemia tu hermana anoche'
const cadebot = '👉👈?'
const botfdp = 'Hola putita'
const botgostoso = 'Me gusta a tu hermana👉👈'
const botfofo = 'Y si hacemos un muñeco👉👈'
const botbaianor = '¡SABIAS QUÉ! La gente calva no tiene pelo'
const botcorno = 'Bete ala mierd jugador de free fire'
const botputa = 'Tu madre'
const botgay = '🐦Preguntale a tu hermana si soy gay🌚'
const botviado = '🐦pobre mongolito, quizá su tio abuza de él'
const numbotfeio = 'Ya te viste a un espejo?'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde un pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: 'Comando disponible solo para grupos',
        ownerG: 'Este Comando solo puede ser usado por el propietario del bot',
        ownerB: 'Este Comando solo puede ser usado por el propietario del bot',
        admin: 'Lo siento usuario, solo obedezco al admin',
        Badmin: 'Para proceder a los comandos, debo ser admin.'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=50498798682:+504 9879-8682\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
