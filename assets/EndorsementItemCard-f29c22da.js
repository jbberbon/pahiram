import{P as f,j as o}from"./index-f41e202c.js";import{I as r}from"./ItemCard-d3f21380.js";import{d as h}from"./BorrowedItemStatusConstantHelper-8564e112.js";import{f as j}from"./BorrowPurposeConstantHelper-9c404c95.js";const i={padding:"4px 4px 4px 0",margin:0,fontWeight:"500",color:"#f3f4f6"},g=({transacData:e,onClick:u})=>{var d,l;const m=`${e==null?void 0:e.id.slice(0,8)}...${e==null?void 0:e.id.slice(-8)}`,x=h(e==null?void 0:e.created_at),p=j(e==null?void 0:e.purpose),s=`${((d=e==null?void 0:e.user_defined_purpose)==null?void 0:d.length)>30?((l=e==null?void 0:e.user_defined_purpose)==null?void 0:l.slice(0,30))+"...":e==null?void 0:e.user_defined_purpose}`;return o.jsx(r,{onClick:u,children:o.jsxs("div",{style:{padding:"12px"},children:[o.jsx("h4",{style:{overflow:"hidden",whiteSpace:"nowrap",margin:0,padding:"4px 4px 4px 0",color:"#f3f4f6"},children:m}),o.jsx("p",{style:i,children:e==null?void 0:e.borrower}),o.jsxs("p",{style:i,children:["For ",p==null?void 0:p.purpose,", ",s]}),o.jsxs("p",{style:i,children:["Sumitted on ",x]})]})})};g.propTypes={transacData:f.object.isRequired,onClick:f.func.isRequired};export{g as E};
