(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1563:function(t,e,s){"use strict";var i=s(1564),u=s.n(i);e.a={props:{tag:String,data:{type:Object,required:!0}},computed:{getAttributes(){const t={...this.default,...this.data};return t.src=this.youtubeEmbed(t.src)||t.src,t}},methods:{youtubeEmbed(t){if(!t.includes("youtube.com")||"iframe"!==this.tag)return!1;return"https://www.youtube.com/embed/"+u()(t)}}}},1564:function(t,e,s){t.exports=function(t,e){if(null==e&&(e={fuzzy:!0}),/youtu\.?be/.test(t)){var s,i=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(s=0;s<i.length;++s)if(i[s].test(t))return i[s].exec(t)[1];if(e.fuzzy){var u=t.split(/[\/\&\?=#\.\s]/g);for(s=0;s<u.length;++s)if(/^[^#\&\?]{11}$/.test(u[s]))return u[s]}}return null}},1568:function(t,e,s){"use strict";e.a={name:"MixinLazyDelay",mixins:[],props:{},data:()=>({isShow:!1}),created(){},watch:{},mounted(){this.$vuepress.imgLoading.lazyDelay(this.$refs.refImgLoading,t=>{this.$vuepress.mediumZoom.updateDelay(),this.isShow=t})},methods:{}}},1796:function(t,e,s){"use strict";s.r(e);var i=s(1563),u=s(1568),a={name:"LazyLoadImage",mixins:[i.a,u.a],data:()=>({default:{class:"lazy-load-image",src:"",alt:""}}),mounted(){}},r=s(3),n=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("img",this._b({ref:"refImgLoading"},"img",this.getAttributes,!1))}),[],!1,null,null,null);e.default=n.exports}}]);