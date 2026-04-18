const PiranhaMessage = require('../../PiranhaMessage')
const TownHallTournamentMessage = require('../Server/TownHallTournamentMessage')

class AskForTownHallTournamentMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 15025
    this.version = 1
  }

  async decode () {}

  async process () {
    await new TownHallTournamentMessage(this.client).send()
  }
}

module.exports = AskForTownHallTournamentMessage