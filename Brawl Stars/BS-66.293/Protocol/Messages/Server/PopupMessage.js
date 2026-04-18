const PiranhaMessage = require('../../PiranhaMessage')

class PopupMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24111
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeHex('8e030193010000000100699aeaebffffffff0000000019537562736372696265207573206f6e2054656c656772616d21000000009844696420796f75206b6e6f7720746865726520697320616e206f6666696369616c2054656c656772616d206368616e6e656c206f66204e756c6c277320427261776c2c20776865726520776520706f7374206e6577732061626f757420616c6c207570646174657320696d6d6564696174656c793f20416c736f207765206861766520736f6d652066756e6e79206368617420686572652e0000000008436865636b206974000000002839364136354435373733313944463836373837413231334234433445414343423245343135343542000000082f7467322e706e670000002f6e756c6c73627261776c3a2f2f6578746c696e6b3f706167653d68747470733a2f2f742e6d652f6e756c6c735f656e00000100000000')

    /*this.writeString('Subscribe us on Telegram!') // Title
    this.writeString("Did you know there is an official Telegram channel of Null's Brawl,\nwhere we post news about all updates immediately?\nAlso we have some funny chat here.") // Body
    this.writeString('Check it') // Button
    this.writeString('96A65D577319DF86787A213B4C4EACCB2E41545B') // Hash
    this.writeString('/tg2.png') // Image
    this.writeString('/nullsbrawl://extlink?page=https://t.me/nulls_en') // Link
    this.writeLong(0, 1) // Flag*/
  }
}

module.exports = PopupMessage