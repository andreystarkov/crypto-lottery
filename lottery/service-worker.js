"use strict";var precacheConfig=[["/games/lottery/index.html","d525cf806b8e40c288da79d6d423765d"],["/games/lottery/static/css/main.e07bfc91.css","5a5d4a26e6bf0d83e4a202a9fe5b06b9"],["/games/lottery/static/media/1-1@3x.f616904b.png","f616904b2d242ed58698a2595ab5898b"],["/games/lottery/static/media/1-2@2x.698ac1be.png","698ac1be642be71cca9cc07300e4aa7d"],["/games/lottery/static/media/1-2@3x.7fea6b67.png","7fea6b67bc9d9e882119934a70c3f318"],["/games/lottery/static/media/1-3@3x.f7f345ee.png","f7f345eebd1d6d6065c21b227fd8efc3"],["/games/lottery/static/media/1-4@2x.97dda496.png","97dda49659525151e6b6ef617a82866b"],["/games/lottery/static/media/1-4@3x.0e0c2ac4.png","0e0c2ac48a239cc41d14f839f573c896"],["/games/lottery/static/media/1-5@2x.c3716c23.png","c3716c23bfbc4654d39c88ff2dc5b5eb"],["/games/lottery/static/media/1-5@3x.f70505d9.png","f70505d9c9c3741e512f20630c9d1303"],["/games/lottery/static/media/1-6@2x.d801d4c1.png","d801d4c12f0c67b879904c529fd8fad3"],["/games/lottery/static/media/1-6@3x.796b822f.png","796b822fd9f1ab2d6c6ef153fdd1186c"],["/games/lottery/static/media/1-7@2x.3452a5c2.png","3452a5c2d4ee3a76eb545a23f29c7a21"],["/games/lottery/static/media/1-7@3x.32938100.png","3293810044b3ce078b9045a5e1a06370"],["/games/lottery/static/media/2-1@3x.ffea437b.png","ffea437bea0114dac1586d7ffcec7d68"],["/games/lottery/static/media/2-2@2x.67b8ee84.png","67b8ee843057d00e3532e52a03c002e9"],["/games/lottery/static/media/2-2@3x.f2ae0be3.png","f2ae0be36cc7c23871add49102231c51"],["/games/lottery/static/media/2-3@3x.784846c3.png","784846c34cd9cdd64017fe927b4a09c2"],["/games/lottery/static/media/2-4@2x.615fc85e.png","615fc85e7dd5b5fad143be6d9c3be0ec"],["/games/lottery/static/media/2-4@3x.2e881e06.png","2e881e0655ba732d58474cd5329e01a8"],["/games/lottery/static/media/2-5@2x.9916b4cd.png","9916b4cd3f7a8f30d8a96a6046accee9"],["/games/lottery/static/media/2-5@3x.c50e2f7d.png","c50e2f7d1f598165d4b84bba2b516cb9"],["/games/lottery/static/media/2-6@3x.f526a278.png","f526a27830e2eeb9b1d8a02f2066673f"],["/games/lottery/static/media/2-7@2x.d527c845.png","d527c845bcbe5d2f28f11b1b9fa33f92"],["/games/lottery/static/media/2-7@3x.d53552b8.png","d53552b81af2315a44523de6af759e0e"],["/games/lottery/static/media/3-1@2x.b2944bbf.png","b2944bbf0fea9e29378f86c1ac8a876f"],["/games/lottery/static/media/3-1@3x.bef590c3.png","bef590c326b0cb2c0ff70e2fba11d618"],["/games/lottery/static/media/3-2@2x.e3a11c55.png","e3a11c552c2836824b885b40c12eb011"],["/games/lottery/static/media/3-2@3x.8289c8b2.png","8289c8b200e41a05f716f8812ecb3c7d"],["/games/lottery/static/media/3-3@2x.c613d837.png","c613d8378aedb67cd33482135e1e7204"],["/games/lottery/static/media/3-3@3x.3c0af0a6.png","3c0af0a63d44cc7b26573cf972ba5892"],["/games/lottery/static/media/3-4@2x.19574885.png","19574885096b57423acd46b03f05dd02"],["/games/lottery/static/media/3-4@3x.26e8c0a1.png","26e8c0a153001bab81f9016c7cabfc25"],["/games/lottery/static/media/3-5.c1816144.png","c18161441cb8360a6069390ad359e7f0"],["/games/lottery/static/media/3-5@2x.7c5100bb.png","7c5100bb56a22ef3a2d3ca01202dcc8d"],["/games/lottery/static/media/3-5@3x.8a93c94e.png","8a93c94ea2acf68c8b7e2462e1084d30"],["/games/lottery/static/media/3-6@2x.d7353907.png","d73539073a1c5be7c1cdf905b4206f26"],["/games/lottery/static/media/3-6@3x.270d10da.png","270d10da6d655f6a029ca76df518e2df"],["/games/lottery/static/media/4-1@2x.547bcf72.png","547bcf7297c83997af8b89c7b0f9f892"],["/games/lottery/static/media/4-1@3x.1a1a7ee0.png","1a1a7ee006a93a46d188d69489243d40"],["/games/lottery/static/media/arrow-right-white.9daf5d61.svg","9daf5d61ebd152fb84b6cb907233579f"],["/games/lottery/static/media/balls.8f602a0b.svg","8f602a0b6649b0844a5d4a6ada2dec34"],["/games/lottery/static/media/bg-1.3d10b6e0.png","3d10b6e046d96b0a901c3c20976b6f8c"],["/games/lottery/static/media/caret-left.f26ff0bf.svg","f26ff0bfb7b2defae1316f2e76ae336a"],["/games/lottery/static/media/cash-big.e730eb1c.svg","e730eb1cd159cea424fbf08c4c169b82"],["/games/lottery/static/media/cash-grey.2ec4d3b7.svg","2ec4d3b71046e63236ef1c7a586027fb"],["/games/lottery/static/media/cash.df3437f7.svg","df3437f773376bb347fae584737b0d0c"],["/games/lottery/static/media/checkmark.e640b243.svg","e640b2438416a54f66e0d029d7e751bb"],["/games/lottery/static/media/circle-line-blue.e41e73ed.svg","e41e73ed6c72a9fe18ea9ea919908d8a"],["/games/lottery/static/media/circle-line-purple.1448ad97.svg","1448ad97494fda49b4e79feaa32a2c30"],["/games/lottery/static/media/circlie-line-purple2.8d44b050.svg","8d44b050e5a4bdd071bc667923f76301"],["/games/lottery/static/media/color-balls.72311ea7.svg","72311ea70470a6068c30584d790ba154"],["/games/lottery/static/media/color-choose.c8d90c7e.svg","c8d90c7ed58892827b56595f41a798b5"],["/games/lottery/static/media/color-multi.9029f38f.svg","9029f38f58d68ce14c663afeb6c462ae"],["/games/lottery/static/media/color-numbers.1a9d0413.svg","1a9d0413834360763841af44cf2b9631"],["/games/lottery/static/media/color-prize.674d2d7e.svg","674d2d7e1c6555db61f80b6d7ba3830b"],["/games/lottery/static/media/color-tickets.6f38d0d8.svg","6f38d0d85edc469ca384bc1707737d61"],["/games/lottery/static/media/dao_main_1440_.4d03c785.png","4d03c7856145704da52d9142b0650801"],["/games/lottery/static/media/dice-inner.4a215a66.svg","4a215a66fab277addc828856e2450a65"],["/games/lottery/static/media/dice-transparent.7fd5483d.svg","7fd5483dd2d387187953e2d1c47352a1"],["/games/lottery/static/media/dot-border.32fdfcca.svg","32fdfcca4955eaa4a3cbc53eaf34ad7b"],["/games/lottery/static/media/dots.67ee21c7.svg","67ee21c7f0ed10a2e5c501d95be1d062"],["/games/lottery/static/media/eth-icon-pale.01b08e85.svg","01b08e8578a49cf26f143141703cd7a4"],["/games/lottery/static/media/eth-small.7c1b6dc3.svg","7c1b6dc3ddb3d5e568f9bd2a8c136e08"],["/games/lottery/static/media/facebook.0f0d6d9e.svg","0f0d6d9ebcfc3342313070157112306d"],["/games/lottery/static/media/github.c84eea3d.svg","c84eea3d092800e2b2afde9245a8fa02"],["/games/lottery/static/media/gold-cash.c57e629c.svg","c57e629ce46049beed806901b526f661"],["/games/lottery/static/media/gold1.88b32000.svg","88b3200039c4b03673fd534a6dff57ff"],["/games/lottery/static/media/gold2.e0bb443f.svg","e0bb443f9489ab4a2c8fe28a8bad9936"],["/games/lottery/static/media/icon-checkmark-cyan.58f1d0ce.svg","58f1d0ced3dcb1efe698a7e97a64501d"],["/games/lottery/static/media/icon-circle-close.79f57b95.svg","79f57b9528a4c0ccef360db33e870107"],["/games/lottery/static/media/icon-close-cross.a6746c64.svg","a6746c647b27b5359b8c2a02c8e795fd"],["/games/lottery/static/media/icon-coins-grey.f79c303a.svg","f79c303a9c7bc55c1a5f1d6e9ec0d457"],["/games/lottery/static/media/icon-dice-random.89f6da81.svg","89f6da810812c71eafdf89a174883aec"],["/games/lottery/static/media/icon-erase.2c23af31.svg","2c23af311a2c58ac03d03407c68a9525"],["/games/lottery/static/media/icon-error.e479ded6.svg","e479ded6734da2e833f82346b124ef4d"],["/games/lottery/static/media/icon-facebook.c34cf73c.svg","c34cf73ca13a7fb11a97a1989597dadc"],["/games/lottery/static/media/icon-github.076b2187.svg","076b2187a827f44b8795617c59174a76"],["/games/lottery/static/media/icon-manager.9f244131.svg","9f244131c64f8064ac7d2c8c655f5d50"],["/games/lottery/static/media/icon-money-colored.01b923b4.svg","01b923b47bf013ae987ec7e8dae1e419"],["/games/lottery/static/media/icon-question.459dd0f5.svg","459dd0f5bc32cd79dcb18bb319ee8e22"],["/games/lottery/static/media/icon-sandclock-grey.cd793439.svg","cd793439878ef785a99a5872f5c47e5b"],["/games/lottery/static/media/icon-security.5f14be7b.svg","5f14be7b05ebe5ad6e84f923770b281c"],["/games/lottery/static/media/icon-square.3ee013ce.svg","3ee013ce1da3ed58f9ca37524eb7920d"],["/games/lottery/static/media/icon-success.70565c31.svg","70565c31f5b7aec280548ab836cf4e80"],["/games/lottery/static/media/icon-telegram.964df2a6.svg","964df2a63e30b9629c832b2fcc7e5db4"],["/games/lottery/static/media/icon-ticket-close.39a84234.svg","39a842344ea2e3bef6ab1d09378fa9f3"],["/games/lottery/static/media/icon-tickets.9cd92ad4.svg","9cd92ad4c95b3118abc97d7a3d1fc05a"],["/games/lottery/static/media/icon-twitter.fa9dee71.svg","fa9dee71f5465f46b6e2c4c7915c24f9"],["/games/lottery/static/media/icon-user.9b4f639c.svg","9b4f639c47592b2a380444c51415edd2"],["/games/lottery/static/media/illustration-main.f8973904.png","f8973904159c5a1c4e3afa4d281745db"],["/games/lottery/static/media/illustration-profile.fcf6e19d.png","fcf6e19d53ab1507c5fe4f157180077a"],["/games/lottery/static/media/logout.a502ede1.svg","a502ede1ef961575d21c62b95d4f89f1"],["/games/lottery/static/media/money-gray.5f113aea.svg","5f113aea292fd3a3cc2eccf4c4de6d91"],["/games/lottery/static/media/money-grey.d0fa6903.svg","d0fa6903239d7baf5b25c9be42b98902"],["/games/lottery/static/media/number-1.31d7a403.svg","31d7a4032093d7e4e74bc3ea7e5b7c0d"],["/games/lottery/static/media/number-2.1aa7ebd9.svg","1aa7ebd97c6314b822e8507f17c41453"],["/games/lottery/static/media/number-3.2e5a1cec.svg","2e5a1cec53d641992a42e465370a17d3"],["/games/lottery/static/media/number-4.382398cb.svg","382398cb2fe85e9ff39958f6373c76b2"],["/games/lottery/static/media/number-5.6e3acf07.svg","6e3acf077c5ad874321ff292a0ce8433"],["/games/lottery/static/media/number-6.8248f053.svg","8248f053750d34decd39f180f92ad04c"],["/games/lottery/static/media/refresh.968fb8e5.svg","968fb8e56e61eeaaf61cec29baed7fc6"],["/games/lottery/static/media/stars-left.c25a41fe.svg","c25a41fef2c6da557049eb2223650b39"],["/games/lottery/static/media/stars-right.eedf7ee0.svg","eedf7ee0cfed4c0d86642489f6fed872"],["/games/lottery/static/media/stick-left.a2694e68.svg","a2694e687205729bce8d776f1b3927bc"],["/games/lottery/static/media/stick-right.7c933bbb.svg","7c933bbbc1a020fe48deb4826447e3d3"],["/games/lottery/static/media/techbg1b.19e6b66d.png","19e6b66d7756b1570a6bc1279f6a9f99"],["/games/lottery/static/media/telegram.818f5673.svg","818f5673ee181b2704a010de07b79c99"],["/games/lottery/static/media/tickets-grey.a35054c0.svg","a35054c0d61420e699b3696a905fe2e2"],["/games/lottery/static/media/time-sand.dd87919c.svg","dd87919c675661f7b6e78d72918af254"],["/games/lottery/static/media/twitter.e0a28270.svg","e0a282709884e1e2cc156b5559720c34"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/games/lottery/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});