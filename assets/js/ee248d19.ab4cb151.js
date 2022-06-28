"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4795],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Weekly Update #5",date:new Date("2022-03-21T00:00:00.000Z"),authors:["stmharry"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup"],description:"Hashgreen updates on: fee UX, market selection UI, and market stat API",image:"./assets/banner.jpg"},l=void 0,c={permalink:"/blog/weekly-update-5",source:"@site/blog/weekly-update-5/index.md",title:"Weekly Update #5",description:"Hashgreen updates on: fee UX, market selection UI, and market stat API",date:"2022-03-21T00:00:00.000Z",formattedDate:"March 21, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"}],readingTime:2.17,truncated:!1,authors:[{name:"H.",title:"Founder",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/h.jpg",key:"stmharry"}],prevItem:{title:"Best Chia Projects Bootstrapped on Hashgreen DEX",permalink:"/blog/airdrop-on-hashgreen-dex"},nextItem:{title:"Weekly Update #4",permalink:"/blog/weekly-update-4"}},p={image:n(8037).Z,authorsImageUrls:[void 0]},u=[{value:"What&#39;s Been Done",id:"whats-been-done",children:[],level:2},{value:"What&#39;s Rolling",id:"whats-rolling",children:[],level:2}],f={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"banner",src:n(8037).Z})),(0,o.kt)("h2",{id:"whats-been-done"},"What's Been Done"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Over the past weeks, fees on the Chia Blockchain seems to be here to stay.\nTo allow our users get their transactions on chain quicker, we now provide users with the ability to supply fee by adding to the supplied Chia amount or removing from the requested Chia amount in their offers.\nThe suggested fee is hinted on the pop-up window for order book items, and is currently 0.0001 XCH.\nWe chose this number since it not only suffices to be on top of the mempool, but is miniscule (7 cents USD at the time of writing) for users.\nIn the future, we plan to implement more accurate fee estimators to give better fee hints and save you some bucks.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"How is it done?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With Chia offers, Hashgreen is able to redirect the provided fees into a temporary address, then we generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"SpendBundle")," on the fly to spend the extra amounts as fee.\nThis ",(0,o.kt)("inlineCode",{parentName:"p"},"SpendBundle")," is then aggregated with the user offers before we push it to the Chia Blockchain."))),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("b",null,"Figure: These are two different options you can provide to match an offer you like")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fee-prompt",src:n(1832).Z}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We made it easier for users to submit your orders!\nSimply copy the amounts provided in the pop-up panel when you hover on the offers you want to match against with the copy button.\nYou can also paste your offer file string directly on the web interface.")),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("b",null,"Figure: Here are the button to copy your preferred amounts to supply")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"copy-fee",src:n(6501).Z}))),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("b",null,"Figure: In the official Chia wallet, use this copy button to copy the raw offer file into your clipboard")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"copy-offer",src:n(7303).Z})),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("b",null,"Figure: Press this big paste button to upload your offer file")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"paste-offer",src:n(2437).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Many partners are starting to integrate our ",(0,o.kt)("a",{parentName:"p",href:"/trading-api#get-market-statistics"},"Market Statistics API")," into their platforms.\nThe previous generation were slow and bulky, taking nearly 30 seconds to complete a call.\nWe have optimized it to return the results in under half a second.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"New market selection menu is now available at ",(0,o.kt)("a",{parentName:"p",href:"https://testnet10.hash.green/dex"},"UAT interface"),".\nIf you want the UAT interface to connect with mainnet, head to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet10.hash.green/dex/settings"},"UAT settings")," and toggle on ",(0,o.kt)("inlineCode",{parentName:"p"},"PROD"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"market-selection",src:n(8135).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'We fixed many bugs on the frontend interface, including incorrect display of order status (sometimes it shows "Confirming undefined"), and user token retrieval errors.')),(0,o.kt)("h2",{id:"whats-rolling"},"What's Rolling"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The smart coin team is coding up the first version of AMM coin driver for an MVP AMM protocol.\nAs time goes on, we will gradually implement more standard functionalities in current AMMs!")))}d.isMDXComponent=!0},8037:function(e,t,n){t.Z=n.p+"assets/images/banner-fcb757022fab48b224fb681136d5cbeb.jpg"},6501:function(e,t,n){t.Z=n.p+"assets/images/copy-fee-d15d2d0e5f0f289a71fd04c31a9bf66c.jpg"},7303:function(e,t,n){t.Z=n.p+"assets/images/copy-offer-ee42874a2d7e99ef9ddd6034e846f12b.jpg"},1832:function(e,t,n){t.Z=n.p+"assets/images/fee-prompt-8a3fc341f178a5f11f36f3fb865d73e0.jpg"},8135:function(e,t,n){t.Z=n.p+"assets/images/market-selection-8511c37b3bdd7a662b4c3066b0a56a83.jpg"},2437:function(e,t,n){t.Z=n.p+"assets/images/paste-offer-3a6e7dccf0f68fc197bfa8119d4a5589.jpg"}}]);