const PiranhaMessage = require('../../PiranhaMessage')
const EnemyHomeDataMessage = require('../Server/EnemyHomeDataMessage')

class EndClientTurnMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 18072
    this.version = 1
  }

  async decode () {}

  async process () {
    await new EnemyHomeDataMessage(this.client).send()
  }
}

module.exports = EndClientTurnMessage