'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "15cc9ea529c43834d45b20a6663a4e64",
"version.json": "8ee320437d21a85c6cd93089e331fddd",
"favicon.ico": "854039ff68c9f1b62604811a3f684818",
"index.html": "2230cb3860a8e93709896493683fff48",
"/": "2230cb3860a8e93709896493683fff48",
"CNAME": "bdd432287cf3fd7e19f809454e57a4d7",
"main.dart.js": "65356022a64e5a15aefe6eebac30070e",
"404.html": "b5af7aa2771fe3cff33d21534980877d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "854039ff68c9f1b62604811a3f684818",
"icons/Icon-192.png": "b599ac4cd4f34f1ff721bd5d34b5ae3b",
"icons/Icon-maskable-192.png": "b599ac4cd4f34f1ff721bd5d34b5ae3b",
"icons/Icon-maskable-512.png": "b599ac4cd4f34f1ff721bd5d34b5ae3b",
"icons/Icon-512.png": "b599ac4cd4f34f1ff721bd5d34b5ae3b",
"manifest.json": "39b560e685f302cd568071365e10fcf9",
".git/ORIG_HEAD": "2ba8db54cebed40f373cc347527222ea",
".git/config": "014e4312086508660c87f4b226e57270",
".git/objects/59/a1f0862af345599decadb1352ee226bcfb78c9": "433aaa29f4e5872a2dc2bed1b0e1206c",
".git/objects/57/0cc23a51bd04524f8320707207ffe1b00e87bb": "fc3cb4f756d74e16d10e7747ff27737f",
".git/objects/3b/fae5b95b596293ea6c65e59c2b648a8b061f6e": "51c16fa3409fd39fae1878c4e90bb48f",
".git/objects/58/f60ad0a551322f7a26a6811e86840b280075f1": "584a84c99356842bd41a3a270918640f",
".git/objects/9d/ee669d00865fad442d61697efd40b12fba6a26": "ece9e74eae5e232f69b5726e3739a172",
".git/objects/b2/1613c98038a51b576e9efe02ce0c5c1ac28e68": "20845636e7d56d851d46861939a7b9a4",
".git/objects/b3/84d1fe9f7df534227a3190263ee9aa4520fa2b": "38bdc4906c1e3b7e60e0761da9389cfd",
".git/objects/e5/39fdb094ba56f2949e8059604fb0ec871ea1a9": "0d885e556240d711205823d0192445c8",
".git/objects/f4/34e222b12b4ce3ff777a95120a254ffe10c64e": "b978508aca57790b624e7a3e2b8e002f",
".git/objects/c7/e8925a615350b156c02ac5e95a1118f053a0c8": "95fcdefd563134f19ec0692bcab99226",
".git/objects/fc/677e37624b5fd4815b51ee1b4c2ed6b925d2c7": "84241bab6e2c4302358cd2a85fb1d067",
".git/objects/e3/6cb66851fca43069e7fd94ba8145187ff50487": "ccb52dd0b3fcb5258a9a37d615084301",
".git/objects/e4/08bacfa9c88b29f13119023509429859a5ab88": "fced8c171cd819874063e5d8dfe46e4b",
".git/objects/fb/10e2633b81442b1860723cdf72d7a1e56e9efd": "0d98cb977c05e8eb4d6edc7dc7a24f81",
".git/objects/27/28e9c0f9881880e4027402daaefbfe36e14764": "d410d69ed223cf8f0337f12c41ebdcd4",
".git/objects/pack/pack-571d2118e50155505cc8624989d723d189b2b336.rev": "9c7b087fcc0e309da01a3fedd93c7aa3",
".git/objects/pack/pack-571d2118e50155505cc8624989d723d189b2b336.pack": "72010745bef372b637055e947d112c59",
".git/objects/pack/pack-571d2118e50155505cc8624989d723d189b2b336.idx": "95c18417cbc7cd89f1732983402ab572",
".git/objects/29/a77ed198d21f3a4a66586ab366b700bc04995c": "d2bf1ead72411db4586f06b6c90c5f8f",
".git/objects/87/add5349ccf35fc909b2bf3e6e27d02a637ab85": "e347a90d654dfb5369a85d1fd9d746ba",
".git/objects/87/1461b018e1dfd4ba886338e696ec098919c185": "abf62281f544c2c216b33a791cd7b9ad",
".git/objects/8f/580cff6476f6f4647bbf48f7783ae3b7f0191e": "eefda26b2f4183ddba3da0ede380094a",
".git/objects/21/2413f5221cd6be2bc31a3ecff258834ae3061b": "31fa5a482a8276b01ce8d9b775600d8d",
".git/objects/88/424471dd0236a84612a5ef52acd2ac12b0d64c": "4cbb57606e76387b260c3e02e501a43b",
".git/objects/07/39ce9788de1e77b390bfbf631e260bb6b50cca": "d170261957d10eb8b8979b9e25351012",
".git/objects/5e/38c446e333b240218ab728194b5887845b893e": "ffd130598f8a9efe80c74b0ce2ab4a9e",
".git/objects/5b/5815e6ef62678b803fa8c4ead9bec1678b14ed": "31673e0e60614cc51790842222a83f38",
".git/objects/99/073486ce429487e71b1a6127d83e760300f1df": "d75d8fe8811a0c5e2ee550a8a967d212",
".git/objects/55/c31cea110822c3942b27a95762f8f01c50275a": "7ef280bad57bfcbf158d5a63e144158d",
".git/objects/b6/2503129ac17501505b06fcc7a9e38ac1fb50d2": "3cc29ef3c97c72958caff7fd68f588ad",
".git/objects/de/d8cfc5a05079557a1f5dd569707e4cfc80889e": "0396d148d13a281d565615f7f7084b70",
".git/objects/a6/4e86695cac24c5d16adc5590353303bad457f8": "cab3f3a3a4dcc094269df094c4d8a3a0",
".git/objects/a1/d278368930fc1d6278c4500dc3326b73783726": "aa76d6e264bb49186dc5c18af55d1fdf",
".git/objects/c4/3bffe81b19467ae94e83d3c7d4afdc1880173c": "ca5860df5f9e35d3bda0a922fb63a970",
".git/objects/f8/c35c02a1ce6cd8f6ed25714dbfd9b063202422": "c6431f32838aabb69b17489a2f7b1c25",
".git/objects/2d/ee65d1859f8aab7caf4f631e347ddea7b85322": "907ea770b04ed960804d0aeba0b6bf30",
".git/objects/83/a816599573b9fa0ac7e663b0d9ce4af77c6767": "99dfcbb2bfe5c535a577e6d81e957dc6",
".git/objects/1b/d31263432f667aa1ae3414f9b714352314e697": "d1193aada5d26770ddc4278d8ac583b2",
".git/objects/77/da3c3bf9169d64b735a429eb8f50a87914cae3": "0bac15691ed4a3e521666131abb9dc83",
".git/objects/8c/47abac99243d51e9c0806cb2608600ec57a900": "51619f3572d1b88f2157cc5a1bb479d9",
".git/objects/8e/fcd1e67e39e166d30ae06493822f72e35b3285": "b4963d5926c97993eee2afcf60ae8337",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "041f10fbc89dbc27ae77dd7d9d827065",
".git/logs/refs/heads/master": "041f10fbc89dbc27ae77dd7d9d827065",
".git/logs/refs/remotes/origin/HEAD": "6f0b91ddadd4b32d7c057f624a8246fd",
".git/logs/refs/remotes/origin/master": "1896caed81b6498d63225fe84aca1c63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d5646cb3d149ddcf0ff6f9fd2c44ed10",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d5646cb3d149ddcf0ff6f9fd2c44ed10",
".git/index": "54a623997245027109322dc3784797c6",
".git/packed-refs": "4bccd5c86e01bb4c0686dcda1602bc0f",
".git/COMMIT_EDITMSG": "54d8333d2977657b4f5719bbfb843948",
".git/FETCH_HEAD": "dee5a48f0e1cce25e09a99b808e28afd",
"assets/shorebird.yaml": "f93d3bc37ce4fbce065d2c4c7a80b72b",
"assets/NOTICES": "b6dd2c1bd6deb67ba832a3c7d0fa53cf",
"assets/FontManifest.json": "0d25890c4773211e1d789fae45b1ccc7",
"assets/AssetManifest.bin.json": "da3fc557040fe4cd97f8022afa59dfe6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ba48c581632f6e5f19ab016e1b72350d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7fbeceab7e3ef9c4ba0731f96bcb479f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d6d545f8aa334a0cd79ca15193e7e83a",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "ddf49460afa673c4d9d58a1a6a6da59e",
"assets/fonts/MaterialIcons-Regular.otf": "aa5ced347cd2940ba8285b973bcaae09",
"assets/assets/images/taxi_button.jpg": "89880a3b41624a1fd0cf28bf4f79f692",
"assets/assets/images/navIconWithName.png": "58cd9c0e8ab3f73ae9773201b3359b4a",
"assets/assets/images/navIcon.png": "fcd62129d3e5edcab26085a73607314f",
"assets/assets/images/logov2.png": "9338d9dd16867b1e0cf51c6498162bd5",
"assets/assets/images/logo.png": "b599ac4cd4f34f1ff721bd5d34b5ae3b",
"assets/assets/images/notif.mp3": "96baa0bc02c7d4bae27abb1d75d70edb",
"assets/assets/images/simul2.png": "047a64d066a22196773a09bce65776f1",
"assets/assets/sounds/dispatch_alt2.mp3": "fa81158f918629f36ca70c203171329e",
"assets/assets/sounds/dispatch_alt1.mp3": "39a676ee21ee4608e61597979e28c85d",
"assets/assets/sounds/notif.mp3": "96baa0bc02c7d4bae27abb1d75d70edb",
"assets/assets/fonts/Urbanist-Bold.ttf": "f1be12677cd5a989d8851a7743ea9b9e",
"assets/assets/fonts/Urbanist-Regular.ttf": "40b401cd8b8d6dc564119975375d0111",
"assets/assets/fonts/Urbanist-Medium.ttf": "b772c045777ba8193439cd080d580285",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
