/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6fb4eee6f563d7943b8f0eb764b18c65"
  },
  {
    "url": "annotations.html",
    "revision": "8cc826f896159b12ecea2a5514a169e0"
  },
  {
    "url": "assets/css/0.styles.12f75f35.css",
    "revision": "804ea70da9affe96036f9c24fced917a"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.5f71d4e0.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.f9804cb9.js",
    "revision": "63fbfe21289527887e78c4d761c1574e"
  },
  {
    "url": "assets/js/12.dd4e6721.js",
    "revision": "11e3f1c6a2cf29da893f9d1fe24d5c06"
  },
  {
    "url": "assets/js/13.97c97053.js",
    "revision": "c6ebe6c4ff7b641decf29dc5a91d2605"
  },
  {
    "url": "assets/js/14.32f3e234.js",
    "revision": "edc8abbdaa569c8b6803b1fbfd658a04"
  },
  {
    "url": "assets/js/15.ae45480b.js",
    "revision": "364f99826344f09b1e06f78a0ea59a9e"
  },
  {
    "url": "assets/js/16.c48cd773.js",
    "revision": "5d0eebb7e2a203932d846fe6ea2ae1fc"
  },
  {
    "url": "assets/js/17.aac23d1d.js",
    "revision": "b2369ac95bbf4006efeed52fef0d8da6"
  },
  {
    "url": "assets/js/18.ba3bbc96.js",
    "revision": "add0d6c4939f4be34a74d2dac5261319"
  },
  {
    "url": "assets/js/19.5fdad3da.js",
    "revision": "04effd67c6081faaa4b0c6359c20a913"
  },
  {
    "url": "assets/js/2.ab57128e.js",
    "revision": "ba451933d5e22ba6a4d2f555b5dfe670"
  },
  {
    "url": "assets/js/20.1ec7435e.js",
    "revision": "3348d1c7ac48b9bb16f8a3aa28a0d30c"
  },
  {
    "url": "assets/js/21.9c01ab55.js",
    "revision": "68b6b6db07a6fb0de1b3c8954358b0c4"
  },
  {
    "url": "assets/js/22.730c95c0.js",
    "revision": "f91c01ec0097cb0bff80fc784b52d9cd"
  },
  {
    "url": "assets/js/23.85b8787d.js",
    "revision": "7749ec6c2b1ef846a7dc40956a55c1e9"
  },
  {
    "url": "assets/js/24.34f00647.js",
    "revision": "a80f708e817ef77ff2624fa0cc768197"
  },
  {
    "url": "assets/js/25.2ac38491.js",
    "revision": "b97e25e572694f43b0400fdc59c6ba4f"
  },
  {
    "url": "assets/js/26.dba59441.js",
    "revision": "75d9631cad38a7f4cf4773a3a6701dfc"
  },
  {
    "url": "assets/js/3.48469004.js",
    "revision": "fa5fe17d6d68f9695a55427e7be3f193"
  },
  {
    "url": "assets/js/4.031e9d49.js",
    "revision": "0e527dfb88cad497c83796bd9fa2f76c"
  },
  {
    "url": "assets/js/5.c2aa3cf6.js",
    "revision": "78c846ee6169769b75d7f2115011d925"
  },
  {
    "url": "assets/js/6.c07319d3.js",
    "revision": "0d65c98e84d4d7138dbb983f7cd4ff11"
  },
  {
    "url": "assets/js/7.f5776ab4.js",
    "revision": "c5501e96cf881b9c9276a82c1bced3ab"
  },
  {
    "url": "assets/js/8.04a6e67f.js",
    "revision": "4951536f70da24eb7216c6f2c8b9e3ef"
  },
  {
    "url": "assets/js/9.ef1ffe6d.js",
    "revision": "2137a8bbeedfe7cfb3a52c8760c15cf5"
  },
  {
    "url": "assets/js/app.e45f46db.js",
    "revision": "eead63c95663d3817c86b0ed26817835"
  },
  {
    "url": "authentication.html",
    "revision": "7d7fe54c9f950857e9daa9e3cedc05f6"
  },
  {
    "url": "decorators.html",
    "revision": "ccebbda17ee1196168ab62d5235e1a2b"
  },
  {
    "url": "descriptions.html",
    "revision": "cf6533bb4275ac2325a77c97187756f6"
  },
  {
    "url": "di.html",
    "revision": "70ffebca775177d6135b3c31deb40f7e"
  },
  {
    "url": "error-handling.html",
    "revision": "85a2bd48e762bf9aff9e870d681b4add"
  },
  {
    "url": "examples.html",
    "revision": "eb42dbcabe1ec84fc2dc038d50937dc5"
  },
  {
    "url": "faq.html",
    "revision": "a3c304c66d2bd4b40cd15f06e034b138"
  },
  {
    "url": "file-upload.html",
    "revision": "498bdd2ad5d89a98352f0c8488d5c03f"
  },
  {
    "url": "generating.html",
    "revision": "20179dd8280123a08168e765f2a828cb"
  },
  {
    "url": "getting-started.html",
    "revision": "518f6a479dadcb8c57c230b39d8e2737"
  },
  {
    "url": "index.html",
    "revision": "12423ddb70ffc52964eafef822738f21"
  },
  {
    "url": "introduction.html",
    "revision": "c6b6bd5884334a28d3c5c2ca823308e6"
  },
  {
    "url": "live-reloading.html",
    "revision": "b420beaf718a9805a9944fb7c7f48647"
  },
  {
    "url": "path-mapping.html",
    "revision": "b259724f20117e5781776dbc99bc7bb8"
  },
  {
    "url": "routes.html",
    "revision": "a31556e791ba5a0252352db9167c4b9f"
  },
  {
    "url": "templates.html",
    "revision": "f826913a0c0291fe0856796f051379a7"
  },
  {
    "url": "upgrading.html",
    "revision": "43d85a35af92a06c47671f9dae6a6b74"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
