import{j as c,l as j,m as P,s as B,Q as M,n as v,_ as s,x as S,r as d,o as g,p as R,t as _,v as H}from"./index-f41e202c.js";import{S as U}from"./SwitchBase-1c6aef32.js";import{c as m}from"./createSvgIcon-c14e487a.js";const E=m(c.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=m(c.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=m(c.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return P("MuiCheckbox",o)}const N=j("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),p=N,w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:t,color:a}=o,r={root:["root",t&&"indeterminate",`color${v(a)}`]},n=H(r,L,e);return s({},e,n)},Q=B(U,{shouldForwardProp:o=>M(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.indeterminate&&e.indeterminate,t.color!=="default"&&e[`color${v(t.color)}`]]}})(({theme:o,ownerState:e})=>s({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:S(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${p.checked}, &.${p.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${p.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),T=c.jsx(O,{}),W=c.jsx(E,{}),q=c.jsx(V,{}),A=d.forwardRef(function(e,t){var a,r;const n=g({props:e,name:"MuiCheckbox"}),{checkedIcon:f=T,color:b="primary",icon:I=W,indeterminate:i=!1,indeterminateIcon:u=q,inputProps:z,size:l="medium",className:y}=n,$=R(n,w),x=i?u:I,h=i?u:f,k=s({},n,{color:b,indeterminate:i,size:l}),C=F(k);return c.jsx(Q,s({type:"checkbox",inputProps:s({"data-indeterminate":i},z),icon:d.cloneElement(x,{fontSize:(a=x.props.fontSize)!=null?a:l}),checkedIcon:d.cloneElement(h,{fontSize:(r=h.props.fontSize)!=null?r:l}),ownerState:k,ref:t,className:_(C.root,y)},$,{classes:C}))}),K=A;export{K as M};
