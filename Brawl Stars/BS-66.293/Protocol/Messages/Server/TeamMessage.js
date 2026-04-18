const PiranhaMessage = require('../../PiranhaMessage')

class TeamMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24124
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeVInt(1) // Mode
    this.writeByte(0)
    this.writeVInt(1)
    this.writeInt(0)
    this.writeInt(1) // TeamID
    this.writeVInt(0)
    this.writeByte(0)
    this.writeByte(0)
    this.writeVInt(0)
    
    this.writeVInt(15)
    this.writeVInt(7) //  MapID
    
    this.writeVInt(1)
    
    this.writeByte(1)
    this.writeInt(0) // HighID
    this.writeInt(1) // LowID
    this.writeString("<c2>Astral</c>")
    this.writeVInt(3)
    
    this.writeVInt(16)
    this.writeVInt(5) // SelectedBrawler
    
    this.writeVInt(0)
    this.writeVInt(0)
    
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(3) // PlayerState
    this.writeVInt(0) //  Ready (0 = Not Ready, 1 = Ready)
    
    this.writeByte(0)
    this.writeVInt(0)
    
    this.writeVInt(0)      
    
    this.writeVInt(0)
  }
}

module.exports = TeamMessage