const PiranhaMessage = require("../../PiranhaMessage")

class Unknown24384 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 24384
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "010100000000016c1a7200",
    )
  }
}

module.exports = Unknown24384