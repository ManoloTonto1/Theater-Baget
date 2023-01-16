import{r as g,w as H,b as O,z as q,v as L,c as A,_ as m,C as G,t as J,D as K,E as v}from"./index.1123c969.js";const M=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function N(o,i,d){const e=i.getBoundingClientRect(),n=d&&d.getBoundingClientRect(),x=L(i);let l;if(i.fakeTransform)l=i.fakeTransform;else{const s=x.getComputedStyle(i);l=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let u=0,f=0;if(l&&l!=="none"&&typeof l=="string"){const s=l.split("(")[1].split(")")[0].split(",");u=parseInt(s[4],10),f=parseInt(s[5],10)}return o==="left"?n?`translateX(${n.right+u-e.left}px)`:`translateX(${x.innerWidth+u-e.left}px)`:o==="right"?n?`translateX(-${e.right-n.left-u}px)`:`translateX(-${e.left+e.width-u}px)`:o==="up"?n?`translateY(${n.bottom+f-e.top}px)`:`translateY(${x.innerHeight+f-e.top}px)`:n?`translateY(-${e.top-n.top+e.height-f}px)`:`translateY(-${e.top+e.height-f}px)`}function Q(o){return typeof o=="function"?o():o}function h(o,i,d){const e=Q(d),n=N(o,i,e);n&&(i.style.webkitTransform=n,i.style.transform=n)}const U=g.exports.forwardRef(function(i,d){const e=H(),n={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},x={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:l,appear:u=!0,children:f,container:s,direction:c="down",easing:T=n,in:p,onEnter:b,onEntered:P,onEntering:k,onExit:R,onExited:C,onExiting:z,style:y,timeout:w=x,TransitionComponent:V=G}=i,W=O(i,M),a=g.exports.useRef(null),X=q(f.ref,a,d),E=t=>r=>{t&&(r===void 0?t(a.current):t(a.current,r))},Y=E((t,r)=>{h(c,t,s),K(t),b&&b(t,r)}),_=E((t,r)=>{const S=v({timeout:w,style:y,easing:T},{mode:"enter"});t.style.webkitTransition=e.transitions.create("-webkit-transform",m({},S)),t.style.transition=e.transitions.create("transform",m({},S)),t.style.webkitTransform="none",t.style.transform="none",k&&k(t,r)}),j=E(P),B=E(z),I=E(t=>{const r=v({timeout:w,style:y,easing:T},{mode:"exit"});t.style.webkitTransition=e.transitions.create("-webkit-transform",r),t.style.transition=e.transitions.create("transform",r),h(c,t,s),R&&R(t)}),D=E(t=>{t.style.webkitTransition="",t.style.transition="",C&&C(t)}),F=t=>{l&&l(a.current,t)},$=g.exports.useCallback(()=>{a.current&&h(c,a.current,s)},[c,s]);return g.exports.useEffect(()=>{if(p||c==="down"||c==="right")return;const t=J(()=>{a.current&&h(c,a.current,s)}),r=L(a.current);return r.addEventListener("resize",t),()=>{t.clear(),r.removeEventListener("resize",t)}},[c,p,s]),g.exports.useEffect(()=>{p||$()},[p,$]),A(V,m({nodeRef:a,onEnter:Y,onEntered:j,onEntering:_,onExit:I,onExited:D,onExiting:B,addEndListener:F,appear:u,in:p,timeout:w},W,{children:(t,r)=>g.exports.cloneElement(f,m({ref:X,style:m({visibility:t==="exited"&&!p?"hidden":void 0},y,f.props.style)},r))}))}),tt=U;export{tt as S};