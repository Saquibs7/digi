// src/sw-bootstrap.ts
import { messaging } from './firebase';

export async function initFirebaseMessagingSW() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const registration = await navigator.serviceWorker.register(
      '/firebase-messaging-sw.js'
    );
    console.log('📦 Firebase SW registered:', registration);
    // Firebase Messaging automatically uses the registered service worker for push notifications
  } catch (err) {
    console.error('❌ Failed to register Firebase SW:', err);
  }
}
