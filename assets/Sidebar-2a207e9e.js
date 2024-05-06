import{m as Te,l as Le,s as W,_ as d,r as x,o as De,a7 as ot,a4 as Ae,p as re,c as se,D as Be,j as e,t as J,v as He,a6 as oe,N as Ve,a5 as it,M as st,Q as lt,n as ie,u as qe,P as U,C as Ue,L as ct,a8 as dt,a9 as ut,b as pt,a3 as ft}from"./index-f41e202c.js";import{d as gt}from"./DashboardRounded-72c66446.js";import{P as mt,L as ht,a as Fe}from"./ProfileAvatar-a42c815b.js";import{u as vt}from"./ProfileStore-349ed0fd.js";import{B as ae}from"./Box-8b7a0836.js";import{P as xt,T as fe}from"./Typography-4dccc67c.js";import{a as We}from"./List-155c9747.js";import{L as Rt}from"./ListItemIcon-0aae86e5.js";import{d as _t,r as S,i as b,I as yt}from"./createSvgIcon-c14e487a.js";import{u as Ge}from"./SidebarStore-74a9779a.js";import"./extendSxProp-7d097ed5.js";import"./listItemIconClasses-557778f2.js";function Et(n){return Te("MuiCollapse",n)}Le("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const jt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Mt=n=>{const{orientation:t,classes:o}=n,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return He(a,Et,o)},St=W("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[o.orientation],o.state==="entered"&&t.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&t.hidden]}})(({theme:n,ownerState:t})=>d({height:0,overflow:"hidden",transition:n.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},t.state==="entered"&&d({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),bt=W("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,t)=>t.wrapper})(({ownerState:n})=>d({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),zt=W("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,t)=>t.wrapperInner})(({ownerState:n})=>d({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),Ye=x.forwardRef(function(t,o){const a=De({props:t,name:"MuiCollapse"}),{addEndListener:i,children:r,className:p,collapsedSize:f="0px",component:h,easing:c,in:v,onEnter:y,onEntered:M,onEntering:P,onExit:O,onExited:T,onExiting:N,orientation:L="vertical",style:$,timeout:g=ot.standard,TransitionComponent:w=Ae}=a,C=re(a,jt),E=d({},a,{orientation:L,collapsedSize:f}),u=Mt(E),D=se(),R=x.useRef(),m=x.useRef(null),z=x.useRef(),k=typeof f=="number"?`${f}px`:f,A=L==="horizontal",j=A?"width":"height";x.useEffect(()=>()=>{clearTimeout(R.current)},[]);const F=x.useRef(null),ue=Be(o,F),B=l=>I=>{if(l){const H=F.current;I===void 0?l(H):l(H,I)}},s=()=>m.current?m.current[A?"clientWidth":"clientHeight"]:0,_=B((l,I)=>{m.current&&A&&(m.current.style.position="absolute"),l.style[j]=k,y&&y(l,I)}),Z=B((l,I)=>{const H=s();m.current&&A&&(m.current.style.position="");const{duration:Q,easing:ee}=oe({style:$,timeout:g,easing:c},{mode:"enter"});if(g==="auto"){const Ne=D.transitions.getAutoHeightDuration(H);l.style.transitionDuration=`${Ne}ms`,z.current=Ne}else l.style.transitionDuration=typeof Q=="string"?Q:`${Q}ms`;l.style[j]=`${H}px`,l.style.transitionTimingFunction=ee,P&&P(l,I)}),et=B((l,I)=>{l.style[j]="auto",M&&M(l,I)}),tt=B(l=>{l.style[j]=`${s()}px`,O&&O(l)}),nt=B(T),at=B(l=>{const I=s(),{duration:H,easing:Q}=oe({style:$,timeout:g,easing:c},{mode:"exit"});if(g==="auto"){const ee=D.transitions.getAutoHeightDuration(I);l.style.transitionDuration=`${ee}ms`,z.current=ee}else l.style.transitionDuration=typeof H=="string"?H:`${H}ms`;l.style[j]=k,l.style.transitionTimingFunction=Q,N&&N(l)}),rt=l=>{g==="auto"&&(R.current=setTimeout(l,z.current||0)),i&&i(F.current,l)};return e.jsx(w,d({in:v,onEnter:_,onEntered:et,onEntering:Z,onExit:tt,onExited:nt,onExiting:at,addEndListener:rt,nodeRef:F,timeout:g==="auto"?null:g},C,{children:(l,I)=>e.jsx(St,d({as:h,className:J(u.root,p,{entered:u.entered,exited:!v&&k==="0px"&&u.hidden}[l]),style:d({[A?"minWidth":"minHeight"]:k},$),ownerState:d({},E,{state:l}),ref:ue},I,{children:e.jsx(bt,{ownerState:d({},E,{state:l}),className:u.wrapper,ref:m,children:e.jsx(zt,{ownerState:d({},E,{state:l}),className:u.wrapperInner,children:r})})}))}))});Ye.muiSupportAuto=!0;const It=Ye,kt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ot(n,t,o){const a=t.getBoundingClientRect(),i=o&&o.getBoundingClientRect(),r=Ve(t);let p;if(t.fakeTransform)p=t.fakeTransform;else{const c=r.getComputedStyle(t);p=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}let f=0,h=0;if(p&&p!=="none"&&typeof p=="string"){const c=p.split("(")[1].split(")")[0].split(",");f=parseInt(c[4],10),h=parseInt(c[5],10)}return n==="left"?i?`translateX(${i.right+f-a.left}px)`:`translateX(${r.innerWidth+f-a.left}px)`:n==="right"?i?`translateX(-${a.right-i.left-f}px)`:`translateX(-${a.left+a.width-f}px)`:n==="up"?i?`translateY(${i.bottom+h-a.top}px)`:`translateY(${r.innerHeight+h-a.top}px)`:i?`translateY(-${a.top-i.top+a.height-h}px)`:`translateY(-${a.top+a.height-h}px)`}function Nt(n){return typeof n=="function"?n():n}function te(n,t,o){const a=Nt(o),i=Ot(n,t,a);i&&(t.style.webkitTransform=i,t.style.transform=i)}const $t=x.forwardRef(function(t,o){const a=se(),i={enter:a.transitions.easing.easeOut,exit:a.transitions.easing.sharp},r={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:h,container:c,direction:v="down",easing:y=i,in:M,onEnter:P,onEntered:O,onEntering:T,onExit:N,onExited:L,onExiting:$,style:g,timeout:w=r,TransitionComponent:C=Ae}=t,E=re(t,kt),u=x.useRef(null),D=Be(h.ref,u,o),R=s=>_=>{s&&(_===void 0?s(u.current):s(u.current,_))},m=R((s,_)=>{te(v,s,c),it(s),P&&P(s,_)}),z=R((s,_)=>{const Z=oe({timeout:w,style:g,easing:y},{mode:"enter"});s.style.webkitTransition=a.transitions.create("-webkit-transform",d({},Z)),s.style.transition=a.transitions.create("transform",d({},Z)),s.style.webkitTransform="none",s.style.transform="none",T&&T(s,_)}),k=R(O),A=R($),j=R(s=>{const _=oe({timeout:w,style:g,easing:y},{mode:"exit"});s.style.webkitTransition=a.transitions.create("-webkit-transform",_),s.style.transition=a.transitions.create("transform",_),te(v,s,c),N&&N(s)}),F=R(s=>{s.style.webkitTransition="",s.style.transition="",L&&L(s)}),ue=s=>{p&&p(u.current,s)},B=x.useCallback(()=>{u.current&&te(v,u.current,c)},[v,c]);return x.useEffect(()=>{if(M||v==="down"||v==="right")return;const s=_t(()=>{u.current&&te(v,u.current,c)}),_=Ve(u.current);return _.addEventListener("resize",s),()=>{s.clear(),_.removeEventListener("resize",s)}},[v,M,c]),x.useEffect(()=>{M||B()},[M,B]),e.jsx(C,d({nodeRef:u,onEnter:m,onEntered:k,onEntering:z,onExit:j,onExited:F,onExiting:A,addEndListener:ue,appear:f,in:M,timeout:w},E,{children:(s,_)=>x.cloneElement(h,d({ref:D,style:d({visibility:s==="exited"&&!M?"hidden":void 0},g,h.props.style)},_))}))}),wt=$t;function Ct(n){return Te("MuiDrawer",n)}Le("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Pt=["BackdropProps"],Tt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Xe=(n,t)=>{const{ownerState:o}=n;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},Lt=n=>{const{classes:t,anchor:o,variant:a}=n,i={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${ie(o)}`,a!=="temporary"&&`paperAnchorDocked${ie(o)}`]};return He(i,Ct,t)},Dt=W(st,{name:"MuiDrawer",slot:"Root",overridesResolver:Xe})(({theme:n})=>({zIndex:(n.vars||n).zIndex.drawer})),$e=W("div",{shouldForwardProp:lt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Xe})({flex:"0 0 auto"}),At=W(xt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.paper,t[`paperAnchor${ie(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${ie(o.anchor)}`]]}})(({theme:n,ownerState:t})=>d({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(n.vars||n).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(n.vars||n).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(n.vars||n).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(n.vars||n).palette.divider}`})),Qe={left:"right",right:"left",top:"down",bottom:"up"};function Bt(n){return["left","right"].indexOf(n)!==-1}function Ht(n,t){return n.direction==="rtl"&&Bt(t)?Qe[t]:t}const Vt=x.forwardRef(function(t,o){const a=De({props:t,name:"MuiDrawer"}),i=se(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:p="left",BackdropProps:f,children:h,className:c,elevation:v=16,hideBackdrop:y=!1,ModalProps:{BackdropProps:M}={},onClose:P,open:O=!1,PaperProps:T={},SlideProps:N,TransitionComponent:L=wt,transitionDuration:$=r,variant:g="temporary"}=a,w=re(a.ModalProps,Pt),C=re(a,Tt),E=x.useRef(!1);x.useEffect(()=>{E.current=!0},[]);const u=Ht(i,p),R=d({},a,{anchor:p,elevation:v,open:O,variant:g},C),m=Lt(R),z=e.jsx(At,d({elevation:g==="temporary"?v:0,square:!0},T,{className:J(m.paper,T.className),ownerState:R,children:h}));if(g==="permanent")return e.jsx($e,d({className:J(m.root,m.docked,c),ownerState:R,ref:o},C,{children:z}));const k=e.jsx(L,d({in:O,direction:Qe[u],timeout:$,appear:E.current},N,{children:z}));return g==="persistent"?e.jsx($e,d({className:J(m.root,m.docked,c),ownerState:R,ref:o},C,{children:k})):e.jsx(Dt,d({BackdropProps:d({},f,M,{transitionDuration:$}),className:J(m.root,m.modal,c),open:O,ownerState:R,onClose:P,hideBackdrop:y,ref:o},C,w,{children:k}))}),qt=Vt;function Ut(){const n=se(),t=n.palette.neutral.main.replace("1)","0.1)"),o=n.palette.primary.main.replace("1)","0.2)"),a=n.palette.neutral.main,{userData:i}=qe(),r=i.firstName+" "+i.lastName,p=i.email,{handleProfileOpen:f}=vt(),h=()=>{f()};return e.jsxs(ae,{onClick:h,display:"flex",alignItems:"center",gap:"16px",margin:"16px 16px 16px 16px",padding:"0 24px 0 16px",backgroundColor:t,borderRadius:"8px",sx:{"&:hover":{"&:hover":{bgcolor:o}}},children:[e.jsx(ae,{padding:"16px 0 16px 0",children:e.jsx(mt,{avatarSize:40,textSize:"18px"})}),e.jsxs(ae,{display:"flex",flexDirection:"column",sx:{overflow:"hidden",textOverflow:"ellipsis"},children:[e.jsx(fe,{variant:"h6",component:"span",fontWeight:700,noWrap:!0,color:a,children:r}),e.jsx(fe,{variant:"h6",noWrap:!0,component:"span",fontWeight:500,color:a,children:p})]})]})}const Ft="_menuOptionsTitle_6c4px_1",Wt={menuOptionsTitle:Ft};function V({sidebarItems:n,selectedLink:t,handleListItemClick:o}){const{neutralMain:a}=Ue(),i=a.replace("1)","0.1)");return e.jsx(We,{component:"div",disablePadding:!0,children:n.map((r,p)=>e.jsx(ht,{sx:{display:"block",paddingTop:"4px",paddingRight:"8px",paddingBottom:"4px",paddingLeft:"8px"},children:e.jsx(ct,{to:r==null?void 0:r.link,children:e.jsxs(Fe,{disableGutters:!1,className:"list-item-button",sx:{paddingLeft:"16px",paddingRight:"16px",height:48,borderRadius:"8px","&.Mui-selected":{backgroundColor:i},"&[data-focus='true'], &:hover":{backgroundColor:"neutral.light !important"}},"aria-label":r==null?void 0:r.aria,role:"button",selected:t===(r==null?void 0:r.link),onClick:()=>o(r==null?void 0:r.link),children:[e.jsx(Rt,{sx:{minWidth:"48px",color:a},children:r==null?void 0:r.icon}),e.jsx("h2",{className:Wt.menuOptionsTitle,style:{color:a},children:r==null?void 0:r.title})]})})},p))})}V.propTypes={sidebarItems:U.array.isRequired,selectedLink:U.string.isRequired,handleListItemClick:U.func.isRequired};var ge={},Gt=b;Object.defineProperty(ge,"__esModule",{value:!0});var me=ge.default=void 0,Yt=Gt(S()),Xt=e,Qt=(0,Yt.default)((0,Xt.jsx)("path",{d:"M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.32-8.34c1.17-1.17 1.17-3.07 0-4.24l-4.24-4.24c-1.15-1.15-3.01-1.17-4.18-.06l4.47 4.47z"}),"HandshakeRounded");me=ge.default=Qt;var he={},Kt=b;Object.defineProperty(he,"__esModule",{value:!0});var ve=he.default=void 0,Jt=Kt(S()),pe=e,Zt=(0,Jt.default)([(0,pe.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,pe.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,pe.jsx)("path",{d:"M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"2")],"SentimentDissatisfiedOutlined");ve=he.default=Zt;var xe={},en=b;Object.defineProperty(xe,"__esModule",{value:!0});var Re=xe.default=void 0,tn=en(S()),nn=e,an=(0,tn.default)((0,nn.jsx)("path",{d:"M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8c.31-.31.09-.85-.36-.85H6c0-3.9 3.18-7.05 7.1-7 3.72.05 6.85 3.18 6.9 6.9.05 3.91-3.1 7.1-7 7.1-1.61 0-3.1-.55-4.28-1.48-.4-.31-.96-.28-1.32.08-.42.42-.39 1.13.08 1.49C9 20.29 10.91 21 13 21c5.05 0 9.14-4.17 9-9.26-.13-4.69-4.05-8.61-8.74-8.74zm-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74z"}),"HistoryRounded");Re=xe.default=an;const rn=[{title:"Borrow Items",icon:e.jsx(me,{fontSize:"large"}),link:"borrow-items",aria:"Navigate to dashboard page"},{title:"Borrow Requests",icon:e.jsx(Re,{fontSize:"large"}),link:"borrow-requests",aria:"Navigate to equipment borrowing history page"},{title:"Penalty Records",icon:e.jsx(ve,{fontSize:"large"}),link:"penalties",aria:"Navigate to penalty records page"}];var _e={},on=b;Object.defineProperty(_e,"__esModule",{value:!0});var le=_e.default=void 0,sn=on(S()),ne=e,ln=(0,sn.default)([(0,ne.jsx)("path",{d:"M14 9h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zm0 3h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1z"},"0"),(0,ne.jsx)("path",{d:"M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H4c-.55 0-1 .45-1 1v2c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55-.45-1-1-1H8V5h11v14z"},"1"),(0,ne.jsx)("circle",{cx:"17",cy:"8",r:"1"},"2"),(0,ne.jsx)("circle",{cx:"17",cy:"11",r:"1"},"3")],"ReceiptLongRounded");le=_e.default=ln;var ye={},cn=b;Object.defineProperty(ye,"__esModule",{value:!0});var G=ye.default=void 0,dn=cn(S()),we=e,un=(0,dn.default)([(0,we.jsx)("path",{d:"M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},"0"),(0,we.jsx)("path",{d:"M21.75 12.25c-.41-.41-1.09-.41-1.5 0L15.51 17l-2.26-2.25c-.41-.41-1.08-.41-1.5 0-.41.41-.41 1.09 0 1.5l3.05 3.04c.39.39 1.02.39 1.41 0l5.53-5.54c.42-.41.42-1.09.01-1.5z"},"1")],"InventoryRounded");G=ye.default=un;var Ee={},pn=b;Object.defineProperty(Ee,"__esModule",{value:!0});var ce=Ee.default=void 0,fn=pn(S()),gn=e,mn=(0,fn.default)((0,gn.jsx)("path",{d:"M9 5v.38c-.83-.33-1.72-.5-2.61-.5-1.42 0-2.84.43-4.05 1.29-.51.36-.57 1.09-.13 1.53l2.57 2.57h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H7c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V5c0-.55-.45-1-1-1H10c-.55 0-1 .45-1 1zm-1.11 5.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.55-.45-1-1-1h-5v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"}),"HistoryEduRounded");ce=Ee.default=mn;var je={},hn=b;Object.defineProperty(je,"__esModule",{value:!0});var Y=je.default=void 0,vn=hn(S()),xn=e,Rn=(0,vn.default)((0,xn.jsx)("path",{d:"M4 3h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm10 0h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zM4 13h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm13 0c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1z"}),"DashboardCustomizeRounded");Y=je.default=Rn;var Me={},_n=b;Object.defineProperty(Me,"__esModule",{value:!0});var X=Me.default=void 0,yn=_n(S()),En=e,jn=(0,yn.default)((0,En.jsx)("path",{d:"M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"ManageAccountsOutlined");X=Me.default=jn;var Se={},Mn=b;Object.defineProperty(Se,"__esModule",{value:!0});var de=Se.default=void 0,Sn=Mn(S()),Ce=e,bn=(0,Sn.default)([(0,Ce.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"},"0"),(0,Ce.jsx)("path",{d:"M11 14h2v2h-2zm0-7h2v5h-2z"},"1")],"GppMaybeOutlined");de=Se.default=bn;const zn=[{title:"Dashboard",icon:e.jsx(Y,{fontSize:"large"}),link:"dashboard",aria:"Navigate to dashboard page"},{title:"Manage Transactions",icon:e.jsx(le,{fontSize:"large"}),link:"manage-transactions",aria:"Navigate to manage transactions page"},{title:"Borrowing History",icon:e.jsx(ce,{fontSize:"large"}),link:"borrowing-history",aria:"Navigate to lending history page"},{title:"Manage Inventory",icon:e.jsx(G,{fontSize:"large"}),link:"manage-inventory",aria:"Navigate to manage inventory page"},{title:"Manage Penalties",icon:e.jsx(de,{fontSize:"large"}),link:"manage-penalty",aria:"Navigate to manage penalty page"},{title:"Manage Office Accounts",icon:e.jsx(X,{fontSize:"large"}),link:"manage-office-account",aria:"Navigate to office account management page"}],In=[{title:"Lending Dashboard",icon:e.jsx(Y,{fontSize:"large"}),link:"dashboard",aria:"Navigate to dashboard page"},{title:"Manage Transactions",icon:e.jsx(le,{fontSize:"large"}),link:"manage-transactions",aria:"Navigate to manage transactions page"},{title:"Borrowing History",icon:e.jsx(ce,{fontSize:"large"}),link:"borrowing-history",aria:"Navigate to lending history page"},{title:"Manage Inventory",icon:e.jsx(G,{fontSize:"large"}),link:"manage-office-inventory",aria:"Navigate to manage inventory page"},{title:"Manage Penalties",icon:e.jsx(de,{fontSize:"large"}),link:"manage-penalty",aria:"Navigate to manage penalty page"}],kn=[{title:"Borrow Items",icon:e.jsx(me,{fontSize:"large"}),link:"borrow-items",aria:"Navigate to dashboard page"},{title:"Borrow Requests",icon:e.jsx(Re,{fontSize:"large"}),link:"borrow-requests",aria:"Navigate to equipment borrowing history page"},{title:"Penalty Records",icon:e.jsx(ve,{fontSize:"large"}),link:"penalties",aria:"Navigate to penalty records page"},{title:"Dashboard",icon:e.jsx(Y,{fontSize:"large"}),link:"dashboard",aria:"Navigate to dashboard page"},{title:"Manage Transactions",icon:e.jsx(le,{fontSize:"large"}),link:"manage-transactions",aria:"Navigate to manage transactions page"},{title:"Borrowing History",icon:e.jsx(ce,{fontSize:"large"}),link:"borrowing-history",aria:"Navigate to lending history page"},{title:"Manage Inventory",icon:e.jsx(G,{fontSize:"large"}),link:"manage-inventory",aria:"Navigate to manage inventory page"},{title:"Manage Penalties",icon:e.jsx(de,{fontSize:"large"}),link:"manage-penalty",aria:"Navigate to manage penalty page"},{title:"Manage Accounts",icon:e.jsx(X,{fontSize:"large"}),link:"manage-accounts",aria:"Navigate to lending history page"},{title:"Manage Endorsements",icon:e.jsx(e.Fragment,{}),link:"manage-endorsements",aria:"navigate to manage endorsement page"},{link:"penalty-clearance"}];var be={},On=b;Object.defineProperty(be,"__esModule",{value:!0});var Ke=be.default=void 0,Nn=On(S()),$n=e,wn=(0,Nn.default)((0,$n.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");Ke=be.default=wn;var ze={},Cn=b;Object.defineProperty(ze,"__esModule",{value:!0});var Je=ze.default=void 0,Pn=Cn(S()),Tn=e,Ln=(0,Pn.default)((0,Tn.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");Je=ze.default=Ln;const Dn="_menuTitle_dgooa_1",An={menuTitle:Dn};function q({menuTitle:n,isOpen:t,setIsOpen:o,children:a}){const{neutralMain:i}=Ue(),r=()=>{o()};return e.jsxs(We,{children:[e.jsxs(Fe,{onClick:r,disableRipple:!0,sx:{padding:"0px 16px",display:"flex",justifyContent:"space-between","&:hover":{backgroundColor:"transparent"}},children:[e.jsx("p",{className:An.menuTitle,style:{color:i},children:n}),t?e.jsx(Ke,{sx:{color:"neutral.main"}}):e.jsx(Je,{sx:{color:"neutral.main"}})]}),e.jsx(It,{in:t,timeout:"auto",unmountOnExit:!0,children:a})]})}q.propTypes={menuTitle:U.string.isRequired,isOpen:U.bool.isRequired,setIsOpen:U.func.isRequired,children:U.node.isRequired};var Ie={},Bn=b;Object.defineProperty(Ie,"__esModule",{value:!0});var Ze=Ie.default=void 0,Hn=Bn(S()),Vn=e,qn=(0,Hn.default)((0,Vn.jsx)("path",{d:"M13.12 2.06 7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"}),"ThumbUpRounded");Ze=Ie.default=qn;const Un=[{title:"Manage Endorsements",icon:e.jsx(Ze,{fontSize:"large"}),link:"manage-endorsements",aria:"navigate to manage endorsement page"}],Fn=[{title:"Admin Dashboard",icon:e.jsx(Y,{fontSize:"large"}),link:"admin-dashboard",aria:"Navigate to admin dashboard page"},{title:"Manage Accounts",icon:e.jsx(X,{fontSize:"large"}),link:"admin-account-management",aria:"Navigate to manage transactions page"}];var ke={},Wn=b;Object.defineProperty(ke,"__esModule",{value:!0});var Oe=ke.default=void 0,Gn=Wn(S()),Yn=e,Xn=(0,Gn.default)((0,Yn.jsx)("path",{d:"M4 11.5v4c0 .83.67 1.5 1.5 1.5S7 16.33 7 15.5v-4c0-.83-.67-1.5-1.5-1.5S4 10.67 4 11.5zm6 0v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zM3.5 22h16c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5S2.67 22 3.5 22zM16 11.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zM10.57 1.49l-7.9 4.16c-.41.21-.67.64-.67 1.1C2 7.44 2.56 8 3.25 8h16.51C20.44 8 21 7.44 21 6.75c0-.46-.26-.89-.67-1.1l-7.9-4.16c-.58-.31-1.28-.31-1.86 0z"}),"AccountBalanceRounded");Oe=ke.default=Xn;const Qn=[{title:"Penalty Clearance",icon:e.jsx(Oe,{fontSize:"large"}),link:"penalty-clearance",aria:"Navigate to penalty clearance page"}],Kn=[{title:"Penalty Clearance",icon:e.jsx(Oe,{fontSize:"large"}),link:"penalty-clearance",aria:"Navigate to penalty clearance page"},{title:"Manage Office Accounts",icon:e.jsx(X,{fontSize:"large"}),link:"manage-office-account",aria:"Navigate to office account management page"}],Jn=[{title:"Manage Inventory",icon:e.jsx(G,{fontSize:"large"}),link:"manage-inventory",aria:"Navigate to penalty clearance page"}],Zn=[{title:"Manage Inventory",icon:e.jsx(G,{fontSize:"large"}),link:"manage-inventory",aria:"Navigate to penalty clearance page"},{title:"Manage Office Accounts",icon:e.jsx(X,{fontSize:"large"}),link:"manage-office-account",aria:"Navigate to office account management page"}],ea=[{title:"Anomalous Account",icon:e.jsx(Y,{fontSize:"large"}),link:"unauthorized",aria:"Anomalous account detected, contact administrators"}],ta=["BORROWER","INVENTORY_MANAGER","BORROWING_MANAGER","CO_SUPERVISOR","SUPERVISOR"],na=["ITRO","BMO","ESLO"],aa="FAD",ra="PLO",oa="BORROWER",ia="INVENTORY_MANAGER",sa="PENALTY_MANAGER",Pe="CO_SUPERVISOR",K="SUPERVISOR",la=()=>{const n=dt(),{userData:t}=qe(),o=t==null?void 0:t.email,a=t==null?void 0:t.isAdmin,i=t==null?void 0:t.role,r=t==null?void 0:t.office,p=ut(),f="@apc.edu.ph",h=a||i!=p?"/dashboard":"/borrow-items",[c,v]=x.useState(h),y=z=>{v(z)};x.useEffect(()=>{const z=n.replace("/",""),k=kn.reduce((A,j)=>A||((j==null?void 0:j.link)===z?j==null?void 0:j.link:null),null);v(k)},[n]);const{isOpenBorrowerMenu:M,isOpenEndorserMenu:P,isOpenManagementMenu:O,isOpenAdminMenu:T,isOpenFinanceMenu:N,toggleAdminMenu:L,toggleBorrowerMenu:$,toggleEndorserMenu:g,toggleFinanceMenu:w,toggleManagementMenu:C}=Ge(),E=e.jsx(q,{menuTitle:"Borrower Menu",isOpen:M,setIsOpen:$,children:e.jsx(V,{sidebarItems:rn,selectedLink:c,handleListItemClick:y})}),u=o.includes(f)&&e.jsx(q,{menuTitle:"Endorser Menu",isOpen:P,setIsOpen:g,children:e.jsx(V,{sidebarItems:Un,selectedLink:c,handleListItemClick:y})}),D=a&&e.jsx(q,{menuTitle:"Admin Menu",isOpen:T,setIsOpen:L,children:e.jsx(V,{sidebarItems:Fn,selectedLink:c,handleListItemClick:y})});return na.includes(r)&&ta.includes(i)?e.jsxs(e.Fragment,{children:[E,u,e.jsx(q,{menuTitle:"Lending Management",isOpen:O,setIsOpen:C,children:e.jsx(V,{sidebarItems:i===K?zn:In,selectedLink:c,handleListItemClick:y,initialIsOpen:!0})}),D]}):r===aa&&[sa,Pe,K].includes(i)?e.jsxs(e.Fragment,{children:[E,u,e.jsx(q,{menuTitle:"Finance Menu",isOpen:N,setIsOpen:w,children:e.jsx(V,{sidebarItems:r===K?Kn:Qn,selectedLink:c,handleListItemClick:y,initialIsOpen:!0})}),D]}):r===ra&&[ia,Pe,K].includes(i)?e.jsxs(e.Fragment,{children:[E,u,e.jsx(q,{menuTitle:"Inventory Menu",isOpen:N,setIsOpen:w,children:e.jsx(V,{sidebarItems:r===K?Zn:Jn,selectedLink:c,handleListItemClick:y,initialIsOpen:!0})}),D]}):i===oa&&!r?e.jsx(e.Fragment,{children:E}):e.jsx(V,{sidebarItems:ea,selectedLink:"unauthorized",handleListItemClick:y,initialIsOpen:!0})};function ya(){const n=pt(r=>r.breakpoints.down("md")),{isOpen:t,toggleSidebar:o}=Ge(),{mode:a}=ft(),i=a==="light"?"white":"black";return e.jsxs(qt,{elevation:0,anchor:"left",open:t,onClose:o,variant:n?"temporary":"persistent","aria-label":"Main Navigation",role:"navigation",sx:{flexShrink:0,"& .MuiDrawer-paper":{overflowY:"auto",width:"280px",boxSizing:"border-box",backgroundColor:i}},children:[e.jsx(ae,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",children:e.jsxs(yt,{color:"primary",style:{border:"none",outline:"none"},disableRipple:!0,"aria-label":"navigate to home page",children:[e.jsx(gt,{sx:{fontSize:"2rem"}}),e.jsx(fe,{component:"h1",padding:"5px 0 5px 0",ml:1,sx:{fontSize:"2rem",fontWeight:700,display:"block",marginLeft:"0"},children:"Pahiram"})]})}),e.jsx(Ut,{}),e.jsx(la,{})]})}export{ya as default};
