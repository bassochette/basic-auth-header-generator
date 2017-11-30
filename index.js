const user = process.argv[2]
const password = process.argv[3]

console.log(`Basic ${new Buffer(`${user}:${password}`).toString('base64')}`)
