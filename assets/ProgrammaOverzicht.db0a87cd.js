import{m as f,R as o,A as h,c as e,j as s,a4 as n,T as g}from"./index.1f33b1ff.js";import{d as x}from"./dayjs.min.51cb16df.js";import{L as C,A as v}from"./index.168b5310.js";import{T as y}from"./Ticket.f9e0565f.js";import{C as D}from"./Container.cbfb455a.js";import{C as m}from"./Card.0a28ddcb.js";import{C as c}from"./CardContent.b58a33a5.js";import{S as j}from"./StaticDatePicker.5764fe48.js";import{T as S}from"./TextField.fa51ab4a.js";import"./InputAdornment.6012913a.js";import"./CardActionArea.98fd91d1.js";import"./CardMedia.f7afae6b.js";function R(){const d=f(),[a,l]=o.useState(x()),[p,u]=o.useState([]);return o.useEffect(()=>{const t=a==null?void 0:a.toDate();if(!t)return;const i=`${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()}`;h("programmeringen").Get("datum",{datum:i}).then(r=>{r.status==200&&u(r.data)})},[a]),e(D,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4},children:s(n,{container:!0,spacing:3,children:[e(n,{item:!0,lg:4,sm:12,xs:12,children:e(m,{elevation:4,children:e(c,{children:e(C,{dateAdapter:v,children:e(j,{onChange:t=>l(t),value:a,renderInput:t=>e(S,{...t}),componentsProps:{actionBar:{actions:["today"]}}})})})})}),e(n,{item:!0,lg:8,sm:12,xs:12,children:e(m,{elevation:4,sx:{maxHeight:485,p:1,overflowY:"auto",scrollbarWidth:"thin"},children:s(c,{children:[e(g,{variant:"h4",mb:2,children:"Shows:"}),p.map(t=>e(y,{...t,onClick:(i,r)=>{i.preventDefault(),d(`/bestellen/${r.id}`)}},t.id))]})})})]})})}export{R as default};
