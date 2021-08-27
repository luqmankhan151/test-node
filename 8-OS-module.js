const os = require('os')

//userInfo
const user = os.userInfo()
console.log(user)

// system Uptime in Seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()   
}

console.log(currentOS)