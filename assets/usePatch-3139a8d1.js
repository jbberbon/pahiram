import{r as c}from"./index-f41e202c.js";import{b as P}from"./CustomModal-4febcc1e.js";const g=()=>{const[o,r]=c.useState(null),[n,e]=c.useState(null),[h,s]=c.useState(!1);return{isPatchSuccess:o,isPatchError:n,isPatchLoading:h,setIsPatchError:e,setIsPatchSuccess:r,handlePatch:async(u,l,i)=>{try{s(!0);const a=u(l),t=await P(a,i);if((t==null?void 0:t.status)===!1){e(t.message),s(!1);return}else r(t==null?void 0:t.message);s(!1)}catch(a){console.error(a),e("An error occurred while processing the request."),s(!1)}}}};export{g as u};
