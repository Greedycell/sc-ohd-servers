const PiranhaMessage = require('../../PiranhaMessage')
const AllianceEntryStreamMessage = require('../Server/AllianceEntryStreamMessage')

class ChatToAllianceStreamMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14466
    this.version = 1
  }

  async decode () {}

  async process () {
    await new AllianceEntryStreamMessage(this.client).send()
  }
}

module.exports = ChatToAllianceStreamMessage