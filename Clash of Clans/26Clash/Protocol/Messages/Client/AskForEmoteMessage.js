const PiranhaMessage = require('../../PiranhaMessage')
const Unknown24384 = require('../Server/Unknown24384')

class AskForEmoteMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 12531
    this.version = 1
  }

  async decode () {}

  async process () {
    await new Unknown24384(this.client).send()
  }
}

module.exports = AskForEmoteMessage