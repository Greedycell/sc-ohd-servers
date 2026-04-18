const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 20104
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeHex('000000000fe61d3f000000000fe61d3f000000143545514f32674c55484a466d376e555477785933ffffffffffffffff0000004200000125000000010000000470726f640000000100000001000000010000000f3130333132313331303234313232320000000a313737333636373836340000000a3137373336363738363400000000ffffffff000000025255ffffffff00000001ffffffff000000020000002868747470733a2f2f776174742e79656c6c6f777761726d73616e642e636f6d2f70617463682d62730000001c687474703a2f2f34352e39352e3230312e32332f70617463682d6273000000020000002968747470733a2f2f776174742e79656c6c6f777761726d73616e642e636f6d2f6576656e74732d62730000001d687474703a2f2f34352e39352e3230312e32332f6576656e74732d6273000000009495000000789c158bdd0e433018409f688266cb5c32635f551b8b29ee9026be12fb4b66edd3cf2e4fce39cad0b14f071448e166c1e348034719ba34d29b41dfb14f13dbd680ec44b193fb09f4c31d966ade78ed64b18d60b86e486ea7358f877f37ab4b88429f09b739e165b1f96be0846df43d301bbd957e1d0df33f23f3a4af4595908cfab073b3e85988b8ccc8f403f23631a300ffffffff')
  
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