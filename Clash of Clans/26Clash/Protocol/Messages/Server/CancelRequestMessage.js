const PiranhaMessage = require("../../PiranhaMessage")

class CancelRequestMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 29350
    this.client = client
    this.version = 1
  }

  async encode() {
    // Challenge
    this.writeHex(
      "00000000016c1a52"
    )

    // Request
    /*this.writeHex(
      "00000000016c1a47"
    )*/
  }
}

module.exports = CancelRequestMessage