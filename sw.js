async function exampleCom(request) {
  return fetch("https://example.com");
}

self.addEventListener("fetch", function (e) {
  e.respondWith(exampleCom(e.request));
});
