import{B as D,a as C}from"./BShare.a8fdaa21.js";import{B as x}from"./BCardArticle.4a624d30.js";import{B as S}from"./BBreadcrumbs.f7e8cc0f.js";import{B as T}from"./BSignature.1910fb55.js";import{B as $}from"./BContent.e43eefaa.js";import{B as V}from"./BNaviButtons.0a82182d.js";import{_ as y,r as M,b as s,o as n,c as o,a as e,F as g,V as v,d as u,n as f,$ as P,Z as E,j as F,g as p,W as q,f as j,X as w}from"./index.fcade5f2.js";import{B as G}from"./BVideo.85483143.js";import{B as H}from"./BTag.a4df401c.js";import"./BTitle.f2aa7fb9.js";const Z={name:"BGallery",components:{BNaviButtons:V},props:{cls:String,images:Array},setup(t){const i=M(0),r=(d=1)=>{i.value+=d,i.value<0?i.value=t.images.length-1:i.value>=t.images.length&&(i.value=0)};return{naviHandler:d=>{d.target.className.includes("prev")?r(-1):r()},active:i,move:r}}},z=["src"],I={class:"gallery__thumbs"},K=["onClick"];function W(t,i,r,m,d,B){const _=s("b-navi-buttons");return n(),o("div",{class:f(["gallery",r.cls])},[e("div",{class:"gallery__frame",onClick:i[0]||(i[0]=c=>m.move(1))},[(n(!0),o(g,null,v(r.images,(c,l)=>(n(),o("div",{class:f(["gallery__image",{active:l==m.active}]),key:l},[e("img",{src:c,alt:""},null,8,z)],2))),128))]),e("div",I,[(n(!0),o(g,null,v(r.images,(c,l)=>(n(),o("span",{class:f(["gallery__thumb",{active:l==m.active}]),style:P(`background-image: url('${c}')`),key:l,onClick:h=>m.active=l},null,14,K))),128))]),u(_,{cls:"gallery__navi",onClickNavi:m.naviHandler},null,8,["onClickNavi"])],2)}var X=y(Z,[["render",W]]);const J=E({articles:{title:{name:"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u043E \u0442\u0435\u043C\u0435",link:"./"},cards:[{title:"\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0432 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",image:"src/assets/images/teaser-image-1.jpg",imageUrl:"./",avatar:"src/assets/images/avatar-default.png",avatarUrl:"./",avatarText:"\u0410\u0432\u0442\u043E\u0440 \u0441\u0435\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",date:"2 \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434",tags:[{name:"\u041A\u0435\u0439\u0441",href:"./"}],moreUrl:"./"},{title:"\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0432 \u0434\u0432\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",image:"src/assets/images/teaser-image-2.jpg",imageUrl:"./",avatar:"src/assets/images/avatar-default.png",avatarUrl:"./",avatarText:"\u0410\u0432\u0442\u043E\u0440 \u0441\u0435\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",date:"2 \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434",tags:[{name:"\u0421\u0442\u0430\u0442\u044C\u044F",href:"./"}],moreUrl:"./"}]},tags:[{title:"\u041E\u043D\u043B\u0430\u0439\u043D",href:"./"},{title:"IT \u041F\u0440\u043E\u0435\u043A\u0442\u044B",href:"./"},{title:"\u041C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442",href:"./"}],share:["./","./"],avatar:{img:"src/assets/images/avatar-default.png",url:"./",text:"\u0410\u0432\u0442\u043E\u0440 \u0441\u0435\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430",date:"2 \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434"},gallery:["src/assets/images/intro-image-3.png","src/assets/images/intro-image-1.png","src/assets/images/intro-image-2.png","src/assets/images/intro-image-4.png","src/assets/images/intro-image-1.png","src/assets/images/intro-image-2.png","src/assets/images/intro-image-3.png","src/assets/images/intro-image-4.png","src/assets/images/intro-image-3.png","src/assets/images/intro-image-4.png"]}),O=F({name:"ArticlePage",components:{BBreadcrumbs:S,BSectionArticles:D,BCardArticle:x,BSignature:T,BContent:$,BGallery:X,BVideo:G,BShare:C,BTag:H},setup(){return{incomingData:J}}}),Q=e("a",{href:"./"},"\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",-1),R=e("a",{href:"/#/blog"},"\u0411\u043B\u043E\u0433",-1),Y=e("span",null,"\u0421\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u041C\u0435\u0442\u0430\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u0439? \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442",-1),ee={class:"content__tags"},te=e("h1",{class:"content__title"},"\u0421\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u041C\u0435\u0442\u0430\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u0439? \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442",-1),ae=e("p",{class:"content__large"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",-1),ie=e("div",{class:"content__image"},[e("img",{src:"src/assets/images/content-image-1.png",alt:""})],-1),se=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Ultrices dui sapien eget mi proin sed. Cras fermentum odio eu feugiat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sem viverra aliquet eget sit amet. Mi ipsum faucibus vitae aliquet. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Aenean vel elit scelerisque mauris pellentesque pulvinar. Est ultricies integer quis auctor elit sed vulputate mi sit. Nisl pretium fusce id velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Neque egestas congue quisque egestas diam in arcu cursus. Mattis pellentesque id nibh tortor id aliquet lectus. Felis bibendum ut tristique et egestas quis ipsum.",-1),ne=e("p",null,"Nulla at volutpat diam ut venenatis. Neque sodales ut etiam sit amet nisl purus. Auctor augue mauris augue neque gravida. Maecenas pharetra convallis posuere morbi leo urna molestie. Sit amet aliquam id diam maecenas ultricies mi. Pretium quam vulputate dignissim suspendisse in est ante. Dictum varius duis at consectetur lorem donec. In cursus turpis massa tincidunt dui ut ornare. Sed augue lacus viverra vitae congue eu consequat. Parturient montes nascetur ridiculus mus. Nibh sed pulvinar proin gravida hendrerit. Blandit cursus risus at ultrices. Feugiat pretium nibh ipsum consequat nisl vel pretium. Ultricies leo integer malesuada nunc vel risus commodo viverra. Erat nam at lectus urna duis. Vestibulum sed arcu non odio.",-1),re=e("h2",null,"Lorem ipsum dolor sit amet",-1),le=e("ul",null,[e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat"),e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat"),e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat"),e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat")],-1),ue=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Ultrices dui sapien eget mi proin sed. Cras fermentum odio eu feugiat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sem viverra aliquet eget sit amet. Mi ipsum faucibus vitae aliquet. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Aenean vel elit scelerisque mauris pellentesque pulvinar. Est ultricies integer quis auctor elit sed vulputate mi sit. Nisl pretium fusce id velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Neque egestas congue quisque egestas diam in arcu cursus. Mattis pellentesque id nibh tortor id aliquet lectus. Felis bibendum ut tristique et egestas quis ipsum.",-1),oe=e("h2",null,"Lorem ipsum dolor sit amet",-1),me=e("ul",null,[e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat"),e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat"),e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat"),e("li",null,"2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat")],-1);function ce(t,i,r,m,d,B){const _=s("b-breadcrumbs"),c=s("b-tag"),l=s("b-signature"),h=s("b-share"),U=s("b-video"),k=s("b-gallery"),A=s("b-content"),L=s("b-card-article"),N=s("b-section-articles");return n(),o(g,null,[u(_,null,{default:p(()=>[Q,R,Y]),_:1}),u(A,null,{default:p(()=>[e("div",ee,[(n(!0),o(g,null,v(t.incomingData.tags,(a,b)=>(n(),q(c,{key:b,href:a.href,cls:"tag_fade tag_mid"},{default:p(()=>[j(w(a.title),1)]),_:2},1032,["href"]))),128))]),u(l,{cls:"content__signature",img:t.incomingData.avatar.img,url:t.incomingData.avatar.url,text:t.incomingData.avatar.text,date:t.incomingData.avatar.date,large:""},null,8,["img","url","text","date"]),u(h,{cls:"content__share",links:t.incomingData.share},null,8,["links"]),te,ae,ie,se,ne,re,le,u(U,{cls:"content__video",url:"https://www.youtube.com/embed/11cuatZm8K8?autoplay=1",background:"https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg"}),ue,u(k,{cls:"content__gallery",images:t.incomingData.gallery},null,8,["images"]),oe,me]),_:1}),u(N,{title:t.incomingData.articles.title.name,title_link_url:t.incomingData.articles.title.link},{cards:p(()=>[(n(!0),o(g,null,v(t.incomingData.articles.cards,(a,b)=>(n(),q(L,{key:b,tags:a.tags,text:a.text,title:a.title,image:a.image,imageUrl:a.imageUrl,avatarUrl:a.avatarUrl,avatarText:a.avatarText,moreUrl:a.moreUrl,avatar:a.avatar,date:a.date},null,8,["tags","text","title","image","imageUrl","avatarUrl","avatarText","moreUrl","avatar","date"]))),128))]),_:1},8,["title","title_link_url"])],64)}var Be=y(O,[["render",ce]]);export{Be as default};