import{m as h,R as n,A as f,c as e,j as s,a5 as o,T as g}from"./index.025b3bd7.js";import{d as x,L as C,A as v}from"./index.e9e81527.js";import{T as y}from"./Ticket.d493817c.js";import{C as D}from"./Container.c315c6da.js";import{C as m}from"./Card.2183dc61.js";import{C as c}from"./CardContent.062b882f.js";import{S as j}from"./StaticDatePicker.17967d8d.js";import{T as S}from"./TextField.e6e7b6aa.js";import"./InputAdornment.64b4cd52.js";import"./CardActionArea.23b69ba9.js";import"./CardMedia.9c7bc2e9.js";import"./index.f2a06ad4.js";function R(){const d=h(),[a,l]=n.useState(x()),[p,u]=n.useState([]);return n.useEffect(()=>{const t=a==null?void 0:a.toDate();if(!t)return;const i=`${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()}`;f("programmeringen").Get("datum",{datum:i}).then(r=>{r.status==200&&u(r.data)})},[a]),e(D,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4},children:s(o,{container:!0,spacing:3,children:[e(o,{item:!0,lg:4,sm:12,xs:12,children:e(m,{elevation:4,children:e(c,{children:e(C,{dateAdapter:v,children:e(j,{onChange:t=>l(t),value:a,renderInput:t=>e(S,{...t}),componentsProps:{actionBar:{actions:["today"]}}})})})})}),e(o,{item:!0,lg:8,sm:12,xs:12,children:e(m,{elevation:4,sx:{maxHeight:485,p:1,overflowY:"auto",scrollbarWidth:"thin"},children:s(c,{children:[e(g,{variant:"h4",mb:2,children:"Shows:"}),p.map(t=>e(y,{...t,onClick:(i,r)=>{i.preventDefault(),d(`/bestellen/${r.id}`)}},t.id))]})})})]})})}export{R as default};