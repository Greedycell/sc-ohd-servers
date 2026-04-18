const PiranhaMessage = require('../../PiranhaMessage')
const LoginFailedMessage = require('../Server/LoginFailedMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
const PopupMessage = require('../Server/PopupMessage')
const BattleLogMessage = require('../Server/BattleLogMessage')

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10101
    this.version = 1
  }

  async decode () {
    this.data = {}

    this.data.HighID = this.readInt()
    this.data.LowID = this.readInt()
    this.data.Token = this.readString()
    this.data.Major = this.readVInt()
    this.data.Build = this.readVInt()
    this.data.Content = this.readVInt()

    //console.log(this.data)
  }

  async process () {
    setTimeout(() => {
      new LoginOkMessage(this.client).send()
      new OwnHomeDataMessage(this.client).send()
      new BattleLogMessage(this.client).send()
    }, 2000)
  }
}

module.exports = LoginMessage