const PiranhaMessage = require('../../PiranhaMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
const AllianceStreamMessage = require('../Server/AllianceStreamMessage')
const BookmarkListMessage = require('../Server/BookmarkListMessage')
const FriendRequestListMessage = require('../Server/FriendRequestListMessage')
const Unknown25418 = require('../Server/Unknown25418')
const Unknown23230 = require('../Server/Unknown23230')
const Unknown27349 = require('../Server/Unknown27349')
const Unknown22287 = require('../Server/Unknown22287')
const Unknown29023 = require('../Server/Unknown29023')
const Unknown22857 = require('../Server/Unknown22857')
const Unknown26416 = require('../Server/Unknown26416')
const Unknown20553 = require('../Server/Unknown20553')
const Unknown22000 = require('../Server/Unknown22000')

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

    console.log(this.data)
  }

  async process () {
    setTimeout(() => {
      new LoginOkMessage(this.client).send()
      new OwnHomeDataMessage(this.client).send()
      new AllianceStreamMessage(this.client).send()
      new BookmarkListMessage(this.client).send()
      new FriendRequestListMessage(this.client).send()
      new Unknown25418(this.client).send()
      new Unknown23230(this.client).send()
      new Unknown27349(this.client).send()
      new Unknown22287(this.client).send()
      new Unknown29023(this.client).send()
      new Unknown22857(this.client).send()
      new Unknown26416(this.client).send()
      new Unknown20553(this.client).send()
      new Unknown22000(this.client).send()
    }, 2000)
  }
}

module.exports = LoginMessage