const PiranhaMessage = require('../../PiranhaMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class GoHomeFromOfflinePracticeMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14109
    this.version = 1
  }

  async decode () {}

  async process () {
    await new OwnHomeDataMessage(this.client).send()
  }
}

module.exports = GoHomeFromOfflinePracticeMessage