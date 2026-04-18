const PiranhaMessage = require('../../PiranhaMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 0
  }

  async decode () {
    this.data = {}

    this.data.Protocol = this.readInt()
    this.data.KeyVersion = this.readInt()
    this.data.MajorVersion = this.readInt()
    this.data.MinorVersion = this.readInt()
    this.data.BuildVersion = this.readInt()
    this.data.FingerprintSha = this.readString()
    this.data.DeviceType = this.readInt()
    this.data.AppStore = this.readInt()

    //console.log(this.data)
  }

  async process () {
    await new ServerHelloMessage(this.client).send()
  }
}

module.exports = ClientHelloMessage