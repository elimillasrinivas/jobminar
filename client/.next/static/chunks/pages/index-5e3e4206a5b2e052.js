(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5229)}])},5677:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{noSSR:function(){return l},default:function(){return r}});let i=s(8754),n=(s(7294),i._(s(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function r(e,t){let s=n.default,i={loading:e=>{let{error:t,isLoading:s,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e}),i={...i,...t};let r=i.loader,o=()=>null!=r?r().then(a):Promise.resolve(a(()=>null));return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?s({...i,loader:o}):(delete i.webpack,delete i.modules,l(s,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let i=s(8754),n=i._(s(7294)),a=n.default.createContext(null)},8976:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let i=s(8754),n=i._(s(7294)),a=s(2254),l=[],r=[],o=!1;function c(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function l(){if(!i){let t=new d(e,s);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!o){let e=s.webpack?s.webpack():s.modules;e&&r.push(t=>{for(let s of e)if(t.includes(s))return l()})}function c(e,t){!function(){l();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}();let r=n.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),n.default.useMemo(()=>{var t;return r.loading||r.error?n.default.createElement(s.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?n.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return c.preload=()=>l(),c.displayName="LoadableComponent",n.default.forwardRef(c)}(c,e)}function h(e,t){let s=[];for(;e.length;){let i=e.pop();s.push(i(t))}return Promise.all(s).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(l).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let s=()=>(o=!0,t());h(r,e).then(s,s)})),window.__NEXT_PRELOADREADY=u.preloadReady;let m=u},2287:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var i=s(5893),n=JSON.parse('{"e":[{"value":"05","label":"Years","plus":true,"title":"Professional Experience"},{"value":"15","label":"People","plus":false,"title":"Employees in team"},{"value":"40","label":"clients","plus":true,"title":"All over India"}]}'),a=s(7857);let l=()=>(0,i.jsx)("section",{className:"gap no-top counter-style-one",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:n.e.map((e,t)=>(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,i.jsxs)("div",{className:t%2!=0?"counter-data upper-space":"counter-data",children:[(0,i.jsxs)("div",{className:"count",children:[(0,i.jsx)("span",{className:"counter",children:(0,i.jsx)(a.ZP,{end:e.value,duration:7,enableScrollSpy:!0,scrollSpyOnce:!0})}),!0==e.plus&&(0,i.jsx)(i.Fragment,{children:"+"}),(0,i.jsx)("i",{children:e.label})]}),(0,i.jsx)("h4",{children:e.title})]})},"counters-item-".concat(t)))})})});var r=l},5081:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var i=s(5893),n=JSON.parse('{"e":[{"icon":{"light":"/images/staffing-light.svg","dark":"/images/staffing-dark.svg","alt":"icon"},"title":"Staffing Solutions","text":"Explore premier staffing solutions. Find perfect talent for your needs.","link":"/services/service-1"},{"icon":{"light":"/images/digital-marketing.svg","dark":"/images/digital-marketing-dark.svg","alt":"icon"},"title":"Digital Marketing","text":"Effective digital strategies. Drive growth with us. Get started today!","link":"/services/service-2"},{"icon":{"light":"/images/web-development.svg","dark":"/images/web-development-dark.svg","alt":"icon"},"title":"Web Development","text":"Expert web solutions. Enhance your online presence. Connect with us!","link":"/services/service-3"},{"icon":{"light":"/images/events.svg","dark":"/images/events-dark.svg","alt":"icon"},"title":"Corporate Events","text":"Unforgettable events. Elevate your brand. Book now for success!","link":"/services/service-4"},{"icon":{"light":"/images/construction.svg","dark":"/images/construction-dark.svg","alt":"icon"},"title":"Construction","text":"Premier construction services. Build with confidence. Contact us","link":"/services/service-5"},{"icon":{"light":"/images/political.svg","dark":"/images/political-dark.svg","alt":"icon"},"title":"Political Digital Marketing","text":"Winning political campaigns. Connect with voters now. Join us","link":"/services/service-6"}]}'),a=s(1664),l=s.n(a);let r=()=>(0,i.jsx)("section",{className:"gap service-style-one",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:n.e.map((e,t)=>(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 text-center",children:(0,i.jsxs)("div",{className:"service-data",children:[(0,i.jsxs)("div",{className:"svg-icon d-flex-all",children:[(0,i.jsx)("img",{className:"light-icon",src:e.icon.light,alt:e.icon.alt}),(0,i.jsx)("img",{className:"dark-icon",src:e.icon.dark,alt:e.icon.alt})]}),(0,i.jsx)("h3",{children:(0,i.jsx)(l(),{href:e.link,children:e.title})}),(0,i.jsx)("p",{children:e.text}),(0,i.jsx)(l(),{href:e.link,className:"icon",children:(0,i.jsx)("i",{className:"fa-solid fa-angles-right"})})]})},"services-item-".concat(t)))})})});var o=r},3265:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var i=s(5893),n=s(8420),a=s(4900);function l(e){let{dateString:t}=e,s=(0,n.Z)(t);return(0,i.jsx)("time",{dateTime:t,children:(0,a.Z)(s,"LLLL d, yyyy")})}},5229:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return E},default:function(){return C}});var i=s(5893),n=s(7294),a=s(4261),l=s(5152),r=s.n(l),o=JSON.parse('{"wp":{"H":"/img/about-one.jpeg","w":"Image One"},"Lx":{"H":"/img/about-two.jpeg","w":"Image One"},"TN":"One Stop Solutions Provider.","Oc":"Welcome to Jobminar","fL":"We offer top-notch staffing solutions, web development, construction, corporate events, digital marketing, and political digital marketing services. Our expert team handles tasks of all complexities, ensuring quality finishes and repairs in every project. Building and growing with excellence is our passion! Explore our comprehensive range of services today.","u2":"Shanmukh Thallam","rH":"Director of Jobminar"}');let c=()=>(0,i.jsx)("section",{className:"gap no-top about-style-one",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"about-data-left",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:o.wp.H,alt:o.wp.w})}),(0,i.jsx)("figure",{className:"about-image",children:(0,i.jsx)("img",{src:o.Lx.H,alt:o.Lx.w})})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"about-data-right",children:[(0,i.jsx)("span",{children:o.Oc}),(0,i.jsx)("h2",{children:o.TN}),(0,i.jsxs)("div",{className:"about-info",children:[(0,i.jsx)("p",{children:o.fL}),(0,i.jsx)("h3",{children:o.u2}),(0,i.jsx)("h4",{children:o.rH})]})]})})]})})});var d=s(5081),u=s(2287),h=JSON.parse('{"Oc":"Core Features","TN":"What Makes Us Differnt","lX":"uemObN8_dcw","BH":{"H":"/img/core-feature.jpeg","w":"image"},"ev":[{"num":"01.","title":"Early Involvement","text":"Our distinguishing factor lies in our unparalleled expertise and early involvement approach. At Jobminar Consultants Pvt Ltd, we believe that engaging with us from the start empowers us to comprehensively define project scopes and optimize systems. This proactive stance mitigates uncertainties, leading to remarkable project success."},{"num":"02.","title":"Project Excellence","text":"Early engagement is the cornerstone of our success at Jobminar Consultants Pvt Ltd. By involving us from the outset, we delve deep into understanding project requirements, ensuring comprehensive scope definition and systems optimization. This strategic approach reduces project uncertainties and sets the stage for optimal outcomes."},{"num":"03.","title":"Early Collaboration","text":"What sets us apart is our willingness to embrace challenges through early collaboration. At Jobminar Consultants Pvt Ltd, we analyze potential hurdles, define precise project scopes, and optimize systems when brought on board early. This hands-on approach reduces risks, leading to efficient project execution."},{"num":"04.","title":"Building Success","text":"Building success starts with early partnership at Jobminar Consultants Pvt Ltd. Our team thrives on delivering excellence through comprehensive scope definition and systems optimization. By partnering with us at the outset, you ensure a strong foundation for your project\'s success."}]}'),m=s(4076),p=s(1239);s(6207);let f=()=>{let[e,t]=(0,n.useState)(!1);return(0,i.jsxs)("section",{className:"core-features",style:{marginTop:"7rem"},children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"space",children:[(0,i.jsx)("div",{className:"heading-style-2",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"data",children:[(0,i.jsx)("span",{children:h.Oc}),(0,i.jsx)("h2",{children:h.TN})]})})})})}),(0,i.jsx)(m.Z,{defaultActiveKey:"features-acc-0",children:h.ev.map((e,t)=>(0,i.jsxs)(m.Z.Item,{eventKey:"features-acc-".concat(t),children:[(0,i.jsxs)(m.Z.Header,{children:[(0,i.jsx)("span",{className:"num",children:e.num})," ",e.title]}),(0,i.jsx)(m.Z.Body,{children:(0,i.jsx)("p",{children:e.text})})]},"features-item-".concat(t)))})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"shape",children:(0,i.jsxs)("div",{className:"video",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:h.BH.H,alt:h.BH.w})}),(0,i.jsx)("a",{className:"video-play-btn",onClick:()=>t(!0),style:{cursor:"pointer"},children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"35",height:"56",viewBox:"0 0 35 56",children:[" ",(0,i.jsxs)("defs",{children:[" ",(0,i.jsxs)("clipPath",{id:"clip-video_arrow",children:[" ",(0,i.jsx)("rect",{width:"35",height:"56"})," "]})," "]})," ",(0,i.jsxs)("g",{id:"video_arrow","data-name":"video arrow",clipPath:"url(#clip-video_arrow)",children:[" ",(0,i.jsx)("path",{id:"Shape_1","data-name":"Shape 1",d:"M1362,5000.8,1327,4972V5027Z",transform:"translate(-1326.998 -4971.996)",fill:"rgba(0,0,0,0)"})," ",(0,i.jsx)("path",{id:"Shape_1_-_Outline","data-name":"Shape 1 - Outline",d:"M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z",transform:"translate(-1326.998 -4971.996)"})," "]})," "]})})]})})})]})}),(0,i.jsx)(p.Z,{channel:"youtube",isOpen:e,videoId:h.lX,onClose:()=>t(!1)})]})};var g=JSON.parse('{"Oc":"Let us Help Guide","TN":"Recent Articles","LI":{"P":"View All Posts","p":"/blog"},"jX":3}'),x=s(3265),v=s(1664),j=s.n(v);let y=e=>{let{posts:t}=e;return(0,i.jsxs)("section",{className:"gap no-top blog-style-one",children:[(0,i.jsxs)("div",{className:"heading",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:"/img/heading-icon.png",alt:"heading-icon"})}),(0,i.jsx)("span",{children:g.Oc}),(0,i.jsx)("h2",{children:g.TN})]}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"row",children:t.slice(0,g.jX).map((e,t)=>(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,i.jsxs)("div",{className:"blog-post",children:[(0,i.jsxs)("div",{className:"blog-image",children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.image,alt:e.title})}),(0,i.jsx)(j(),{href:"/blog/".concat(e.id),children:(0,i.jsx)("i",{className:"fa-solid fa-angles-right"})})]}),(0,i.jsxs)("div",{className:"blog-data",children:[(0,i.jsx)("span",{className:"blog-date",children:(0,i.jsx)(x.Z,{dateString:e.date})}),(0,i.jsx)("h2",{children:(0,i.jsx)(j(),{href:"/blog/".concat(e.id),children:e.title})}),(0,i.jsxs)("div",{className:"blog-author d-flex-all justify-content-start",children:[(0,i.jsx)("div",{className:"author-img",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.author.avatar,alt:e.author.name})})}),(0,i.jsx)("div",{className:"details",children:(0,i.jsxs)("h3",{children:[" ",(0,i.jsx)("span",{children:"by"})," ",e.author.name]})})]})]})]})},"latest-post-item-".concat(t)))}),(0,i.jsx)("div",{className:"common-btn",children:(0,i.jsxs)(j(),{href:g.LI.p,className:"theme-btn",children:[g.LI.P," ",(0,i.jsx)("i",{className:"fa-solid fa-angles-right"})]})})]})]})},b=r()(()=>Promise.all([s.e(949),s.e(0)]).then(s.bind(s,6723)),{loadableGenerated:{webpack:()=>[6723]},ssr:!1}),N=r()(()=>Promise.all([s.e(949),s.e(69)]).then(s.bind(s,9923)),{loadableGenerated:{webpack:()=>[9923]},ssr:!1}),w=r()(()=>Promise.all([s.e(949),s.e(416)]).then(s.bind(s,1563)),{loadableGenerated:{webpack:()=>[1563]},ssr:!1}),_=r()(()=>Promise.all([s.e(949),s.e(736)]).then(s.bind(s,7128)),{loadableGenerated:{webpack:()=>[7128]},ssr:!1}),k=e=>(0,i.jsx)(a.Z,{transparent:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(d.Z,{}),(0,i.jsx)(c,{}),(0,i.jsx)(u.Z,{}),(0,i.jsx)(_,{projects:e.projects}),(0,i.jsx)(f,{}),(0,i.jsx)(N,{}),(0,i.jsx)(w,{}),(0,i.jsx)(y,{posts:e.posts})]})});var E=!0,C=k},5152:function(e,t,s){e.exports=s(5677)},4076:function(e,t,s){"use strict";s.d(t,{Z:function(){return O}});var i=s(4184),n=s.n(i),a=s(7294),l=s(7150),r=s(6792),o=s(3640),c=s(9325),d=s(1404),u=function(...e){return e.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...s){e.apply(this,s),t.apply(this,s)}},null)},h=s(4509),m=s(2785),p=s(5893);let f={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function g(e,t){let s=`offset${e[0].toUpperCase()}${e.slice(1)}`,i=t[s],n=f[e];return i+parseInt((0,o.Z)(t,n[0]),10)+parseInt((0,o.Z)(t,n[1]),10)}let x={[c.Wj]:"collapse",[c.Ix]:"collapsing",[c.d0]:"collapsing",[c.cn]:"collapse show"},v=a.forwardRef(({onEnter:e,onEntering:t,onEntered:s,onExit:i,onExiting:l,className:r,children:o,dimension:c="height",in:f=!1,timeout:v=300,mountOnEnter:j=!1,unmountOnExit:y=!1,appear:b=!1,getDimensionValue:N=g,...w},_)=>{let k="function"==typeof c?c():c,E=(0,a.useMemo)(()=>u(e=>{e.style[k]="0"},e),[k,e]),C=(0,a.useMemo)(()=>u(e=>{let t=`scroll${k[0].toUpperCase()}${k.slice(1)}`;e.style[k]=`${e[t]}px`},t),[k,t]),O=(0,a.useMemo)(()=>u(e=>{e.style[k]=null},s),[k,s]),P=(0,a.useMemo)(()=>u(e=>{e.style[k]=`${N(k,e)}px`,(0,h.Z)(e)},i),[i,N,k]),S=(0,a.useMemo)(()=>u(e=>{e.style[k]=null},l),[k,l]);return(0,p.jsx)(m.Z,{ref:_,addEndListener:d.Z,...w,"aria-expanded":w.role?f:null,onEnter:E,onEntering:C,onEntered:O,onExit:P,onExiting:S,childRef:o.ref,in:f,timeout:v,mountOnEnter:j,unmountOnExit:y,appear:b,children:(e,t)=>a.cloneElement(o,{...t,className:n()(r,o.props.className,x[e],"width"===k&&"collapse-horizontal")})})});function j(e,t){return Array.isArray(e)?e.includes(t):e===t}let y=a.createContext({});y.displayName="AccordionContext";let b=a.forwardRef(({as:e="div",bsPrefix:t,className:s,children:i,eventKey:l,...o},c)=>{let{activeEventKey:d}=(0,a.useContext)(y);return t=(0,r.vE)(t,"accordion-collapse"),(0,p.jsx)(v,{ref:c,in:j(d,l),...o,className:n()(s,t),children:(0,p.jsx)(e,{children:a.Children.only(i)})})});b.displayName="AccordionCollapse";let N=a.createContext({eventKey:""});N.displayName="AccordionItemContext";let w=a.forwardRef(({as:e="div",bsPrefix:t,className:s,onEnter:i,onEntering:l,onEntered:o,onExit:c,onExiting:d,onExited:u,...h},m)=>{t=(0,r.vE)(t,"accordion-body");let{eventKey:f}=(0,a.useContext)(N);return(0,p.jsx)(b,{eventKey:f,onEnter:i,onEntering:l,onEntered:o,onExit:c,onExiting:d,onExited:u,children:(0,p.jsx)(e,{ref:m,...h,className:n()(s,t)})})});w.displayName="AccordionBody";let _=a.forwardRef(({as:e="button",bsPrefix:t,className:s,onClick:i,...l},o)=>{t=(0,r.vE)(t,"accordion-button");let{eventKey:c}=(0,a.useContext)(N),d=function(e,t){let{activeEventKey:s,onSelect:i,alwaysOpen:n}=(0,a.useContext)(y);return a=>{let l=e===s?null:e;n&&(l=Array.isArray(s)?s.includes(e)?s.filter(t=>t!==e):[...s,e]:[e]),null==i||i(l,a),null==t||t(a)}}(c,i),{activeEventKey:u}=(0,a.useContext)(y);return"button"===e&&(l.type="button"),(0,p.jsx)(e,{ref:o,onClick:d,...l,"aria-expanded":Array.isArray(u)?u.includes(c):c===u,className:n()(s,t,!j(u,c)&&"collapsed")})});_.displayName="AccordionButton";let k=a.forwardRef(({as:e="h2",bsPrefix:t,className:s,children:i,onClick:a,...l},o)=>(t=(0,r.vE)(t,"accordion-header"),(0,p.jsx)(e,{ref:o,...l,className:n()(s,t),children:(0,p.jsx)(_,{onClick:a,children:i})})));k.displayName="AccordionHeader";let E=a.forwardRef(({as:e="div",bsPrefix:t,className:s,eventKey:i,...l},o)=>{t=(0,r.vE)(t,"accordion-item");let c=(0,a.useMemo)(()=>({eventKey:i}),[i]);return(0,p.jsx)(N.Provider,{value:c,children:(0,p.jsx)(e,{ref:o,...l,className:n()(s,t)})})});E.displayName="AccordionItem";let C=a.forwardRef((e,t)=>{let{as:s="div",activeKey:i,bsPrefix:o,className:c,onSelect:d,flush:u,alwaysOpen:h,...m}=(0,l.Ch)(e,{activeKey:"onSelect"}),f=(0,r.vE)(o,"accordion"),g=(0,a.useMemo)(()=>({activeEventKey:i,onSelect:d,alwaysOpen:h}),[i,d,h]);return(0,p.jsx)(y.Provider,{value:g,children:(0,p.jsx)(s,{ref:t,...m,className:n()(c,f,u&&`${f}-flush`)})})});C.displayName="Accordion";var O=Object.assign(C,{Button:_,Collapse:b,Item:E,Header:k,Body:w})}},function(e){e.O(0,[664,790,952,857,998,261,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);