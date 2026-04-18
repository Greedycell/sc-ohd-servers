const PiranhaMessage = require('../../PiranhaMessage')
const NoticeBoardMessage = require('../Server/NoticeBoardMessage')

class AskForNoticeBoardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 11206
    this.version = 1
  }

  async decode () {}

  async process () {
    await new NoticeBoardMessage(this.client).send()
  }
}

module.exports = AskForNoticeBoardMessage