const dynamicCacheName = 'naxTasks-v1';

const assets = [
  '/',
  'index.html',
  '/images',
  '/icons',
  '/ico',
  '/style',
  '/Jspag'
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(dynamicCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})


// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(err => {
      // console.info(err);
    })
  );
});
