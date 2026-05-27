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

    bot.on('login', () => {
        console.log('Bot serverga daxshat bolib kirdi!')
    })

    bot.on('error', (err) => {
        console.log('Xato bor:', err.message)
    })

    bot.on('end', () => {
        console.log('Qayta urinyapti (5sek)...')
        setTimeout(createBot, 5000)
    })
}
createBot()