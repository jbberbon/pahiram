import{d as c,e as l,u as r,j as o,L as d}from"./index-36060215.js";import{g}from"./USER_ROLES-80c7b21f.js";import{B as m}from"./Box-c89578f5.js";import"./extendSxProp-5febf8e6.js";function f(){const s=c(),n=l(),{handleLogout:a}=r(),i=()=>{a(),s("/login",{state:{from:n},replace:!0})},{userData:e}=r(),t=g.borrower;return console.log(t),o.jsxs(m,{flexGrow:1,pl:2,children:["Permission Denied",o.jsx("br",{}),o.jsx(d,{to:(e==null?void 0:e.role)===t?"/borrow-items":"/dashboard",children:"Go back"}),o.jsx("br",{}),o.jsx("button",{onClick:i,children:"Go back to login page"})]})}export{f as default};