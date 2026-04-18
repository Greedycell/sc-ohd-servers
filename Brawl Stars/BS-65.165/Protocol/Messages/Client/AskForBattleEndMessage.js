const PiranhaMessage = require('../../PiranhaMessage')
const BattleEndMessage = require('../Server/BattleEndMessage')

class AskForBattleEndMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14110
    this.version = 1
  }

  async decode () {}

  async process () {
    await new BattleEndMessage(this.client).send()
  }
}

module.exports = AskForBattleEndMessage