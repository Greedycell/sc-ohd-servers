const PiranhaMessage = require("../../PiranhaMessage")

class Unknown22857 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 22857
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "0100",
    )
  }
}

module.exports = Unknown22857