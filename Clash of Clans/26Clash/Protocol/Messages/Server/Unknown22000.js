const PiranhaMessage = require("../../PiranhaMessage")

class Unknown22000 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 22000
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "00",
    )
  }
}

module.exports = Unknown22000