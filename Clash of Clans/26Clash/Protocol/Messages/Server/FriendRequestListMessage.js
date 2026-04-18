const PiranhaMessage = require("../../PiranhaMessage")

class FriendRequestListMessage extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 29808
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "000000000000000100000000000000010100000000000000010000000f6d6f6b706b726f726f757270696b72ffffffffffffffffffffffffffffffff00000000000000460000009f000000000000000000000002000000000100000000000000030000025500000013d985d98620d988d8aad988d9bed984d8a7d8b3000000020000000100"
    )
  }
}

module.exports = FriendRequestListMessage