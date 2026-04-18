const PiranhaMessage = require('../../PiranhaMessage')
const config = require('../../../config.json')

class LoginFailedMessage extends PiranhaMessage {
  constructor (client, errorCode, reason) {
    super()
    this.id = 20103
    this.client = client
    this.version = 4
    this.errorCode = errorCode
    this.reason = reason
  }

  async encode () {
    /*
    3 = Custom Message
    7 = Content Update
    8 = Maintenance
    10 = Update Available
    11 = Connection Error
    */

    this.writeInt(this.errorCode) // ErrorCode
    this.writeString(null) // Fingerprint
    this.writeString(null)
    this.writeString(null) // ContentURL
    this.writeString(null) // UpdateURL
    this.writeString(this.reason) // Reason
    this.writeInt(0) // MaintenanceSeconds
  }
}

module.exports = LoginFailedMessage