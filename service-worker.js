self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("brincaabc-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});
