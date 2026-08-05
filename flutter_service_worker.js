'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "c405ee4e42e44a990334af050fe72543",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bafb2488d20b32fc0851bf59e3c0f142",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3ef9695ca0c6df79f620b7e0636f766",
".git/logs/refs/heads/master": "b3ef9695ca0c6df79f620b7e0636f766",
".git/logs/refs/remotes/origin/master": "54a1c73b03f40b93b835c74663a5a36e",
".git/objects/04/f6aca271eff09072fa1268869d7403831e7c8f": "a2a680d10361b5a52bca8d5ef34c2772",
".git/objects/05/1617a27a9f2f7c7bdabbaabe92383536baf7ee": "565ec2632bf34ae5454b46213ad50171",
".git/objects/07/d3eedc19045c0bc177f1b37bfd2735a7600a00": "5f32b95659accb39ce994c933151ea3a",
".git/objects/0b/01dcc4b8067125af7fc2f9bf0e67c0da52ba2d": "e0bd373ab1882e24ab89cb4a2ed1068d",
".git/objects/0f/85362a376686b33c3e7387ef3e1f15c2661d3c": "8f1254a7316160c8d66c57fa30f4ef0a",
".git/objects/16/a2f0b5b829c9335e3361ee3075a8aaefb2aac6": "89ced419168ff9a64e3cd1aac8135233",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/6d5828bd565875fb71cf6fa908c1939bb357ca": "604470ffaf4f5830bda977d43b2d4542",
".git/objects/1f/34d049e83fdb904e634a7f20c6c1e6972f7587": "50a02e3e8c0f0a240b4ceb0e3424eea0",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/29/6c9108f7b354386d577b64b0c45561074bd5ff": "bacfc25fa3c0abf5ef57a364f756cd73",
".git/objects/2a/574981b0641af0531764d31c14cb035b64771f": "5c275028448d3533e6536848c4415e7d",
".git/objects/2c/9b8beeb782cb4355f1f0da2d876f14d991f6f8": "2b28c10a97c7591ebb501adea6bcb6a2",
".git/objects/2c/ade318dc33e9e0218787fc8eddd2f8b383e3f0": "43fc6c166c3c3ffcc2729f34917f624e",
".git/objects/2d/49642350842c27fc88ff90d6445eeda1766f7e": "627cb8a4e844bcc612ca2125e8f193fe",
".git/objects/2d/7c71b01744621c76a09551db47d407b5b43fe5": "4f1596456cadec94bdafea5925aaa1b6",
".git/objects/2e/1ea904dbb645c8e338f81359cb6378328f56d2": "f425783e8249060126b6ec6a49cf027a",
".git/objects/33/a2247fbf139dbcfb55d1ac681f1b4b8aa02e17": "50bb35f85be3392f355f940695a6184e",
".git/objects/34/52616cd49ab8583eee051a9eaf798d3f952770": "dac7c0c24cf325647f51f81f529de8c1",
".git/objects/3a/59a8cab2410ee4c5bb9823b39d402126b22a15": "8de572c44bfcd1d68182eddeecdb6d31",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/3f/b0694354f5f2586292bf1a92c6ebbdf6c43703": "a313ca38453d2b8959885079fdf42b72",
".git/objects/46/8de04f51adfa11a219f54ea0525c425bbbbe1e": "9d418b7bc31e2505d77db5e901be8246",
".git/objects/49/0dd5716c7c0c50b77e853040d134a83d77b5e6": "635b5a99f3a463d39949833a03b6515a",
".git/objects/49/8c41474cd0bcdc1491985ee4530e635007dd11": "e27bcc44831dec60099d44387c2bb753",
".git/objects/49/fd50f5be7af8185c76cf0240fff8614e772691": "238b2c4df9fde77c87dd683cb37628f9",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/52/46e8e729bbf976a67c3126f7f053f87ba3ef97": "c7526c2fc1a9419f544d38983cecaf5c",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/4b345d70207d408d135079c17670fcae008493": "902cc02f762a77db5e09b0646a5fb95d",
".git/objects/54/4382fc7762b812a5cd81946c5b804d22645d0c": "9fe63550bc5804a647e285b8b518092e",
".git/objects/5d/8dd8ab476e4bc9766af41d9ee0e183da2c15fe": "623917e5a7b6624a2c76879a23d75c08",
".git/objects/5f/803c3b65b7f7a5a3f52f40dd16290554c2a47c": "7c25ee1c41c7225171bae88ab81dc675",
".git/objects/61/1034d792bdb00ea6eac9ff4da26129916e8c6e": "6ca1c0050d5e7355139393d0f2eed580",
".git/objects/6a/79b70489202df584b3b1cf9df2cd8b33c4c698": "e60deea2e0e8d62203a0ac52bcc87b0d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/67f116c0e60b8b4350e237ad7425d5d87ccb83": "e69e25b65a49df0b6f2dfd02958b691d",
".git/objects/6e/efe64bd631eb1cb4006ef43abc4e4c309df138": "e015ada7be3f04bec1ae331a1e2c6ae8",
".git/objects/6f/11a0ec57edd7951729d12d263aab5155f78f1a": "1bb5ffd3e705b37ba86a0b0cf51c25df",
".git/objects/70/5da139e1e7ade474e2b710473873f7c62e60b8": "c6ec634f74fb31a04ecc42f68c42d808",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/14dde588d8be27b79f7ae946ed815f30dc7afb": "2626b85fd82e3d38f17300bc3b62b185",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/bd574f0556fc8556c8e6e5f22a06f2d619b808": "ecd0079158b31e9ddde880c89dbb2644",
".git/objects/78/2cbd1adbc17311c04e21ee6048afe33555ec33": "ee649063f0ae37795b76ba28bd94343f",
".git/objects/7a/53bd42e2bbe46780de633c76dda572f0211da4": "0f7a3cf9f1bbee814a8c40f41e090846",
".git/objects/82/1c176400f1ae20c04faeca6f27e7cae8d246e6": "ffee1d811bb1a2c60b1fc0d4b0aa4663",
".git/objects/83/7ca0c79041d7913ccbf5992314da422889ca3c": "bf8049c511ced64361c5f6b7df68bc5b",
".git/objects/89/f3a36772ea0bcc0f057c17d653514bc54d8807": "4655e143c235267c4784b4ec6a039323",
".git/objects/8a/3b687b845ba050462c77eb3c5ccfaf2c4d34e0": "1a1502d89ae3cf11d12fd13e94936c10",
".git/objects/8d/fcc58d256a4588b86c7966a46ba88c4edea7d7": "9965b45dbce44e1ceec92415a3521a0d",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/1d3ae9bbb09a1e04787c55dd3bd8a3a2a59ed5": "01af6fe1587e637cac72c3b8b568dcaf",
".git/objects/8f/ebab01da8a4212780896e2833455511bb8f1a6": "0961c39febef70e4dd98918b00a31d2b",
".git/objects/90/ec1f624ad8b545463c14b83584c0b28b4fd645": "225b50506e14ef32be4aeff19aee4e70",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/20f162d693de0154fa079885081bfea7dfaee2": "42eeb2e9624a4fabb7c31769c1a79665",
".git/objects/a5/0eae9f010911eea76165580903f5a8a77d263d": "86e3e387ea1bb5fc9289ffca6db6c628",
".git/objects/a8/9ac840151a2af7313939106e500d4feee7f246": "fde49d14ea1d8f000a9b2a7912c4392c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/be1890838ef870471ec5c2d1d719b2e6c835f2": "26ca966b6ed65c368501872164475a40",
".git/objects/ac/0d2b7e42954cba291d43b54353c6db464f59b3": "20b52890c1c0a7bc83fb1b30c2d24bd4",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/bfc41ca50b6941a8c229949cc259a7845d48fa": "e581906e3c3909cb246953da4baad118",
".git/objects/b0/febe7a08db54c53bb12959e7dd2834449898b3": "ad0865c8afcd19494c9c65e5df1e3c63",
".git/objects/b3/bb1066076791d72e6a44d4bb08872dbac40d93": "1f5f93607a1b5e816e1260fb39eaec6a",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/a5445f17f9b3511c74df89b60a5c55bf7b2a89": "714170a245214c0ea80beb45a51f0b1f",
".git/objects/bc/d82d0ecd6e50eafe19d3a875134eb74455a76c": "0880f4cdf5ded36a3d40a32f71de39a7",
".git/objects/bf/cbf93402857f4f6869bd2ee0cb8fb2402784ba": "e01c02aa5f30528d48bd5c7048b904eb",
".git/objects/c1/2d4b0e72bde4d78af22aa73184024d2495bef3": "79fa0ce04b750b673cc1d45e80c6e10d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/874458c3911fcb7a12da70f66e4154863c9841": "b51a9f9776cabda75082be905e692cb5",
".git/objects/cc/50722f3a14908d6ae0e2f627d91ad139b34772": "3105747b09acaea592c9dd9d43eda036",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/303dd060499e3af752c326adfc1fc36a2d8cea": "8718d303cdc77e5d46088dd57756d838",
".git/objects/d1/98e1d7894c344025c6d31d69f7ea98a0b57ea8": "f77b7236728e5dabbf50203b770fae6e",
".git/objects/d3/b6f811befc6f09f3689615b86e00acb3602e88": "39db8c7ce50dd39b441baae2310a9ab0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/63ebb9c6ad213f6664f74bf0e560588ab0911a": "a3baadb946ebea6c6c29b6744ad5fce2",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/26baa158d7ec04c7661f75f66f1d3344a38017": "acb50434f82304e320dd9b4edad570f3",
".git/objects/dd/6a957b6707be58a344e78fe11f53264ca68a3a": "a10e02590db73fe75480ae62c80df0a8",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/ecaa9caa9554f979700f961f991ae69ff30d2a": "5622d77604b5bd6bcddbe8346c68f0f8",
".git/objects/eb/566b5909ccc769d05e3453a16c14865eabcfba": "98e6efbb51e97fdecc7e07afe6deea0a",
".git/objects/f0/b06566cda8bb2d0d17692d08d03689786d039e": "d55ddde5f260684eb6f06503e5583b31",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/9042bd0c0f629cd2e75406041470318fcf88ad": "5ac3c18f871ca2dbcb1e08a0b8c6ab84",
".git/refs/heads/master": "b794feae073d3112fb962b00b0482cc1",
".git/refs/remotes/origin/master": "b794feae073d3112fb962b00b0482cc1",
"404.html": "308786d60e72ef5dafb8be01d7f0e586",
"assets/AssetManifest.bin": "eadb4d625489bca867eb0950ed14e52e",
"assets/AssetManifest.bin.json": "d87f01e39ea29752e51e8c9d1c016b24",
"assets/AssetManifest.json": "b726dcedbd5eed8810f5c3dd044cb062",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "b8f51215f39f23ca34e81fc7c1052612",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "ac10432b62149c67f1e5be9ebd8a5ca3",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "39bf24d996514baab62181a45744d670",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "bda37ed2fd163d86422d87fb77599c14",
"assets/assets/fonts/Urbanist-Bold.ttf": "f1be12677cd5a989d8851a7743ea9b9e",
"assets/assets/fonts/Urbanist-Medium.ttf": "b772c045777ba8193439cd080d580285",
"assets/assets/fonts/Urbanist-Regular.ttf": "40b401cd8b8d6dc564119975375d0111",
"assets/assets/images/carago-icon-512.png": "fc9354e03fd6a3ac8976f2f71f75a402",
"assets/assets/images/carago-logo-transparent.png": "9b7be78d005bd9ccf4ecdc31bb81ee97",
"assets/assets/images/carago-text-transparent.png": "3d391bff070fac93fb1f8193aa0caeba",
"assets/assets/images/CC.png": "a34f2692033c50ab412211ad6863ed1a",
"assets/assets/images/favicon-16.png": "d1b15d926a917e69a1d4868df7c3c2b7",
"assets/assets/images/favicon-32.png": "791643b83df3616424ea4f6b794c91ef",
"assets/assets/images/favicon-48.png": "16acb4e2961460a62dab8550c5c90e37",
"assets/assets/images/favicon.ico": "f2272915d6a017bd8e7db5ffd600e889",
"assets/assets/images/Loginpage.png": "3d92310bb603d29f527cdc05bb2506fd",
"assets/assets/images/logo.png": "49ad529ed84195d3a0852643e08064b0",
"assets/assets/images/logov2.png": "9338d9dd16867b1e0cf51c6498162bd5",
"assets/assets/images/logo_app_icon_1024.png": "c39ad36f62e317e74076f3218978fbb5",
"assets/assets/images/navIcon.png": "fcd62129d3e5edcab26085a73607314f",
"assets/assets/images/navIconWithName.png": "58cd9c0e8ab3f73ae9773201b3359b4a",
"assets/assets/images/notif.mp3": "96baa0bc02c7d4bae27abb1d75d70edb",
"assets/assets/images/simul2.png": "047a64d066a22196773a09bce65776f1",
"assets/assets/images/Taxi/Bus.png": "441a2c3d08ff93d41671f0381b4c155d",
"assets/assets/images/Taxi/Custom.png": "ff44b9392458cd6c21f8d3b590755a2d",
"assets/assets/images/Taxi/Taxi.png": "756b067a8b05360b8d0d89f02ddbe30e",
"assets/assets/images/Taxi/Van.png": "a45341d673e2bffb42f2f0861a4b11b4",
"assets/assets/images/taxi_button.jpg": "89880a3b41624a1fd0cf28bf4f79f692",
"assets/assets/images/taxi_transparent.png": "0568fd8d48846d272756b618b2062687",
"assets/assets/images/van.png": "1eaf3a3b3ccd611307bc58b6c39f73c2",
"assets/assets/images/van_transparent.png": "e28b94470997ba7e5069e904d063d7a2",
"assets/assets/images/voucher.png": "dd91847d5b2483c2dc448b59a8111f4f",
"assets/assets/images/Zurich_new.jpg": "88ca0b1b062f6c11f23b07a24ae1c642",
"assets/assets/sounds/dispatch_alt1.mp3": "39a676ee21ee4608e61597979e28c85d",
"assets/assets/sounds/dispatch_alt2.mp3": "fa81158f918629f36ca70c203171329e",
"assets/assets/sounds/notif.mp3": "96baa0bc02c7d4bae27abb1d75d70edb",
"assets/FontManifest.json": "a53ef5e5134b98d8e1a11fb0bea00b7d",
"assets/fonts/MaterialIcons-Regular.otf": "8420c3084ffe2407cc83bc894b336118",
"assets/NOTICES": "d81f8148083312b61f77bc53a9535676",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d6d545f8aa334a0cd79ca15193e7e83a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7fd340b776f12dbd7f7ea5a039937d81",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a01146bb46e9cb1ea9cb9fa90cc0d30d",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "324e4f5c586fc96b1302b01a9c278656",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "f2272915d6a017bd8e7db5ffd600e889",
"favicon.png": "69f9048edd992f352f031a7582093cbd",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fa8435f090a799977ec5223709a0450e",
"icons/Icon-192.png": "dc8624f02553cc6c323afa7b811c41e4",
"icons/Icon-512.png": "f894dfc6d9c09358aa45f962c6c1ef9e",
"icons/Icon-maskable-192.png": "dc8624f02553cc6c323afa7b811c41e4",
"icons/Icon-maskable-512.png": "f894dfc6d9c09358aa45f962c6c1ef9e",
"index.html": "a9e3547423e66166ac98761d7bbebfb7",
"/": "a9e3547423e66166ac98761d7bbebfb7",
"main.dart.js": "bc44132e0fc4fa722fc344d3935eadac",
"manifest.json": "7fe2fe32a5f2c952fafe71fd271270d8",
"version.json": "3235b07e6ade99fb6d4755ce4a3d012d"};
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
