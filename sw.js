const CACHE_NAME = 'bangla-radio-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png'
  // আপনি চাইলে এখানে অন্যান্য গুরুত্বপূর্ণ অ্যাসেট, যেমন ফন্ট, যোগ করতে পারেন
];

// ধাপ ১: ইনস্টলেশন - অ্যাসেটগুলো ক্যাশে সংরক্ষণ করা
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// ধাপ ২: অ্যাক্টিভেশন - পুরোনো ক্যাশে পরিষ্কার করা
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// ধাপ ৩: ফেচ - নেটওয়ার্ক অনুরোধ নিয়ন্ত্রণ করা (ক্যাশে-ফার্স্ট স্ট্র্যাটেজি)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // যদি ক্যাশে পাওয়া যায়, তাহলে ক্যাশ থেকে রিটার্ন করো
        if (response) {
          return response;
        }
        // অন্যথায়, নেটওয়ার্ক থেকে ফেচ করো
        return fetch(event.request);
      })
  );
});