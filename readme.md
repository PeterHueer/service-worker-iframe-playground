## About
Repository to test Service Worker and trying to intercept the fetch request inside iframes with same and different origin

## Getting started
```npm run dev```

## Possible-Problems
* https://developer.chrome.com/blog/foreign-fetch/?
* Third-Party Iframes are not listed inside service worker clients (no controlled window)

##  Solution
* Intercept Widget.js
  * Rewrite third-party url with own url's
  * Intercept other lib's and rewrite third-party-url with own url's
  * tweet-result.json can be modified to show static twitter content