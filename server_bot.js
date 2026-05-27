const mineflayer = require('mineflayer')
const http = require('http')

// Hosting botni oʻchirib qoʻymasligi uchun kichik veb-server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Bot daxshat rejimda yoniq!')
})
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Veb-server ${PORT}-portda ishlamoqda`)
})

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SmileMcUz.aternos.me', 
        port: 12640,                  
        username: 'AFK_Bot_Uz'        
    })

    bot.on('login', () => {bot.on('chat', (username, message) => {
  // Server chatida login talab qiladigan xabarni kutamiz
  if (message.includes('login') || message.includes('register') || message.includes('Password')) {
    bot.chat('/login 098098'); //
  }
});
        console.log('Bot serverga daxshat bolib kirdi!')
    })

    bot.on('error', (err) => {
        console.log('Xato bor:', err.message)
    })

    bot.on('end', () => {
        console.log('Qayta urinyapti (15sek)...')
        setTimeout(createBot, 15000)
    })
}
createBot()
