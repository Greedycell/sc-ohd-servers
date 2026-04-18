const PiranhaMessage = require("../../PiranhaMessage")

class Unknown22287 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 22287
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "0000",
    )
  }
}

module.exports = Unknown22287