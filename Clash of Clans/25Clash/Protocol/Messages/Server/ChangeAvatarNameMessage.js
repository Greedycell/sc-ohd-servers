const PiranhaMessage = require('../../PiranhaMessage')

class ChangeAvatarNameMessage extends PiranhaMessage {
  constructor (client, name) {
    super()
    this.id = 21156
    this.client = client
    this.version = 1
    this.Name = name
  }

  async encode () {
    this.writeHex('00000000000000000641737472616c')
    
    //this.writeString('Astral') // Name
    //this.writeVInt(0)
  }
}

module.exports = ChangeAvatarNameMessage