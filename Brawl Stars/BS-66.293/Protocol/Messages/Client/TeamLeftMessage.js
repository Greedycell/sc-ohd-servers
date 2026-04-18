const PiranhaMessage = require('../../PiranhaMessage')
const TeamLeftMessage = require('../Server/TeamLeftMessage')

class TeamLeaveMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14353
    this.version = 1
  }

  async decode () {}

  async process () {
    await new TeamLeftMessage(this.client).send()
  }
}

module.exports = TeamLeaveMessage