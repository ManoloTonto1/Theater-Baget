import{ag as m,R as i,A as b,c as e,n as c,j as l,T as d,ah as B,a3 as u}from"./index.887c5d85.js";import{T as S}from"./Ticket.2b5bc3b6.js";import{C as x}from"./CardContent.46443b62.js";import{P as T,B as y}from"./ProfileCard.74254c9d.js";import{C as p}from"./Card.69ae87ce.js";import{T as L,a as f}from"./Tabs.2722836d.js";import"./CardActionArea.96025989.js";import"./CardMedia.efedb9bf.js";import"./index.f2a06ad4.js";function P(){const{id:t}=m(),[r,o]=i.useState([]),[n,s]=i.useState();return i.useEffect(()=>{b("groepen").Get(t).then(a=>{a.status==200&&(o(a.data.programmeringen),s(a.data.programmeringen.length))})},[]),e(c,{sx:{p:1,scrollbarWidth:"thin"},children:l(x,{sx:{},children:[e(d,{variant:"h4",mb:2,children:"Bands shows:"}),n==0?e(d,{variant:"h5",mb:2,children:"No current shows available."}):r.map(a=>(console.log("caRD:",a),e(S,{...a},a.id)))]})})}function D(){const[t,r]=i.useState([]),[o,n]=i.useState(),{id:s}=m();return i.useEffect(()=>{b("groepen").Get(s).then(a=>{a.status==200&&(r(a.data.betrokkenen),n(a.data.betrokkenen.length))})},[s]),e(c,{sx:{p:1,scrollbarWidth:"thin"},children:l(x,{sx:{},children:[e(d,{variant:"h4",mb:2,children:"Leden:"}),o==0?e(d,{variant:"h5",mb:2,children:"Band currently has no members."}):t.map(a=>(console.log(a),e(T,{...a},a.id)))]})})}function g(t){const{children:r,value:o,index:n,...s}=t;return e(c,{role:"tabpanel",hidden:o!==n,id:`vertical-tabpanel-${n}`,"aria-labelledby":`vertical-tab-${n}`,...s,children:o===n&&e(c,{sx:{p:3},children:e(d,{children:r})})})}function v(t){return{id:`vertical-tab-${t}`,"aria-controls":`vertical-tabpanel-${t}`}}function H(){const{id:t}=m(),[r,o]=i.useState(0),[n,s]=i.useState();i.useEffect(()=>{b("groepen").Get(t).then(h=>{console.log(h.data),s(h.data)})},[]);const a=(h,C)=>{o(C)};return e(B,{sx:{my:4},children:l(u,{container:!0,spacing:3,children:[e(u,{item:!0,lg:12,xs:12,children:l(p,{elevation:4,children:[e(y,{...n},"hoe"),l(L,{variant:"fullWidth",value:r,onChange:a,"aria-label":"Vertical tabs",sx:{borderRight:1,borderColor:"divider"},children:[e(f,{label:"Shows",...v(0)}),e(f,{label:"Leden",...v(1)})]})]})}),e(u,{item:!0,lg:12,sm:12,xs:12,children:l(p,{elevation:4,sx:{maxHeight:500,minHeight:500,overflowY:"auto"},children:[e(g,{value:r,index:0,children:e(P,{})}),e(g,{value:r,index:1,children:e(D,{})})]})})]})})}export{H as default};
