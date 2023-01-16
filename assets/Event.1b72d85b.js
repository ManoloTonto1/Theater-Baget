import{g as $,a as I,s as C,_ as o,k,r as B,l as P,b as j,c as r,d as M,f as V,n as d,W as w,j as c,T as h,m as N,R as u,o as y,ag as U,A as _,ah as G,a4 as f,af as z}from"./index.1123c969.js";import{C as A}from"./Card.2625a2a7.js";import{C as R}from"./CardContent.f455a329.js";import{C as E}from"./CardMedia.c8946dbd.js";function K(t){return $("MuiDivider",t)}I("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const X=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Y=t=>{const{absolute:i,children:e,classes:a,flexItem:g,light:s,orientation:n,textAlign:l,variant:p}=t;return V({root:["root",i&&"absolute",p,s&&"light",n==="vertical"&&"vertical",g&&"flexItem",e&&"withChildren",e&&n==="vertical"&&"withChildrenVertical",l==="right"&&n!=="vertical"&&"textAlignRight",l==="left"&&n!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",n==="vertical"&&"wrapperVertical"]},K,a)},q=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.root,e.absolute&&i.absolute,i[e.variant],e.light&&i.light,e.orientation==="vertical"&&i.vertical,e.flexItem&&i.flexItem,e.children&&i.withChildren,e.children&&e.orientation==="vertical"&&i.withChildrenVertical,e.textAlign==="right"&&e.orientation!=="vertical"&&i.textAlignRight,e.textAlign==="left"&&e.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>o({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:k(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:t,ownerState:i})=>o({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:t,ownerState:i})=>o({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:t})=>o({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),F=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:e}=t;return[i.wrapper,e.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>o({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),H=B.exports.forwardRef(function(i,e){const a=P({props:i,name:"MuiDivider"}),{absolute:g=!1,children:s,className:n,component:l=s?"div":"hr",flexItem:p=!1,light:m=!1,orientation:D="horizontal",role:x=l!=="hr"?"separator":void 0,textAlign:L="center",variant:T="fullWidth"}=a,W=j(a,X),v=o({},a,{absolute:g,component:l,flexItem:p,light:m,orientation:D,role:x,textAlign:L,variant:T}),b=Y(v);return r(q,o({as:l,className:M(b.root,n),role:x,ref:e,ownerState:v},W,{children:s?r(F,{className:b.wrapper,ownerState:v,children:s}):null}))}),J=H;function O(t){return r(d,{sx:{m:2},children:r(w,{in:!0,timeout:300,children:r(A,{elevation:3,sx:{height:400,p:2},children:r(R,{children:c(d,{children:[r(h,{variant:"h4",children:"Beschrijving"}),r(J,{}),r(h,{sx:{mt:2},variant:"body1",children:t.data.omschrijving})]})})})})})}function Q(t){scrollTo(0,0);const i=N(),e=u.useCallback(a=>{a.preventDefault(),i(`/bestellen/${t.data.id}`)},[i,t]);return r(d,{sx:{m:2},children:r(w,{in:!0,timeout:200,children:c(A,{elevation:3,sx:{p:2},children:[r(d,{sx:{m:2},children:r(E,{component:"img",src:t.data.afbeelding,sx:{width:"100%",borderRadius:1}})}),c(R,{children:[r(h,{variant:"body2",sx:{color:"text.secondary"},children:t.data.datum}),r(h,{variant:"h3",children:t.data.titel})]}),r(d,{sx:{mx:2,mb:2},children:r(y,{LinkComponent:"a",href:`/#/bestellen/${t.data.id}`,onClick:e,variant:"contained",children:"Tickets Kopen"})})]})})})}function et(){const{id:t}=U(),[i,e]=u.useState(null);return u.useEffect(()=>{_("programmeringen").Get(t).then(a=>{e(a.data)})},[t]),r(G,{sx:{position:"relative",mt:3},children:i?c(f,{container:!0,spacing:2,children:[r(f,{item:!0,xs:12,sm:6,children:r(Q,{data:i})}),r(f,{item:!0,xs:12,sm:6,children:r(O,{data:i})})]}):r(z,{})})}export{et as default};
