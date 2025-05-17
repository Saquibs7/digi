importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyC0L6m5lu7DFTCoKdMK8fFHmofEMCYt3Yc',
  authDomain: 'digilab-cb7a3.firebaseapp.com',
  projectId: 'digilab-cb7a3',
  storageBucket: 'digilab-cb7a3.firebasestorage.app',
  messagingSenderId: '751536348749',
  appId: '1:751536348749:web:fe4795fbeefd20751e4604',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: icon || '/pwa-192x192.png',
  });
});
