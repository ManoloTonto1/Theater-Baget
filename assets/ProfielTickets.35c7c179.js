import{d as o}from"./dayjs.min.64446f8d.js";import{R as a,A as i,c as r,n,j as m,T as p}from"./index.303a8015.js";import{T as c}from"./Ticket.9f97d92c.js";import{a as l}from"./CardMedia.3dddbd3a.js";import"./Card.11e93756.js";import"./CardActionArea.d6939f62.js";function g(){a.useState(o());const[e,s]=a.useState([]);return a.useEffect(()=>{i("programmeringen").GetAll().then(t=>{t.status==200&&s(t.data)})},[]),r(n,{sx:{p:1,scrollbarWidth:"thin"},children:m(l,{children:[r(p,{variant:"h4",mb:2,children:"Tickets:"}),e.map(t=>(console.log(t),r(c,{...t},t.id)))]})})}export{g as default};
