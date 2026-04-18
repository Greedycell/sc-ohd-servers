const PiranhaMessage = require("../../PiranhaMessage")

class SignUpRankedMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 27127
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "00000f787f0390ada79b0d",
    )
  }
}

module.exports = SignUpRankedMessage