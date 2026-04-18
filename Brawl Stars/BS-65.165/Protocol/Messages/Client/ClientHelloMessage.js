const PiranhaMessage = require('../../PiranhaMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 1
  }

  async decode () {}

  async process () {
    await new ServerHelloMessage(this.client).send()
  }
}

module.exports = ClientHelloMessage