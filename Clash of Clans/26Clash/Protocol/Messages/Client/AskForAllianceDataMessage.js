const PiranhaMessage = require('../../PiranhaMessage')
const AllianceDataMessage = require('../Server/AllianceDataMessage')

class AskForAllianceDataMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 11186
    this.version = 1
  }

  async decode () {}

  async process () {
    await new AllianceDataMessage(this.client).send()
  }
}

module.exports = AskForAllianceDataMessage