import{j as c,m as w,l as V,s as L,_ as o,r as p,o as D,p as j,t as R,v as U,W as Y,Q as ot,x as C,G as J,D as K,F as H,P as Q,u as nt}from"./index-d2fd7b75.js";import{L as O}from"./List-f7e23036.js";import{c as rt,a as it}from"./createSvgIcon-a66e9ade.js";const lt=rt(c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ct(t){return w("MuiAvatar",t)}V("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const dt=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],pt=t=>{const{classes:e,variant:s,colorDefault:a}=t;return U({root:["root",s,a&&"colorDefault"],img:["img"],fallback:["fallback"]},ct,e)},ut=L("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,e[s.variant],s.colorDefault&&e.colorDefault]}})(({theme:t,ownerState:e})=>o({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&o({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),ft=L("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),vt=L(lt,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function gt({crossOrigin:t,referrerPolicy:e,src:s,srcSet:a}){const[n,i]=p.useState(!1);return p.useEffect(()=>{if(!s&&!a)return;i(!1);let l=!0;const r=new Image;return r.onload=()=>{l&&i("loaded")},r.onerror=()=>{l&&i("error")},r.crossOrigin=t,r.referrerPolicy=e,r.src=s,a&&(r.srcset=a),()=>{l=!1}},[t,e,s,a]),n}const mt=p.forwardRef(function(e,s){const a=D({props:e,name:"MuiAvatar"}),{alt:n,children:i,className:l,component:r="div",imgProps:f,sizes:u,src:v,srcSet:y,variant:S="circular"}=a,h=j(a,dt);let d=null;const I=gt(o({},f,{src:v,srcSet:y})),g=v||y,x=g&&I!=="error",m=o({},a,{colorDefault:!x,component:r,variant:S}),b=pt(m);return x?d=c.jsx(ft,o({alt:n,src:v,srcSet:y,sizes:u,ownerState:m,className:b.img},f)):i!=null?d=i:g&&n?d=n[0]:d=c.jsx(vt,{ownerState:m,className:b.fallback}),c.jsx(ut,o({as:r,ownerState:m,className:R(b.root,l),ref:s},h,{children:d}))}),bt=mt;function yt(t){return w("MuiListItem",t)}const xt=V("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),k=xt;function Ct(t){return w("MuiListItemButton",t)}const It=V("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),N=It,$t=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],At=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},Rt=t=>{const{alignItems:e,classes:s,dense:a,disabled:n,disableGutters:i,divider:l,selected:r}=t,u=U({root:["root",a&&"dense",!i&&"gutters",l&&"divider",n&&"disabled",e==="flex-start"&&"alignItemsFlexStart",r&&"selected"]},Ct,s);return o({},s,u)},Lt=L(Y,{shouldForwardProp:t=>ot(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:At})(({theme:t,ownerState:e})=>o({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${N.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${N.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${N.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${N.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${N.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),St=p.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:i=!1,component:l="div",children:r,dense:f=!1,disableGutters:u=!1,divider:v=!1,focusVisibleClassName:y,selected:S=!1,className:h}=a,d=j(a,$t),I=p.useContext(O),g=p.useMemo(()=>({dense:f||I.dense||!1,alignItems:n,disableGutters:u}),[n,I.dense,f,u]),x=p.useRef(null);J(()=>{i&&x.current&&x.current.focus()},[i]);const m=o({},a,{alignItems:n,dense:g.dense,disableGutters:u,divider:v,selected:S}),b=Rt(m),B=K(x,s);return c.jsx(O.Provider,{value:g,children:c.jsx(Lt,o({ref:B,href:d.href||d.to,component:(d.href||d.to)&&l==="div"?"button":l,focusVisibleClassName:R(b.focusVisible,y),ownerState:m,className:R(b.root,h)},d,{classes:b,children:r}))})}),_t=St;function Pt(t){return w("MuiListItemSecondaryAction",t)}V("MuiListItemSecondaryAction",["root","disableGutters"]);const kt=["className"],Nt=t=>{const{disableGutters:e,classes:s}=t;return U({root:["root",e&&"disableGutters"]},Pt,s)},Ot=L("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),X=p.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=j(a,kt),l=p.useContext(O),r=o({},a,{disableGutters:l.disableGutters}),f=Nt(r);return c.jsx(Ot,o({className:R(f.root,n),ownerState:r,ref:s},i))});X.muiName="ListItemSecondaryAction";const ht=X,Mt=["className"],jt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Bt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},Ft=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:l,disablePadding:r,divider:f,hasSecondaryAction:u,selected:v}=t;return U({root:["root",n&&"dense",!l&&"gutters",!r&&"padding",f&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",v&&"selected"],container:["container"]},yt,a)},Gt=L("div",{name:"MuiListItem",slot:"Root",overridesResolver:Bt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${N.root}`]:{paddingRight:48}},{[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${k.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),wt=L("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Vt=p.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:l=!1,children:r,className:f,component:u,components:v={},componentsProps:y={},ContainerComponent:S="li",ContainerProps:{className:h}={},dense:d=!1,disabled:I=!1,disableGutters:g=!1,disablePadding:x=!1,divider:m=!1,focusVisibleClassName:b,secondaryAction:B,selected:Z=!1,slotProps:tt={},slots:et={}}=a,st=j(a.ContainerProps,Mt),at=j(a,jt),_=p.useContext(O),z=p.useMemo(()=>({dense:d||_.dense||!1,alignItems:n,disableGutters:g}),[n,_.dense,d,g]),T=p.useRef(null);J(()=>{i&&T.current&&T.current.focus()},[i]);const P=p.Children.toArray(r),E=P.length&&it(P[P.length-1],["ListItemSecondaryAction"]),F=o({},a,{alignItems:n,autoFocus:i,button:l,dense:z.dense,disabled:I,disableGutters:g,disablePadding:x,divider:m,hasSecondaryAction:E,selected:Z}),q=Ft(F),W=K(T,s),G=et.root||v.Root||Gt,M=tt.root||y.root||{},$=o({className:R(q.root,M.className,f),disabled:I},at);let A=u||"li";return l&&($.component=u||"div",$.focusVisibleClassName=R(k.focusVisible,b),A=Y),E?(A=!$.component&&!u?"div":A,S==="li"&&(A==="li"?A="div":$.component==="li"&&($.component="div")),c.jsx(O.Provider,{value:z,children:c.jsxs(wt,o({as:S,className:R(q.container,h),ref:W,ownerState:F},st,{children:[c.jsx(G,o({},M,!H(G)&&{as:A,ownerState:o({},F,M.ownerState)},$,{children:P})),P.pop()]}))})):c.jsx(O.Provider,{value:z,children:c.jsxs(G,o({},M,{as:A,ref:W},!H(G)&&{ownerState:o({},F,M.ownerState)},$,{children:[P,B&&c.jsx(ht,{children:B})]}))})}),Et=Vt;function Dt({avatarSize:t,textSize:e}){const{userData:s}=nt();return c.jsx(bt,{alt:"Profile Avatar",sx:{width:t,height:t,bgcolor:"primary.main"},children:c.jsx("p",{style:{fontSize:e},children:s.avatarName})})}Dt.propTypes={avatarSize:Q.number.isRequired,textSize:Q.string.isRequired};export{Et as L,Dt as P,_t as a};