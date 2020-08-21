self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open("cache").then(function(cache) {
            return cache.addAll(
                        ` 1.png 2.png 3.png 4.png empty.png font.woff2 gun.png gunshot.mp3 icons/icon.png index.html manifest.json score.mp3 sw.js weezer.xcf win.mp3`.split(' ').map(name => "/" + name)
            );
        })
    );
});
self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request);
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});
