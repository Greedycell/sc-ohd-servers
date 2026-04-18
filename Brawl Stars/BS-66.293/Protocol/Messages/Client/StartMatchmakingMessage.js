const PiranhaMessage = require('../../PiranhaMessage')
const SectorHearbeatMessage = require('../Server/SectorHearbeatMessage')

class StartMatchmakingMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14103
    this.version = 1
  }

  async decode () {}

  async process () {
    await new SectorHearbeatMessage(this.client).send()
  }
}

module.exports = StartMatchmakingMessage