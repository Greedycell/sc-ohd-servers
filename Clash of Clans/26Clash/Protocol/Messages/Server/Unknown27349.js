const PiranhaMessage = require("../../PiranhaMessage")

class Unknown27349 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 27349
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "0101",
    )
  }
}

module.exports = Unknown27349