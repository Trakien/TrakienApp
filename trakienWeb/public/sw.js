if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>i(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cE9g4VA2vDWK7Eif3Kr8v/_buildManifest.js",revision:"9ff8697549d626569bf4c5dd3456d247"},{url:"/_next/static/cE9g4VA2vDWK7Eif3Kr8v/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/266-c0c7014b65a9f7fb.js",revision:"c0c7014b65a9f7fb"},{url:"/_next/static/chunks/351-4de72f883a2145ce.js",revision:"4de72f883a2145ce"},{url:"/_next/static/chunks/374-fa5ae5064804bf7e.js",revision:"fa5ae5064804bf7e"},{url:"/_next/static/chunks/52-0e19dda4ed16b521.js",revision:"0e19dda4ed16b521"},{url:"/_next/static/chunks/970-ac16139a5bcd997c.js",revision:"ac16139a5bcd997c"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-98945aae7b049fbd.js",revision:"98945aae7b049fbd"},{url:"/_next/static/chunks/pages/_app-eeb90c9f78b98c91.js",revision:"eeb90c9f78b98c91"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/dashboard-cd1c1620bfec281e.js",revision:"cd1c1620bfec281e"},{url:"/_next/static/chunks/pages/dashboard/profile-c2247542e5d4072c.js",revision:"c2247542e5d4072c"},{url:"/_next/static/chunks/pages/index-481ee6d683c83ead.js",revision:"481ee6d683c83ead"},{url:"/_next/static/chunks/pages/login-5fccde9c0911a037.js",revision:"5fccde9c0911a037"},{url:"/_next/static/chunks/pages/signup-6eea682f7776c2dd.js",revision:"6eea682f7776c2dd"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2e51481b1d484a05.js",revision:"2e51481b1d484a05"},{url:"/_next/static/css/38ed9e71612c47d6.css",revision:"38ed9e71612c47d6"},{url:"/_next/static/css/c09021d61bb4ad32.css",revision:"c09021d61bb4ad32"},{url:"/_next/static/css/cce007e0c9758e20.css",revision:"cce007e0c9758e20"},{url:"/_next/static/css/d35d9223edcb2877.css",revision:"d35d9223edcb2877"},{url:"/_next/static/css/e8c50e3785cde4a8.css",revision:"e8c50e3785cde4a8"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/notification.6894f462.svg",revision:"6894f462"},{url:"/_next/static/media/notification.786b87d6.ttf",revision:"786b87d6"},{url:"/_next/static/media/notification.9928469f.woff",revision:"9928469f"},{url:"/_next/static/media/notification.e46c3dba.eot",revision:"e46c3dba"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/dashboard/user.png",revision:"672cc29e3e2faafa697977d03eae9e76"},{url:"/favicon.ico",revision:"aa63c8d1760ee433a6cc2b46aeeb8025"},{url:"/home/LogoTrakienSimple.png",revision:"e48c58da351f18fd6bb2c7c41edb9c0a"},{url:"/home/LogoTrakienSimpleBlanco.png",revision:"87be2235e42c133722537215489cd9be"},{url:"/home/logoTrakien.png",revision:"ff8e7947d40c901248cf15aee159ccf8"},{url:"/home/logoTrakienConFondo.png",revision:"7b93316eb4c0223e0af493d94887c9c4"},{url:"/home/proposito.png",revision:"b51332ef115352b8c1914446e16aaaf3"},{url:"/icon.ico",revision:"7295e4157d595b7f83b2f70509e62565"},{url:"/icon.png",revision:"d42d62ccce4170072b28e4ae03a8d8d6"},{url:"/icon2.png",revision:"84fe5c8cb63742c5144d5c41cb52ccb3"},{url:"/manifest.json",revision:"023f07766f9ef189165a8f8c1be040c0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
