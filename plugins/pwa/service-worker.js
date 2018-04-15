/*eslint-disable*/
console.log('Script loaded!')
var cacheName = 'microzz.com'
// 在安装过程中缓存我们已知的资源
/*eslint-disable*/
self.addEventListener('install', event => {
  console.log('install')
//   event.waitUntil(
//     caches.open(cacheName)
//       .then(function(cache) {
//         return cache.addAll([
//         ])
//       })
//   );
});

self.addEventListener('activate', function(e) {
  console.log('Activate event')
})
// 缓存任何获取的新资源
self.addEventListener('fetch', event => {
	console.log('fetch')
  // event.respondWith(
  //   caches.match(event.request, { ignoreSearch: true })
  //   .then(function (response) {
  //     if (response) {
  //       return response;
  //     }
  //     var requestToCache = event.request.clone();
  //     return fetch(requestToCache).then(
  //       function (response) {
  //         if (!response || response.status !== 200) {
  //           return response;
  //         }
  //         var responseToCache = response.clone();
  //         caches.open(cacheName)
  //           .then(function (cache) {
  //             cache.put(requestToCache, responseToCache);
  //           });
  //         return response;
  //       });
  //   })
  // );
});