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
    e.respondWith(fetch("/mockedTwitterFiles/widget.js"));
  }

  if (e.request.url.match(/^http?:\/\/(.*)(?::\d+)?\/embed/i)) {
    console.log("#### TWEET-HTML MATCH ###");
    e.respondWith(fetch("/mockedTwitterFiles/tweet.html"));
  }

  if (e.request.url.match(/^http?:\/\/(.*)(?::\d+)?\/widgets\/widget_iframe\.(.+)/i)) {
    console.log("#### WIDGET_IFRAME MATCH ###");
    e.respondWith(fetch("/mockedTwitterFiles/widget_iframe.html"));
  }

  if (e.request.url.match(/^http?:\/\/(.*)(?::\d+)?\/js/i)) {
    console.log("#### TWEET-JS MATCH ###");
    e.respondWith(fetch("/mockedTwitterFiles/tweet.js"));
  }

  if (e.request.url.toString().startsWith("https://cdn.syndication.twimg.com/tweet-result")) {
    console.log("#### TWEET-RESULT MATCH ###");
    e.respondWith(fetch("/mockedTwitterFiles/tweet-result.json"));
  }

});