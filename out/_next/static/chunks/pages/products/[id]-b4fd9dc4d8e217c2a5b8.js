_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{DcP2:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a={initial:{y:60,opacity:0},animate:{y:0,opacity:1,transition:{duration:.6,ease:[.6,-.5,.01,.99]}}},r=function(t){return{animate:{transition:{staggerChildren:t}}}}},"HaE+":function(t,e,n){"use strict";function a(t,e,n,a,r,i,o){try{var c=t[i](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(a,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function c(t){a(o,r,i,c,s,"next",t)}function s(t){a(o,r,i,c,s,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return r}))},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var a=n("J4zp"),r=n("284h");e.__esModule=!0,e.default=void 0;var i,o=r(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(t,e){var n=i||(l?i=new l((function(t){t.forEach((function(t){if(u.has(t.target)){var e=u.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(t.target),u.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),u.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}u.delete(t)}):function(){}};function p(t,e,n,a){(0,c.isLocalURL)(e)&&(t.prefetch(e,n,a).catch((function(t){0})),f[e+"%"+n]=!0)}var v=function(t){var e=!1!==t.prefetch,n=o.default.useState(),r=a(n,2),i=r[0],u=r[1],v=(0,s.useRouter)(),m=v&&v.pathname||"/",h=o.default.useMemo((function(){var e=(0,c.resolveHref)(m,t.href,!0),n=a(e,2),r=n[0],i=n[1];return{href:r,as:t.as?(0,c.resolveHref)(m,t.as):i||r}}),[m,t.href,t.as]),y=h.href,b=h.as;o.default.useEffect((function(){if(e&&l&&i&&i.tagName&&(0,c.isLocalURL)(y)&&!f[y+"%"+b])return d(i,(function(){p(v,y,b)}))}),[e,i,y,b,v]);var w=t.children,g=t.replace,N=t.shallow,E=t.scroll;"string"===typeof w&&(w=o.default.createElement("a",null,w));var _=o.Children.only(w),x={ref:function(t){t&&u(t),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(t):"object"===typeof _.ref&&(_.ref.current=t))},onClick:function(t){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(t),t.defaultPrevented||function(t,e,n,a,r,i,o){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(n))&&(t.preventDefault(),null==o&&(o=a.indexOf("#")<0),e[r?"replace":"push"](n,a,{shallow:i}).then((function(t){t&&o&&(window.scrollTo(0,0),document.body.focus())})))}(t,v,y,b,g,N,E)}};return e&&(x.onMouseEnter=function(t){(0,c.isLocalURL)(y)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(t),p(v,y,b,{priority:!0}))}),(t.passHref||"a"===_.type&&!("href"in _.props))&&(x.href=(0,c.addBasePath)((0,c.addLocale)(b,v&&v.locale,v&&v.defaultLocale))),o.default.cloneElement(_,x)};e.default=v},gt86:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[id]",function(){return n("wXvK")}])},vcXL:function(t,e,n){"use strict";var a=self.fetch.bind(self);t.exports=a,t.exports.default=t.exports},wXvK:function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),r=n.n(a),i=n("HaE+"),o=n("q1tI"),c=n.n(o),s=n("vcXL"),u=n.n(s),l=n("YFqc"),f=n.n(l),d=n("ZMKu"),p=n("DcP2"),v=c.a.createElement,m=function(t){return v(d.b.div,{exit:{opacity:0},initial:"initial",animate:"animate"},v("div",{className:"fullscreen"},v("div",{className:"product"},v(d.b.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.75},className:"img"},v(d.b.img,{initial:{x:200,opacity:0},animate:{x:0,opacity:1},transition:{delay:.2},key:t.product.image,src:t.product.image})),v("div",{className:"product-details"},v(d.b.div,{variants:Object(p.b)(.05),className:"inner"},v(f.a,{href:"/"},v(d.b.div,{variants:p.a},v("a",{className:"go-back"},"Back to products"))),v("div",null,v(d.b.div,{variants:p.a,className:"category"},"Protein")),v(d.b.h1,{variants:p.a},t.product.name),v(d.b.p,{variants:p.a},t.product.details),v(d.b.div,{variants:p.a,className:"additonals"},v("span",null,"Soy Free"),v("span",null,"Gluten Free")),v(d.b.div,{variants:p.a,className:"qty-price"},v("div",{className:"qty"},v("div",{className:"minus"},"-"),v("div",{className:"amount"},"1"),v("div",{className:"add"},"+")),v("span",{className:"price"},t.product.price)),v(d.b.div,{variants:p.a,className:"btn-row"},v("button",{className:"add-to-cart"}," Add to cart"),v("button",{className:"subscribe"}," Subscribe")))))))};m.getInitialProps=function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.id,t.next=3,u()("http://my-json-server.typicode.com/ktcv/nextjs-framer-motion/products/".concat(n));case 3:return a=t.sent,t.next=6,a.json();case 6:return i=t.sent,t.abrupt("return",{product:i});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=m}},[["gt86",0,2,3,1,4]]]);