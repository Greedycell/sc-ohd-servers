const PiranhaMessage = require('../../PiranhaMessage')
const VisitHomeMessage = require('../Server/VisitHomeMessage')

class AskForVisitHomeMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14322
    this.version = 1
  }

  async decode () {}

  async process () {
    await new VisitHomeMessage(this.client).send()
  }
}

module.exports = AskForVisitHomeMessage