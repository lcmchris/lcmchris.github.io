import{s as de,n as Lt}from"./scheduler.8b75dc5a.js";import{S as me,i as be,g as i,s as o,h as a,x as s,c as u,a as n,f as l}from"./index.cd4b7fee.js";function we(he){let p,Ot=`<a href="https://bpp.oregonstate.edu/sites/agscid7/files/bpp/attachments/waxy-breakdown-of-garlic-feb-7-mlp.pdf" rel="nofollow">Waxy breakdown</a> of garlic is a phenomenon where garlic can go translucent and yellow. The pyruvic acid levels of the garlic also reduces, lowering its pugency and has a softer texture.
It’s considered a disease? but
It’s different to black garlic which is fermented.`,K,C,Mt="I’ve had it happen a few times to my stash of garlic. I was initially weary about using it as it look’s off, but once I did, I really enjoyed it. It’s taste is much more mellow letting me use it more sparingly. The softer texture also makes it smearable allowing it to be easily added to a marinade or paste.",N,x,It="It’s described as a defect by some sources but I didn’t really find any fault in it.",Q,f,Ft="What really interests me is that although Garlic is a main seasoning in a chef’s arsenal, there is relatively little research on how and why it develops.",X,r,qt=`Variables:
Heat
Humidity
Time
Sunlight
Closed container?
Salt?
Sugar?
Peeled vs Blubs vs untouched`,Y,v,Wt=`Proxy setup:
I unfortunately do not have precise temperature or humidity guages, nore have thav con trols for them. In their stead I’m using situations that are common in my hosue.`,Z,h,jt="<li>China(orange) - Spain(blue)</li> <li>Fridge/Cabinent/Sun</li> <li>Bagged/left out</li> <li>Broken - Bulb</li>",$,d,Et=`<strong>Cabinent</strong>
China - Cabinent - Out - Bulb
China - Cabinent - Bagged - Broken
China - Cabinent - Bagged - Bulb`,tt,m,Dt=`Spain - Cabinent - Bagged - Broken
Spain - Cabinent - Out - Broken
Spain - Cabinent - Out - Bulb`,et,b,At=`<strong>Sun</strong>
China - Sun - Out - Bulb
China - Sun - Bagged - Broken
China - Sun - Out - Broken`,nt,w,zt=`Spain - Sun - Out - Bulb
Spain - Sun - Bagged - Broken
Spain - Sun - Out - Broken`,lt,y,Rt=`<strong>Fridge</strong>
China - Fridge - Out - Bulb
China - Fridge - Bagged - Broken
China - Fridge - Out - Broken`,it,B,Gt=`Spain - Fridge - Bagged - Bulb
Spain - Fridge - Bagged - Broken`,at,g,Ut="As of 21-11-2024",st,_,Vt=`<strong>Cabinent</strong>
China - Cabinent - Out - Bulb
China - Cabinent - Bagged - Broken
China - Cabinent - Bagged - Bulb`,ot,k,Jt=`Spain - Cabinent - Bagged - Broken - 1/10
Spain - Cabinent - Out - Broken
Spain - Cabinent - Out - Bulb`,ut,c,Kt=`<strong>Sun</strong>
China - Sun - Out - Bulb
China - Sun - Bagged - Broken
China - Sun - Out - Broken`,pt,S,Nt=`Spain - Sun - Out - Bulb
Spain - Sun - Bagged - Broken
Spain - Sun - Out - Broken`,Ct,H,Qt=`<strong>Fridge</strong>
China - Fridge - Out - Bulb
China - Fridge - Bagged - Broken
China - Fridge - Out - Broken`,xt,P,Xt=`Spain - Fridge - Bagged - Bulb
Spain - Fridge - Bagged - Broken`,ft,T,Yt="As of 03-12-2024",rt,L,Zt="no change",vt,O,$t="As of 06-12-2024",ht,M,te="no change",dt,I,ee="As of 21-11-2024",mt,F,ne="Design of expeirments",bt,q,le="I currently work at a bio-tech startup and a statistical approach to analyse variation based on factors is through Design of Experiments (DOE).",wt,W,ie="What is DOE?",yt,j,ae='A famous example of DOE is the <a href="https://en.wikipedia.org/wiki/Lady_tasting_tea" rel="nofollow">lady tasting tea</a> experiment done by Ronald Fischer. In it, Ronald faces a lady who proposes she can tell the difference of if <a href="https://www.youtube.com/watch?v=InWGdojtWys" rel="nofollow">milk is poured first or tea is poured first</a>.',Bt,E,se=`To test this claim, Ronald devised the null hypothesis that she cannot determine between the two. He then asks what is the minimum about of tests to conduct to be confident enough for.
Im it he decides making 8 teas is good, 4 with milk first and 4 with milk second. Why 8?
All possible combinations of these 8 are 70. Based on pure chance, getting it all right has one possible combination. This sets the experiment with signifcance level of 1/70.`,gt,D,oe="Why DOE?",_t,A,ue="Experiments are expensive. As a sciencitist you would like to conduct the least amount while preserving reliability and information space that it provides. Leveraging statistics help define how confident you can be and optimise for certain factors to test.",kt,z,pe="How does DOE work?",ct,R,Ce='One can extend the above to more factors and even analyse <a href="https://en.wikipedia.org/wiki/Confounding" rel="nofollow">confounding factors</a>. The search/test space gets exponentially greater as you will need to test much more combinations.',St,G,xe="Factors also have levels and their relationships can also be non-linear.",Ht,U,fe=`Temp
Humidity`,Pt,V,re="Implementing DOE in our experiment.",Tt,J,ve='<a href="https://www.ipt.us.com/produce-inspection-resources/inspectors-blog/defect-identification/garlic-waxy-breakdown" rel="nofollow">https://www.ipt.us.com/produce-inspection-resources/inspectors-blog/defect-identification/garlic-waxy-breakdown</a>';return{c(){p=i("p"),p.innerHTML=Ot,K=o(),C=i("p"),C.textContent=Mt,N=o(),x=i("p"),x.textContent=It,Q=o(),f=i("p"),f.textContent=Ft,X=o(),r=i("p"),r.textContent=qt,Y=o(),v=i("p"),v.textContent=Wt,Z=o(),h=i("ul"),h.innerHTML=jt,$=o(),d=i("p"),d.innerHTML=Et,tt=o(),m=i("p"),m.textContent=Dt,et=o(),b=i("p"),b.innerHTML=At,nt=o(),w=i("p"),w.textContent=zt,lt=o(),y=i("p"),y.innerHTML=Rt,it=o(),B=i("p"),B.textContent=Gt,at=o(),g=i("h2"),g.textContent=Ut,st=o(),_=i("p"),_.innerHTML=Vt,ot=o(),k=i("p"),k.textContent=Jt,ut=o(),c=i("p"),c.innerHTML=Kt,pt=o(),S=i("p"),S.textContent=Nt,Ct=o(),H=i("p"),H.innerHTML=Qt,xt=o(),P=i("p"),P.textContent=Xt,ft=o(),T=i("h2"),T.textContent=Yt,rt=o(),L=i("p"),L.textContent=Zt,vt=o(),O=i("h2"),O.textContent=$t,ht=o(),M=i("p"),M.textContent=te,dt=o(),I=i("h2"),I.textContent=ee,mt=o(),F=i("h2"),F.textContent=ne,bt=o(),q=i("p"),q.textContent=le,wt=o(),W=i("h3"),W.textContent=ie,yt=o(),j=i("p"),j.innerHTML=ae,Bt=o(),E=i("p"),E.textContent=se,gt=o(),D=i("h3"),D.textContent=oe,_t=o(),A=i("p"),A.textContent=ue,kt=o(),z=i("h3"),z.textContent=pe,ct=o(),R=i("p"),R.innerHTML=Ce,St=o(),G=i("p"),G.textContent=xe,Ht=o(),U=i("p"),U.textContent=fe,Pt=o(),V=i("p"),V.textContent=re,Tt=o(),J=i("p"),J.innerHTML=ve},l(t){p=a(t,"P",{"data-svelte-h":!0}),s(p)!=="svelte-195qycq"&&(p.innerHTML=Ot),K=u(t),C=a(t,"P",{"data-svelte-h":!0}),s(C)!=="svelte-1m6mtjz"&&(C.textContent=Mt),N=u(t),x=a(t,"P",{"data-svelte-h":!0}),s(x)!=="svelte-1p59vzv"&&(x.textContent=It),Q=u(t),f=a(t,"P",{"data-svelte-h":!0}),s(f)!=="svelte-1on6j3x"&&(f.textContent=Ft),X=u(t),r=a(t,"P",{"data-svelte-h":!0}),s(r)!=="svelte-1nk43nx"&&(r.textContent=qt),Y=u(t),v=a(t,"P",{"data-svelte-h":!0}),s(v)!=="svelte-1x96sjc"&&(v.textContent=Wt),Z=u(t),h=a(t,"UL",{"data-svelte-h":!0}),s(h)!=="svelte-i8nvdx"&&(h.innerHTML=jt),$=u(t),d=a(t,"P",{"data-svelte-h":!0}),s(d)!=="svelte-l8oqaw"&&(d.innerHTML=Et),tt=u(t),m=a(t,"P",{"data-svelte-h":!0}),s(m)!=="svelte-1iswwx"&&(m.textContent=Dt),et=u(t),b=a(t,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1072bvy"&&(b.innerHTML=At),nt=u(t),w=a(t,"P",{"data-svelte-h":!0}),s(w)!=="svelte-17vh8ej"&&(w.textContent=zt),lt=u(t),y=a(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-14myanm"&&(y.innerHTML=Rt),it=u(t),B=a(t,"P",{"data-svelte-h":!0}),s(B)!=="svelte-1ptvwng"&&(B.textContent=Gt),at=u(t),g=a(t,"H2",{"data-svelte-h":!0}),s(g)!=="svelte-1mb7uyw"&&(g.textContent=Ut),st=u(t),_=a(t,"P",{"data-svelte-h":!0}),s(_)!=="svelte-l8oqaw"&&(_.innerHTML=Vt),ot=u(t),k=a(t,"P",{"data-svelte-h":!0}),s(k)!=="svelte-rgo71"&&(k.textContent=Jt),ut=u(t),c=a(t,"P",{"data-svelte-h":!0}),s(c)!=="svelte-1072bvy"&&(c.innerHTML=Kt),pt=u(t),S=a(t,"P",{"data-svelte-h":!0}),s(S)!=="svelte-17vh8ej"&&(S.textContent=Nt),Ct=u(t),H=a(t,"P",{"data-svelte-h":!0}),s(H)!=="svelte-14myanm"&&(H.innerHTML=Qt),xt=u(t),P=a(t,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1ptvwng"&&(P.textContent=Xt),ft=u(t),T=a(t,"H2",{"data-svelte-h":!0}),s(T)!=="svelte-16dpqyz"&&(T.textContent=Yt),rt=u(t),L=a(t,"P",{"data-svelte-h":!0}),s(L)!=="svelte-13xkqgx"&&(L.textContent=Zt),vt=u(t),O=a(t,"H2",{"data-svelte-h":!0}),s(O)!=="svelte-58us0s"&&(O.textContent=$t),ht=u(t),M=a(t,"P",{"data-svelte-h":!0}),s(M)!=="svelte-13xkqgx"&&(M.textContent=te),dt=u(t),I=a(t,"H2",{"data-svelte-h":!0}),s(I)!=="svelte-1mb7uyw"&&(I.textContent=ee),mt=u(t),F=a(t,"H2",{"data-svelte-h":!0}),s(F)!=="svelte-ofjygt"&&(F.textContent=ne),bt=u(t),q=a(t,"P",{"data-svelte-h":!0}),s(q)!=="svelte-riz0st"&&(q.textContent=le),wt=u(t),W=a(t,"H3",{"data-svelte-h":!0}),s(W)!=="svelte-148thpj"&&(W.textContent=ie),yt=u(t),j=a(t,"P",{"data-svelte-h":!0}),s(j)!=="svelte-1mqlii3"&&(j.innerHTML=ae),Bt=u(t),E=a(t,"P",{"data-svelte-h":!0}),s(E)!=="svelte-yu12a3"&&(E.textContent=se),gt=u(t),D=a(t,"H3",{"data-svelte-h":!0}),s(D)!=="svelte-4xq7w7"&&(D.textContent=oe),_t=u(t),A=a(t,"P",{"data-svelte-h":!0}),s(A)!=="svelte-13qipsn"&&(A.textContent=ue),kt=u(t),z=a(t,"H3",{"data-svelte-h":!0}),s(z)!=="svelte-3w3ce1"&&(z.textContent=pe),ct=u(t),R=a(t,"P",{"data-svelte-h":!0}),s(R)!=="svelte-1ev6ck1"&&(R.innerHTML=Ce),St=u(t),G=a(t,"P",{"data-svelte-h":!0}),s(G)!=="svelte-lp5sev"&&(G.textContent=xe),Ht=u(t),U=a(t,"P",{"data-svelte-h":!0}),s(U)!=="svelte-1m4mr1t"&&(U.textContent=fe),Pt=u(t),V=a(t,"P",{"data-svelte-h":!0}),s(V)!=="svelte-x0n6lr"&&(V.textContent=re),Tt=u(t),J=a(t,"P",{"data-svelte-h":!0}),s(J)!=="svelte-c221d3"&&(J.innerHTML=ve)},m(t,e){n(t,p,e),n(t,K,e),n(t,C,e),n(t,N,e),n(t,x,e),n(t,Q,e),n(t,f,e),n(t,X,e),n(t,r,e),n(t,Y,e),n(t,v,e),n(t,Z,e),n(t,h,e),n(t,$,e),n(t,d,e),n(t,tt,e),n(t,m,e),n(t,et,e),n(t,b,e),n(t,nt,e),n(t,w,e),n(t,lt,e),n(t,y,e),n(t,it,e),n(t,B,e),n(t,at,e),n(t,g,e),n(t,st,e),n(t,_,e),n(t,ot,e),n(t,k,e),n(t,ut,e),n(t,c,e),n(t,pt,e),n(t,S,e),n(t,Ct,e),n(t,H,e),n(t,xt,e),n(t,P,e),n(t,ft,e),n(t,T,e),n(t,rt,e),n(t,L,e),n(t,vt,e),n(t,O,e),n(t,ht,e),n(t,M,e),n(t,dt,e),n(t,I,e),n(t,mt,e),n(t,F,e),n(t,bt,e),n(t,q,e),n(t,wt,e),n(t,W,e),n(t,yt,e),n(t,j,e),n(t,Bt,e),n(t,E,e),n(t,gt,e),n(t,D,e),n(t,_t,e),n(t,A,e),n(t,kt,e),n(t,z,e),n(t,ct,e),n(t,R,e),n(t,St,e),n(t,G,e),n(t,Ht,e),n(t,U,e),n(t,Pt,e),n(t,V,e),n(t,Tt,e),n(t,J,e)},p:Lt,i:Lt,o:Lt,d(t){t&&(l(p),l(K),l(C),l(N),l(x),l(Q),l(f),l(X),l(r),l(Y),l(v),l(Z),l(h),l($),l(d),l(tt),l(m),l(et),l(b),l(nt),l(w),l(lt),l(y),l(it),l(B),l(at),l(g),l(st),l(_),l(ot),l(k),l(ut),l(c),l(pt),l(S),l(Ct),l(H),l(xt),l(P),l(ft),l(T),l(rt),l(L),l(vt),l(O),l(ht),l(M),l(dt),l(I),l(mt),l(F),l(bt),l(q),l(wt),l(W),l(yt),l(j),l(Bt),l(E),l(gt),l(D),l(_t),l(A),l(kt),l(z),l(ct),l(R),l(St),l(G),l(Ht),l(U),l(Pt),l(V),l(Tt),l(J))}}}const ge={title:"Waxy breakdown of garlic. Experiment desing",tags:"Writing",last:"07-06-24"};class _e extends me{constructor(p){super(),be(this,p,null,we,de,{})}}export{_e as default,ge as metadata};
