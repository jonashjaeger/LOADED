const CACHE='loaded-film-journal-v1.0.0';
const FILES=['./','./index.html','./app.js','./styles.css','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('loaded-film-journal-')&&key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()]))});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(req);if(response.ok&&response.type==='basic')cache.put(req,response.clone());return response}catch(_){return (await cache.match(req,{ignoreSearch:true}))||(req.mode==='navigate'?await cache.match('./index.html'):Response.error())}})())});
