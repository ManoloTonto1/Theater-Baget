import{R as a,U as B,m as ee,j as r,n as S,c as e,T as d,o as C,ab as te,ac as ae,ad as re,F as x,a5 as l,A as I,r as b,am as R,al as D,Y as P,an as _,aq as ne,ai as le,E as ie}from"./index.d915181a.js";import{d as N,a as O}from"./HighlightOff.ae755037.js";import{d as E,L as H,A as Y}from"./index.60a79da5.js";import{d as se,F as oe,T as v,c as M,I as U,S as L}from"./TextField.451445b8.js";import{C as $}from"./Card.16955891.js";import{C as de}from"./CardActionArea.6fcf50a0.js";import{C as ce}from"./CardMedia.390214ea.js";import{F as W}from"./FormGroup.1bce50fe.js";import{M as K,C as ue}from"./MenuItem.312444aa.js";import{D as J}from"./DatePicker.23d65274.js";import{T as he,a as w}from"./Tabs.22e257e1.js";import"./InputAdornment.ee729dca.js";import"./index.f2a06ad4.js";import"./dividerClasses.f5d8aa9c.js";function me(){const{user:t}=a.useContext(B),i=ee(),n=a.useCallback(()=>{localStorage.removeItem("token"),t.setUser(null),i("/")},[i,t]);return r(S,{component:"form",id:"form",sx:{p:3},children:[e(d,{variant:"h3",align:"center",sx:{marginBottom:1},children:"Weet u zeker dat u wilt uitloggen?"}),e(d,{variant:"body1",align:"center",children:"Klik op de knop hieronder om uit te loggen."}),e(C,{variant:"contained",size:"large",onClick:n,sx:{mt:4,width:"100%"},children:"Log uit"})]})}var Z={},ge=ae.exports;Object.defineProperty(Z,"__esModule",{value:!0});var V=Z.default=void 0,fe=ge(te()),pe=re,ve=(0,fe.default)((0,pe.jsx)("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");V=Z.default=ve;function xe({imageProps:t,label:i}){const n=a.useRef(null),s=()=>{const o=n.current;o&&o.click()},u=o=>{const m=o.target;if(!m.files)return;const j=m.files[0],k=new FileReader;k.readAsDataURL(j),k.onload=()=>{t.setImage(k.result)}},[g,f]=a.useState(!1);return r(x,{children:[e(se,{children:i}),e($,{sx:{mt:1},children:r(de,{onClick:s,onChange:u,onMouseEnter:()=>{t.image&&f(!0)},onMouseLeave:()=>{t.image&&f(!1)},children:[e("input",{hidden:!0,type:"file",ref:n,accept:"image/*"}),e(oe,{in:g,children:r(l,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",sx:{backgroundColor:"rgba(0,0,0,0.6)",position:"absolute",width:"100%",height:"100%"},children:[e(V,{sx:{color:"#fff",mb:2,fontSize:"35pt"}}),e(d,{variant:"h6",sx:{color:"#fff"},children:"Change Picture"})]})}),e(ce,{sx:{display:"flex",justifyContent:"center",height:300},children:t.image?e("img",{loading:"lazy",src:t.image,alt:""}):r(l,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:[e(V,{sx:{mb:2,fontSize:"35pt"}}),e(d,{variant:"h6",children:"Upload Picture"})]})})]})})]})}function be(){const[t,i]=a.useState(""),[n,s]=a.useState(E()),[u,g]=a.useState(""),[f,y]=a.useState([]),[h,o]=a.useState(3),[m,j]=a.useState("");a.useEffect(()=>{I("zalen").GetAll().then(c=>{c.status==200&&y(c.data)})},[]);const k=b.exports.useCallback(c=>{g(c.target.value)},[]),A=a.useCallback(async()=>{i(""),g(""),s(E()),o(3)},[]),G=b.exports.useCallback(async c=>{c.preventDefault();const p=document.getElementById("form"),q=new FormData(p),F=n==null?void 0:n.toDate();if(!F)return;const Q=`${F.getMonth()+1}/${F.getDate()}/${F.getFullYear()}`;I("programmeringen").Create({datum:Q,titel:q.get("titel"),afbeelding:t,omschrijving:q.get("omschrijving"),prijs:parseFloat(q.get("prijs")),zaalNr:parseInt(u)}).then(X=>{o(0),X.status!==200&&j("Vul de benodigde velden"),o(1)}).catch(()=>{j("Vul de benodigde velden")})},[t,u,n]);return r(x,{children:[h===3&&e(S,{component:"form",id:"form",sx:{p:3},children:r(W,{children:[e(d,{variant:"h5",children:"Programma toevoegen"}),e(d,{color:"red",align:"center",children:m}),e(xe,{imageProps:{image:t,setImage:i},label:""}),e(v,{sx:{mb:2},label:"Titel",variant:"standard",type:"text",name:"titel",error:!!m,required:!0}),e(v,{sx:{mb:2},label:"Omschrijving",variant:"standard",type:"text",name:"omschrijving",error:!!m,required:!0}),e(H,{dateAdapter:Y,children:e(J,{label:"Datum voorstelling",value:n,onChange:c=>{s(c)},renderInput:c=>e(v,{sx:{mb:2},variant:"standard",...c})})}),r(l,{container:!0,spacing:3,children:[e(l,{item:!0,xs:6,children:r(M,{fullWidth:!0,children:[e(U,{id:"Zaal select",children:"Zaal select"}),e(L,{variant:"standard",labelId:"Zaal select",value:u,label:"Zaal select",onChange:k,error:!!m,required:!0,children:f.map(c=>e(K,{value:c.zaalNr,children:e(ue,{size:"small",color:"primary",label:`#${c.zaalNr}`})},c.zaalNr))})]})}),e(l,{item:!0,xs:6,children:e(v,{sx:{mb:2},label:"Prijs",variant:"standard",type:"number",name:"prijs",fullWidth:!0,error:!!m,required:!0})})]}),e(C,{variant:"contained",type:"submit",onClick:G,sx:{my:3},children:"Toevoegen"})]})}),h===0&&r(x,{children:[e(l,{sx:{display:"flex",justifyContent:"center",mt:5},children:e(R,{size:200,sx:{mt:2,color:D[500]}})}),e(l,{sx:{display:"flex",justifyContent:"center",mt:5},children:e(d,{variant:"h5",children:"Even geduld A.U.B."})}),e(l,{item:!0,xs:12,display:"flex",justifyContent:"center"})," "]}),h===1&&r(x,{children:[e(P,{in:!0,children:e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(N,{sx:{fontSize:200,mt:2,color:D[500]}})})}),e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(d,{variant:"h3",align:"center",children:"Toevoegen Gelukt"})}),e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(C,{variant:"contained",onClick:A,sx:{mt:5},children:"Terug naar programma toevoegen"})})]}),h===2&&r(x,{children:[e(P,{in:!0,children:e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(O,{sx:{fontSize:200,mt:2,color:_[500]}})})}),r(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:[e(C,{variant:"contained",onClick:A,sx:{mt:5},children:"Terug naar programma toevoegen"}),e(d,{variant:"h3",align:"center",children:"Toevoegen niet gelukt."})]})]})]})}function Ce(){const[t,i]=a.useState(3),[n,s]=a.useState(""),u=a.useCallback(async()=>{i(3)},[]),g=b.exports.useCallback(async f=>{f.preventDefault();const y=document.getElementById("form"),h=new FormData(y);I("zalen").Create({soort:h.get("soort"),eersterangsAantal:parseFloat(h.get("eersterang")),tweederangsAantal:parseFloat(h.get("tweederang")),derderangsAantal:parseFloat(h.get("derderang"))}).then(o=>{o.status!==200&&s("Vul de benodigde velden"),i(1)}).catch(()=>{s("Vul de benodigde velden")})},[]);return r(x,{children:[t===3&&r(S,{sx:{p:3},component:"form",id:"form",children:[e(d,{color:"red",align:"center",children:n}),r(W,{children:[e(d,{variant:"h5",children:"Zaal toevoegen"}),e(v,{sx:{m:1,mb:2},label:"Soort ruimte(theater of vrije ruimte)",variant:"standard",type:"text",name:"soort",error:!!n,required:!0}),e(v,{sx:{m:1,mb:2},label:"Aantal eersterangs stoelen",variant:"standard",type:"number",name:"eersterang",error:!!n,required:!0}),e(v,{sx:{m:1,mb:2},label:"Aantal tweederangs stoelen",variant:"standard",type:"number",name:"tweederang",error:!!n,required:!0}),e(v,{sx:{m:1,mb:3},label:"Aantal derderangs stoelen",variant:"standard",type:"number",name:"derderang"}),e(C,{variant:"contained",type:"submit",onClick:g,sx:{my:3},children:"Toevoegen"})]})]}),t===0&&r(x,{children:[e(l,{sx:{display:"flex",justifyContent:"center",mt:5},children:e(R,{size:200,sx:{mt:2,color:D[500]}})}),e(l,{sx:{display:"flex",justifyContent:"center",mt:5},children:e(d,{variant:"h5",children:"Even geduld A.U.B."})})]}),t===1&&r(x,{children:[e(P,{in:!0,children:e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(N,{sx:{fontSize:200,mt:2,color:D[500]}})})}),e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(d,{variant:"h3",align:"center",children:"Toevoegen Gelukt"})}),e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(C,{variant:"contained",onClick:u,sx:{mt:5},children:"Terug naar zaal toevoegen"})})]}),t===2&&r(x,{children:[e(P,{in:!0,children:e(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(O,{sx:{fontSize:200,mt:2,color:_[500]}})})}),r(l,{item:!0,xs:12,display:"flex",justifyContent:"center",children:[e(C,{variant:"contained",onClick:u,sx:{mt:5},children:"Terug naar programma toevoegen"}),e(d,{variant:"h3",align:"center",children:"Toevoegen niet gelukt."})]})]})]})}function ye(){const[t,i]=a.useState(""),[n,s]=a.useState(""),[u,g]=a.useState(E()),[f,y]=a.useState(""),[h,o]=a.useState(""),[m,j]=a.useState(!0),k=b.exports.useCallback(async p=>{y(p.target.value)},[]),A=b.exports.useCallback(async p=>{o(p.target.value)},[]),G=b.exports.useCallback(async p=>{s(p.target.value)},[]),c=b.exports.useCallback(async p=>{i(p.target.value)},[]);return e(S,{component:"form",id:"form",sx:{p:3},children:r(W,{children:[e(d,{variant:"h5",children:"Gebruiker toevoegen"}),e(v,{sx:{m:1,mb:2},label:"Naam",variant:"standard",type:"text",required:!0,onChange:c,value:t}),e(H,{dateAdapter:Y,children:e(J,{label:"Geboorte datum",value:u,onChange:p=>{g(p)},renderInput:p=>e(v,{sx:{m:1},variant:"standard",...p})})}),e(v,{sx:{m:1,mb:2},label:"E-mail adres",variant:"standard",type:"email",required:!0,onChange:A,value:h}),e(v,{sx:{m:1,mb:2},label:"Wachtwoord",variant:"standard",type:"password",required:!0,onChange:k,value:f}),e(v,{sx:{m:1,mb:3},label:"Wachtwoord bevestigen",variant:"standard",type:"password",required:!0,onChange:G,value:n,error:!m,helperText:m?"":"Wachtwoorden komen niet overeen"}),e(C,{variant:"contained",type:"submit",children:"Toevoegen"})]})})}function ke(){const[t,i]=a.useState([]),[n,s]=a.useState(),[u,g]=a.useState(!1);a.useEffect(()=>{async function o(){const m=(await I("gebruikers").GetAll()).data;i(m)}o()},[i]);const f=t.length>0&&t.map((o,m)=>e(K,{value:o,children:o.naam},m)),y=b.exports.useCallback(async o=>{s(o.target.value)},[s]),h=b.exports.useCallback(()=>{g(!0)},[g]);return b.exports.useCallback(()=>{g(!1)},[g]),r(S,{component:"form",id:"form",sx:{p:3},children:[e(d,{sx:{pb:2},children:"Gebruiker inzien"}),r(M,{fullWidth:!0,children:[e(U,{children:"Gebruiker"}),e(L,{variant:"standard",value:n,onChange:y,children:f}),e(C,{variant:"contained",onClick:h,children:"Inzien"})]}),e(d,{sx:{pb:2},children:"Gebruiker inzien"}),r(M,{fullWidth:!0,children:[e(U,{children:"Gebruiker"}),e(L,{variant:"standard",value:n,onChange:y,children:f}),e(C,{variant:"contained",onClick:h,children:"Inzien"})]})]})}function z(t){const{children:i,value:n,index:s,...u}=t;return e(S,{role:"tabpanel",hidden:n!==s,id:`vertical-tabpanel-${s}`,"aria-labelledby":`vertical-tab-${s}`,...u,children:n===s&&e(S,{sx:{p:3},children:e(d,{children:i})})})}function T(t){return{id:`vertical-tab-${t}`,"aria-controls":`vertical-tabpanel-${t}`}}function Ue(){const[t,i]=a.useState(0),n=(g,f)=>{i(f)},{user:s,role:u}=a.useContext(B);return e(x,{children:s.userData&&u.role===ne.admin?e(le,{maxWidth:"md",sx:{my:4},children:r(l,{container:!0,spacing:3,sx:{display:"flex",justifyContent:"center"},children:[e(l,{item:!0,lg:12,xs:12,children:e($,{elevation:4,children:r(he,{variant:"scrollable",value:t,onChange:n,"aria-label":"Vertical tabs",sx:{borderRight:1,borderColor:"divider"},children:[e(w,{label:"Programma toevoegen",...T(0)}),e(w,{label:"Zaal toevoegen",...T(1)}),e(w,{label:"Gebruiker toevoegen",...T(2)}),e(w,{label:"Gebruiker inzien",...T(3)}),e(w,{label:"Logout",...T(4)})]})})}),e(l,{item:!0,lg:12,sm:12,xs:12,children:r($,{elevation:4,sx:{minHeight:500,overflowY:"auto",scrollbarWidth:"thin"},children:[e(z,{value:t,index:0,children:e(be,{})}),e(z,{value:t,index:1,children:e(Ce,{})}),e(z,{value:t,index:2,children:e(ye,{})}),e(z,{value:t,index:3,children:e(ke,{})}),e(z,{value:t,index:4,children:e(me,{})})]})})]})}):e(ie,{})})}export{Ue as default};
