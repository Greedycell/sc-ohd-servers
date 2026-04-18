const PiranhaMessage = require('../../PiranhaMessage')
const PlayerProfileMessage = require('../Server/PlayerProfileMessage')

class AskForPlayerProfileMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 19696
    this.version = 1
  }

  async decode () {}

  async process () {
    await new PlayerProfileMessage(this.client).send()
  }
}

module.exports = AskForPlayerProfileMessage