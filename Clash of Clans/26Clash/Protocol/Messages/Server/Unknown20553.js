const PiranhaMessage = require("../../PiranhaMessage")

class Unknown20553 extends PiranhaMessage {
  constructor(client) {
    super()
    this.id = 20553
    this.client = client
    this.version = 1
  }

  async encode() {
    this.writeHex(
      "000190f3b19b0d80bbb19b0d90ada79b0d90ada79b0da0e5a79b0d00140190b9bc9b0d8081bc9b0d90f3b19b0d90f3b19b0da0abb29b0d06422c5f90ada79b0d",
    )
  }
}

module.exports = Unknown20553