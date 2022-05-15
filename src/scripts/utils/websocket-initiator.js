import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const dataReview = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: dataReview.name,
      options: {
        body: dataReview.review,
        icon: 'icons/icon-192x192.png',
        image: dataReview.image,
        vibrate: [200, 100, 200],
      },
    });
  },
};
export default WebSocketInitiator;