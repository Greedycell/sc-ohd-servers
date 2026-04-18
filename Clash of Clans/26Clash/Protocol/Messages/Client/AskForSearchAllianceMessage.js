const PiranhaMessage = require('../../PiranhaMessage')
const SearchAllianceMessage = require('../Server/SearchAllianceMessage')

class AskForSearchAllianceMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 13316
    this.version = 1
  }

  async decode () {}

  async process () {
    await new SearchAllianceMessage(this.client).send()
  }
}

module.exports = AskForSearchAllianceMessage