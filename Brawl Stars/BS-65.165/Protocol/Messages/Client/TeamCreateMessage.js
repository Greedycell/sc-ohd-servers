const PiranhaMessage = require('../../PiranhaMessage')
const TeamMessage = require('../Server/TeamMessage')

class TeamCreateMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14350
    this.version = 1
  }

  async decode () {}

  async process () {
    await new TeamMessage(this.client).send()
  }
}

module.exports = TeamCreateMessage