// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// 1) Initialize Firebase exactly as in your front‐end (all fields must match).
firebase.initializeApp({
  apiKey: 'AIzaSyC0L6m5lu7DFTCoKdMK8fFHmofEMCYt3Yc',
  authDomain: 'digilab-cb7a3.firebaseapp.com',
  projectId: 'digilab-cb7a3',
  storageBucket: 'digilab-cb7a3.firebasestorage.app',
  messagingSenderId: '751536348749',
  appId: '1:751536348749:web:fe4795fbeefd20751e4604',
});

const messaging = firebase.messaging();

// 2) Handle background messages.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // If your server sends a `notification` block, it’ll look like:
  // payload.notification = { title: '…', body: '…', icon: '…' }
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title, {
    body,
    icon: icon || '/pwa-192x192.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
  });
});
