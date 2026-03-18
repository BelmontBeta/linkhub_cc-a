// ============================================================
//  Linkhub CESAR School — Service Worker
//  Cache dos arquivos principais para uso offline
// ============================================================

const CACHE = "linkhub-v1";
const ASSETS = [
  "./index.html",
  "./config.js",
  "./logo-cesar-school-branca.png",
  "./school_laranja.png",
  "./Manual-do-Estudante-2026.1-CESAR-School.pdf",
];

// Instala e faz cache dos assets principais
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Limpa caches antigos
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Estratégia: Network first, fallback para cache
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});