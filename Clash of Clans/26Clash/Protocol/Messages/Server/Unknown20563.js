const PiranhaMessage = require("../../PiranhaMessage")

class Unknown20563 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 20563
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "0300000000016c1a720100000000001b9d3a",
    )
  }
}

module.exports = Unknown20563