if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>i(e,c),d={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/Lekipising-Liplan-Resume.pdf",revision:"432c15c5209bf1869b5bfcf83478876e"},{url:"/_next/static/chunks/252.7433b69274558501.js",revision:"7433b69274558501"},{url:"/_next/static/chunks/512.edc56104466fd08b.js",revision:"edc56104466fd08b"},{url:"/_next/static/chunks/637-b8c2ed2d10af890e.js",revision:"b8c2ed2d10af890e"},{url:"/_next/static/chunks/893.568eee52a01bb7a5.js",revision:"568eee52a01bb7a5"},{url:"/_next/static/chunks/940.46b253e1a5366b03.js",revision:"46b253e1a5366b03"},{url:"/_next/static/chunks/991.e3d2b8b723be12ad.js",revision:"e3d2b8b723be12ad"},{url:"/_next/static/chunks/framework-6d147d7a7a824486.js",revision:"6d147d7a7a824486"},{url:"/_next/static/chunks/main-7b300b7a31678012.js",revision:"7b300b7a31678012"},{url:"/_next/static/chunks/pages/_app-aad5dff5e588fb3f.js",revision:"aad5dff5e588fb3f"},{url:"/_next/static/chunks/pages/_error-b479bf07e2695ff9.js",revision:"b479bf07e2695ff9"},{url:"/_next/static/chunks/pages/index-06e39e9519e3b40e.js",revision:"06e39e9519e3b40e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-af56a7e89de9348d.js",revision:"af56a7e89de9348d"},{url:"/_next/static/css/6a51589725720fa7.css",revision:"6a51589725720fa7"},{url:"/_next/static/hXqsjg-14989j3RnH-7Zb/_buildManifest.js",revision:"be5204918acd0b86145285270926a9c9"},{url:"/_next/static/hXqsjg-14989j3RnH-7Zb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/github.5a970dd1.svg",revision:"4b881753125bd3198d3bb13edff1cc24"},{url:"/_next/static/media/linkedin.1f743475.svg",revision:"49cea1676c366360f824db9cab1ca2fa"},{url:"/_next/static/media/nest.76342a08.svg",revision:"943e52fd41e1fe2cd44ce8af53be7672"},{url:"/_next/static/media/next.6dbfcf30.svg",revision:"92d03c35594ce1f5de800d63ed073631"},{url:"/_next/static/media/redux.3e7c6115.svg",revision:"8c0f125348fcab974c9a6a8c4f7d5a65"},{url:"/_next/static/media/styledc.70bb5161.svg",revision:"01f787a82fbdaf614e4797d9897140c9"},{url:"/_next/static/media/tailwind.0b38bb16.svg",revision:"67ecd155cfc56c961645e23838e3828a"},{url:"/_next/static/media/twitter.7717af55.svg",revision:"72320c920b874974914ae18cfa77f657"},{url:"/android/android-launchericon-144-144.png",revision:"9c225397d1840a78f6e0725498574940"},{url:"/android/android-launchericon-192-192.png",revision:"e4e0df99954c4b4515bd885026df01f7"},{url:"/android/android-launchericon-48-48.png",revision:"feaa13895c83d45d75de3704fe0916cf"},{url:"/android/android-launchericon-512-512.png",revision:"82c1939958650947a0c940c7fe58a55f"},{url:"/android/android-launchericon-72-72.png",revision:"aaefdf31d04dfd7e6b7ac9c605ebf91b"},{url:"/android/android-launchericon-96-96.png",revision:"8d520abe9ff5ea2fed1ff45395b47ac1"},{url:"/favicon.ico",revision:"989c69753be70b360574fc553a8a02f1"},{url:"/ios/100.png",revision:"0111945af4dd0fe268737f5f172a58a6"},{url:"/ios/1024.png",revision:"2cda4c47adb116013981ad1ec95f8dcd"},{url:"/ios/114.png",revision:"d314b5ae2ad7c60e58a90387d5133e24"},{url:"/ios/120.png",revision:"99c0a2eb9a78da3b0c5e18af63e3f9af"},{url:"/ios/128.png",revision:"24d71658522f6d746b1ab5d1b9deb6a8"},{url:"/ios/144.png",revision:"9c225397d1840a78f6e0725498574940"},{url:"/ios/152.png",revision:"04e50ceaf99e629b6f90d322ed581aaa"},{url:"/ios/16.png",revision:"8f98f5f57605b00fc20840ade2162080"},{url:"/ios/167.png",revision:"e3eafd58d617e56dc654f0f36017c94e"},{url:"/ios/180.png",revision:"808cf9475a206144fd728a823b5bcde3"},{url:"/ios/192.png",revision:"e4e0df99954c4b4515bd885026df01f7"},{url:"/ios/20.png",revision:"45e4b93be5113335d4c4f2f382796bb6"},{url:"/ios/256.png",revision:"2598c9fe612c53769f55b6f6b1248dfd"},{url:"/ios/29.png",revision:"e5be6855058b9d91deacef1518c1fece"},{url:"/ios/32.png",revision:"66a8e64b853ad6799cdbf98ec2e03e6a"},{url:"/ios/40.png",revision:"67bd7eb9ea3e0bf82118e71d96c8a0df"},{url:"/ios/50.png",revision:"756f99feb303a9b3cfe3a562bb5a2843"},{url:"/ios/512.png",revision:"82c1939958650947a0c940c7fe58a55f"},{url:"/ios/57.png",revision:"90bbf5ab1d7e2e8a5745d51fcb10c23a"},{url:"/ios/58.png",revision:"11f2c7f4878372ddf50950d396d9029c"},{url:"/ios/60.png",revision:"09331d3111a9bc15420bb2562517ec65"},{url:"/ios/64.png",revision:"d8cdf23bd70db4c6144b4bda35fc73da"},{url:"/ios/72.png",revision:"aaefdf31d04dfd7e6b7ac9c605ebf91b"},{url:"/ios/76.png",revision:"1e1d2d65beffad89bd4bae2bb0ad5aa6"},{url:"/ios/80.png",revision:"9d1e6acd6467bcbf5fae6a2045735b0b"},{url:"/ios/87.png",revision:"22a1af868703e8fb9cc591a0c94f405d"},{url:"/manifest.json",revision:"9764155956e12672ce3eb42967dc4a75"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));