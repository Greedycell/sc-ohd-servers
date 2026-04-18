const PiranhaMessage = require('../../PiranhaMessage')

class UdpConnectionInfoMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24112
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeHex('a7b1030000000d35372e3132382e36342e3134360000000a3ed2a8c6b8d77e7999a6ffffffff')

    /*this.writeVInt(9338) // Port
    this.writeString('127.0.0.1') // Host

    this.writeInt(10)
    this.writeLong(0, 1) // SessionID (HighID, LowID)
    this.writeByte(0) // Gamemode
    this.writeByte(0) // Index

    this.writeScString('nonce') // Nonce*/
  }
}

module.exports = UdpConnectionInfoMessage