(this["webpackJsonpnew-tab"]=this["webpackJsonpnew-tab"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),c=n.n(o),a=n(2);n.p,n(4);function s(){var e=Object(o.useState)(50+200*Math.random()),t=Object(a.a)(e,2),n=t[0],c=(t[1],Object(o.useState)(-n)),s=Object(a.a)(c,2),r=s[0],l=s[1],m=Object(o.useState)(-n),g=Object(a.a)(m,2),d=g[0],u=g[1],p=Object(o.useState)(0),h=Object(a.a)(p,2),b=h[0],j=h[1],f=function(){l(Math.random()*(window.innerWidth-n)),u(Math.random()*(window.innerHeight-n))};return Object(o.useLayoutEffect)((function(){f(),setTimeout(f,10);return function e(){var t=(1+1*Math.random())*(window.innerWidth+window.innerHeight)*3;j(t),setTimeout((function(){f(),e()}),t)}(),function(){}}),[]),Object(i.jsx)("div",{className:"bubble",style:{width:n,height:n,backgroundColor:"red",transform:"translate(".concat(r,"px, ").concat(d,"px)"),transition:"transform ".concat(b/1e3,"s ease")}})}function r(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",e.async=!0,e.innerHTML='{\n    "symbols": [\n      {\n        "proName": "FOREXCOM:SPXUSD",\n        "title": "S&P 500"\n      },\n      {\n        "proName": "BITSTAMP:BTCUSD",\n        "title": "BTC/USD"\n      },\n      {\n        "proName": "BITSTAMP:ETHUSD",\n        "title": "ETH/USD"\n      },\n      {\n        "description": "Square Inc.",\n        "proName": "SQ"\n      },\n      {\n        "description": "Twillio Inc.",\n        "proName": "NYSE:TWLO"\n      },\n      {\n        "description": "Visa",\n        "proName": "NYSE:V"\n      },\n      {\n        "description": "Mastercard",\n        "proName": "NYSE:MA"\n      },\n      {\n        "description": "Paypal",\n        "proName": "NASDAQ:PYPL"\n      }\n    ],\n    "showSymbolLogo": true,\n    "colorTheme": "dark",\n    "isTransparent": true,\n    "displayMode": "regular",\n    "locale": "en"\n  }';var t=Object(o.useRef)();return Object(o.useLayoutEffect)((function(){t.current.appendChild(e)}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"tradingview-widget-container tape",ref:t,children:Object(i.jsx)("div",{className:"tradingview-widget-container__widget"})})})}var l=n(5);var m=function(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1],m=Object(o.useState)(null),g=Object(a.a)(m,2),d=g[0],u=g[1],p=Object(o.useState)(""),h=Object(a.a)(p,2),b=h[0],j=h[1],f=Object(o.useRef)(),w=function(e){"Enter"==e.code&&f.current.value.length>0&&(window.location.href="https://www.google.com/search?q=".concat(f.current.value.split(" ").join("+")))};return Object(o.useEffect)((function(){f.current.focus(),document.addEventListener("keydown",w);var e=setInterval((function(){var e=new Date,t=e.getHours(),n=t>=12?"pm":"am";0==(t%=12)&&(t=12);var i=""+e.getMinutes();1==i.length&&(i="0"+i),c("".concat(t,":").concat(i," ").concat(n));var o="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],", ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear());u(o)}),100);return function(){clearInterval(e)}}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"bgHolder",children:Object(i.jsx)("div",{className:"bg"})}),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(s,{}),Object(i.jsx)(s,{}),Object(i.jsx)(s,{}),Object(i.jsx)(s,{}),Object(i.jsx)(s,{}),Object(i.jsxs)("div",{className:"foreground",children:[Object(i.jsx)(r,{}),Object(i.jsxs)("div",{className:"date",children:[Object(i.jsx)("h1",{children:n}),Object(i.jsx)("h2",{children:d})]}),Object(i.jsx)("input",{type:"text",placeholder:"Search Google",className:"search",ref:f,onChange:function(e){j(e.target.value)}}),Object(i.jsx)("div",{className:"itemHolder",children:l.items.filter((function(e){return 0==b.length||e.title.toLowerCase().includes(b.toLowerCase())})).map((function(e){return Object(i.jsxs)("a",{className:"item",href:e.url,children:[Object(i.jsx)("img",{src:e.image}),Object(i.jsx)("p",{className:"itemTitle",children:e.title})]},e.title)}))}),Object(i.jsxs)("p",{className:"byline",children:["Made by Blake Sanie with"," ",Object(i.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/pittogrammi/142/80-512.png"})]})]})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),c(e),a(e)}))},d=n(6);Object(d.render)(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),g()},4:function(e,t,n){},5:function(e,t){t.items=[{title:"GitHub",url:"https://github.com",image:"https://image.flaticon.com/icons/png/512/25/25231.png"},{title:"Blake Sanie",url:"https://blakesanie.com",image:"https://cdn.onlinewebfonts.com/svg/img_246830.png"},{title:"Reddit",url:"https://reddit.com",image:"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/reddit-alien-512.png"},{title:"Medium",url:"https://medium.com",image:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/211_Medium_logo_logos-512.png"},{title:"Yahoo Finance",url:"https://finance.yahoo.com",image:"https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/yahoo.png"},{title:"LinkedIn",url:"https://linkedin.com",image:"https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png"},{title:"Robinhood",url:"https://robinhood.com",image:"https://cdn-images-1.medium.com/max/1200/1*d7fYAnWUS9rDntWGdABxPw.png"},{title:"E*Trade",url:"https://etrade.com",image:"https://www.pngkit.com/png/full/677-6778888_etrade-logo-png.png"},{title:"PetaPixel",url:"https://petapixel.com",image:"https://assets.stickpng.com/images/584abf102912007028bd9332.png"},{title:"Google Drive",url:"https://drive.google.com",image:"https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png"},{title:"Google Docs",url:"https://docs.google.com",image:"https://img.icons8.com/ios/452/google-docs.png"},{title:"Amazon",url:"https://amazon.com",image:"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"},{title:"Canvas",url:"https://gatech.instructure.com",image:"https://online.umkc.edu/wp-content/uploads/2018/03/Canvas-Logo.png"},{title:"Gmail",url:"https://mail.google.com",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"},{title:"YouTube",url:"https://youtube.com",image:"https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png"},{title:"Google Sheets",url:"https://sheets.google.com",image:"https://icons-for-free.com/iconfiles/png/512/brands+google+logo+logos+sheets+icon-1320184760935401190.png"},{title:"Netflix",url:"https://netflix.com",image:"https://image.flaticon.com/icons/png/512/870/870910.png"},{title:"TradingView",url:"https://tradingview.com",image:"https://user-images.githubusercontent.com/5462382/34194692-9a517de4-e51f-11e7-8af9-46f9ea4cf555.png"},{title:"Dribbble",url:"https://dribbble.com",image:"https://image.flaticon.com/icons/png/512/87/87400.png"},{title:"Stripe",url:"https://stripe.com",image:"https://symbols.getvecta.com/stencil_96/113_stripe-icon.9b88e82624.png"},{title:"Buzzport",url:"https://buzzport.gatech.edu/",image:"https://sustainability.ncsu.edu/multisite/wp-content/uploads/2019/02/Georgia-Tech-Logo-400x300.png"},{title:"Heroku",url:"https://www.heroku.com",image:"https://img.icons8.com/ios/452/heroku.png"}]}},[[15,1,2]]]);
//# sourceMappingURL=main.dac3860f.chunk.js.map