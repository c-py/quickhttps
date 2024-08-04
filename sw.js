async function exampleCom(request) {
  return fetch("https://example.com", {
    mode: "no-cors",
    headers: {
      "Content-Type": "text/html",
    },
  });
}

self.addEventListener("fetch", function (e) {
  e.respondWith(exampleCom(e.request));
});
