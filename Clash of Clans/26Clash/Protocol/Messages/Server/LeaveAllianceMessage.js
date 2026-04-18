const PiranhaMessage = require("../../PiranhaMessage")

class LeaveAllianceMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 27127
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "000000140000000000059a277f02"
    )
  }
}

module.exports = LeaveAllianceMessage