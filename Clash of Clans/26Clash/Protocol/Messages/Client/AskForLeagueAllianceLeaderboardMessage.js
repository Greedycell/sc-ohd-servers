const PiranhaMessage = require('../../PiranhaMessage')
const LeagueAllianceLeaderboardMessage = require('../Server/LeagueAllianceLeaderboardMessage')

class AskForLeagueAllianceLeaderboardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 12866
    this.version = 1
  }

  async decode () {}

  async process () {
    await new LeagueAllianceLeaderboardMessage(this.client).send()
  }
}

module.exports = AskForLeagueAllianceLeaderboardMessage