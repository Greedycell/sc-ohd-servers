const PiranhaMessage = require('../../PiranhaMessage')
const PastPlayerLeaderboardMessage = require('../Server/PastPlayerLeaderboardMessage')

class AskForPastPlayerLeaderboardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 12461
    this.version = 1
  }

  async decode () {}

  async process () {
    await new PastPlayerLeaderboardMessage(this.client).send()
  }
}

module.exports = AskForPastPlayerLeaderboardMessage