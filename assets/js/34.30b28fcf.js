(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1038:function(t,e,i){"use strict";i.r(e);i(1033);var a={props:{autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#3eaf7c"},loop:{type:Boolean,default:!1},lang:{type:String,default:"zh-CN"},screenshot:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},contextmenu:{type:Array},logo:{type:String},video:{type:Object}},data:()=>({dp:null,DPlayer:{}}),mounted(){this.DPlayer=i(1034),this.init()},methods:{init:function(){const t=this.dp=new this.DPlayer({element:this.$el,autoplay:this.autoplay,theme:this.theme,loop:this.loop,lang:this.lang,screenshot:this.screenshot,hotkey:this.hotkey,preload:this.preload,contextmenu:this.contextmenu,logo:this.logo,video:{pic:this.video.pic,defaultQuality:this.video.defaultQuality,quality:[{url:this.video.quality[0].url,name:this.video.quality[0].name},{url:this.video.quality[1].url,name:this.video.quality[1].name}],thumbnails:this.video.thumbnails,type:this.video.type}});t.on("play",()=>{this.$emit("play")}),t.on("quality_start",()=>{this.$emit("quality_start"),t.on("play")}),t.on("pause",()=>{this.$emit("pause")}),t.on("canplay",()=>{this.$emit("canplay")}),t.on("playing",()=>{this.$emit("playing")}),t.on("ended",()=>{this.$emit("ended")}),t.on("error",()=>{this.$emit("error")})}}},o=i(2),l=Object(o.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dplayer"})}),[],!1,null,"d7a79852",null);e.default=l.exports}}]);