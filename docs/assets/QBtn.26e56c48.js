import{k as o,J as ae,j as de,C as v,s as F,K as N,L as fe,M as ve,H as re,N as me,r as H,p as ge,T as be,w as he,x as P,D as ye,O as ke}from"./index.fcade5f2.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function ue(e,t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const V=e=>ae(de(e)),pe=e=>ae(e);function xe(e,t){return e!==void 0&&e()||t}function z(e,t){return e!==void 0?t.concat(e()):t}const U="0 0 24 24",W=e=>e,I=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},se={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(le).join("|")+")"),$e=new RegExp("^("+Object.keys(se).join("|")+")"),X=new RegExp("^("+Object.keys(oe).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,we=/^svguse:/,Ce=/^ion-/,Re=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=V({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=F(),n=ue(e),l=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Ee.test(r)===!0){const[s,y=U]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,b,p]=u.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Se.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[s,y=U]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match(qe);if(h!==null)c=le[h[1]](r);else if(Re.test(r)===!0)c=r;else if(Ce.test(r)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){c="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),c+=oe[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match($e);s!==null&&(r=r.substring(2),c+=se[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:l.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,xe(t.default)):f.value.img===!0?v("span",c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Le={size:{type:[Number,String],default:"1em"},color:String};function Be(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var _e=V({name:"QSpinner",props:{...Le,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Be(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Ge(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Pe(e){return e.appContext.config.globalProperties.$router!==void 0}function Ze(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Oe(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function et(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}function Te(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function Y(e,t,a,n){a.modifiers.stop===!0&&re(e);const l=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),r=document.createElement("span"),q=me(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),b=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-h-b}px`,x=`${(u-k)/2}px`,_=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",Oe(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${l?" text-"+l:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const L=()=>{c.remove(),clearTimeout(B)};a.abort.push(L);let B=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,B=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,B=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(L),1)},275)},250)},50)}function G(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var je=pe({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&Y(l,e,n,l.qKeyEvent===!0)},keystart:Te(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&N(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&Y(l,e,n,!0)},300)};G(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&G(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ve(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(ce),Me={align:{type:String,validator:e=>Ae.includes(e)}};function ze(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ke(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((f,c)=>f!==l[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function De(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(De(e[a],t[a])===!1)return!1;return!0}const Ne={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Qe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=F(),{props:n,proxy:l,emit:f}=a,c=Pe(a),r=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>q.value===!0?_(n.to):null),s=o(()=>h.value!==null),y=o(()=>r.value===!0||s.value===!0),u=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=o(()=>{if(s.value===!1)return-1;const{matched:m}=h.value,{length:$}=m,S=m[$-1];if(S===void 0)return-1;const C=l.$route.matched;if(C.length===0)return-1;const R=C.findIndex(ee.bind(null,S));if(R>-1)return R;const K=Z(m[$-2]);return $>1&&Z(S)===K&&C[C.length-1].path!==K?C.findIndex(ee.bind(null,m[$-2])):R}),p=o(()=>s.value===!0&&b.value!==-1&&Ke(l.$route.params,h.value.params)),d=o(()=>p.value===!0&&b.value===l.$route.matched.length-1&&Ie(l.$route.params,h.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(m){try{return l.$router.resolve(m)}catch{}return null}function L(m,{returnRouterError:$,to:S=n.to,replace:C=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const R=l.$router[C===!0?"replace":"push"](S);return $===!0?R:R.then(()=>{}).catch(()=>{})}function B(m){if(s.value===!0){const $=S=>L(m,S);f("click",m,$),m.defaultPrevented!==!0&&$()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:L,navigateOnClick:B}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Fe={xs:8,sm:10,md:14,lg:20,xl:24},Ve=["button","submit","reset"],He=/[^\s]\/[^\s]/,Ue=["flat","outline","push","unelevated"],We=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Xe={...ie,...Ne,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ue.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Je(e){const t=ue(e,Fe),a=ze(e),{hasRouterLink:n,hasLink:l,linkTag:f,linkAttrs:c,navigateOnClick:r}=Qe({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),u=o(()=>We(e,"standard")),k=o(()=>{const d={tabindex:y.value};return l.value===!0?Object.assign(d,c.value):Ve.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&He.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),b=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=ke;let O=null,T=null,j=null;var tt=V({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=F(),{classes:l,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Je(e),u=H(null),k=H(null);let b=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),L=o(()=>({center:e.round})),B=o(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),m=o(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const i={onClick:S,onKeydown:C,onMousedown:K};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${g}`]=R}return i}return{onClick:P}}),$=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:f.value,...r.value,...m.value}));function S(i){if(u.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const D=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",D,E),u.value!==null&&u.value.removeEventListener("blur",D,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",D,E),u.value.addEventListener("blur",D,E)}}s(i)}}function C(i){u.value!==null&&(a("keydown",i),N(i,[13,32])===!0&&T!==u.value&&(T!==null&&A(),i.defaultPrevented!==!0&&(u.value.focus(),T=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,E)),P(i)))}function R(i){u.value!==null&&(a("touchstart",i),i.defaultPrevented!==!0&&(O!==u.value&&(O!==null&&A(),O=u.value,b=i.target,b.addEventListener("touchcancel",w,E),b.addEventListener("touchend",w,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function K(i){u.value!==null&&(i.qSkipRipple=p===!0,a("mousedown",i),i.defaultPrevented!==!0&&j!==u.value&&(j!==null&&A(),j=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(i){if(u.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===u.value)){if(i!==void 0&&i.type==="keyup"){if(T===u.value&&N(i,[13,32])===!0){const g=new MouseEvent("click",i);g.qKeyEvent=!0,i.defaultPrevented===!0&&ye(g),i.cancelBubble===!0&&re(g),u.value.dispatchEvent(g),P(i),i.qKeyEvent=!0}a("keyup",i)}A()}}function A(i){const g=k.value;i!==!0&&(O===u.value||j===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),O===u.value&&(b!==null&&(b.removeEventListener("touchcancel",w,E),b.removeEventListener("touchend",w,E)),O=b=null),j===u.value&&(document.removeEventListener("mouseup",w,E),j=null),T===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,E),T=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function M(i){P(i),i.qSkipRipple=!0}return ge(()=>{A(!0)}),Object.assign(n,{click:S}),()=>{let i=[];e.icon!==void 0&&i.push(v(J,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(J,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},i)),e.loading!==null&&g.push(v(be,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(_e)])]:null)),he(v(h.value,$.value,g),[[je,_.value,void 0,L.value]])}}});export{tt as Q,J as a,_e as b,V as c,Pe as d,et as e,pe as f,Ge as g,xe as h,ue as i,z as j,ie as u,Ze as v};