import{_ as g}from"../chunks/preload-helper.a4192956.js";import{s as z,c as Y,u as Z,g as q,d as J,f as X,i as tt}from"../chunks/scheduler.8b75dc5a.js";import{S as N,i as Q,g as v,h as b,j as T,f as m,k,a as h,z as et,d as P,t as y,r as j,s as w,m as U,u as H,c as O,x as C,n as A,v as K,w as G,e as B,l as R,p as lt,b as st,A as L,y as E,o as D}from"../chunks/index.cd4b7fee.js";import{B as ot}from"../chunks/Body.909e8b01.js";function I(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const nt=async({fetch:r})=>{const n=Object.entries(Object.assign({"./posts/alpha_catan.svx":()=>g(()=>import("../chunks/alpha_catan.3a301ae8.js"),["../chunks/alpha_catan.3a301ae8.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/frontend_breakdown.svx":()=>g(()=>import("../chunks/frontend_breakdown.7c31b4c8.js"),["../chunks/frontend_breakdown.7c31b4c8.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/is_writing_important.svx":()=>g(()=>import("../chunks/is_writing_important.3ab76030.js"),["../chunks/is_writing_important.3ab76030.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/my_computer_setup.svx":()=>g(()=>import("../chunks/my_computer_setup.23874193.js"),["../chunks/my_computer_setup.23874193.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/ongoing_musings.svx":()=>g(()=>import("../chunks/ongoing_musings.8d9c0247.js"),["../chunks/ongoing_musings.8d9c0247.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/pickpockets_operate_at_this_station.svx":()=>g(()=>import("../chunks/pickpockets_operate_at_this_station.f2a7d3ba.js"),["../chunks/pickpockets_operate_at_this_station.f2a7d3ba.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/ride_to_somewhere.svx":()=>g(()=>import("../chunks/ride_to_somewhere.e0bb3d98.js"),["../chunks/ride_to_somewhere.e0bb3d98.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/waxy_breakdown.svx":()=>g(()=>import("../chunks/waxy_breakdown.da7061da.js"),["../chunks/waxy_breakdown.da7061da.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url),"./posts/why_do_we_sleep_on_our_backs.svx":()=>g(()=>import("../chunks/why_do_we_sleep_on_our_backs.5d24716f.js"),["../chunks/why_do_we_sleep_on_our_backs.5d24716f.js","../chunks/scheduler.8b75dc5a.js","../chunks/index.cd4b7fee.js"],import.meta.url)})),t=await Promise.all(n.map(async([u,l])=>{const{metadata:a}=await l();return{meta:a,tags:a.tags,path:u.replace(".svx","").slice(1)}})),s=t.reduce((u,l)=>(u.includes(l.tags)||u.push(l.tags),u),[]);return{allPosts:t,allTags:s}},gt=Object.freeze(Object.defineProperty({__proto__:null,load:nt},Symbol.toStringTag,{value:"Module"}));function at(r){let e,n,t,s;const u=r[1].default,l=Y(u,r,r[0],null);return{c(){e=v("button"),l&&l.c(),this.h()},l(a){e=b(a,"BUTTON",{class:!0});var f=T(e);l&&l.l(f),f.forEach(m),this.h()},h(){k(e,"class","svelte-1mbunc6")},m(a,f){h(a,e,f),l&&l.m(e,null),n=!0,t||(s=et(e,"click",r[2]),t=!0)},p(a,[f]){l&&l.p&&(!n||f&1)&&Z(l,u,a,a[0],n?J(u,a[0],f,null):q(a[0]),null)},i(a){n||(P(l,a),n=!0)},o(a){y(l,a),n=!1},d(a){a&&m(e),l&&l.d(a),t=!1,s()}}}function it(r,e,n){let{$$slots:t={},$$scope:s}=e;function u(l){X.call(this,r,l)}return r.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,t,u]}class rt extends N{constructor(e){super(),Q(this,e,it,at,z,{})}}function S(r,e,n){const t=r.slice();return t[3]=e[n],t}function F(r,e,n){const t=r.slice();return t[6]=e[n],t}function ut(r){let e,n=r[6]+"",t,s;return{c(){e=v("h3"),t=U(n),s=w()},l(u){e=b(u,"H3",{});var l=T(e);t=A(l,n),l.forEach(m),s=O(u)},m(u,l){h(u,e,l),E(e,t),h(u,s,l)},p(u,l){l&1&&n!==(n=u[6]+"")&&D(t,n)},d(u){u&&(m(e),m(s))}}}function M(r){let e,n;return e=new rt({props:{selected:!0,$$slots:{default:[ut]},$$scope:{ctx:r}}}),e.$on("click",function(){tt(r[2](r[6]))&&r[2](r[6]).apply(this,arguments)}),{c(){j(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){K(e,t,s),n=!0},p(t,s){r=t;const u={};s&513&&(u.$$scope={dirty:s,ctx:r}),e.$set(u)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function W(r){let e,n,t=r[3].tags+"",s,u,l,a,f=r[3].meta.title+"",_,V,d;return{c(){e=v("div"),n=v("h4"),s=U(t),u=w(),l=v("a"),a=v("h3"),_=U(f),d=w(),this.h()},l(c){e=b(c,"DIV",{style:!0});var o=T(e);n=b(o,"H4",{});var p=T(n);s=A(p,t),p.forEach(m),u=O(o),l=b(o,"A",{href:!0});var i=T(l);a=b(i,"H3",{});var $=T(a);_=A($,f),$.forEach(m),i.forEach(m),d=O(o),o.forEach(m),this.h()},h(){k(l,"href",V=r[3].path),R(e,"display","flex"),R(e,"gap","10px")},m(c,o){h(c,e,o),E(e,n),E(n,s),E(e,u),E(e,l),E(l,a),E(a,_),E(e,d)},p(c,o){o&1&&t!==(t=c[3].tags+"")&&D(s,t),o&1&&f!==(f=c[3].meta.title+"")&&D(_,f),o&1&&V!==(V=c[3].path)&&k(l,"href",V)},d(c){c&&m(e)}}}function x(r){let e=!r[1].includes(r[3].tags),n,t=e&&W(r);return{c(){t&&t.c(),n=B()},l(s){t&&t.l(s),n=B()},m(s,u){t&&t.m(s,u),h(s,n,u)},p(s,u){u&3&&(e=!s[1].includes(s[3].tags)),e?t?t.p(s,u):(t=W(s),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(s){s&&m(n),t&&t.d(s)}}}function _t(r){let e,n="I like creating things. This is a log of all things I create and muse.",t,s,u,l,a,f=I(r[0].allTags),_=[];for(let o=0;o<f.length;o+=1)_[o]=M(F(r,f,o));const V=o=>y(_[o],1,1,()=>{_[o]=null});let d=I(r[0].allPosts),c=[];for(let o=0;o<d.length;o+=1)c[o]=x(S(r,d,o));return{c(){e=v("h2"),e.textContent=n,t=w(),s=v("div");for(let o=0;o<_.length;o+=1)_[o].c();u=w();for(let o=0;o<c.length;o+=1)c[o].c();l=B(),this.h()},l(o){e=b(o,"H2",{"data-svelte-h":!0}),C(e)!=="svelte-by3auk"&&(e.textContent=n),t=O(o),s=b(o,"DIV",{class:!0,style:!0});var p=T(s);for(let i=0;i<_.length;i+=1)_[i].l(p);p.forEach(m),u=O(o);for(let i=0;i<c.length;i+=1)c[i].l(o);l=B(),this.h()},h(){k(s,"class","filterBar"),R(s,"display","flex"),R(s,"flex-direction","row"),R(s,"gap","10px")},m(o,p){h(o,e,p),h(o,t,p),h(o,s,p);for(let i=0;i<_.length;i+=1)_[i]&&_[i].m(s,null);h(o,u,p);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(o,p);h(o,l,p),a=!0},p(o,p){if(p&5){f=I(o[0].allTags);let i;for(i=0;i<f.length;i+=1){const $=F(o,f,i);_[i]?(_[i].p($,p),P(_[i],1)):(_[i]=M($),_[i].c(),P(_[i],1),_[i].m(s,null))}for(lt(),i=f.length;i<_.length;i+=1)V(i);st()}if(p&3){d=I(o[0].allPosts);let i;for(i=0;i<d.length;i+=1){const $=S(o,d,i);c[i]?c[i].p($,p):(c[i]=x($),c[i].c(),c[i].m(l.parentNode,l))}for(;i<c.length;i+=1)c[i].d(1);c.length=d.length}},i(o){if(!a){for(let p=0;p<f.length;p+=1)P(_[p]);a=!0}},o(o){_=_.filter(Boolean);for(let p=0;p<_.length;p+=1)y(_[p]);a=!1},d(o){o&&(m(e),m(t),m(s),m(u),m(l)),L(_,o),L(c,o)}}}function ft(r){let e,n,t,s='<button type="submit">Subscribe!</button>',u,l;return e=new ot({props:{$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment),n=w(),t=v("form"),t.innerHTML=s,u=U(`
https://follow.it/lcmchris?leanpub`),this.h()},l(a){H(e.$$.fragment,a),n=O(a),t=b(a,"FORM",{action:!0,method:!0,"data-svelte-h":!0}),C(t)!=="svelte-4ja35e"&&(t.innerHTML=s),u=A(a,`
https://follow.it/lcmchris?leanpub`),this.h()},h(){k(t,"action","https://api.follow.it/subscription-form/QWg3dlFKelVlK2ZPSnVYUFp6eWlpMHhBVmlmbUQrUG10dlUraEtvcS9NUzhzR1dKaUJYMlU3WmI2TlZEM0pBQ3g3cmxhTkl1WDBkRmIxc1d5bGhPYzVCMTQ1Q3MzWjU0cWVpdkRzV3F4Q0dsVmVrR1hzS1ZBdWdKUW1yWnN5dU18aUVmc3k4TnVaVllpS0U5elQvL1dpVFR0U2dBeE11eTRNdVdQakNhN0tGST0=/21"),k(t,"method","post")},m(a,f){K(e,a,f),h(a,n,f),h(a,t,f),h(a,u,f),l=!0},p(a,[f]){const _={};f&515&&(_.$$scope={dirty:f,ctx:a}),e.$set(_)},i(a){l||(P(e.$$.fragment,a),l=!0)},o(a){y(e.$$.fragment,a),l=!1},d(a){a&&(m(n),m(t),m(u)),G(e,a)}}}function ct(r,e,n){let{data:t}=e,s=t.allTags;function u(l){console.log(l),s.indexOf(l)==-1?(s.push(l),n(1,s)):n(1,s=s.filter(a=>a!=l))}return r.$$set=l=>{"data"in l&&n(0,t=l.data)},[t,s,u]}class vt extends N{constructor(e){super(),Q(this,e,ct,ft,z,{data:0})}}export{vt as component,gt as universal};
