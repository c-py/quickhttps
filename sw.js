async function proxy(request) {
  const params = new URL(request.url).searchParams;
  return fetch(params.get("proxy"));
}

self.addEventListener("fetch", function (e) {
  e.respondWith(proxy(e.request));
});
