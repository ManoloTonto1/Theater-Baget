import{g as H,a as G,s as U,B as pe,_ as g,r as i,b as J,u as me,j as $,c as t,d as N,e as M,f as K,h as Q,i as he,k as be,l as ae,T as W,R as c,U as oe,m as fe,n as F,o as ne,L as ge,A as Ce,p as xe}from"./index.5588b80e.js";import{S as se}from"./Slide.1bf3197c.js";import{F as re}from"./FormGroup.ce396fb4.js";import{u as le,f as ve,T as B}from"./TextField.21d8adc2.js";import{d as ye}from"./dayjs.min.1cf29c54.js";import{L as ke,A as Pe}from"./index.2703aaa9.js";import{D as Se}from"./DatePicker.ee4965f3.js";import{C as Ie}from"./Container.f31bc250.js";import{C as we}from"./Card.de27b451.js";import{T as Be,a as Z}from"./Tabs.e4ac0269.js";import"./InputAdornment.e332f96d.js";function Fe(e){return H("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const $e=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Le=e=>{const{classes:a,checked:n,disabled:r,edge:o}=e,l={root:["root",n&&"checked",r&&"disabled",o&&`edge${M(o)}`],input:["input"]};return K(l,Fe,a)},Re=U(pe)(({ownerState:e})=>g({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Te=U("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Me=i.exports.forwardRef(function(a,n){const{autoFocus:r,checked:o,checkedIcon:l,className:d,defaultChecked:u,disabled:p,disableFocusRipple:m=!1,edge:v=!1,icon:P,id:y,inputProps:h,inputRef:b,name:f,onBlur:k,onChange:S,onFocus:C,readOnly:R,required:L,tabIndex:I,type:x,value:z}=a,q=J(a,$e),[A,D]=me({controlled:o,default:Boolean(u),name:"SwitchBase",state:"checked"}),s=le(),ce=w=>{C&&C(w),s&&s.onFocus&&s.onFocus(w)},ie=w=>{k&&k(w),s&&s.onBlur&&s.onBlur(w)},de=w=>{if(w.nativeEvent.defaultPrevented)return;const Y=w.target.checked;D(Y),S&&S(w,Y)};let T=p;s&&typeof T>"u"&&(T=s.disabled);const ue=x==="checkbox"||x==="radio",j=g({},a,{checked:A,disabled:T,disableFocusRipple:m,edge:v}),X=Le(j);return $(Re,g({component:"span",className:N(X.root,d),centerRipple:!0,focusRipple:!m,disabled:T,tabIndex:null,role:void 0,onFocus:ce,onBlur:ie,ownerState:j,ref:n},q,{children:[t(Te,g({autoFocus:r,checked:o,defaultChecked:u,className:X.input,disabled:T,id:ue&&y,name:f,onChange:de,readOnly:R,ref:b,required:L,ownerState:j,tabIndex:I,type:x},x==="checkbox"&&z===void 0?{}:{value:z},h)),A?l:P]}))}),ze=Me,Ae=Q(t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ee=Q(t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ne=Q(t("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ue(e){return H("MuiCheckbox",e)}const qe=G("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),_=qe,De=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],je=e=>{const{classes:a,indeterminate:n,color:r}=e,o={root:["root",n&&"indeterminate",`color${M(r)}`]},l=K(o,Ue,a);return g({},a,l)},_e=U(ze,{shouldForwardProp:e=>he(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,n.indeterminate&&a.indeterminate,n.color!=="default"&&a[`color${M(n.color)}`]]}})(({theme:e,ownerState:a})=>g({color:(e.vars||e).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${a.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:be(a.color==="default"?e.palette.action.active:e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${_.checked}, &.${_.indeterminate}`]:{color:(e.vars||e).palette[a.color].main},[`&.${_.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),We=t(Ee,{}),Oe=t(Ae,{}),Ve=t(Ne,{}),He=i.exports.forwardRef(function(a,n){var r,o;const l=ae({props:a,name:"MuiCheckbox"}),{checkedIcon:d=We,color:u="primary",icon:p=Oe,indeterminate:m=!1,indeterminateIcon:v=Ve,inputProps:P,size:y="medium",className:h}=l,b=J(l,De),f=m?v:p,k=m?v:d,S=g({},l,{color:u,indeterminate:m,size:y}),C=je(S);return t(_e,g({type:"checkbox",inputProps:g({"data-indeterminate":m},P),icon:i.exports.cloneElement(f,{fontSize:(r=f.props.fontSize)!=null?r:y}),checkedIcon:i.exports.cloneElement(k,{fontSize:(o=k.props.fontSize)!=null?o:y}),ownerState:S,ref:n,className:N(C.root,h)},b,{classes:C}))}),O=He;function Ge(e){return H("MuiFormControlLabel",e)}const Je=G("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),E=Je,Ke=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],Qe=e=>{const{classes:a,disabled:n,labelPlacement:r,error:o}=e,l={root:["root",n&&"disabled",`labelPlacement${M(r)}`,o&&"error"],label:["label",n&&"disabled"]};return K(l,Ge,a)},Xe=U("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[{[`& .${E.label}`]:a.label},a.root,a[`labelPlacement${M(n.labelPlacement)}`]]}})(({theme:e,ownerState:a})=>g({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${E.disabled}`]:{cursor:"default"}},a.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},a.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},a.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${E.label}`]:{[`&.${E.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ye=i.exports.forwardRef(function(a,n){var r;const o=ae({props:a,name:"MuiFormControlLabel"}),{className:l,componentsProps:d={},control:u,disabled:p,disableTypography:m,label:v,labelPlacement:P="end",slotProps:y={}}=o,h=J(o,Ke),b=le();let f=p;typeof f>"u"&&typeof u.props.disabled<"u"&&(f=u.props.disabled),typeof f>"u"&&b&&(f=b.disabled);const k={disabled:f};["checked","name","onChange","value","inputRef"].forEach(x=>{typeof u.props[x]>"u"&&typeof o[x]<"u"&&(k[x]=o[x])});const S=ve({props:o,muiFormControl:b,states:["error"]}),C=g({},o,{disabled:f,labelPlacement:P,error:S.error}),R=Qe(C),L=(r=y.typography)!=null?r:d.typography;let I=v;return I!=null&&I.type!==W&&!m&&(I=t(W,g({component:"span"},L,{className:N(R.label,L==null?void 0:L.className),children:I}))),$(Xe,g({className:N(R.root,l),ownerState:C,ref:n},h,{children:[i.exports.cloneElement(u,k),I]}))}),V=Ye;function Ze(){const{user:e}=c.useContext(oe),a=fe(),[n,r]=c.useState(""),[o,l]=c.useState(""),[d,u]=c.useState(!1),[p,m]=c.useState(""),v=i.exports.useCallback(async h=>{r(h.target.value)},[]),P=i.exports.useCallback(async h=>{l(h.target.value)},[]);return t(se,{in:!0,direction:"left",children:$(F,{component:"form",onSubmit:h=>{h.preventDefault(),Ce("signin").Create({email:o,password:n,persistentLogin:d}).then(b=>{b.status==200&&(console.log(b.data),localStorage.setItem("token",b.data),console.log(localStorage.getItem("token")),e.setUser({email:o,persistentLogin:d}),a("/"))}).catch(()=>{m("Invalid Credentials")})},sx:{p:2},children:[t(W,{color:"red",align:"center",children:p}),$(re,{sx:{"& .MuiTextField-root":{m:1},textAlign:"center"},children:[t(B,{sx:{mb:2},label:"E-mail adres",variant:"standard",type:"email",required:!0,onChange:P,value:o,error:!!p}),t(B,{sx:{mb:2},label:"Wachtwoord",variant:"standard",type:"password",onChange:v,value:n,error:!!p,required:!0}),t(V,{sx:{mb:2},control:t(O,{checked:d,onChange:()=>u(!d)}),label:"Aangemeld blijven"}),t(ne,{variant:"contained",color:"secondary",type:"submit",children:"sign in"}),t(ge,{sx:{cursor:"pointer",mt:4},color:"#0d99ff",children:"Wachtwoord vergeten?"})]})]})})}function et(){c.useContext(oe);const[e,a]=c.useState(""),[n,r]=c.useState(""),[o,l]=c.useState(!1),[d,u]=c.useState(!1),[p,m]=c.useState(""),[v,P]=c.useState(ye()),[y,h]=c.useState(""),[b,f]=c.useState(""),[k,S]=c.useState(""),[C,R]=c.useState(!0),L=i.exports.useCallback(async s=>{s.preventDefault(),e!==p&&R(!1)},[p,e]),I=i.exports.useCallback(async s=>{a(s.target.value)},[]),x=i.exports.useCallback(async s=>{r(s.target.value)},[]),z=i.exports.useCallback(async s=>{m(s.target.value)},[]),q=i.exports.useCallback(async s=>{h(s.target.value)},[]),A=i.exports.useCallback(async s=>{f(s.target.value)},[]),D=i.exports.useCallback(async s=>{S(s.target.value)},[]);return t(se,{in:!0,direction:"right",children:t(F,{onSubmit:L,component:"form",sx:{p:2},children:$(re,{children:[$(F,{sx:{"& .MuiTextField-root":{m:"5px",width:"27%"}},children:[t(B,{sx:{mb:2},label:"Voornaam",variant:"standard",type:"text",required:!0,onChange:q,value:y}),t(B,{sx:{mb:2},label:"Tussenvg",variant:"standard",type:"text",onChange:A,value:b}),t(B,{sx:{mb:2},label:"Achternaam",variant:"standard",type:"text",required:!0,onChange:D,value:k})]}),t(ke,{dateAdapter:Pe,children:t(Se,{label:"Geboorte datum",value:v,onChange:s=>{P(s)},renderInput:s=>t(B,{sx:{m:1},variant:"standard",...s})})}),t(B,{sx:{m:1,mb:2},label:"E-mail adres",variant:"standard",type:"email",required:!0,onChange:x,value:n}),t(B,{sx:{m:1,mb:2},label:"Wachtwoord",variant:"standard",type:"password",required:!0,onChange:I,value:e}),t(B,{sx:{m:1,mb:2},label:"Wachtwoord bevestigen",variant:"standard",type:"password",required:!0,onChange:z,value:p,error:!C,helperText:C?"":"Wachtwoorden komen niet overeen"}),t(V,{sx:{mb:2},control:t(O,{checked:o,onChange:()=>l(!o)}),label:"Aangemeld blijven"}),t(V,{sx:{mb:2},control:t(O,{checked:d,onChange:()=>u(!d),required:!0}),label:"Ik accepteer de privacy policy"}),t(ne,{variant:"contained",color:"secondary",type:"submit",children:"sign up"})]})})})}function ee(e){const{children:a,value:n,index:r,...o}=e;return t(F,{role:"tabpanel",hidden:n!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...o,children:n===r&&t(F,{sx:{p:0},children:a})})}function te(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function pt(){const[e,a]=c.useState(0),n=i.exports.useCallback(async(r,o)=>{a(o)},[]);return t(F,{style:{width:"100%",height:"100vh",backgroundImage:"url("+xe+")"},children:t(Ie,{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:t(we,{elevation:4,sx:{width:750,p:4},children:$(F,{sx:{width:"100%"},children:[t(F,{sx:{borderBottom:1,borderColor:"divider"},children:$(Be,{value:e,onChange:n,variant:"fullWidth",sx:{ml:1,mr:1},children:[t(Z,{label:"sign in",...te(0)}),t(Z,{label:"sign up",...te(1)})]})}),t(ee,{value:e,index:0,children:t(Ze,{})}),t(ee,{value:e,index:1,children:t(et,{})})]})})})})}export{pt as default};
