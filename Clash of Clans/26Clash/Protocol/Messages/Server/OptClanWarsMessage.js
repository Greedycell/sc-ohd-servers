const PiranhaMessage = require("../../PiranhaMessage")

class OptClanWarsMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 27127
    this.client = client
    this.version = 1
  }

  async encode() {
    // In
    this.writeHex(
      "0000008c000000017f07",
    )

    // Out
    this.writeHex(
      "0000008c000000007f06",
    )
  }
}

module.exports = OptClanWarsMessage