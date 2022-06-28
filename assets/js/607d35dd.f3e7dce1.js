"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7381],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Weekly Update #2",authors:["stmharry"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup"],description:"Hashgreen updates on: USD quotes in API, i18n inclusion of Chinese and Spanish, and AMM initial discussion",image:"./assets/banner.jpg"},s=void 0,c={permalink:"/blog/2022/02/14/weekly-update",source:"@site/blog/2022-02-14-weekly-update/index.md",title:"Weekly Update #2",description:"Hashgreen updates on: USD quotes in API, i18n inclusion of Chinese and Spanish, and AMM initial discussion",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"}],readingTime:2.11,truncated:!1,authors:[{name:"H.",title:"Founder",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/h.jpg",key:"stmharry"}],prevItem:{title:"Weekly Update #3",permalink:"/blog/2022/03/02/weekly-update"},nextItem:{title:"Weekly Update #1",permalink:"/blog/2022/02/07/weekly-update"}},u={image:n(3568).Z,authorsImageUrls:[void 0]},p=[{value:"What&#39;s Been Done",id:"whats-been-done",children:[{value:"API Access",id:"api-access",children:[],level:3},{value:"User Interface",id:"user-interface",children:[],level:3}],level:2},{value:"What&#39;s Rolling",id:"whats-rolling",children:[],level:2}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"banner",src:n(3568).Z})),(0,i.kt)("h2",{id:"whats-been-done"},"What's Been Done"),(0,i.kt)("h3",{id:"api-access"},"API Access"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/trading-api"},"Trading API")," has been the biggest update for the week.\nWe are committed to provide a diverse set of API for developers so the community can grow with us.\nAt the same time, we would like you to be explicit about the usage of Hashgreen APIs in your products to spread the words!\nLet us know your story and the creative use of both open market information and statistics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We added USD quotes and USD volume in the ",(0,i.kt)("a",{parentName:"li",href:"/trading-api#get-market-statistics"},"market stat")," endpoint.\nThe fully diluted market cap for the base currency in USD (the token in the front of the trading pair) is also provided as a ball park measure of how big the token is.")),(0,i.kt)("p",null,"Note that the reference prices are only estimates are can be vulnerable to self-trading exploits.\nPlease do not use currency price quotes directly in mission critical systems but only as a good reference."),(0,i.kt)("h3",{id:"user-interface"},"User Interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The frontend team has been working hard on i18n (check out the ",(0,i.kt)("a",{parentName:"li",href:"https://testnet10.hash.green/dex"},"beta site"),"), and will be soon be pushed to the production site.\nWe are offering Chinese and Spanish as a taste test, and are preparing for a community-based translation campaign!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"i18n",src:n(3892).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The aforementioned market statistics are now displayed as a part of the market header.\nYou can easily judge market liquidity based on the USD volume.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"i18n",src:n(5732).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We've also worked through a bunch of frontend bug fixes including market selection menu overflow and asset filter menu.\nWe won't bother detailing them but rest assured we are incorporating community feedback.")),(0,i.kt)("h2",{id:"whats-rolling"},"What's Rolling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Now that we have the fully diluted market cap, we are making a market overview menu to highlight the most traded and the highest cap tokens.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The fully diluted market cap does not holistically represent the true market capitalization as any whale can HODL the majority of the tokens.\nWhat is more representative is the market cap based on circulating supply which can be tricky to automatically detect on Chia.\nWe are working on some smart algorithms to pick that up from the blockchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the long run, we realize we need a more elegant product UI to streamline user experience.\nThe recently onboarded UI designer is starting to work hard on the refactor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We had some very fruitful discussion on the mathematical design of automated market makers (AMM).\nThere are some pretty important implications translating everything from account-based to coin-based models, and we are pretty sure we nailed it correctly."))))}m.isMDXComponent=!0},3568:function(e,t,n){t.Z=n.p+"assets/images/banner-786d75fb5d6d19f6ad2a0f01ef611621.jpg"},3892:function(e,t,n){t.Z=n.p+"assets/images/i18n-928fff29769f19a2d86b73126bc66a03.jpg"},5732:function(e,t,n){t.Z=n.p+"assets/images/market-stat-6c28de9a00e2468771fb2c3d55d2906f.jpg"}}]);