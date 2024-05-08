import{P as u,C as M,h as B,j as e,B as A,r as b,g as P}from"./index-36060215.js";import{P as m,I as z}from"./PageTitle-66c86fbe.js";import{M as k}from"./MainDisplayLayout-22058112.js";import{u as G,a as T}from"./useGetSpecificResource-d827c7df.js";import{E as R}from"./EndorsementItemCard-2d3026de.js";import{E as v}from"./ErrorSnackbar-68b55082.js";import{a as V,D as L}from"./CustomModal-fc4ee557.js";import{d as F,e as W,g as $}from"./BorrowedItemStatusConstantHelper-916d5fea.js";import{f as H}from"./BorrowPurposeConstantHelper-9c404c95.js";import{f as J,B as K}from"./BorrowedItemsTable-17063077.js";import{u as Q}from"./usePatch-2926346d.js";import{S as U}from"./SuccessSnackbar-7dee1494.js";import{I as X}from"./createSvgIcon-be983189.js";import"./Popover-0a4585bd.js";import"./Typography-24d6f046.js";import"./extendSxProp-5febf8e6.js";import"./SidebarStore-a30a0086.js";import"./ItemCard-58412a24.js";import"./subtle-prism-5d1a98b4.js";import"./BORROW_PURPOSES-6419a447.js";const Y="/user/endorsement",Z=o=>`/borrow-transaction/endorsed/${o}`,D=o=>`/endorsement/${o}/approval`,q="PENDING_ENDORSER_APPROVAL",N=({specificResource:o,isModalOpen:p,setIsModalOpen:c})=>{const{neutralMain:h}=M(),{isSm:x}=B(),n={display:"flex",flexDirection:"row",alignItems:"start"},r={fontWeight:"700",padding:0,margin:0,whiteSpace:"nowrap",minWidth:"110px",fontSize:"0.875rem",color:h},t={padding:0,margin:0,fontSize:"0.875rem",color:h},s=o==null?void 0:o.transac_data,l=o==null?void 0:o.items;console.log(l);const S=s!=null&&s.id?(s==null?void 0:s.id.slice(0,20))+"...":"",f=s!=null&&s.created_at?F(s==null?void 0:s.created_at):"",j=H(s==null?void 0:s.purpose),a=J(s==null?void 0:s.status),{isPatchSuccess:g,isPatchError:y,isPatchLoading:d,setIsPatchError:E,setIsPatchSuccess:i,handlePatch:w}=Q(),I=O=>D(O),_={approval:!0},C={approval:!1};return e.jsxs(e.Fragment,{children:[e.jsx(V,{isModalOpen:p,setModalOpen:c,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",padding:x?"20px":"18px",gap:"12px",margin:"auto"},children:[e.jsx(L,{textAlign:"left",sx:{"&:before":{width:0},"& .MuiDivider-wrapper":{padding:"0 16px 0 0"}},children:e.jsx(m,{fontSize:"1rem",children:"Borrow Request Details"})}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Request ID"}),e.jsx("p",{style:t,children:x?S:s==null?void 0:s.id}),e.jsx(X,{onClick:()=>W(s==null?void 0:s.id),sx:{marginLeft:"auto","&:focus":{outline:"none"}},children:e.jsx($,{sx:{fontSize:"14px"}})})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Borrower"}),e.jsx("p",{style:t,children:s==null?void 0:s.borrower})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Office"}),e.jsx("p",{style:t,children:s==null?void 0:s.department})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Submitted on"}),e.jsx("p",{style:t,children:f})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Purpose"}),e.jsxs("p",{style:t,children:[j==null?void 0:j.purpose,", ",s==null?void 0:s.user_defined_purpose]})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Endorser"}),e.jsx("p",{style:t,children:s!=null&&s.endorser?s==null?void 0:s.endorser:"None"})]}),e.jsxs("div",{style:n,children:[e.jsx("p",{style:r,children:"Status"}),e.jsx("p",{style:t,children:a==null?void 0:a.transac_status})]}),e.jsx(L,{textAlign:"left",sx:{"&:before":{width:0},"& .MuiDivider-wrapper":{padding:"0 16px 0 0"},marginTop:"16px"},children:e.jsx(m,{fontSize:"1rem",children:"Requested Items"})}),l&&e.jsx(K,{borrowedItems:l,transacStatus:s==null?void 0:s.status}),(s==null?void 0:s.status)===q&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"8px"},children:[e.jsx(A,{onClick:async()=>{await w(I,s==null?void 0:s.id,C),d||c(!1)},disabled:d,color:"error",children:e.jsx("p",{style:{padding:0,margin:0,fontSize:"0.875rem"},children:"Decline Request"})}),e.jsx(A,{onClick:async()=>{await w(I,s==null?void 0:s.id,_),d||c(!1)},disabled:d,color:"success",children:e.jsx("p",{style:{padding:0,margin:0,fontSize:"0.875rem"},children:"Approve Request"})})]})]})}),e.jsx(U,{isSuccess:g,setIsSuccess:i}),e.jsx(v,{error:y,setError:E})]})};N.propTypes={specificResource:u.object,isModalOpen:u.bool.isRequired,setIsModalOpen:u.func.isRequired};const Se=()=>{const[o,p]=b.useState(!1),c="PENDING_ENDORSER_APPROVAL",h="DISAPPROVED",{list:x,isGetListLoading:n,isGetListError:r,setIsGetListError:t,getRequestList:s}=G();b.useEffect(()=>{s(Y)},[]);const l=i=>Z(i),{specificResource:S,isLoadingSpecificResource:f,isErrorSpecificResource:j,setIsErrorSpecificResource:a,fetchSpecificResource:g}=T(),y=x.filter(i=>(i==null?void 0:i.status)===h),d=x.filter(i=>(i==null?void 0:i.status)===c),E=x.filter(i=>(i==null?void 0:i.status)!==h&&(i==null?void 0:i.status)!==c);return e.jsxs(k,{children:[e.jsxs(z,{children:[e.jsx(m,{children:"Manage Endorsements"}),e.jsx(m,{fontSize:"1.2rem",children:"Pending Approval"}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",width:"100%"},children:n?e.jsx(P,{}):e.jsxs(e.Fragment,{children:[d.length>0&&d.map(i=>e.jsx(R,{transacData:i,onClick:()=>{g(l,i==null?void 0:i.id),f||p(!0)}},i==null?void 0:i.id)),d.length===0&&e.jsx("p",{style:{width:"100%",textAlign:"center"},children:"No pending requests found."})]})}),e.jsx(m,{fontSize:"1.2rem",children:"Declined Requests"}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",width:"100%"},children:n?e.jsx(P,{}):e.jsxs(e.Fragment,{children:[y.length>0&&y.map(i=>e.jsx(R,{transacData:i,onClick:()=>{g(l,i==null?void 0:i.id),f||p(!0)}},i==null?void 0:i.id)),y.length===0&&e.jsx("p",{style:{width:"100%",textAlign:"center"},children:"No disapproved requests found."})]})}),e.jsx(m,{fontSize:"1.2rem",children:"Past Requests"}),e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",width:"100%"},children:n?e.jsx(P,{}):e.jsxs(e.Fragment,{children:[E.length>0&&E.map(i=>e.jsx(R,{transacData:i,onClick:()=>{g(l,i==null?void 0:i.id),f||p(!0)}},i==null?void 0:i.id)),E.length===0&&e.jsx("p",{style:{width:"100%",textAlign:"center"},children:"No previous requests found."})]})})]}),S&&e.jsx(N,{specificResource:S,isModalOpen:o,setIsModalOpen:p}),e.jsx(v,{error:r,setError:t}),e.jsx(v,{error:j,setError:a})]})};export{Se as default};