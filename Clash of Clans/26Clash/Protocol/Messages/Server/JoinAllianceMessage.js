const PiranhaMessage = require("../../PiranhaMessage")

class JoinAllianceMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 27127
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "0000000a0000000000059a270000000c445241474f4e20484f5553455b001a550000000002007f01",
    )
  }
}

module.exports = JoinAllianceMessage