const PiranhaMessage = require("../../PiranhaMessage")

class OutOfSyncMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 29388
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "777aa0ae777aa0aa0000043800",
    )
  }
}

module.exports = OutOfSyncMessage