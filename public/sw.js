// Minimal service worker to prevent 404 errors
self.addEventListener("install", function (event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  // Claim all clients
  event.waitUntil(self.clients.claim());
});

// Handle fetch events
self.addEventListener("fetch", function (event) {
  // Let the browser handle the request normally
  event.respondWith(fetch(event.request));
});
