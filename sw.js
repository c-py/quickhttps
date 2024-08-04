self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
});

console.log("test");
