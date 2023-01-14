import{an as A,R as l,ao as B,c as e,ad as p,a4 as n,j as i,T as s,n as H,o as v,m as T,aj as I,ak as S,W as D,al as W,A as _}from"./index.5588b80e.js";import{S as b}from"./Slide.1bf3197c.js";import{C as k}from"./Card.de27b451.js";import{C as P}from"./CardActionArea.f42b6423.js";import{C as F,a as G}from"./CardMedia.a453a743.js";import{T as j}from"./TextField.21d8adc2.js";import{I as L}from"./InputAdornment.e332f96d.js";import{d as M,a as E,S as N,b as x,c as C}from"./HighlightOff.50cc1a3d.js";import{C as R}from"./Container.f31bc250.js";const Z=A(),z=Z,$=[{id:1,name:"Theater Baget",image:"https://www.laaktheater.nl/public/images/app/og-image.png",description:` Theater Baget geeft de ultieme theater ervaring.
						Hier kan je genieten van de voorstellingen 
						van allerlei soorten artiesten, bands en acteurs.
						Theater Baget leeft door de donaties die worden gemaakt.
                        `},{id:2,name:"Dieren Lot",image:"https://www.dier.nu/resources/images/logo.svg",description:` Nog veel te veel dieren leiden
                        in Nederland een buitengewoon
                        beroerd bestaan.
                        Ze worden opgesloten in veel te kleine hokken, soms ernstig mishandeld,
                        gewond op straat gezet of gewoon maar aan hun lot overgelaten.
                        Dit kan niet en dit mag niet gebeuren.
                        `},{id:3,name:"War Child",image:"https://www.warchild.nl/static/images/logo-warchild.svg",description:`Veel kinderen in oorlog doen \u2019s nachts geen oog dicht.
         Zelfs niet met een knuffel,
          een liedje of verhaaltje voor het slapen gaan.
           Nachtmerries spoken door hun hoofd. En overdag? Dan gaat de nachtmerrie door. `},{id:4,name:"De Haagse Hogeschool",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Haagse_Hogeschool_logo_vector.svg/2560px-Haagse_Hogeschool_logo_vector.svg.png",description:` 	De Haagse Hogeschool ("HHS", "De Haagse", "THUAS") biedt hbo-opleidingen aan
         op bachelorniveau (voltijd, deeltijd, duaal) en op master- en post-hbo-niveau.
         De hogeschool heeft een internationaal karakter. Locaties van De Haagse Hogeschool bevinden
          zich in de Haagse wijk Laakhaven, vlak bij station Hollands Spoor (hoofdlocatie),
           aan de Mr. P. Droogleever Fortuynweg in Den Haag (Sportcampus Zuiderpark),
            in Zoetermeer (Dutch Innovation Park) en in Delft op de campus van de TU Delft. `},{id:5,name:"Muziek Speelplaats",image:"https://demuziekspeelplaats.nl/wp-content/uploads/2019/09/cropped-logo_demuziekspeelplaats-1.png",description:`Stichting de Muziekspeelplaats wil muziek zoveel mogelijk toegankelijk maken voor ieder kind.
         Wij helpen en ondersteunen lokale boegbeelden (prominente buurtbewoners
             die zich ontwikkelen tot muzikale leiders)
          om in hun eigen wijk een Muziekspeelplaats op te zetten, te organiseren en te onderhouden. `}];function U(t){const o=l.useCallback(async a=>{t.setChosenCharity(a),t.nextStep()},[t]),r=B();return e(p,{children:$.map(a=>e(b,{in:!0,direction:"left",children:e(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(k,{elevation:3,children:i(P,{onClick:()=>o(a),sx:r.innerWidth>=600?{display:"flex"}:null,children:[e(F,{component:"img",src:a.image,sx:{p:2,width:r.innerWidth>=600?100:200}}),i(z,{mx:2,children:[e(s,{variant:"body2",color:"primary.main",children:"Beschrijving"}),e(s,{variant:"body1",children:a.description})]})]})})})},a.name))})}function q(t){var r,a,d;const o=[{label:"Goede Doel:",data:(r=t.chosenCharity)==null?void 0:r.name},{label:"Informatie:",data:(a=t.chosenCharity)==null?void 0:a.description},{label:"Hoeveelheid:",data:`\u20AC ${t.data.amount.toFixed(2)}`},{label:"Commentaar:",data:t.data.comment}];return e(b,{in:!0,direction:"left",children:i(n,{container:!0,spacing:3,pt:2,p:3,children:[e(n,{item:!0,xs:12,sm:!0,lg:4,children:e(H,{component:"img",src:(d=t.chosenCharity)==null?void 0:d.image,sx:{width:250,p:2,bgcolor:"divider",borderRadius:1}})}),e(n,{item:!0,xs:12,sm:6,children:o.map(h=>i(p,{children:[e(s,{variant:"body2",sx:{color:"primary.main"},children:h.label}),e(s,{children:h.data}),e("br",{})]}))}),i(n,{item:!0,xs:12,sm:6,children:[e(v,{variant:"contained",onClick:t.nextStep,sx:{mr:2},children:"gereed"}),e(v,{variant:"outlined",onClick:t.previousStep,children:"terug"})]})]})})}function K(t){var u,y,w;const[o,r]=l.useState(0),[a,d]=l.useState("Met \u2764\uFE0F"),[h,c]=l.useState(!0),g=l.useCallback(m=>{if(m.target.name==="comment"?d(m.target.value):r(parseInt(m.target.value)|0),m.target.value===""||m.target.value===" "||m.target.value==="0"||!m.target.value){c(!0);return}c(!1)},[]),f=l.useCallback(()=>{t.nextStep({comment:a,amount:o})},[o,a,t]);return e(b,{in:!0,direction:"left",children:i(n,{container:!0,spacing:3,pt:2,p:3,children:[e(n,{item:!0,xs:12,sm:!0,lg:3,children:e(H,{component:"img",src:(u=t.chosenCharity)==null?void 0:u.image,sx:{width:200,p:2,bgcolor:"divider",borderRadius:1}})}),i(n,{item:!0,xs:12,sm:6,children:[e(s,{variant:"body2",sx:{color:"primary.main"},children:"Goede Doel:"}),e(s,{children:(y=t.chosenCharity)==null?void 0:y.name}),e("br",{}),e(s,{variant:"body2",sx:{color:"primary.main"},children:"Informatie:"}),e(s,{children:(w=t.chosenCharity)==null?void 0:w.description})]}),e(n,{item:!0,xs:12,sm:6,children:e(j,{name:"amount",value:o,onChange:g,fullWidth:!0,label:"Hoeveelheid",InputProps:{startAdornment:e(L,{position:"start",children:"\u20AC"})}})}),e(n,{item:!0,xs:12,sm:6,children:e(j,{value:a,onChange:g,name:"comment",fullWidth:!0,label:"Commentaar"})}),i(n,{item:!0,xs:12,sm:6,children:[e(v,{disabled:h,variant:"contained",onClick:f,sx:{mr:2},children:"next"}),e(v,{variant:"outlined",onClick:t.previousStep,children:"terug"})]})]})})}function V(t){const[o,r]=l.useState(0),a=T();return l.useEffect(()=>{(async()=>{var h,c;r(0),(h=t.chosenCharity)!=null&&h.id&&_("external").Donate("test@email.com",t.data.amount,(c=t.chosenCharity)==null?void 0:c.id,t.data.comment).then(g=>{if(g.status!==200){r(2);return}r(1)}).catch(()=>{r(2)})})()},[t]),i(p,{children:[o===0&&i(p,{children:[e(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(I,{size:200,sx:{mt:2,color:S[500]}})}),e(n,{item:!0,xs:12,children:e(s,{variant:"h3",align:"center",children:"Even geduld AUB"})})]}),o===1&&i(p,{children:[e(D,{in:!0,children:e(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(M,{sx:{fontSize:200,mt:2,color:S[500]}})})}),i(n,{item:!0,xs:12,children:[e(s,{variant:"h3",align:"center",children:"Donatie Gelukt"}),e(s,{variant:"h3",align:"center",children:"Dank u wel!"})]}),e(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(v,{variant:"contained",onClick:()=>a(-1),children:"Terug naar home pagina"})})]}),o===2&&i(p,{children:[e(D,{in:!0,children:e(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(E,{sx:{fontSize:200,mt:2,color:W[500]}})})}),i(n,{item:!0,xs:12,children:[e(s,{variant:"h3",align:"center",children:"Donatie niet gelukt."}),e(s,{variant:"h3",align:"center",children:"Probeer later"})]}),e(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e(v,{variant:"contained",onClick:()=>a(-1),children:"Terug naar home pagina"})})]})]})}function ie(){const[t,o]=l.useState(0),[r,a]=l.useState(null),[d,h]=l.useState(null),c=l.useCallback(async()=>{o(u=>u+1)},[]),g=l.useCallback(async u=>{h(u),c()},[c]),f=l.useCallback(async()=>{o(u=>u-1)},[]);return e(R,{children:e(z,{display:"flex",justifyContent:"center",m:4,children:e(k,{elevation:3,sx:{width:"100%",height:600,p:2,overflow:"auto",scrollbarWidth:"thin"},children:i(G,{children:[e(k,{elevation:4,sx:{zIndex:1e4,p:1,position:"sticky",top:0,bgcolor:"background.default"},children:i(N,{activeStep:t,alternativeLabel:!0,children:[e(x,{children:e(C,{children:"Goede Doel Kiezen"})}),e(x,{children:e(C,{children:"Betaal gegevens"})}),e(x,{children:e(C,{children:"Donatie bevestigen"})})]})}),i(n,{container:!0,spacing:3,pt:2,children:[t===0&&e(U,{setChosenCharity:a,nextStep:c}),t===1&&e(K,{chosenCharity:r,nextStep:g,previousStep:f}),t===2&&d&&e(q,{chosenCharity:r,previousStep:f,nextStep:c,data:d}),t===3&&d&&e(V,{chosenCharity:r,data:d})]})]})})})})}export{ie as default};
