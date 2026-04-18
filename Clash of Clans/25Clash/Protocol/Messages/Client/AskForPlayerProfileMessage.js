const PiranhaMessage = require('../../PiranhaMessage')
const SearchPlayerMessage = require('../Server/SearchPlayerMessage')

class AskForPlayerProfileMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 11734
    this.version = 1
  }

  async decode () {}

  async process () {
    await new SearchPlayerMessage(this.client).send()
  }
}

module.exports = AskForPlayerProfileMessage