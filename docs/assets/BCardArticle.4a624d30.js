import{B as d}from"./BTag.a4df401c.js";import{B as g}from"./BSignature.1910fb55.js";import{_ as m,b as c,o as a,c as r,a as t,F as u,V as f,f as i,X as n,Y as v,d as h,n as x,W as B,g as S}from"./index.fcade5f2.js";const T={name:"BCardArticle",components:{BTag:d,BSignature:g},props:{cls:String,title:String,image:String,imageUrl:String,tags:Array,avatar:String,avatarUrl:String,avatarText:String,date:String,text:String,moreUrl:String,moreText:{type:String,default:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435..."},reverse:Boolean},setup(){return{}}},y=["href"],C=["src"],U={class:"card-ar__content"},b={class:"card-ar__tags"},k=["innerHTML"],V={class:"card-ar__text"},A=["href"];function N(L,F,e,H,M,w){const _=c("b-tag"),l=c("b-signature");return a(),r("div",{class:x(["card-ar",e.cls,{"card-ar_reverse":e.reverse}])},[t("a",{class:"card-ar__image",href:e.imageUrl},[t("img",{src:e.image,alt:""},null,8,C)],8,y),t("div",U,[t("div",b,[(a(!0),r(u,null,f(e.tags,(s,o)=>(a(),B(_,{key:o,href:s.href,cls:"tag_fade tag_small"},{default:S(()=>[i(n(s.name),1)]),_:2},1032,["href"]))),128))]),t("h3",{class:"card-ar__title",innerHTML:e.title},null,8,k),t("div",V,[i(n(e.text)+" ",1),e.moreUrl?(a(),r("a",{key:0,href:e.moreUrl},n(e.moreText),9,A)):v("",!0)]),h(l,{cls:"card-ar__s-bottom",url:e.avatarUrl,img:e.avatar,text:e.avatarText,date:e.date},null,8,["url","img","text","date"])])],2)}var W=m(T,[["render",N]]);export{W as B};