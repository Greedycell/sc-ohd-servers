const PiranhaMessage = require('../../PiranhaMessage')
const GlobalPlayerLeaderboardMessage = require('../Server/GlobalPlayerLeaderboardMessage')

class AskForGlobalPlayerLeaderboardMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14359
    this.version = 1
  }

  async decode () {}

  async process () {
    await new GlobalPlayerLeaderboardMessage(this.client).send()
  }
}

module.exports = AskForGlobalPlayerLeaderboardMessage