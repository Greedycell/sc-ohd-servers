const PiranhaMessage = require('../../PiranhaMessage')
const LeaveAllianceMessage = require('../Server/LeaveAllianceMessage')

class AskForLeaveAllianceMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 13439
    this.version = 1
  }

  async decode () {}

  async process () {
    await new LeaveAllianceMessage(this.client).send()
  }
}

module.exports = AskForLeaveAllianceMessage