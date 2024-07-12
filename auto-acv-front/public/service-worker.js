const CACHE_NAME = 'my-cache-v1';

// Fonction pour mettre en cache des objets
const cacheObject = async (cacheName, request, response) => {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
};

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/static/js/bundle.js',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/css/main.chunk.css'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }

            const fetchRequest = event.request.clone();
            return fetch(fetchRequest).then(response => {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});

// // Écouteur de message pour recevoir des objets à mettre en cache
// self.addEventListener('message', event => {
//     if (event.data && event.data.type === 'CACHE_VEHICLE') {
//         const { request, vehicle } = event.data;
//         const response = new Response(JSON.stringify(vehicle), {
//             headers: { 'Content-Type': 'application/json' }
//         });

//         event.waitUntil(cacheObject(CACHE_NAME, request, response));
//     }
// });

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_VEHICLE') {
        const vehicle = event.data.vehicle;
        caches.open('vehicle-cache').then(cache => {
            cache.put(event.data.request, new Response(JSON.stringify(vehicle)));
        });
    }
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
