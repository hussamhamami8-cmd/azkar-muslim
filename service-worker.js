const CACHE='azkar-muslim-v2-final';
const ASSETS=['./','./index.html','./azkar.json','./manifest.json','./icon.png','./icons/icon.svg','./icons/maskable.svg','./css/app.css','./js/app.js','./js/data.js','./js/features.js','./admin.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{if(x.ok){const c=x.clone();caches.open(CACHE).then(c=>c.put(e.request,c));}return x;}).catch(()=>caches.match('./index.html'))));});
