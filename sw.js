/**
 * @file sw.js
 * @description Service Worker for EcoMind Carbon Footprint awareness platform.
 * Handles offline resource caching, fetch interception using stale-while-revalidate,
 * and PWA push notifications.
 */

const CACHE_NAME = 'ecomind-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap'
];

/**
 * @description Service Worker installation event.
 * Caches essential static assets to ensure offline application load.
 * @param {ExtendableEvent} event - The install event object.
 * @returns {void}
 */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

/**
 * @description Service Worker activation event.
 * Performs cleanup of legacy caches, ensuring active service worker updates.
 * @param {ExtendableEvent} event - The activate event object.
 * @returns {void}
 */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

/**
 * @description Service Worker fetch interception event.
 * Implements a Stale-While-Revalidate network strategy for static assets and CDN calls,
 * while ensuring live Gemini AI transactions bypass client caching.
 * @param {FetchEvent} event - The fetch event object.
 * @returns {void}
 */
self.addEventListener('fetch', event => {
  // If it's a Gemini API request, run network only
  if (event.request.url.includes('generativelanguage.googleapis.com')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(JSON.stringify({
          error: { message: "Offline. Gemini AI is unavailable." }
        }), { headers: { 'Content-Type': 'application/json' } });
      })
    );
    return;
  }

  // Stale-while-revalidate strategy for static resources
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Fetch fresh copy in the background
        fetch(event.request).then(networkResponse => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(err => {
        // Fallback for HTML page requests when offline
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
        throw err;
      });
    })
  );
});

/**
 * @description Service Worker push event listener.
 * Displays local system push notification reminders containing custom title and body text.
 * @param {PushEvent} event - The push event object.
 * @returns {void}
 */
self.addEventListener('push', event => {
  let data = { title: 'EcoMind', body: "🌱 Don't forget to log today's emissions!" };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: 'EcoMind', body: event.data.text() };
    }
  }
  
  const options = {
    body: data.body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    data: {
      url: './index.html'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

/**
 * @description Service Worker notification click event.
 * Focuses existing open tabs or opens a new tab window for the EcoMind platform.
 * @param {NotificationEvent} event - The notification click event object.
 * @returns {void}
 */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('./index.html');
      }
    })
  );
});
