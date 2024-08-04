async function exampleCom(request) {
  const params = new URL(request.url).searchParams;
  return fetch(params.get("proxy"), {
    mode: "no-cors",
  });
}

self.addEventListener("fetch", function (e) {
  e.respondWith(exampleCom(e.request));
});
