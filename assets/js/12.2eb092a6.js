(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{255:function(e,t,o){"use strict";t.a={props:{includeLevel:{type:Array,required:!1,default:()=>[2,3]}},data:()=>({newTreeArray:[]}),watch:{$lang(){console.log("table改变",this),this.newTreeArray=this.getHeaders()}},mounted(){this.newTreeArray=this.getHeaders()},methods:{getHeaders(){if(this.$page&&this.$page.headers){const e=this.includeLevel[0],t=this.includeLevel[1],o=(n,i=e)=>{const l=[];for(let e=0;e!==n.length;){const r=n.slice(e+1).findIndex(e=>e.level===i),s=-1===r?n.length:r+e+1,a=n[e];if(a.level>=i&&a.level<=t){const r=n.slice(e+1,s),d=i<t&&r.length>0?o(r,i+1):null;l.push({...a,children:d})}e=s}return l};return o(this.$page.headers)}return null}}}},256:function(e,t,o){},286:function(e,t,o){e.exports&&(e.exports=function(e){"use strict";function t(e){w||(w=e);var n=e-w,i=function(e,t,o,n){return 1>(e/=n/2)?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}(n,m,p-m,u);window.scrollTo(0,i),u>n?c=requestAnimationFrame(t):(o(),r&&(r.pause(),r.currentTime=0),s&&s.play(),a&&a())}function o(){w=null,m=null,g=!1}function n(){f&&(p=function(e){for(var t=0;e;)t+=e.offsetTop||0,e=e.offsetParent;return v&&(t-=v),t}(f))}function i(){g&&(cancelAnimationFrame(c),o(),r&&(r.pause(),r.currentTime=0),n(),window.scrollTo(0,p))}var l,r,s,a,d=null,c=null,u=null,h=!1,w=null,m=null,p=0,f=null,v=null,g=!1,A=this;this.elevate=function(){g||(g=!0,m=document.documentElement.scrollTop||d.scrollTop,n(),h||(u=1.5*Math.abs(p-m)),requestAnimationFrame(t),r&&r.play(),l&&l())},function(e){d=document.body,(e=function(e,t){for(var o in t){void 0===e[o]&&"function"!=typeof o&&(e[o]=t[o])}return e}(e,{duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null})).element&&function(e){e.addEventListener?e.addEventListener("click",A.elevate,!1):e.attachEvent("onclick",(function(){n(),document.documentElement.scrollTop=p,document.body.scrollTop=p,window.scroll(0,p)}))}(e.element),window.requestAnimationFrame&&window.Audio&&window.addEventListener&&(e.duration&&(h=!0,u=e.duration),e.targetElement&&(f=e.targetElement),e.verticalPadding&&(v=e.verticalPadding),window.addEventListener("blur",i,!1),e.mainAudio&&((r=new Audio(e.mainAudio)).setAttribute("preload",e.preloadAudio),r.setAttribute("loop",e.loopAudio)),e.endAudio&&(s=new Audio(e.endAudio)).setAttribute("preload","true"),e.endCallback&&(a=e.endCallback),e.startCallback&&(l=e.startCallback))}(e)})},287:function(e,t,o){"use strict";var n=o(256);o.n(n).a},342:function(e,t,o){"use strict";o.r(t);var n=o(255),i=o(286),l=o.n(i),r={name:"VueElevator",mixins:[n.a],data:()=>({show:!1,fire:!1,directoryNum:1,directoryNumTotal:1,directoryArr:{},tempTitle:"h3 Heading",oldScrollTop:0,scrollTop:0,isScroll:!1,showScrollNumPlugin:!1}),computed:{elevatorConfig(){return this.$themeConfig.elevator}},watch:{$route(){console.log("返回顶部router改变了",this.$route.hash),this.tempTitle=this.$route.hash,console.log("this.tempTitle",this.tempTitle),this.getName(this.newTreeArray)},scrollTop(e,t){setTimeout(()=>{e==window.scrollY&&(console.log("滚动结束"),this.oldScrollTop=e,this.isScroll=!1)},500),this.oldScrollTop==t&&(console.log("滚动开始"),this.isScroll=!0)}},mounted(){this.elevator(),this.handleScrollEffectBackToTop(),console.log("我是返回顶部",this),this.isPost()&&(console.log("初始化返回顶部"),this.handleWindowWidth(),this.scrollNumPlugin=!0,this.newTreeArray=this.headers(),this.directoryNumTotal=this.newTreeArray.length,console.log("newTreeArray",this.newTreeArray))},beforeDestroy(){window.removeEventListener("scroll",this.setPanel),window.removeEventListener("resize",this.getWindowWidth),console.log("销毁返回顶部")},methods:{getWindowWidth(){window.innerWidth<1366?this.showScrollNumPlugin=!0:this.showScrollNumPlugin=!1,console.log("window.innerWidth",window.innerWidth)},handleWindowWidth(){console.log("返回顶部监听开始"),this.getWindowWidth(),window.addEventListener("resize",this.getWindowWidth)},isPost(){return"post"==this.$page.frontmatter.view},getName(e,t=""){for(var o in e){let n=t+`${parseInt(o)+1}`;this.tempTitle=="#"+e[o].slug?(console.log("遍历树找到了",e[o].title,n),this.directoryNum=n):n+=".",e[o].children&&this.getName(e[o].children,n)}},headers(){if(this.$page&&this.$page.headers){const e=this.includeLevel[0],t=this.includeLevel[1],o=(n,i=e)=>{const l=[];for(let e=0;e!==n.length;){const r=n.slice(e+1).findIndex(e=>e.level===i),s=-1===r?n.length:r+e+1,a=n[e];if(a.level>=i&&a.level<=t){const r=n.slice(e+1,s),d=i<t&&r.length>0?o(r,i+1):null;l.push({...a,children:d})}e=s}return l};return o(this.$page.headers)}return null},fired(){this.fire=!0},elevator(){const e={element:this.$refs.arrowTop,duration:this.elevatorConfig.duration,mainAudio:this.elevatorConfig.mainAudio,endAudio:this.elevatorConfig.endAudio,preloadAudio:this.elevatorConfig.preloadAudio,loopAudio:this.elevatorConfig.loopAudio};setTimeout(()=>{new l.a(e)},5e3)},handleScrollEffectBackToTop(){this.setPanel(),window.addEventListener("scroll",this.setPanel)},setPanel(){this.isPost()&&this.showScrollNumPlugin&&(this.scrollTop=window.scrollY),window.requestAnimationFrame(()=>{const e=document.documentElement.clientHeight;this.show=window.scrollY>e,0===window.scrollY&&(this.fire=!1,this.show=!1)})}}},s=(o(287),o(0)),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"elevator"},[o("a",{ref:"arrowTop",staticClass:"elevator__link",class:{"elevator__link--show":e.show,"elevator__link--fire":e.fire},on:{click:e.fired}},[e.isScroll?e._e():o("span",{staticClass:"icon elevator__icon icon-greaterthan"}),e._v(" "),e.isScroll?o("div",{staticClass:"icon table-contents-num"},[o("span",{staticClass:"table-contents-num-top"},[e._v(e._s(e.directoryNum))]),e._v(" "),o("span",{staticClass:"table-contents-num-bottom"},[e._v(e._s(e.directoryNumTotal))])]):e._e()])])}),[],!1,null,null,null);t.default=a.exports}}]);