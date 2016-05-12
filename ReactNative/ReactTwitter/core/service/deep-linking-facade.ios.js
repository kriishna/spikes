import { Linking } from 'react-native'

class DeepLinkingFacade {
  listenForDeepLinking () {
    Linking.removeEventListener('url', this._handleOpenURL)
    Linking.addEventListener('url', this._handleOpenURL)
    return new Promise(function (resolve, reject) {
      this.resolvePromise = resolve
    })
  }

  stopListeningForDeepLinking () {
    Linking.removeEventListener('url', this._handleOpenURL)
  }

  _handleOpenURL (event) {
    this.resolvePromise(event.url)
  }
}

module.exports = DeepLinkingFacade
