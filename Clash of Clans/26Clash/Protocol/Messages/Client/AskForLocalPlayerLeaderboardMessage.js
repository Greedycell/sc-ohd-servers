const PiranhaMessage = require('../../PiranhaMessage')
const LocalPlayerLeaderboardMessage = require('../Server/LocalPlayerLeaderboardMessage')

class AskForLocalPlayerLeaderboardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 13723
    this.version = 1
  }

  async decode () {}

  async process () {
    await new LocalPlayerLeaderboardMessage(this.client).send()
  }
}

module.exports = AskForLocalPlayerLeaderboardMessage