import{r as t,c as e,n as a,ag as h,j as r,T as u,o as n}from"./index.972304f9.js";import{C as m}from"./Card.d2ae4601.js";import{F as s}from"./FormGroup.ca07c168.js";import{T as p}from"./TextField.9645e732.js";function f(){const[o,i]=t.exports.useState(""),c=t.exports.useCallback(async d=>{i(d.target.value)},[]),l=t.exports.useCallback(async()=>{},[]);return e(a,{style:{width:"100%",height:"100vh"},component:"form",onSubmit:l,children:e(h,{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:r(m,{elevation:4,sx:{width:750,p:4},children:[e(u,{variant:"h6",children:"Feedback over: Monki in paris"}),e(s,{children:e(p,{sx:{mb:2},label:"Wat vond u van dit programma?",variant:"standard",type:"text",required:!0,value:o,onChange:c,multiline:!0})}),e(s,{children:r(a,{children:[e(n,{variant:"contained",color:"primary",type:"submit",children:"Versturen"}),e(n,{variant:"text",color:"secondary",children:"annuleren"})]})})]})})})}export{f as default};