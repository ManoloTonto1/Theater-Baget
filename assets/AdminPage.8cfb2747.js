import{g as Z,a as F,s as G,T as m,i as J,r as g,l as O,b as q,c as t,_ as b,d as R,f as U,B as ae,k as P,J as ne,z as re,j as i,n as y,o as w,a9 as oe,aa as se,ab as ie,R as u,ad as le,a3 as M,A as ce,ah as de}from"./index.376979a5.js";import{d as K,L as Y,A as Q,j as ue}from"./index.520d3057.js";import{L as V,c as pe,F as me,T as p,d as ge,I as fe,S as ve}from"./TextField.c4476220.js";import{C as I}from"./Card.7c32c9f9.js";import{C as he}from"./CardActionArea.2a6ddb80.js";import{C as xe}from"./CardMedia.0a83fd30.js";import{F as W}from"./FormGroup.326a7529.js";import{a as be,g as Ce,D as X,b as ye,c as Ie}from"./DatePicker.91726a84.js";import{d as _}from"./dividerClasses.dcdfad27.js";import{T as we,a as D}from"./Tabs.7227aa4c.js";import"./InputAdornment.0eec68ae.js";import"./index.f2a06ad4.js";function De(e){return Z("MuiDialogContentText",e)}F("MuiDialogContentText",["root"]);const ke=["children","className"],Te=e=>{const{classes:a}=e,n=U({root:["root"]},De,a);return b({},a,n)},$e=G(m,{shouldForwardProp:e=>J(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,a)=>a.root})({}),Me=g.exports.forwardRef(function(a,r){const n=O({props:a,name:"MuiDialogContentText"}),{className:o}=n,l=q(n,ke),s=Te(l);return t($e,b({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:l,className:R(s.root,o)},n,{classes:s}))}),Se=Me,je=["className","id"],Pe=e=>{const{classes:a}=e;return U({root:["root"]},Ce,a)},Re=G(m,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,a)=>a.root})({padding:"16px 24px",flex:"0 0 auto"}),Fe=g.exports.forwardRef(function(a,r){const n=O({props:a,name:"MuiDialogTitle"}),{className:o,id:l}=n,s=q(n,je),h=n,v=Pe(h),{titleId:f=l}=g.exports.useContext(be);return t(Re,b({component:"h2",className:R(v.root,o),ownerState:h,ref:r,variant:"h6",id:f},s))}),Ae=Fe,Le=F("MuiListItemIcon",["root","alignItemsFlexStart"]),E=Le,ze=F("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),H=ze;function Ge(e){return Z("MuiMenuItem",e)}const Oe=F("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),k=Oe,qe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Ue=(e,a)=>{const{ownerState:r}=e;return[a.root,r.dense&&a.dense,r.divider&&a.divider,!r.disableGutters&&a.gutters]},We=e=>{const{disabled:a,dense:r,divider:n,disableGutters:o,selected:l,classes:s}=e,v=U({root:["root",r&&"dense",a&&"disabled",!o&&"gutters",n&&"divider",l&&"selected"]},Ge,s);return b({},s,v)},Be=G(ae,{shouldForwardProp:e=>J(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Ue})(({theme:e,ownerState:a})=>b({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:P(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${k.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:P(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${k.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:P(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:P(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${k.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${_.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${_.inset}`]:{marginLeft:52},[`& .${H.root}`]:{marginTop:0,marginBottom:0},[`& .${H.inset}`]:{paddingLeft:36},[`& .${E.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&b({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${E.root} svg`]:{fontSize:"1.25rem"}}))),Ne=g.exports.forwardRef(function(a,r){const n=O({props:a,name:"MuiMenuItem"}),{autoFocus:o=!1,component:l="li",dense:s=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:f,role:d="menuitem",tabIndex:x,className:C}=n,A=q(n,qe),S=g.exports.useContext(V),j=g.exports.useMemo(()=>({dense:s||S.dense||!1,disableGutters:v}),[S.dense,s,v]),c=g.exports.useRef(null);ne(()=>{o&&c.current&&c.current.focus()},[o]);const ee=b({},n,{dense:j.dense,divider:h,disableGutters:v}),L=We(n),te=re(c,r);let N;return n.disabled||(N=x!==void 0?x:-1),t(V.Provider,{value:j,children:t(Be,b({ref:te,role:d,tabIndex:N,component:l,focusVisibleClassName:R(L.focusVisible,f),className:R(L.root,C)},A,{ownerState:ee,classes:L}))})}),Ve=Ne;function _e(){return i(y,{sx:{display:"flex",justifyItems:"center",alignItems:"center",alignContent:"center",flexDirection:"column",flexWrap:"nowrap"},children:[t(m,{variant:"h3",align:"center",sx:{marginBottom:1},children:"Weet u zeker dat u wilt uitloggen?"}),t(m,{variant:"body1",align:"center",children:"Klik op de knop hieronder om uit te loggen."}),t(w,{variant:"contained",size:"large",sx:{mt:4,width:"100%"},children:"Log uit"})]})}var B={},Ee=se.exports;Object.defineProperty(B,"__esModule",{value:!0});var z=B.default=void 0,He=Ee(oe()),Ze=ie,Je=(0,He.default)((0,Ze.jsx)("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");z=B.default=Je;function Ke({imageProps:e,label:a}){const r=u.useRef(null),n=()=>{const f=r.current;f&&f.click()},o=f=>{const d=f.target;if(!d.files)return;const x=d.files[0],C=new FileReader;C.readAsDataURL(x),C.onload=()=>{e.setImage(C.result)}},[l,s]=u.useState(!1);return i(le,{children:[t(pe,{children:a}),t(I,{sx:{mt:1},children:i(he,{onClick:n,onChange:o,onMouseEnter:()=>{e.image&&s(!0)},onMouseLeave:()=>{e.image&&s(!1)},children:[t("input",{hidden:!0,type:"file",ref:r,accept:"image/*"}),t(me,{in:l,children:i(M,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",sx:{backgroundColor:"rgba(0,0,0,0.6)",position:"absolute",width:"100%",height:"100%"},children:[t(z,{sx:{color:"#fff",mb:2,fontSize:"35pt"}}),t(m,{variant:"h6",sx:{color:"#fff"},children:"Change Picture"})]})}),t(xe,{sx:{display:"flex",justifyContent:"center",height:300},children:e.image?t("img",{loading:"lazy",src:e.image,alt:""}):i(M,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:[t(z,{sx:{mb:2,fontSize:"35pt"}}),t(m,{variant:"h6",children:"Upload Picture"})]})})]})})]})}function Ye(){const[e,a]=u.useState(K()),r=g.exports.useCallback(async n=>{n.preventDefault();const o=document.getElementById("form"),l=new FormData(o);for(const s of l.values())console.log(s)},[]);return t(y,{sx:{display:"flex",justifyItems:"center",alignItems:"center",alignContent:"center",flexDirection:"column",flexWrap:"nowrap"},children:t(I,{component:"form",id:"form",sx:{width:250,p:3},children:i(W,{children:[t(m,{variant:"h5",children:"Programma toevoegen"}),t(p,{sx:{m:1,mb:2},label:"Titel",variant:"standard",type:"text",name:"titel",required:!0}),t(p,{sx:{m:1,mb:2},label:"Omschrijving",variant:"standard",type:"text",name:"omschrijving",required:!0}),t(Y,{dateAdapter:Q,children:t(X,{label:"Datum voorstelling",value:e,onChange:n=>{a(n)},renderInput:n=>t(p,{sx:{m:1},variant:"standard",...n})})}),t(p,{sx:{m:1,mb:2},label:"Zaalnummer",variant:"standard",type:"text",name:"zaalnummer",required:!0}),t(p,{sx:{m:1,mb:3},label:"Prijs",variant:"standard",type:"text",name:"prijs",required:!0}),t(Ke,{imageProps:{image:"",setImage:function(n){throw new Error("Work in progress")}},label:""}),t(w,{variant:"contained",type:"submit",onClick:r,sx:{my:3},children:"Toevoegen"})]})})})}function Qe(){const e=g.exports.useCallback(async a=>{a.preventDefault();const r=document.getElementById("form"),n=new FormData(r);for(const o of n.values())console.log(o)},[]);return t(y,{sx:{display:"flex",justifyItems:"center",alignItems:"center",alignContent:"center",flexDirection:"column",flexWrap:"nowrap"},children:t(I,{component:"form",id:"form",sx:{width:280,p:3},children:i(W,{children:[t(m,{variant:"h5",children:"Zaal toevoegen"}),t(p,{sx:{m:1,mb:2},label:"Soort ruimte(theater of vrije ruimte)",variant:"standard",type:"text",name:"titel",required:!0}),t(p,{sx:{m:1,mb:2},label:"Aantal eersterangs stoelen",variant:"standard",type:"text",name:"omschrijving",required:!0}),t(p,{sx:{m:1,mb:2},label:"Aantal tweederangs stoelen",variant:"standard",type:"text",name:"zaalnummer",required:!0}),t(p,{sx:{m:1,mb:3},label:"Aantal derderangs stoelen",variant:"standard",type:"text",name:"prijs",required:!0}),t(w,{variant:"contained",type:"submit",onClick:e,sx:{my:3},children:"Toevoegen"})]})})})}function Xe(){const[e,a]=u.useState(""),[r,n]=u.useState(""),[o,l]=u.useState(K()),[s,h]=u.useState(""),[v,f]=u.useState(""),[d,x]=u.useState(!0),C=g.exports.useCallback(async c=>{h(c.target.value)},[]),A=g.exports.useCallback(async c=>{f(c.target.value)},[]),S=g.exports.useCallback(async c=>{n(c.target.value)},[]),j=g.exports.useCallback(async c=>{a(c.target.value)},[]);return t(y,{sx:{display:"flex",justifyItems:"center",alignItems:"center",alignContent:"center",flexDirection:"column",flexWrap:"nowrap"},children:t(I,{sx:{width:250,p:3},children:i(W,{children:[t(m,{variant:"h5",children:"Gebruiker toevoegen"}),t(p,{sx:{m:1,mb:2},label:"Naam",variant:"standard",type:"text",required:!0,onChange:j,value:e}),t(Y,{dateAdapter:Q,children:t(X,{label:"Geboorte datum",value:o,onChange:c=>{l(c)},renderInput:c=>t(p,{sx:{m:1},variant:"standard",...c})})}),t(p,{sx:{m:1,mb:2},label:"E-mail adres",variant:"standard",type:"email",required:!0,onChange:A,value:v}),t(p,{sx:{m:1,mb:2},label:"Wachtwoord",variant:"standard",type:"password",required:!0,onChange:C,value:s}),t(p,{sx:{m:1,mb:3},label:"Wachtwoord bevestigen",variant:"standard",type:"password",required:!0,onChange:S,value:r,error:!d,helperText:d?"":"Wachtwoorden komen niet overeen"}),t(w,{variant:"contained",type:"submit",children:"Toevoegen"})]})})})}function et(){const[e,a]=u.useState([]),[r,n]=u.useState(),[o,l]=u.useState(!1);u.useEffect(()=>{async function d(){const x=(await ce("gebruikers").GetAll()).data;a(x)}d()},[a]);const s=e.length>0&&e.map((d,x)=>t(Ve,{value:d,children:d.naam},x)),h=g.exports.useCallback(async d=>{n(d.target.value)},[n]),v=()=>{l(!0),console.log(r)},f=()=>{l(!1)};return i(y,{sx:{display:"flex",justifyItems:"center",alignItems:"center",alignContent:"center",flexDirection:"column",flexWrap:"nowrap"},children:[i(I,{sx:{width:250,p:3},children:[t(m,{sx:{pb:2},children:"Gebruiker inzien"}),i(ge,{fullWidth:!0,children:[t(fe,{children:"Gebruiker"}),t(ve,{variant:"standard",value:r,onChange:h,children:s}),t(w,{variant:"contained",onClick:v,children:"Inzien"})]})]}),r!=null&&i(ye,{open:o,onClose:f,children:[t(Ae,{children:r.naam}),t(Ie,{children:i(Se,{id:"alert-dialog-description",children:[i(m,{variant:"overline",display:"block",children:["id: #",r.id]}),i(m,{variant:"overline",display:"block",children:["leeftijdsgroep: ",r.leeftijdsGroep]}),i(m,{variant:"overline",display:"block",children:["level: ",r.level]})]})}),t(ue,{children:t(w,{onClick:f,autoFocus:!0,children:"Close"})})]})]})}function T(e){const{children:a,value:r,index:n,...o}=e;return t(y,{role:"tabpanel",hidden:r!==n,id:`vertical-tabpanel-${n}`,"aria-labelledby":`vertical-tab-${n}`,...o,children:r===n&&t(y,{sx:{p:3},children:t(m,{children:a})})})}function $(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}function mt(){const[e,a]=u.useState(0);return t(de,{maxWidth:"xl",sx:{my:4},children:i(M,{container:!0,spacing:3,children:[t(M,{item:!0,lg:6,xs:12,children:t(I,{elevation:4,children:i(we,{orientation:"vertical",variant:"fullWidth",value:e,onChange:(n,o)=>{a(o)},"aria-label":"Vertical tabs",sx:{borderRight:1,borderColor:"divider"},children:[t(D,{label:"Programma toevoegen",...$(0)}),t(D,{label:"Zaal toevoegen",...$(1)}),t(D,{label:"Gebruiker toevoegen",...$(2)}),t(D,{label:"Gebruiker inzien",...$(3)}),t(D,{label:"Logout",...$(4)})]})})}),t(M,{item:!0,lg:6,sm:12,xs:12,children:i(I,{elevation:4,sx:{minHeight:500,overflowY:"auto",scrollbarWidth:"thin",alignItems:"center",display:"flex",justifyContent:"center"},children:[t(T,{value:e,index:0,children:t(Ye,{})}),t(T,{value:e,index:1,children:t(Qe,{})}),t(T,{value:e,index:2,children:t(Xe,{})}),t(T,{value:e,index:3,children:t(et,{})}),t(T,{value:e,index:4,children:t(_e,{})})]})})]})})}export{mt as default};
