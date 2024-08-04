var APP_PREFIX = "ApplicationName_"; // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = "version_01"; // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  // Add URL you want to cache in this list.
  "/{repository}/", // If you have separate JS/CSS files,
  "/{repository}/index.html", // add path to those files here
];

// Respond with cached resources
self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        // if cache is available, respond with cache
        console.log("responding with cache : " + e.request.url);
        return request;
      } else {
        // if there are no cache, try fetching request
        console.log("file is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  );
});
