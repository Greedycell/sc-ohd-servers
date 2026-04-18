const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 20104
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeHex('000000000fc3df8b000000000fc3df8b0000001432795a683275326d5236794135344f576f636539ffffffffffffffff00000041000000a5000000010000000470726f640000000100000001000000010000000f3130333132313331303234313232320000000a313737313736303336330000000a3137373137363033363300000000ffffffff000000025255ffffffff00000001ffffffff000000020000002868747470733a2f2f776174742e79656c6c6f777761726d73616e642e636f6d2f70617463682d62730000001c687474703a2f2f34352e39352e3230312e32332f70617463682d6273000000020000002968747470733a2f2f776174742e79656c6c6f777761726d73616e642e636f6d2f6576656e74732d62730000001d687474703a2f2f34352e39352e3230312e32332f6576656e74732d6273000000009595000000789c15cbc90e82301440d13f224c8db244265bc96b3020c386948ae1d54ad9a881af17973739775cd934641239325a6dd401648135ae6c6e6b47536570c8d2ad6b28e61143519327558b2de79bdefb2bea621fe90aaab07959101ecbbfd3e33944ae120fb6c487b8f5404160050f71794f1f781ddd3e32444897f8879c37657e12a65fae29fac4dc35e9abf007ba24313900ffffffff')
  
    /*this.writeLong(0, 1) // HighID, LowID
    this.writeLong(0, 1) // HighID, LowID
    this.writeString("nypbej3nc7cbcz3bk2mcxtx2x6ba") // Token
    this.writeString(null) // FacebookID
    this.writeString(null) // GamecenterID
    this.writeInt(65) // Major
    this.writeInt(165) // Build
    this.writeInt(0) // Content
    this.writeString("prod") // Environment
    this.writeInt(1) // SessionCount
    this.writeInt(0) // PlayTimeSeconds
    this.writeInt(0) // DaysSinceStartedPlaying
    this.writeString('') // FacebookAppID
    this.writeString(Date.now().toString()) // ServerTime
    this.writeString(Date.now().toString()) // AccountCreatedDate*/
  }
}

module.exports = LoginOkMessage