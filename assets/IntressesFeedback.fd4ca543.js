import{r as t,c as e,n as r,ah as h,j as a,T as u,o as n}from"./index.376979a5.js";import{C as m}from"./Card.7c32c9f9.js";import{F as s}from"./FormGroup.326a7529.js";import{T as p}from"./TextField.c4476220.js";import"./index.f2a06ad4.js";function k(){const[o,i]=t.exports.useState(""),c=t.exports.useCallback(async d=>{i(d.target.value)},[]),l=t.exports.useCallback(async()=>{},[]);return e(r,{style:{width:"100%",height:"100vh"},component:"form",onSubmit:l,children:e(h,{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:a(m,{elevation:4,sx:{width:750,p:4},children:[e(u,{variant:"h6",children:"Feedback over: Monki in paris"}),e(s,{children:e(p,{sx:{mb:2},label:"Wat vond u van dit programma?",variant:"standard",type:"text",required:!0,value:o,onChange:c,multiline:!0})}),e(s,{children:a(r,{children:[e(n,{variant:"contained",color:"primary",type:"submit",children:"Versturen"}),e(n,{variant:"text",color:"secondary",children:"annuleren"})]})})]})})})}export{k as default};
