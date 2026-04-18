const PiranhaMessage = require('../../PiranhaMessage')

class TeamLeftMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24125
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeVInt(0)
  }
}

module.exports = TeamLeftMessage