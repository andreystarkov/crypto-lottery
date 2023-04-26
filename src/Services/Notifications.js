import { log } from 'Utils/Log'
export const initNotifications = () => {
  Notification.requestPermission().then((result) => {
    if (result === 'denied') {
      log('Notification permission wasn\'t granted. Allow a retry.')
    } else if (result === 'default') {
      log('Notification permission request was dismissed.')
    } else if (result === 'granted') {
      // Do something with the granted permission.
      log('Notifications are granted')
    } else {
      log('Notification unhandled', { result })
    }
  })
}

export default initNotifications
