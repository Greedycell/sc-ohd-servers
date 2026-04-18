const PiranhaMessage = require('../../PiranhaMessage')
const GlobalAllianceLeaderboardMessage = require('../Server/GlobalAllianceLeaderboardMessage')

class AskForGlobalAllianceLeaderboardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 12865
    this.version = 1
  }

  async decode () {}

  async process () {
    await new GlobalAllianceLeaderboardMessage(this.client).send()
  }
}

module.exports = AskForGlobalAllianceLeaderboardMessage