const os = require('os')

// To obtain the user info using os module
const user = os.userInfo()
console.log(user)

// To obtain the system uptime using os module which is in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)