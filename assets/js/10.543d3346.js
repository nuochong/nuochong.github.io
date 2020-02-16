(window.webpackJsonp=window.webpackJsonp||[]).push([[10,15],{635:function(t,s,e){},660:function(t,s,e){"use strict";var i=e(635);e.n(i).a},661:function(t,s,e){},672:function(t,s,e){"use strict";e.r(s);var i={name:"ModuleTransition",props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"}},methods:{setStyle(t){t.style.transition=`all ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateX(-20px)",t.style.opacity=0},unsetStyle(t){t.style.transform="translateX(0)",t.style.opacity=1}}},a=(e(660),e(0)),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"module"},on:{enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,"00f8157b",null);s.default=o.exports},699:function(t,s,e){"use strict";var i=e(661);e.n(i).a},727:function(t,s,e){"use strict";e.r(s);var i={data:()=>({volumeKey:"reco-bgm-volume"}),methods:{setVolume(t){sessionStorage.setItem(this.volumeKey,t)},getVolume(){return sessionStorage.getItem(this.volumeKey)},removeVolume(){sessionStorage.removeItem(this.volumeKey)}}},a=e(672);let o,r=0;var n={mixins:[i],components:{ModuleTransition:a.default},mounted(){"left"===this.floatPosition?this.floatStyle={...this.floatStyle,left:"0"}:this.floatStyle={...this.floatStyle,right:"0"}},data:()=>({panelPosition:POSITION,curIndex:0,curPlayStatus:"paused",audio:AUDIOS,autoplay:AUTOPLAY,isFloat:!1,isMini:!1,firstLoad:!0,isMute:!1,isFault:!1,floatPosition:FLOAT_POSITION,floatStyle:FLOAT_STYLE,shrinkMode:SHRINK_MODE,positionType:POSITION_TYPE}),watch:{curPlayStatus:function(t){"playing"===t?o=setInterval((function(){const t=document.querySelector(".reco-bgm-cover"),s=document.querySelector(".mini-operation"),e=document.querySelector(".falut-message");r+=1,t.style.transform="rotate("+r+"deg)",t.style.transition="0.1s linear",s.style.transform="rotate(-"+r+"deg)",s.style.transition="0.1s linear",e.style.transform="rotate(-"+r+"deg)",e.style.transition="0.1s linear"}),100):clearInterval(o)}},methods:{changeBgmInfo(t){const s=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);s||"float"===this.shrinkMode?this.isFloat=t:s||"mini"!==this.shrinkMode||(this.isMini=t)},playReady(){if(this.firstLoad){if(this.getVolume()){const t=this.getVolume();this.$refs.vbar.style.width=100*t+"%",this.$refs.bgm.volume=t}else{const t=100*this.$refs.bgm.volume+"%";this.$refs.vbar.style.width=t}this.firstLoad=!1}"playing"===this.curPlayStatus&&this.playBgm()},pauseBgm(){this.$refs.bgm.pause(),this.curPlayStatus="paused"},playBgm(){const t=this.$refs.bgm.play();void 0!==t&&t.then(t=>{this.isFault&&(this.isFault=!1)}).catch(t=>{this.isFault=!0,this.pauseBgm()}),this.curPlayStatus="playing"},playNext(){this.$refs.pbar.style.width=0,this.isFault=!1,this.curIndex>=this.audio.length-1?this.curIndex=0:this.curIndex++},playLast(){this.$refs.pbar.style.width=0,this.isFault=!1,this.curIndex<=0?this.curIndex=this.audio.length-1:this.curIndex--},bgmEnded(){this.$refs.pbar.style.width=0,this.playNext()},timeUpdate(){const t=this.$refs.bgm.duration,s=this.$refs.bgm.currentTime/t*100+"%";this.$refs.pbar.style.width=s},progressJump(t){const s=this.$refs.bgm.duration,e=t.offsetX/150;isNaN(s)||(this.$refs.bgm.currentTime=e*s)},volumeJump(t){const s=t.offsetX/57;s>=0&&s<=1&&(this.isMute=!(s>0),this.$refs.vbar.style.width=100*s+"%",this.$refs.bgm.volume=s,this.setVolume(this.$refs.bgm.volume))},muteBgm(){this.isMute=!0,this.setVolume(this.$refs.bgm.volume),this.$refs.vbar.style.width=0,this.$refs.bgm.volume=0},unMuteBgm(){if(this.isMute=!1,this.getVolume()){const t=this.getVolume();this.$refs.vbar.style.width=100*t+"%",this.$refs.bgm.volume=t}else this.$refs.vbar.style.width="100%",this.$refs.bgm.volume=1}}},l=(e(699),e(0)),u=Object(l.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"reco-bgm-panel"},[e("audio",{ref:"bgm",attrs:{id:"bgm",src:t.audio[t.curIndex].url},on:{ended:t.bgmEnded,canplay:t.playReady,timeupdate:t.timeUpdate}}),t._v(" "),e("module-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFloat,expression:"isFloat"}],staticClass:"reco-float-box",style:t.floatStyle,on:{click:function(s){return t.changeBgmInfo(!1)}}},[e("img",{attrs:{src:t.audio[t.curIndex].cover}})])]),t._v(" "),e("module-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFloat,expression:"!isFloat"}],staticClass:"reco-bgm-box-relative",style:t.panelPosition},[e("div",{staticClass:"reco-bgm-box",style:"position:"+t.positionType+";display:"+("relative"==t.positionType?"inline-block":"")},[e("div",{staticClass:"reco-bgm-cover",style:"background-image:url("+t.audio[t.curIndex].cover+")",on:{click:function(s){return t.changeBgmInfo(!1)}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMini,expression:"isMini"}],staticClass:"mini-operation"},[e("i",{directives:[{name:"show",rawName:"v-show",value:"playing"===this.curPlayStatus&&t.isMini,expression:"this.curPlayStatus === 'playing' && isMini"}],staticClass:"reco-bgm reco-bgm-pause",on:{click:function(s){return s.stopPropagation(),t.pauseBgm(s)}}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:"paused"===this.curPlayStatus&&t.isMini,expression:"this.curPlayStatus === 'paused' && isMini"}],staticClass:"reco-bgm reco-bgm-play",on:{click:function(s){return s.stopPropagation(),t.playBgm(s)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFault,expression:"isFault"}],staticClass:"falut-message"},[t._v("\n            播放失败\n          ")])]),t._v(" "),e("module-transition",{attrs:{duration:".15"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMini,expression:"!isMini"}],staticClass:"reco-bgm-info"},[e("div",{staticClass:"info-box"},[e("i",{staticClass:"reco-bgm reco-bgm-music music"}),t._v(t._s(t.audio[t.curIndex].name))]),t._v(" "),e("div",{staticClass:"info-box"},[e("i",{staticClass:"reco-bgm reco-bgm-artist"}),t._v(t._s(t.audio[t.curIndex].artist))]),t._v(" "),e("div",{staticClass:"reco-bgm-progress"},[e("div",{staticClass:"progress-bar",on:{click:t.progressJump}},[e("div",{ref:"pbar",staticClass:"bar"})])]),t._v(" "),e("div",{staticClass:"reco-bgm-operation"},[e("i",{staticClass:"reco-bgm reco-bgm-last last",on:{click:t.playLast}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:"playing"===t.curPlayStatus,expression:"curPlayStatus === 'playing'"}],staticClass:"reco-bgm reco-bgm-pause pause",on:{click:t.pauseBgm}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:"paused"===t.curPlayStatus,expression:"curPlayStatus === 'paused'"}],ref:"play",staticClass:"reco-bgm reco-bgm-play play",on:{click:t.playBgm}}),t._v(" "),e("i",{staticClass:"reco-bgm reco-bgm-next next",on:{click:t.playNext}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:!t.isMute,expression:"!isMute"}],staticClass:"reco-bgm reco-bgm-volume1 volume",on:{click:t.muteBgm}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:t.isMute,expression:"isMute"}],staticClass:"reco-bgm reco-bgm-mute mute",on:{click:t.unMuteBgm}}),t._v(" "),e("div",{staticClass:"volume-bar",on:{click:t.volumeJump}},[e("div",{ref:"vbar",staticClass:"bar"})])])])]),t._v(" "),e("module-transition",{attrs:{duration:".15"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMini,expression:"!isMini"}],staticClass:"reco-bgm-left-box",on:{click:function(s){return t.changeBgmInfo(!0)}}},[e("i",{staticClass:"reco-bgm reco-bgm-left"})])])],1)])])],1)}),[],!1,null,"377c071e",null);s.default=u.exports}}]);