console.log("I am a Service Worker");
let windowClientId = '';
let iframeClientId = '';

self.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

self.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
  return self.clients.claim();
});


self.addEventListener('fetch', function (e)  {
  console.log("SW Fetch Event", "Origin:", e.currentTarget.location.host , e.request.url);
  console.log("Available clientIds", "Window:",windowClientId, "iFrame:", iframeClientId)
  self.clients?.matchAll().then(function (clients) {
    console.log("selfclients", clients);
  });

  if (e.request.url === ("https://platform.twitter.com/widgets.js")) {
    console.log("#### WIDGET MATCH ###");
    e.respondWith(fetch("/widget.js"));
  }

  if (e.request.url.match(/^http?:\/\/(localhost)(?::\d+)?\/widgets\/widget_iframe\.(.+)/i)) {
    console.log("#### widget iframe MATCH ###");
    e.respondWith(fetch("/widget_iframe.html"));
  }

  if (e.request.url.toString().startsWith("https://platform.twitter.com/js/")) {
    console.log("#### JS MATCH ###");
    e.respondWith(fetch("/tweet.js"));
  }

/*  if (!windowClientId || !iframeClientId) {
    return;
  }
  // Don't process main window resources
  if (e.clientId === windowClientId) {
    return;
  }*/

});