(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{675:function(t,e,i){"use strict";e.a={props:{includeLevel:{type:Array,required:!1,default:()=>[2,3]}},data:()=>({newTreeArray:[]}),watch:{$lang(){this.newTreeArray=this.getHeaders()}},mounted(){this.newTreeArray=this.getHeaders()},methods:{getHeaders(){if(this.$page&&this.$page.headers){const t=this.includeLevel[0],e=this.includeLevel[1],i=(s,o=t)=>{const a=[];for(let t=0;t!==s.length;){const n=s.slice(t+1).findIndex(t=>t.level===o),l=-1===n?s.length:n+t+1,r=s[t];if(r.level>=o&&r.level<=e){const n=s.slice(t+1,l),c=o<e&&n.length>0?i(n,o+1):null;a.push({...r,children:c})}t=l}return a};return i(this.$page.headers)}return null}}}},676:function(t,e,i){},710:function(t,e,i){t.exports&&(t.exports=function(t){"use strict";var e,i,s,o,a=null,n=null,l=null,r=!1,c=null,u=null,d=0,h=null,m=null,v=!1,p=this;function w(t){c||(c=t);var e,a,r,h=t-c,m=(e=h,a=u,r=d-u,(e/=l/2)<1?r/2*e*e+a:-r/2*(--e*(e-2)-1)+a);window.scrollTo(0,m),h<l?n=requestAnimationFrame(w):function(){g(),i&&(i.pause(),i.currentTime=0);s&&s.play();o&&o()}()}function g(){c=null,u=null,v=!1}function f(){h&&(d=function(t){for(var e=0;t;)e+=t.offsetTop||0,t=t.offsetParent;return m&&(e-=m),e}(h))}function b(){v&&(cancelAnimationFrame(n),g(),i&&(i.pause(),i.currentTime=0),f(),window.scrollTo(0,d))}return this.elevate=function(){v||(v=!0,u=document.documentElement.scrollTop||a.scrollTop,f(),r||(l=1.5*Math.abs(d-u)),requestAnimationFrame(w),i&&i.play(),e&&e())},function(t){if(window.requestAnimationFrame&&window.Audio&&window.addEventListener)a=document.body,(t=function(t,e){for(var i in e){void 0===t[i]&&"function"!=typeof i&&(t[i]=e[i])}return t}(t,{duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null})).duration&&(r=!0,l=t.duration),t.targetElement&&(h=t.targetElement),t.verticalPadding&&(m=t.verticalPadding),window.addEventListener("blur",b,!1),t.mainAudio&&((i=new Audio(t.mainAudio)).setAttribute("preload",t.preloadAudio),i.setAttribute("loop",t.loopAudio)),t.endAudio&&(s=new Audio(t.endAudio)).setAttribute("preload","true"),t.endCallback&&(o=t.endCallback),t.startCallback&&(e=t.startCallback),p.elevate}(t),p.elevate})},711:function(t,e,i){"use strict";var s=i(676);i.n(s).a},771:function(t,e,i){"use strict";i.r(e);var s=i(675),o=i(147),a=i(5);const n=i(710);var l={name:"VueElevator",mixins:[s.a,o.a],data:()=>({show:!1,fire:!1,directoryNum:1,directoryNumTotal:1,directoryArr:{},tempTitle:"h3 Heading",oldScrollTop:0,scrollTop:0,isScroll:!1,showScrollNumPlugin:!1,time:0,timeOutEvent:0,timeOutEventMouse:0,musicData:{},maskOpen:!1,curPlayStatus:"paused",curIndex:0,isPostMusic:!1,showMusicTop:!1}),computed:{elevatorConfig(){return this.$themeConfig.elevator},audio(){return this.$frontmatter.audios}},watch:{$route(){this.newTreeArray&&(this.tempTitle=this.$route.hash,this.getName(this.newTreeArray))},scrollTop(t,e){setTimeout(()=>{t==window.scrollY&&(this.oldScrollTop=t,this.isScroll=!1)},500),this.oldScrollTop==e&&(this.isScroll=!0)},showScrollNumPlugin(t,e){this.isActivityFixedMessage(),a.a.$emit("activeBgMusicMini",t)},musicData(){this.yuanhuan()}},created(){},mounted(){this.elevator(),this.handleScrollEffectBackToTop(),this.isPost()&&this.newTreeArray&&(this.handleWindowWidth(),this.scrollNumPlugin=!0,this.directoryNumTotal=this.newTreeArray.length),a.a.$on("MusicData",t=>{this.musicData=t}),a.a.$on("musicCurPlayStatus",t=>{this.curPlayStatus=t}),this.isPostMusic&&(this.musicData={cover:this.audio[this.curIndex].cover,name:this.audio[this.curIndex].name,artist:this.audio[this.curIndex].artist,jindu:0},this.yuanhuan())},beforeDestroy(){window.removeEventListener("scroll",this.setPanel),window.removeEventListener("resize",this.getWindowWidth)},methods:{playLast(){a.a.$emit("musicPlayLast")},pauseBgm(){a.a.$emit("musicPauseBgm")},playBgm(){a.a.$emit("musicPlayBgm")},playNext(){a.a.$emit("musicPlayNext")},closeMask(){this.maskOpen=!1},yuanhuan(){if(this.showMusicTop&&this.isPostMusic){var t=document.querySelector(".circle-detail"),e=document.querySelector(".circle-detail-min"),i=(document.querySelector(".percent-min"),Math.floor(2*Math.PI*55));function s(t,e){var s=parseFloat(e).toFixed(0);s=Math.max(0,s),s=Math.min(100,s),t.setAttribute("stroke-dasharray",i*s/100+",10000")}s(t,this.musicData.jindu),s(e,this.musicData.jindu)}},goMouseStart(){if(this.showMusicTop){let t=this;clearTimeout(this.timeOutEventMouse),this.timeOutEventMouse=0,this.timeOutEventMouse=setTimeout((function(){t.maskOpen=!!t.isPostMusic}),700)}else this.backTop()},goMouseEnd(){this.showMusicTop&&(clearTimeout(this.timeOutEventMouse),0!=this.timeOutEventMouse&&this.backTop())},gotouchstart(){let t=this;clearTimeout(this.timeOutEvent),this.timeOutEvent=0,this.timeOutEvent=setTimeout((function(){t.maskOpen=!!t.isPostMusic}),700)},gotouchend(){clearTimeout(this.timeOutEvent),this.timeOutEvent},gotouchmove(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},close(){this.showDialog=!1},closeT(){this.showDialogT=!1},isActivityFixedMessage(){a.a.$emit("isActivityFixed",this.showScrollNumPlugin)},getWindowWidth(){window.innerWidth<1366?this.showScrollNumPlugin=!0:this.showScrollNumPlugin=!1,this.getWidth768()},getWidth768(){window.innerWidth<768?this.showMusicTop=!0:this.showMusicTop=!1},handleWindowWidth(){this.getWindowWidth(),window.addEventListener("resize",this.getWindowWidth)},isPost(){return"post"==this.$page.frontmatter.view},getName(t,e=""){for(var i in t){let s=e+`${parseInt(i)+1}`;this.tempTitle=="#"+t[i].slug?this.directoryNum=s:s+=".",t[i].children&&this.getName(t[i].children,s)}},fired(){this.fire=!0},elevator(){let t=this;const e={element:this.$refs.arrowTop,duration:this.elevatorConfig.duration,mainAudio:this.elevatorConfig.mainAudio,endAudio:this.elevatorConfig.endAudio,preloadAudio:this.elevatorConfig.preloadAudio,loopAudio:this.elevatorConfig.loopAudio};setTimeout(()=>{t.backTop=new n(e)},5e3)},handleScrollEffectBackToTop(){this.setPanel(),window.addEventListener("scroll",this.setPanel)},setPanel(){this.isPost()&&this.showScrollNumPlugin&&(this.scrollTop=window.scrollY),window.requestAnimationFrame(()=>{const t=document.documentElement.clientHeight;this.show=window.scrollY>t,0===window.scrollY&&(this.fire=!1,this.show=!1)})}}},r=(i(711),i(1)),c=Object(r.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"elevator"},[t.showMusicTop&&t.isPostMusic?t._e():i("a",{ref:"arrowTop",staticClass:"elevator__link",class:{"elevator__link--show":t.show,"elevator__link--fire":t.fire},on:{mousedown:t.goMouseStart,mouseup:t.goMouseEnd,touchstart:t.gotouchstart,touchmove:t.gotouchmove,touchend:t.gotouchend}},[t.isScroll?t._e():i("span",{staticClass:"icon elevator__icon icon-greaterthan"}),t._v(" "),t.isScroll?i("div",{staticClass:"icon table-contents-num"},[i("span",{staticClass:"table-contents-num-top"},[t._v(t._s(t.directoryNum))]),t._v(" "),i("span",{staticClass:"table-contents-num-bottom"},[t._v(t._s(t.directoryNumTotal))])]):t._e()]),t._v(" "),t.showMusicTop&&t.isPostMusic?i("div",{ref:"arrowTop",staticClass:"circle-wrapper-min reco-float-box-min",class:{"elevator__link--show":t.show,"elevator__link--fire":t.fire},on:{mousedown:t.goMouseStart,mouseup:t.goMouseEnd,touchstart:t.gotouchstart,touchmove:t.gotouchmove,touchend:t.gotouchend}},[i("svg",{attrs:{xmlns:"http://www.w3.org/200/svg",height:"100%",width:"100%"}},[i("circle",{staticClass:"circle-full-min",attrs:{cx:"25",cy:"25",r:"23",fill:"none",stroke:"#FF4437","stroke-width":"4","stroke-linecap":"round"}}),t._v(" "),i("circle",{staticClass:"circle-detail-min",attrs:{cx:"25",cy:"25",r:"23",fill:"none","stroke-width":"4","stroke-linecap":"round",stroke:"#FF4437","stroke-dasharray":"0,10000"}})]),t._v(" "),i("div",{staticClass:"mobile-bgm-img-min coupon-num-min had-percent-min"},[i("img",{attrs:{src:t.musicData.cover}}),t._v(" "),i("div",{staticClass:"mask-inner"}),t._v(" "),i("div",{staticClass:"mask-content"},[t.isScroll?t._e():i("span",{staticClass:"icon elevator__icon icon-greaterthan"}),t._v(" "),t.isScroll?i("div",{staticClass:"icon table-contents-num"},[i("span",{staticClass:"table-contents-num-top"},[t._v(t._s(t.directoryNum))]),t._v(" "),i("span",{staticClass:"table-contents-num-bottom"},[t._v(t._s(t.directoryNumTotal))])]):t._e()])])]):t._e()]),t._v(" "),i("div",{staticClass:"mask-container",class:{"mask-open":t.maskOpen}},[i("div",{staticClass:"mask-wrap"},[i("div",{staticClass:"circle-wrapper"},[i("svg",{attrs:{xmlns:"http://www.w3.org/200/svg",height:"100%",width:"100%"}},[i("circle",{staticClass:"circle-full",attrs:{cx:"66",cy:"66",r:"55",fill:"none",stroke:"#FF4437","stroke-width":"5","stroke-linecap":"round"}}),t._v(" "),i("circle",{staticClass:"circle-detail",attrs:{cx:"66",cy:"66",r:"55",fill:"none","stroke-width":"5","stroke-linecap":"round",stroke:"#FF4437","stroke-dasharray":"0,10000"}})]),t._v(" "),i("img",{staticClass:"mobile-bgm-img coupon-num had-percent",attrs:{src:t.musicData.cover}})]),t._v(" "),i("div",[t._v(t._s(t.musicData.name))]),t._v(" "),i("div",[t._v(t._s(t.musicData.artist))]),t._v(" "),i("div",{staticClass:"mobile-bgm-list"},[i("i",{staticClass:"reco-bgm reco-bgm-last last mobile-bgm-btn",on:{click:t.playLast}}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:"playing"===t.curPlayStatus,expression:"curPlayStatus === 'playing'"}],staticClass:"reco-bgm reco-bgm-pause pause mobile-bgm-btn",on:{click:t.pauseBgm}}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:"paused"===t.curPlayStatus,expression:"curPlayStatus === 'paused'"}],ref:"playMobile",staticClass:"reco-bgm reco-bgm-play play mobile-bgm-btn",on:{click:t.playBgm}}),t._v(" "),i("i",{staticClass:"reco-bgm reco-bgm-next next mobile-bgm-btn",on:{click:t.playNext}})]),t._v(" "),i("div",{staticClass:"mobile-bgm-close"},[i("i",{staticClass:"iconfont iconLogonClosed mobile-bgm-btn",on:{click:t.closeMask}})])])])])}),[],!1,null,null,null);e.default=c.exports}}]);