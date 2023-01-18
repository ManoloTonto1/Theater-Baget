import{g as H,a as G,s as U,B as pe,_ as h,r as d,b as J,u as me,j as $,c as t,d as N,e as M,f as K,h as Q,i as he,k as be,l as ae,T as W,R as i,U as oe,m as fe,n as F,o as ne,L as ge,A as Ce,p as xe}from"./index.1f33b1ff.js";import{S as se}from"./Slide.30cd4455.js";import{F as re}from"./FormGroup.4005538c.js";import{u as le,f as ve,T as w}from"./TextField.fa51ab4a.js";import{d as ke}from"./dayjs.min.51cb16df.js";import{L as ye,A as Pe}from"./index.168b5310.js";import{D as Se}from"./DatePicker.a25becb0.js";import{C as Ie}from"./Container.cbfb455a.js";import{C as we}from"./Card.0a28ddcb.js";import{T as Be,a as Z}from"./Tabs.441244bf.js";import"./InputAdornment.6012913a.js";function Fe(e){return H("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const $e=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Re=e=>{const{classes:a,checked:n,disabled:r,edge:o}=e,c={root:["root",n&&"checked",r&&"disabled",o&&`edge${M(o)}`],input:["input"]};return K(c,Fe,a)},Le=U(pe)(({ownerState:e})=>h({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Te=U("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Me=d.exports.forwardRef(function(a,n){const{autoFocus:r,checked:o,checkedIcon:c,className:v,defaultChecked:u,disabled:b,disableFocusRipple:p=!1,edge:f=!1,icon:y,id:g,inputProps:B,inputRef:m,name:l,onBlur:k,onChange:P,onFocus:C,readOnly:L,required:R,tabIndex:S,type:x,value:z}=a,q=J(a,$e),[A,j]=me({controlled:o,default:Boolean(u),name:"SwitchBase",state:"checked"}),s=le(),ce=I=>{C&&C(I),s&&s.onFocus&&s.onFocus(I)},ie=I=>{k&&k(I),s&&s.onBlur&&s.onBlur(I)},de=I=>{if(I.nativeEvent.defaultPrevented)return;const Y=I.target.checked;j(Y),P&&P(I,Y)};let T=b;s&&typeof T>"u"&&(T=s.disabled);const ue=x==="checkbox"||x==="radio",D=h({},a,{checked:A,disabled:T,disableFocusRipple:p,edge:f}),X=Re(D);return $(Le,h({component:"span",className:N(X.root,v),centerRipple:!0,focusRipple:!p,disabled:T,tabIndex:null,role:void 0,onFocus:ce,onBlur:ie,ownerState:D,ref:n},q,{children:[t(Te,h({autoFocus:r,checked:o,defaultChecked:u,className:X.input,disabled:T,id:ue&&g,name:l,onChange:de,readOnly:L,ref:m,required:R,ownerState:D,tabIndex:S,type:x},x==="checkbox"&&z===void 0?{}:{value:z},B)),A?c:y]}))}),ze=Me,Ae=Q(t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ee=Q(t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ne=Q(t("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ue(e){return H("MuiCheckbox",e)}const qe=G("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),_=qe,je=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],De=e=>{const{classes:a,indeterminate:n,color:r}=e,o={root:["root",n&&"indeterminate",`color${M(r)}`]},c=K(o,Ue,a);return h({},a,c)},_e=U(ze,{shouldForwardProp:e=>he(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,n.indeterminate&&a.indeterminate,n.color!=="default"&&a[`color${M(n.color)}`]]}})(({theme:e,ownerState:a})=>h({color:(e.vars||e).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${a.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:be(a.color==="default"?e.palette.action.active:e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${_.checked}, &.${_.indeterminate}`]:{color:(e.vars||e).palette[a.color].main},[`&.${_.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),We=t(Ee,{}),Oe=t(Ae,{}),Ve=t(Ne,{}),He=d.exports.forwardRef(function(a,n){var r,o;const c=ae({props:a,name:"MuiCheckbox"}),{checkedIcon:v=We,color:u="primary",icon:b=Oe,indeterminate:p=!1,indeterminateIcon:f=Ve,inputProps:y,size:g="medium",className:B}=c,m=J(c,je),l=p?f:b,k=p?f:v,P=h({},c,{color:u,indeterminate:p,size:g}),C=De(P);return t(_e,h({type:"checkbox",inputProps:h({"data-indeterminate":p},y),icon:d.exports.cloneElement(l,{fontSize:(r=l.props.fontSize)!=null?r:g}),checkedIcon:d.exports.cloneElement(k,{fontSize:(o=k.props.fontSize)!=null?o:g}),ownerState:P,ref:n,className:N(C.root,B)},m,{classes:C}))}),O=He;function Ge(e){return H("MuiFormControlLabel",e)}const Je=G("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),E=Je,Ke=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],Qe=e=>{const{classes:a,disabled:n,labelPlacement:r,error:o}=e,c={root:["root",n&&"disabled",`labelPlacement${M(r)}`,o&&"error"],label:["label",n&&"disabled"]};return K(c,Ge,a)},Xe=U("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[{[`& .${E.label}`]:a.label},a.root,a[`labelPlacement${M(n.labelPlacement)}`]]}})(({theme:e,ownerState:a})=>h({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${E.disabled}`]:{cursor:"default"}},a.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},a.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},a.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${E.label}`]:{[`&.${E.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ye=d.exports.forwardRef(function(a,n){var r;const o=ae({props:a,name:"MuiFormControlLabel"}),{className:c,componentsProps:v={},control:u,disabled:b,disableTypography:p,label:f,labelPlacement:y="end",slotProps:g={}}=o,B=J(o,Ke),m=le();let l=b;typeof l>"u"&&typeof u.props.disabled<"u"&&(l=u.props.disabled),typeof l>"u"&&m&&(l=m.disabled);const k={disabled:l};["checked","name","onChange","value","inputRef"].forEach(x=>{typeof u.props[x]>"u"&&typeof o[x]<"u"&&(k[x]=o[x])});const P=ve({props:o,muiFormControl:m,states:["error"]}),C=h({},o,{disabled:l,labelPlacement:y,error:P.error}),L=Qe(C),R=(r=g.typography)!=null?r:v.typography;let S=f;return S!=null&&S.type!==W&&!p&&(S=t(W,h({component:"span"},R,{className:N(L.label,R==null?void 0:R.className),children:S}))),$(Xe,h({className:N(L.root,c),ownerState:C,ref:n},B,{children:[d.exports.cloneElement(u,k),S]}))}),V=Ye;function Ze(){const{user:e,role:a}=i.useContext(oe),n=fe(),[r,o]=i.useState(""),[c,v]=i.useState(""),[u,b]=i.useState(!1),[p,f]=i.useState(""),y=d.exports.useCallback(async m=>{o(m.target.value)},[]),g=d.exports.useCallback(async m=>{v(m.target.value)},[]);return t(se,{in:!0,direction:"left",children:$(F,{component:"form",onSubmit:m=>{m.preventDefault(),Ce("signin").Create({email:c,password:r,persistentLogin:u}).then(l=>{l.status!=200&&f("Invalid Credentials"),localStorage.setItem("token",l.data.token),e.setUser({id:l.data.gebruiker.id,naam:l.data.gebruiker.naam,email:c,ageGroup:l.data.gebruiker.leeftijdsGroep,token:l.data.token}),a.setRole(l.data.role),n("/")}).catch(()=>{f("Invalid Credentials")})},sx:{p:2},children:[t(W,{color:"red",align:"center",children:p}),$(re,{sx:{"& .MuiTextField-root":{m:1},textAlign:"center"},children:[t(w,{sx:{mb:2},label:"E-mail adres",variant:"standard",type:"email",required:!0,onChange:g,value:c,error:!!p}),t(w,{sx:{mb:2},label:"Wachtwoord",variant:"standard",type:"password",onChange:y,value:r,error:!!p,required:!0}),t(V,{sx:{mb:2},control:t(O,{checked:u,onChange:()=>b(!u)}),label:"Aangemeld blijven"}),t(ne,{variant:"contained",color:"secondary",type:"submit",children:"sign in"}),t(ge,{sx:{cursor:"pointer",mt:4},color:"#0d99ff",children:"Wachtwoord vergeten?"})]})]})})}function et(){i.useContext(oe);const[e,a]=i.useState(""),[n,r]=i.useState(""),[o,c]=i.useState(!1),[v,u]=i.useState(!1),[b,p]=i.useState(""),[f,y]=i.useState(ke()),[g,B]=i.useState(""),[m,l]=i.useState(""),[k,P]=i.useState(""),[C,L]=i.useState(!0),R=d.exports.useCallback(async s=>{s.preventDefault(),e!==b&&L(!1)},[b,e]),S=d.exports.useCallback(async s=>{a(s.target.value)},[]),x=d.exports.useCallback(async s=>{r(s.target.value)},[]),z=d.exports.useCallback(async s=>{p(s.target.value)},[]),q=d.exports.useCallback(async s=>{B(s.target.value)},[]),A=d.exports.useCallback(async s=>{l(s.target.value)},[]),j=d.exports.useCallback(async s=>{P(s.target.value)},[]);return t(se,{in:!0,direction:"right",children:t(F,{onSubmit:R,component:"form",sx:{p:2},children:$(re,{children:[$(F,{sx:{"& .MuiTextField-root":{m:"5px",width:"27%"}},children:[t(w,{sx:{mb:2},label:"Voornaam",variant:"standard",type:"text",required:!0,onChange:q,value:g}),t(w,{sx:{mb:2},label:"Tussenvg",variant:"standard",type:"text",onChange:A,value:m}),t(w,{sx:{mb:2},label:"Achternaam",variant:"standard",type:"text",required:!0,onChange:j,value:k})]}),t(ye,{dateAdapter:Pe,children:t(Se,{label:"Geboorte datum",value:f,onChange:s=>{y(s)},renderInput:s=>t(w,{sx:{m:1},variant:"standard",...s})})}),t(w,{sx:{m:1,mb:2},label:"E-mail adres",variant:"standard",type:"email",required:!0,onChange:x,value:n}),t(w,{sx:{m:1,mb:2},label:"Wachtwoord",variant:"standard",type:"password",required:!0,onChange:S,value:e}),t(w,{sx:{m:1,mb:2},label:"Wachtwoord bevestigen",variant:"standard",type:"password",required:!0,onChange:z,value:b,error:!C,helperText:C?"":"Wachtwoorden komen niet overeen"}),t(V,{sx:{mb:2},control:t(O,{checked:o,onChange:()=>c(!o)}),label:"Aangemeld blijven"}),t(V,{sx:{mb:2},control:t(O,{checked:v,onChange:()=>u(!v),required:!0}),label:"Ik accepteer de privacy policy"}),t(ne,{variant:"contained",color:"secondary",type:"submit",children:"sign up"})]})})})}function ee(e){const{children:a,value:n,index:r,...o}=e;return t(F,{role:"tabpanel",hidden:n!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...o,children:n===r&&t(F,{sx:{p:0},children:a})})}function te(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function pt(){const[e,a]=i.useState(0),n=d.exports.useCallback(async(r,o)=>{a(o)},[]);return t(F,{style:{width:"100%",height:"100vh",backgroundImage:"url("+xe+")"},children:t(Ie,{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:t(we,{elevation:4,sx:{width:750,p:4},children:$(F,{sx:{width:"100%"},children:[t(F,{sx:{borderBottom:1,borderColor:"divider"},children:$(Be,{value:e,onChange:n,variant:"fullWidth",sx:{ml:1,mr:1},children:[t(Z,{label:"sign in",...te(0)}),t(Z,{label:"sign up",...te(1)})]})}),t(ee,{value:e,index:0,children:t(Ze,{})}),t(ee,{value:e,index:1,children:t(et,{})})]})})})})}export{pt as default};
