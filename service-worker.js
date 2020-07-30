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
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/018f96d6.jpg",
    "revision": "018f96d6bda6d3444ede2d7f563f55eb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/02ed1a49.jpg",
    "revision": "02ed1a497792b6d8b40796a819f1dadb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/041ceaaa.jpg",
    "revision": "041ceaaa3debf8203d5633b669b14faf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/04646f6f.jpg",
    "revision": "04646f6f265db4f283b109cfb4060ab2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/04ed6c2b.jpg",
    "revision": "04ed6c2b24cd443df2edb8f9536e1a00"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/05549486.jpg",
    "revision": "05549486d140fedeaf0c3c6e3cdc1480"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/05a47fca.jpg",
    "revision": "05a47fca62f02c6d079a53061c9cb6e4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/05b7896a.jpg",
    "revision": "05b7896a09aaccdcff2cef671fe8050e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/06c9fe01.jpg",
    "revision": "06c9fe0163a08a87925b318aa55938c9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/083e01bf.gif",
    "revision": "083e01bf10d52a15d3b39fda272d3af9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/093399be.png",
    "revision": "093399be3e1eb9cbfa5efc2cd8ced160"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0c362fe4.jpg",
    "revision": "0c362fe4b42ecd68f46fe83fe8694e7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0d03009b.jpg",
    "revision": "0d03009b6db7d20fd95ddd1e535c6baa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0d89725d.png",
    "revision": "0d89725da654387aba980bd9c20d8c26"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0e0989a9.jpg",
    "revision": "0e0989a98573c446204a389646ee48ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0e719d32.jpg",
    "revision": "0e719d3259219bb6e4cd6752d83da88c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0ef0f6f9.png",
    "revision": "0ef0f6f9a07071b91c709ec17775b707"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/0f61102f.gif",
    "revision": "0f61102f9301a47c3a70b34d2092cab1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/11383451.jpg",
    "revision": "11383451e1257fd38422173943c4ae25"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/11791e0f.jpg",
    "revision": "11791e0fdcb698b4f9448ec6d6c4aac6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/11840f95.jpg",
    "revision": "11840f953a7f9fec8efbe0679901e80a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1228eaa7.jpg",
    "revision": "1228eaa786deea100720090efc736378"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/147db0cb.jpg",
    "revision": "147db0cba349c922df0895ea176a6db6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/14b201b5.jpg",
    "revision": "14b201b5ef3c25c55d1a5465fa89af24"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1572d329.gif",
    "revision": "1572d329248199b7d432c098e575af90"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/159656db.png",
    "revision": "159656dbf182d53c98a21bbb2ad3dc32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1a1c8fc6.jpg",
    "revision": "1a1c8fc6fb566ca99c91cd9366dab4e1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1a6787d1.jpg",
    "revision": "1a6787d187bbff341166de28e6c0f858"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1ac5b005.jpg",
    "revision": "1ac5b005b4ee0db39f3519acfd2b890f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1b20c90b.jpg",
    "revision": "1b20c90bf45636f433a630104cf3af58"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/1b37d363.jpg",
    "revision": "1b37d363cd7b03c312c64dfd0a18fe16"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/20dc93e0.gif",
    "revision": "20dc93e0c3b55c9037ca243add5144b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/21dedbf1.gif",
    "revision": "21dedbf1e72415263f6aade2fda38aa9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/2461a0ac.jpg",
    "revision": "2461a0accc6a1e87113329f730b6ace8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/253a5d0f.jpg",
    "revision": "253a5d0f0d3a5266eb475edd321776a3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/25db26bd.jpg",
    "revision": "25db26bd010a0698524a3bcbd1732f6a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/296ded96.gif",
    "revision": "296ded9686cb596ffee672ffc128da12"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/2b960291.jpg",
    "revision": "2b960291dfdbbe7324ee94c1b71f9e0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/2bf475a5.jpg",
    "revision": "2bf475a57aba0ba1dd3a7e285390cafb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/2c7e778e.jpg",
    "revision": "2c7e778e8c0becaa5166e011d2e578aa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/2e9acf66.jpg",
    "revision": "2e9acf66636ddd5a3c58a43f1b8a037b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/2fa552bd.gif",
    "revision": "2fa552bde38f5e5dfaa7150ec22ce5da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/30a81e76.png",
    "revision": "30a81e76162516f1e2f98edcac228dbc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3201809f.gif",
    "revision": "3201809f23c0b41d99ab06d7a9d85d0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/33d71e0a.jpg",
    "revision": "33d71e0a3719b666f859446ba92166c8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/362bb868.jpg",
    "revision": "362bb86884f3896a25c9fee75c73b40e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/37bd533b.jpg",
    "revision": "37bd533b42e878036452eb26f05f411f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/37be47a5.png",
    "revision": "37be47a571cb5a35524091784fb33391"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3809309e.png",
    "revision": "3809309e23df054ee1d6d42490b51f53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/39355032.png",
    "revision": "39355032dec73749bb82f8c64541a28e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/39946d67.gif",
    "revision": "39946d678246fba63503db18a49edae5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3a49e43c.jpg",
    "revision": "3a49e43cd5f030d9ee5aedc6922e2cdf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3b3f7717.png",
    "revision": "3b3f77171e03dbe619890acf124e5c20"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3cce6e39.jpg",
    "revision": "3cce6e399a9ce1344e841283cf20b2ce"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3eae93c6.jpg",
    "revision": "3eae93c619f6332b1e63534bacc3138f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3eda5685.jpg",
    "revision": "3eda5685194a4cfb2ee585378a8b69f7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/3ff8df20.jpg",
    "revision": "3ff8df209897a981d11e23d6a288c619"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/42551915.jpg",
    "revision": "425519157db3792e7eecd471f517c500"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4414ad5a.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/44a2660b.jpg",
    "revision": "44a2660b1c73e7ac9d8d131c412d3c61"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/45a831e1.gif",
    "revision": "45a831e1705a3f502a57b25f26e048f0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4783cd62.jpg",
    "revision": "4783cd6265dd7a2711e48d5c7013299a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/47d5b5d1.jpg",
    "revision": "47d5b5d15c33489020cf2957f730d78b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/481fb760.jpg",
    "revision": "481fb760fca770be1e8d78f48a708c5f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/483fc064.jpg",
    "revision": "483fc064afd612464c1e9bc9cff889d6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4859be81.png",
    "revision": "4859be81af4c001dad06c50940351e0e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/489e862e.jpg",
    "revision": "489e862ef913cf390195ad07c65a7cda"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/48baf7c9.jpg",
    "revision": "48baf7c915f4fe6ba6151caca356dcb8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/48bf56c0.jpg",
    "revision": "48bf56c06b2929dd0a2f449072c38327"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/490a7acc.jpg",
    "revision": "490a7acc98b7e9eef5a2a5502cd229f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4ae42d01.gif",
    "revision": "4ae42d0137cb624b74ce590e4bc7195e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4afb267e.jpg",
    "revision": "4afb267e28affa56e0f44fd10c617f50"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4b02da3f.jpg",
    "revision": "4b02da3f8bf8fb102f1918e85392da26"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4c59ed55.png",
    "revision": "4c59ed554e662dd22dcdef0d940cd125"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4cdcbe60.jpg",
    "revision": "4cdcbe60f9367bfc340f6ee70ce21229"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4cef7f3f.jpg",
    "revision": "4cef7f3f35a6d30dae3a2d06ee94ccb4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4d2816c2.gif",
    "revision": "4d2816c27963b95978aa963034509984"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4dcb9579.png",
    "revision": "4dcb9579f76eb932194d3b722e64fe10"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4f92350f.jpg",
    "revision": "4f92350f96782728e921acbeac11c8f8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/4ffd7515.jpg",
    "revision": "4ffd75154b8dd634b5f537753a3e7a54"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/51b97597.jpg",
    "revision": "51b975977d248c291acc5a3a99e9777d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/53b1e317.jpg",
    "revision": "53b1e317080e08681bfff6f594dd418f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/53e5ec88.jpg",
    "revision": "53e5ec8852e790d5c4f216118cc83685"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/551f0f9e.jpg",
    "revision": "551f0f9e6df84752af0c96b2c775ae87"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/553d69c1.jpg",
    "revision": "553d69c1b6fa425def125b2afad09e01"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/569e2d74.jpg",
    "revision": "569e2d742ad17586fefb687e1dc6cd53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/56a7d567.jpg",
    "revision": "56a7d5673426d52314d7e7144add9e52"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/575f85ba.jpg",
    "revision": "575f85ba5185f054ad3d9d6717f07414"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/57659483.jpg",
    "revision": "57659483b1436b69173f7d3f6b8cb87d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/578cc7b2.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/57b691cb.png",
    "revision": "57b691cb9e655621d2fc7a6113972354"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/583ddb7d.jpg",
    "revision": "583ddb7d308531e2c98daf7d195ebf99"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/58f2a7dd.jpg",
    "revision": "58f2a7ddd319a0dfddc3e1490f6a104e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/58f6e058.jpg",
    "revision": "58f6e058cce353fe30024b72b1b708d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5940c806.jpg",
    "revision": "5940c8064a2d477bccf867e9f08ca722"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5ae82fbd.jpg",
    "revision": "5ae82fbdc3b51b49239ddf2e93b9ec6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5b1b6ac0.jpg",
    "revision": "5b1b6ac0be8858a6e243274a7a94b676"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5c7fe539.jpg",
    "revision": "5c7fe53928473bc45b6d155d52c3fe40"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5ca29b50.jpg",
    "revision": "5ca29b500f68470496424ba4b3e0ad5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5d2e75ca.jpg",
    "revision": "5d2e75cac965cbd8698c479033b2ad57"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5d4151bc.jpg",
    "revision": "5d4151bc45388455b890dd3456227321"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/5def0f7c.jpg",
    "revision": "5def0f7c988f49e94f3f633401e19d5c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/6083c4cb.jpg",
    "revision": "6083c4cbdbd9a57f7bdc9483285b9420"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/6115a27a.jpg",
    "revision": "6115a27af09b0d799b6592e179dcb89c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/615dc1d2.jpg",
    "revision": "615dc1d2c6da87177d49f35ece84be17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/61ac0f84.png",
    "revision": "61ac0f842db5b157678fa31b57be1bd4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/637551ba.jpg",
    "revision": "637551ba76ed5788522a55ee000e286c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/642b5d25.jpg",
    "revision": "642b5d258b794657aef0d7b874da7702"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/643b78c6.jpg",
    "revision": "643b78c60e95897f3b2673a0195c8378"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/654096e8.png",
    "revision": "654096e8de98af70bfbb4bd1a82f5da3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/668a5c98.jpg",
    "revision": "668a5c9845ea4544361d1059b8fa8c33"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/67e3928e.jpg",
    "revision": "67e3928e342ad16dcc9eb88e8a3f689e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/689f71f4.jpg",
    "revision": "689f71f4448ab26e6d298298eb7297d7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/6ac221d4.jpg",
    "revision": "6ac221d47887835042559366b7961a73"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/6e310936.png",
    "revision": "6e31093651c15d3797279592c8da47c4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/6f0ba53a.gif",
    "revision": "6f0ba53aacfc6bad85e034b7a8802cef"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/71de3f63.jpg",
    "revision": "71de3f63181b815c7f390158402f9e7f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/72079327.jpg",
    "revision": "7207932702cb81138b9f86520745e521"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/73667c08.jpg",
    "revision": "73667c0834d8756cf1781e01745ef365"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/73f35009.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/76e5b4ae.jpg",
    "revision": "76e5b4ae72849a943d2ba95aa672d481"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/76f427d6.jpg",
    "revision": "76f427d61ccf06b2f063541f34c21142"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/77f3204b.jpg",
    "revision": "77f3204b08ea0c7a76126fb1ebac798b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7ab7d72e.jpg",
    "revision": "7ab7d72e8df91f4f6f267ea2a77d1ba6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7cdcaae0.jpg",
    "revision": "7cdcaae070246d120e4efe3ea6cf3f05"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7d60ae1c.png",
    "revision": "7d60ae1cff4eb3faa81bb9d38e7946da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7e3512ad.jpg",
    "revision": "7e3512adf0c935ffbbd28325b24912ef"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7f8a03c1.jpg",
    "revision": "7f8a03c14f88f9dd14914615549fa70b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7fc0381a.jpg",
    "revision": "7fc0381a5d020c758b2e83d95e03a57f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7fc586c9.png",
    "revision": "7fc586c90ee296584f44f93d141a0d3c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/7fdd6a40.jpg",
    "revision": "7fdd6a401321fdac0f2026515ad31977"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/80b6716c.jpg",
    "revision": "80b6716c83e2a2f02a5fe6947743abb8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/81545084.jpg",
    "revision": "81545084257ee04b9d2a9241cb5c36ae"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8404eb56.gif",
    "revision": "8404eb565dbc414ee858ed8b63c7b2c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/84eff724.jpg",
    "revision": "84eff7245da5ff22fc41ac3593f8d394"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8742a3c5.gif",
    "revision": "8742a3c536746c5bd90e7745d2a0f6b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8841b748.jpg",
    "revision": "8841b7482d6a748f7429d1fb7b36fdbb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8872ceba.png",
    "revision": "8872cebaa38210eb9f0c09f6e2da677a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/895cccaa.jpg",
    "revision": "895cccaad19398f202f646811fffc461"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8a199b32.jpg",
    "revision": "8a199b32c3126988e4a963b60050b0e3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8b3e85fa.gif",
    "revision": "8b3e85fa5ad3d3553afd3297f82a17a1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8bde8485.jpg",
    "revision": "8bde848522d7f653b0f57b63b2549164"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8d23f27a.jpg",
    "revision": "8d23f27af18555e3d8cab0acb165fb91"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8d50d990.png",
    "revision": "8d50d990b40f6877f372ee24e24b7a71"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/8f004009.jpg",
    "revision": "8f004009e37b470b2f93abf368fde70f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/90daba5e.jpg",
    "revision": "90daba5e97fd4f8128c98059d7b5fa59"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/92ec5f2e.jpg",
    "revision": "92ec5f2effee2471970f1d7fc995379b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/94b7514b.jpg",
    "revision": "94b7514b9ed260361d7070afc14d318b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/955ce5db.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/9637739f.jpg",
    "revision": "9637739f40f8ef092ac7f09d83608556"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/983fc73d.jpg",
    "revision": "983fc73d5e8fc8c46b12a892742f627c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/9a818f79.jpg",
    "revision": "9a818f793ace8b40edfc94de2cd143ee"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/9afa1de1.png",
    "revision": "9afa1de173164d7f03c112eff7d145b8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/9d044541.jpg",
    "revision": "9d04454158b57171c61d9100c6a267f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/9fbba4fc.jpg",
    "revision": "9fbba4fc085f0c12ce003c62f99ac497"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a2b2c77a.jpg",
    "revision": "a2b2c77ac2f3ab8f9c88fbcb5c1e502c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a436304c.jpg",
    "revision": "a436304c7db7c5910c1941b964132b51"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a4842c23.jpg",
    "revision": "a4842c23b79f750ef8ce8c344ca37e50"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a59b074f.png",
    "revision": "a59b074f08dd5b7e0ceb510e00c3b3d2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a7b63d7c.jpg",
    "revision": "a7b63d7cd3692369a7ce954f5d391a0b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a95c108a.jpg",
    "revision": "a95c108a66e2ec773336105f3e937c4e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/a9993265.jpg",
    "revision": "a99932656a7214075016317c2516b3d7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/adfa3854.jpg",
    "revision": "adfa3854c67f0f2d187b27ad4799f47c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/af730268.gif",
    "revision": "af7302689b03adf2b40db51f4cbd34fb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/b0b80e5e.jpg",
    "revision": "b0b80e5efb28676cfc2d92b4d1aad625"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/b13f8f7e.png",
    "revision": "b13f8f7e79796052b8f83cf65c1b0695"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/b37736b9.jpg",
    "revision": "b37736b9443c065025bf1d5de716b35e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/b3bedc6a.jpg",
    "revision": "b3bedc6aeb1c97d0dae40068b0259fc0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/b767bb82.jpg",
    "revision": "b767bb82d20cd4ff863ca4d82ad74c31"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/baf34344.png",
    "revision": "baf343445710e0d93761999cc90467c5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/bba51152.gif",
    "revision": "bba511525469ecdf84b769317150ce58"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/bba674d6.jpg",
    "revision": "bba674d6ff1e190058e4c167a6764895"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/bc315c96.jpg",
    "revision": "bc315c9604eacef337bf754ca0ff2fa1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/bdc82ad8.jpg",
    "revision": "bdc82ad8ac399fcfb16fa5fd81b9dedf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/be954e48.jpg",
    "revision": "be954e489fa4e2ead36a2d6add3a8baf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/bef797a4.jpg",
    "revision": "bef797a48201143b6a84b2207d8527d4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c16dd9a7.jpg",
    "revision": "c16dd9a75e047fcc1f38006193cbb270"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c47a56cc.jpg",
    "revision": "c47a56cc30880c2e7a0a875e73517782"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c57c6d6a.jpg",
    "revision": "c57c6d6a5db0283b420148e957646c5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c69a1570.jpg",
    "revision": "c69a1570b01fdcef34d5c2da7053a23e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c7b197ca.jpg",
    "revision": "c7b197cadf2db69ffc01ae79dfc325de"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c86d9406.png",
    "revision": "c86d9406066538f63a504d1e0deecae4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c8b9df6b.jpg",
    "revision": "c8b9df6b376c996315b1fc516673b15e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/c9bc1e0e.png",
    "revision": "c9bc1e0ee16c3e0061500946f4b90b86"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/ca6b9f78.jpg",
    "revision": "ca6b9f783c05cd8b4354774c8e935688"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/cae213a2.jpg",
    "revision": "cae213a23a60db461b2e4e842a6e50dc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/cc924f25.gif",
    "revision": "cc924f2553167f9162750397baa8a673"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/cca6f9b2.jpg",
    "revision": "cca6f9b2ac0a85fcdb348cf14d8530a9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/cd9926f4.jpg",
    "revision": "cd9926f4f4f1ee56f8eab04302284398"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/cdc702ef.jpg",
    "revision": "cdc702ef13c0875812d718887d32a8ff"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/cdd629bf.jpg",
    "revision": "cdd629bf8022629d5bb2e1ec2afeb605"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d11f548f.jpg",
    "revision": "d11f548fab0753dd23028cf9a82b0c65"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d2e5689b.jpg",
    "revision": "d2e5689b7fe6c3d22e4743ebb6b5fb59"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d4e5f113.jpg",
    "revision": "d4e5f1131c2d81139a90246c4e44a685"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d60bfcd6.jpg",
    "revision": "d60bfcd659068bab13b14383de7166ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d6500022.jpg",
    "revision": "d650002251bd89c26a79941679d61e5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d6e4f326.jpg",
    "revision": "d6e4f326edbf64748902277097e70a1f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d7a56af3.jpg",
    "revision": "d7a56af3ce16c2fe944b72a51d6b332d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d8c83669.jpg",
    "revision": "d8c8366968e7413ec593250fa7085a55"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d960eea9.jpg",
    "revision": "d960eea99450afc31c4e389a1c8ca73e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d97d9086.jpg",
    "revision": "d97d90865c5c36521daa5ae351fbb11a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/d9f1f056.jpg",
    "revision": "d9f1f0567375fc5e75a9f2e8842522b8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/da789016.jpg",
    "revision": "da789016360cc226720b74c846f51b46"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/dbb54130.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/de5bf508.jpg",
    "revision": "de5bf508a5a404e9f890d67fc4b59a32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/deeb195b.jpg",
    "revision": "deeb195b40bc64db8e64940cdb5b4853"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/e0e9b576.jpg",
    "revision": "e0e9b57649a109d78c52f4fe93236a7e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/e3618fa9.jpg",
    "revision": "e3618fa962300c00c3c68fbbd2bc9b8b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/e4e485cc.jpg",
    "revision": "e4e485cc75367a8e6ba846b8f7bfd22e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/e65e6c39.gif",
    "revision": "e65e6c39f57759b7fc6809d03bf07b17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/eb8c4b4c.jpg",
    "revision": "eb8c4b4cb30f78ff1e17a00cfb94de6b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/ec07d37b.jpg",
    "revision": "ec07d37b598e3371c72fd7ca558d822d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/ececfffa.jpg",
    "revision": "ececfffaf567a47e39ee1a066a6f2e8c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/ed760a18.jpg",
    "revision": "ed760a180246de32e6092acfff3f6e5b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/edacf3dc.jpg",
    "revision": "edacf3dcae97c6fa6b17c2d3a36c05b5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/edbafa7e.png",
    "revision": "edbafa7ed70d583aae23f2786198db0a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/ef97171f.jpg",
    "revision": "ef97171f8c7b3b7c1016f63047bbf8c0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f023b1bb.jpg",
    "revision": "f023b1bb4846c8785468ef542063316d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f14a424a.jpg",
    "revision": "f14a424af161aef0f90de93f4e650b7f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f26f5e41.jpg",
    "revision": "f26f5e41505b805a5099b7c20b736200"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f3afaf48.jpg",
    "revision": "f3afaf4870d125c43567fb4b349773da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f412eb91.jpg",
    "revision": "f412eb91a33fcb0dc88d64975d166b97"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f44ab094.jpg",
    "revision": "f44ab094df1d447b345ba29960a9c210"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f4834dce.jpg",
    "revision": "f4834dce63f19a0bbdf81d423c3e0e45"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f512d6af.jpg",
    "revision": "f512d6af493c26b648bc710d3da151ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f8e2999c.jpg",
    "revision": "f8e2999c1df9bcc78f7dbba9b9e18206"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/f97f7861.jpg",
    "revision": "f97f78611d6227a6d6c98e2190bb0d6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/fbe2e25c.jpg",
    "revision": "fbe2e25c217327d3d2a821467b784dc0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/fbe52e2d.jpg",
    "revision": "fbe52e2d74b08b4467ce01cfc7ba034b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/fbea5aec.jpg",
    "revision": "fbea5aec700e793e3b5f3141d23557ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/fc689753.jpg",
    "revision": "fc6897534ddd26b0db877594fc72bf57"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/fe31abc8.jpg",
    "revision": "fe31abc86edd516f83722c71785e0261"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/a/i/ffb52990.jpg",
    "revision": "ffb529903d395a671e910d78dee015cc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/0.styles.abf361b8.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/1.styles.d9f975ae.css",
    "revision": "ea5030e3cebf6b42c4016f101cbc31d0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/10.styles.c4ec8f2b.css",
    "revision": "09bce7ebeb8b278e641f8e358307294a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/11.styles.cbac38ba.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/12.styles.fc1b8f7a.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/13.styles.306e22c0.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/14.styles.5b274a58.css",
    "revision": "86e463286683c49c2c08b770630cb28c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/15.styles.d39536c5.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/16.styles.ac0e0588.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/17.styles.50e25b09.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/18.styles.06a03038.css",
    "revision": "ee0b8df651aef52db64f5fbb36c8ebb1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/19.styles.403a835d.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/2.styles.0166b3cd.css",
    "revision": "2f64960dbe89b3d728c1f841cf7f37ca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/20.styles.d8cacd83.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/21.styles.115fd9c5.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/22.styles.774465fa.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/23.styles.717ec249.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/24.styles.dba9df44.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/25.styles.46318752.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/26.styles.e4a36458.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/27.styles.bb016ee2.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/3.styles.91f34748.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/31.styles.6689c0fb.css",
    "revision": "f5d64962e6cf9eeec19dfa10b403b9c2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/4.styles.8bf07793.css",
    "revision": "bd33d9448b225cff24ecb4995c9cb6bf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/6.styles.25295ca4.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/7.styles.8d5e697f.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/styles.83038f4e.css",
    "revision": "ec5df45d1b1e8487c0642d025e29cd6e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/nuochong.62dd1db9.ttf",
    "revision": "62dd1db92021295bdb2805e95b02e476"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/nuochong.79e4088b.eot",
    "revision": "79e4088be0be8c6300e32b62524ee2f4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/nuochong.e502b610.woff",
    "revision": "e502b6101ed056d1ea71b8061f11cda0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/autores/nuochong.png",
    "revision": "baf343445710e0d93761999cc90467c5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-chrome-192x192.png",
    "revision": "8c0281163800ff1ad83a05f043b97722"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-chrome-512x512.png",
    "revision": "2b6246ea922b7b03c0af8dc70b6815a9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-192x192.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-36x36.png",
    "revision": "7243fbd3f15500638752cc2c080c0643"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-48x48.png",
    "revision": "28f681e29955398e22e8febbd510557a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-72x72.png",
    "revision": "41191dc8c7fb62f4c7f00e6fb036ff2b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-96x96.png",
    "revision": "9f2d4e0c5c147ec6418c87a9ded56b7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-114x114.png",
    "revision": "f8fddabcc40b2dfb1644f9fe98e5b325"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-120x120.png",
    "revision": "758e7164bba2b4c2ff071d829add67cf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-152x152.png",
    "revision": "32b4a25c2b866d5f5cbdefbaea9d9745"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-180x180.png",
    "revision": "f8b8c060fccabfbfbf28ffe35ca30163"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-57x57.png",
    "revision": "03bd68feb0a330becd03ac3d7cac4ef2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-60x60.png",
    "revision": "48d3bfea3eb10bf359e1bc631ff05d05"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-72x72.png",
    "revision": "41191dc8c7fb62f4c7f00e6fb036ff2b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-76x76.png",
    "revision": "71d292012ea7ad6e2412c2636a098675"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-precomposed.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-120x120.png",
    "revision": "abc32381e9212668447d9397c6950705"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-152x152.png",
    "revision": "e4b80289303a1333343bd29ae4e50a7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-180x180.png",
    "revision": "f35c2d671681642add62a85a0d93230d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-60x60.png",
    "revision": "d88d5f6f142035e75b490164beeb5e30"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-76x76.png",
    "revision": "7d5cd0a0fa1eb6cb5ad340208b6adfdb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon.png",
    "revision": "f35c2d671681642add62a85a0d93230d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/favicon-16x16.png",
    "revision": "1c01a2b344fb20661ff638ddbd0c9123"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/favicon-32x32.png",
    "revision": "0ce15980034dcd586481cc56d1561316"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/favicon-96x96.png",
    "revision": "9f2d4e0c5c147ec6418c87a9ded56b7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-150x150.png",
    "revision": "4f8a49044d84c5b4dc2b22ccef698554"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-310x310.png",
    "revision": "66fa31225664e0099c105a8d19cfee29"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-70x70.png",
    "revision": "4526f94a4e31854bca77a44d6c5c0bc4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/msapplication-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/mstile-150x150.png",
    "revision": "912a2b4912dffcd93ef62167bae738e4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/01-small.jpg",
    "revision": "a7b63d7cd3692369a7ce954f5d391a0b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/02-small.jpg",
    "revision": "d11f548fab0753dd23028cf9a82b0c65"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/03-small.jpg",
    "revision": "3eae93c619f6332b1e63534bacc3138f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/04-small.jpg",
    "revision": "1228eaa786deea100720090efc736378"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/05-small.jpg",
    "revision": "2b960291dfdbbe7324ee94c1b71f9e0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/06-small.jpg",
    "revision": "eb8c4b4cb30f78ff1e17a00cfb94de6b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/07-small.jpg",
    "revision": "615dc1d2c6da87177d49f35ece84be17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/08-small.jpg",
    "revision": "44a2660b1c73e7ac9d8d131c412d3c61"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/09-small.jpg",
    "revision": "80b6716c83e2a2f02a5fe6947743abb8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/10-small.jpg",
    "revision": "77f3204b08ea0c7a76126fb1ebac798b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/11-small.jpg",
    "revision": "33d71e0a3719b666f859446ba92166c8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/12-small.jpg",
    "revision": "c16dd9a75e047fcc1f38006193cbb270"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/13-small.jpg",
    "revision": "481fb760fca770be1e8d78f48a708c5f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/15-small.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/17-small.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/IMG_6992-small.jpg",
    "revision": "8841b7482d6a748f7429d1fb7b36fdbb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61002-165813-small.jpg",
    "revision": "7207932702cb81138b9f86520745e521"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61002-172720-small.jpg",
    "revision": "e0e9b57649a109d78c52f4fe93236a7e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61003-055845-small.jpg",
    "revision": "a95c108a66e2ec773336105f3e937c4e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61003-062909-small.jpg",
    "revision": "c7b197cadf2db69ffc01ae79dfc325de"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/2-small.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190210_122840-small.jpg",
    "revision": "02ed1a497792b6d8b40796a819f1dadb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190211_115351-small.jpg",
    "revision": "7fc0381a5d020c758b2e83d95e03a57f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190211_122735-small.jpg",
    "revision": "5ca29b500f68470496424ba4b3e0ad5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190212_170821-small.jpg",
    "revision": "489e862ef913cf390195ad07c65a7cda"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190213_112738_003-small.jpg",
    "revision": "25db26bd010a0698524a3bcbd1732f6a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190214_165923-small.jpg",
    "revision": "6083c4cbdbd9a57f7bdc9483285b9420"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/3-small.jpg",
    "revision": "fbea5aec700e793e3b5f3141d23557ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/4-small.jpg",
    "revision": "b37736b9443c065025bf1d5de716b35e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/5-small.jpg",
    "revision": "3eda5685194a4cfb2ee585378a8b69f7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/hometown/14-small.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/hometown/16-small.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-1.jpg",
    "revision": "bb91bd86e4918daf05976f294927cfa0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-2.jpg",
    "revision": "0e0989a98573c446204a389646ee48ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-3.jpg",
    "revision": "51b975977d248c291acc5a3a99e9777d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-4.jpg",
    "revision": "d7a56af3ce16c2fe944b72a51d6b332d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-1.jpg",
    "revision": "d9f1f0567375fc5e75a9f2e8842522b8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-2.jpg",
    "revision": "de5bf508a5a404e9f890d67fc4b59a32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-3.jpg",
    "revision": "8a199b32c3126988e4a963b60050b0e3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-4.jpg",
    "revision": "1a6787d187bbff341166de28e6c0f858"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-1.jpg",
    "revision": "cca6f9b2ac0a85fcdb348cf14d8530a9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-2.jpg",
    "revision": "4ffd75154b8dd634b5f537753a3e7a54"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-3.jpg",
    "revision": "5ae82fbdc3b51b49239ddf2e93b9ec6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-4.jpg",
    "revision": "2c6fccf80141265c0c78710eb06a5e96"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-5.jpg",
    "revision": "f512d6af493c26b648bc710d3da151ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-6.jpg",
    "revision": "48bf56c06b2929dd0a2f449072c38327"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-7.jpg",
    "revision": "3a49e43cd5f030d9ee5aedc6922e2cdf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-8.jpg",
    "revision": "06c9fe0163a08a87925b318aa55938c9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/single-image/5-1.jpg",
    "revision": "f8e2999c1df9bcc78f7dbba9b9e18206"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-1.jpg",
    "revision": "58f6e058cce353fe30024b72b1b708d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-2.jpg",
    "revision": "c47a56cc30880c2e7a0a875e73517782"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-3.jpg",
    "revision": "5940c8064a2d477bccf867e9f08ca722"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-4.jpg",
    "revision": "deeb195b40bc64db8e64940cdb5b4853"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/general/web-development.png",
    "revision": "6b0edf9a6ea1a74ca4153ea0252d37ab"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts-base/2018/8/my-first-post.png",
    "revision": "159656dbf182d53c98a21bbb2ad3dc32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts-base/2020/2/finally-have-a-nest.png",
    "revision": "30a81e76162516f1e2f98edcac228dbc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_320.png",
    "revision": "7d60ae1cff4eb3faa81bb9d38e7946da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_427.png",
    "revision": "c9bc1e0ee16c3e0061500946f4b90b86"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_524.png",
    "revision": "37be47a571cb5a35524091784fb33391"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_680.png",
    "revision": "6e31093651c15d3797279592c8da47c4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_320.png",
    "revision": "3809309e23df054ee1d6d42490b51f53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_427.png",
    "revision": "4dcb9579f76eb932194d3b722e64fe10"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_524.png",
    "revision": "654096e8de98af70bfbb4bd1a82f5da3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_680.png",
    "revision": "c86d9406066538f63a504d1e0deecae4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/fallback.png",
    "revision": "30b3fbf300209144862e9ff08c564168"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/ktquez-play-logo.png",
    "revision": "89f11077e7bdb3d4dcb168e734ecd54e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/ktquez-play-logo@2x.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/logo.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/banner-1xx.jpg",
    "revision": "2bf475a57aba0ba1dd3a7e285390cafb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/banner-2xx.jpg",
    "revision": "553d69c1b6fa425def125b2afad09e01"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/banner-3xx.jpg",
    "revision": "94b7514b9ed260361d7070afc14d318b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/blog-1x.png",
    "revision": "c11b7eeacf87ecba445150bfe00e96c4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/blog-3.png",
    "revision": "d79d2cd337e5ae3fdc03856924c0ed63"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/blog-4x.png",
    "revision": "58ef8b2436337cd812be5ab6a5608015"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/quote-1.png",
    "revision": "b4adc60d66045f747d4e52d1fb211a75"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/quote-2.png",
    "revision": "68d6a7fee1d2887618e2a18fa23ba1ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/side-arrows.png",
    "revision": "bab52160ea0d10fb154bff6657689df8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/social-sprit-bottom.png",
    "revision": "7361841cb56ba3c7ec048561b6c662d6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/social-sprit.png",
    "revision": "ad84eea44d6006598269e12e4ab7fe96"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/social/image-social-share-en.png",
    "revision": "b13f8f7e79796052b8f83cf65c1b0695"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/social/image-social-share-zh.png",
    "revision": "61ac0f842db5b157678fa31b57be1bd4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/social/image-social-share.png",
    "revision": "a59b074f08dd5b7e0ceb510e00c3b3d2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/music/ding.mp3",
    "revision": "4dd02c4eddb635d48e39f920ac4beab4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/music/elevator.mp3",
    "revision": "a41b4d171e7c3f51998da1601d833a53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/locales/en/manifest.json",
    "revision": "13ca69bc48609f4446b596a2c837c4ce"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/locales/zh/manifest.json",
    "revision": "0bb79767e4d186f98549a2345df04139"
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
