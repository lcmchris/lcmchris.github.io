import{_ as A}from"../chunks/preload-helper.a4192956.js";import{s as C}from"../chunks/scheduler.e108d1fd.js";import{S as D,i as H,q,g as y,m as b,s as j,r as x,h as P,j as w,n as E,f as d,c as O,u as L,k as z,a as U,x as l,v as S,o as T,t as I,b as V,d as M,w as R,p as B}from"../chunks/index.ad5d9e1f.js";const F=(o,t)=>{const n=o[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function G({params:o}){return{content:(await F(Object.assign({"../test.svx":()=>A(()=>import("../chunks/test.c2f62ed4.js"),["..\\chunks\\test.c2f62ed4.js","..\\chunks\\scheduler.e108d1fd.js","..\\chunks\\index.ad5d9e1f.js"],import.meta.url)}),`../${o.slug}.svx`)).default}}const X=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function J(o){let t,n,r=o[0].title+"",i,v,c,h,f=o[0].date+"",p,g,e,u;var _=o[0].content;function k(a,s){return{}}return _&&(e=q(_,k())),{c(){t=y("article"),n=y("h1"),i=b(r),v=j(),c=y("p"),h=b("Published: "),p=b(f),g=j(),e&&x(e.$$.fragment),this.h()},l(a){t=P(a,"ARTICLE",{class:!0});var s=w(t);n=P(s,"H1",{});var m=w(n);i=E(m,r),m.forEach(d),v=O(s),c=P(s,"P",{});var $=w(c);h=E($,"Published: "),p=E($,f),$.forEach(d),g=O(s),e&&L(e.$$.fragment,s),s.forEach(d),this.h()},h(){z(t,"class","svelte-aqcely")},m(a,s){U(a,t,s),l(t,n),l(n,i),l(t,v),l(t,c),l(c,h),l(c,p),l(t,g),e&&S(e,t,null),u=!0},p(a,[s]){if((!u||s&1)&&r!==(r=a[0].title+"")&&T(i,r),(!u||s&1)&&f!==(f=a[0].date+"")&&T(p,f),s&1&&_!==(_=a[0].content)){if(e){B();const m=e;I(m.$$.fragment,1,0,()=>{R(m,1)}),V()}_?(e=q(_,k()),x(e.$$.fragment),M(e.$$.fragment,1),S(e,t,null)):e=null}},i(a){u||(e&&M(e.$$.fragment,a),u=!0)},o(a){e&&I(e.$$.fragment,a),u=!1},d(a){a&&d(t),e&&R(e)}}}function K(o,t,n){let{data:r}=t;return o.$$set=i=>{"data"in i&&n(0,r=i.data)},[r]}class Y extends D{constructor(t){super(),H(this,t,K,J,C,{data:0})}}export{Y as component,X as universal};
