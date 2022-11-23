console.log("I am a Service Worker");

self.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

self.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  console.log("SW Fetch Event", "Origin:", e.currentTarget.location.host , e.request.url);
});