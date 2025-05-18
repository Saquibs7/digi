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

/**
 * Request browser Notification permission.
 * Throws if the user does not grant “granted” status.
 */
export async function requestNotificationPermission(): Promise<void> {
  const permission = await Notification.requestPermission();
  console.log('[firebase.ts] Notification.requestPermission() →', permission);
  if (permission !== 'granted') {
    throw new Error('Notification permission not granted.');
  }
}

/**
 * Obtain (or force-refresh) the FCM registration token.
 *
 * @param forceRefresh  whether to force-generate a new token
 * @returns             a valid FCM registration token string
 */
export async function getFcmToken(forceRefresh = false): Promise<string> {
  // Wait for the active service worker registration:
  const registration = await navigator.serviceWorker.ready;
  console.log('[firebase.ts] Service Worker ready:', registration.scope);

  // getToken options: vapidKey, serviceWorkerRegistration, forceRefresh
  const token = await getToken(
    messaging,
    {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
      forceRefresh: forceRefresh,
    }
  );

  console.log('[firebase.ts] getToken(...) returned →', token);
  if (!token) {
    throw new Error('Failed to retrieve FCM registration token.');
  }
  return token;
}

/**
 * Subscribe to foreground messages. The callback will be invoked
 * with the payload whenever a message arrives while the page is in focus.
 *
 * Returns an unsubscribe function.
 */
export function onMessageListener(
  callback: (payload: any) => void
): () => void {
  return onMessage(messaging, (payload) => {
    console.log('[firebase.ts] onMessage received:', payload);
    callback(payload);
  });
}
