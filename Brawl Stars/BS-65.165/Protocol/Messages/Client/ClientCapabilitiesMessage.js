const PiranhaMessage = require('../../PiranhaMessage')

class ClientCapabilitiesMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10107
    this.version = 1
  }

  async decode () {}

  async process () {}
}

module.exports = ClientCapabilitiesMessage