const PiranhaMessage = require('../../PiranhaMessage')
const LocalAllianceLeaderboardMessage = require('../Server/LocalAllianceLeaderboardMessage')

class AskForLocalAllianceLeaderboardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 12865
    this.version = 1
  }

  async decode () {}

  async process () {
    await new LocalAllianceLeaderboardMessage(this.client).send()
  }
}

module.exports = AskForLocalAllianceLeaderboardMessage