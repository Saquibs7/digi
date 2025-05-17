// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    throw new Error('Notification permission not granted.');
  }
}

export async function getFcmToken(): Promise<string> {
  // first make sure SW is ready
  const registration = await navigator.serviceWorker.ready;
  return getToken(messaging, {
    vapidKey: 'BOaFS72zOmrEL2VjJkRYcLSuefnAZlZVzCgbbNrY0ExoE9T0dd3km2AHx7aHtVolhVntSOqtlxLn9mT1a59cPS8',
    serviceWorkerRegistration: registration,
  });
}

export function onMessageListener(
  callback: (payload: any) => void
): () => void {
  return onMessage(messaging, callback);
}