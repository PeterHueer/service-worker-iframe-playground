## About
Repository to test Service Worker and trying to intercept the fetch request inside iframes with same and different origin

## Getting started
```npm run dev```

## Possible-Problems
* https://developer.chrome.com/blog/foreign-fetch/?
* Third-Party Iframes are not listed inside service worker clients (no controlled window)

## Trying solutions
* Intercept postMessage Call from twitter embed
  * Success: Get first JS from Twitter which do further operations for creating iframe
  * Mock this JS and change the url from platform.twitter.com to local host url to get access


widget.js
widget_iframe.*.
settings
tweet.*.js
https://platform.twitter.com/embed/Tweet.html