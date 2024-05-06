import{r,p as G,c as wt,D as mt,j as U,_ as x,a4 as bt,a5 as Ct,a6 as at,m as St,l as Ot,s as gt,M as zt,o as _t,H as lt,N as ct,q as ut,t as pt,F as Dt,v as Ht}from"./index-f41e202c.js";import{P as $t}from"./Typography-4dccc67c.js";import{d as jt}from"./createSvgIcon-c14e487a.js";const At=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function J(e){return`scale(${e}, ${e**2})`}const Mt={entering:{opacity:1,transform:J(1)},entered:{opacity:1,transform:"none"}},X=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Pt=r.forwardRef(function(t,s){const{addEndListener:D,appear:M=!0,children:S,easing:w,in:W,onEnter:l,onEntered:b,onEntering:L,onExit:T,onExited:q,onExiting:B,style:H,timeout:h="auto",TransitionComponent:m=bt}=t,g=G(t,At),N=r.useRef(),R=r.useRef(),c=wt(),P=r.useRef(null),$=mt(P,S.ref,s),E=o=>u=>{if(o){const p=P.current;u===void 0?o(p):o(p,u)}},k=E(L),F=E((o,u)=>{Ct(o);const{duration:p,delay:C,easing:d}=at({style:H,timeout:h,easing:w},{mode:"enter"});let y;h==="auto"?(y=c.transitions.getAutoHeightDuration(o.clientHeight),R.current=y):y=p,o.style.transition=[c.transitions.create("opacity",{duration:y,delay:C}),c.transitions.create("transform",{duration:X?y:y*.666,delay:C,easing:d})].join(","),l&&l(o,u)}),I=E(b),v=E(B),j=E(o=>{const{duration:u,delay:p,easing:C}=at({style:H,timeout:h,easing:w},{mode:"exit"});let d;h==="auto"?(d=c.transitions.getAutoHeightDuration(o.clientHeight),R.current=d):d=u,o.style.transition=[c.transitions.create("opacity",{duration:d,delay:p}),c.transitions.create("transform",{duration:X?d:d*.666,delay:X?p:p||d*.333,easing:C})].join(","),o.style.opacity=0,o.style.transform=J(.75),T&&T(o)}),K=E(q),A=o=>{h==="auto"&&(N.current=setTimeout(o,R.current||0)),D&&D(P.current,o)};return r.useEffect(()=>()=>{clearTimeout(N.current)},[]),U.jsx(m,x({appear:M,in:W,nodeRef:P,onEnter:F,onEntered:I,onEntering:k,onExit:j,onExited:K,onExiting:v,addEndListener:A,timeout:h==="auto"?null:h},g,{children:(o,u)=>r.cloneElement(S,x({style:x({opacity:0,transform:J(.75),visibility:o==="exited"&&!W?"hidden":void 0},Mt[o],H,S.props.style),ref:$},u))}))});Pt.muiSupportAuto=!0;const Wt=Pt;function Lt(e){return St("MuiPopover",e)}Ot("MuiPopover",["root","paper"]);const Nt=["onEntering"],kt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],Ft=["slotProps"];function dt(e,t){let s=0;return typeof t=="number"?s=t:t==="center"?s=e.height/2:t==="bottom"&&(s=e.height),s}function ft(e,t){let s=0;return typeof t=="number"?s=t:t==="center"?s=e.width/2:t==="right"&&(s=e.width),s}function ht(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Y(e){return typeof e=="function"?e():e}const Gt=e=>{const{classes:t}=e;return Ht({root:["root"],paper:["paper"]},Lt,t)},Ut=gt(zt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),qt=gt($t,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Bt=r.forwardRef(function(t,s){var D,M,S;const w=_t({props:t,name:"MuiPopover"}),{action:W,anchorEl:l,anchorOrigin:b={vertical:"top",horizontal:"left"},anchorPosition:L,anchorReference:T="anchorEl",children:q,className:B,container:H,elevation:h=8,marginThreshold:m=16,open:g,PaperProps:N={},slots:R,slotProps:c,transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:$=Wt,transitionDuration:E="auto",TransitionProps:{onEntering:k}={}}=w,F=G(w.TransitionProps,Nt),I=G(w,kt),v=(D=c==null?void 0:c.paper)!=null?D:N,j=r.useRef(),K=mt(j,v.ref),A=x({},w,{anchorOrigin:b,anchorReference:T,elevation:h,marginThreshold:m,externalPaperSlotProps:v,transformOrigin:P,TransitionComponent:$,transitionDuration:E,TransitionProps:F}),o=Gt(A),u=r.useCallback(()=>{if(T==="anchorPosition")return L;const n=Y(l),a=(n&&n.nodeType===1?n:lt(j.current).body).getBoundingClientRect();return{top:a.top+dt(a,b.vertical),left:a.left+ft(a,b.horizontal)}},[l,b.horizontal,b.vertical,L,T]),p=r.useCallback(n=>({vertical:dt(n,P.vertical),horizontal:ft(n,P.horizontal)}),[P.horizontal,P.vertical]),C=r.useCallback(n=>{const i={width:n.offsetWidth,height:n.offsetHeight},a=p(i);if(T==="none")return{top:null,left:null,transformOrigin:ht(a)};const et=u();let z=et.top-a.vertical,_=et.left-a.horizontal;const ot=z+i.height,nt=_+i.width,rt=ct(Y(l)),it=rt.innerHeight-m,st=rt.innerWidth-m;if(z<m){const f=z-m;z-=f,a.vertical+=f}else if(ot>it){const f=ot-it;z-=f,a.vertical+=f}if(_<m){const f=_-m;_-=f,a.horizontal+=f}else if(nt>st){const f=nt-st;_-=f,a.horizontal+=f}return{top:`${Math.round(z)}px`,left:`${Math.round(_)}px`,transformOrigin:ht(a)}},[l,T,u,p,m]),[d,y]=r.useState(g),O=r.useCallback(()=>{const n=j.current;if(!n)return;const i=C(n);i.top!==null&&(n.style.top=i.top),i.left!==null&&(n.style.left=i.left),n.style.transformOrigin=i.transformOrigin,y(!0)},[C]),Et=(n,i)=>{k&&k(n,i),O()},vt=()=>{y(!1)};r.useEffect(()=>{g&&O()}),r.useImperativeHandle(W,()=>g?{updatePosition:()=>{O()}}:null,[g,O]),r.useEffect(()=>{if(!g)return;const n=jt(()=>{O()}),i=ct(l);return i.addEventListener("resize",n),()=>{n.clear(),i.removeEventListener("resize",n)}},[l,g,O]);let Q=E;E==="auto"&&!$.muiSupportAuto&&(Q=void 0);const yt=H||(l?lt(Y(l)).body:void 0),V=(M=R==null?void 0:R.root)!=null?M:Ut,Z=(S=R==null?void 0:R.paper)!=null?S:qt,xt=ut({elementType:Z,externalSlotProps:x({},v,{style:d?v.style:x({},v.style,{opacity:0})}),additionalProps:{elevation:h,ref:K},ownerState:A,className:pt(o.paper,v==null?void 0:v.className)}),tt=ut({elementType:V,externalSlotProps:(c==null?void 0:c.root)||{},externalForwardedProps:I,additionalProps:{ref:s,slotProps:{backdrop:{invisible:!0}},container:yt,open:g},ownerState:A,className:pt(o.root,B)}),{slotProps:Tt}=tt,Rt=G(tt,Ft);return U.jsx(V,x({},Rt,!Dt(V)&&{slotProps:Tt},{children:U.jsx($,x({appear:!0,in:g,onEntering:Et,onExited:vt,timeout:Q},F,{children:U.jsx(Z,x({},xt,{children:q}))}))}))}),Xt=Bt;export{Wt as G,Xt as P,qt as a};
