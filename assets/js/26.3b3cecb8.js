(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1756:function(e,t,r){},1800:function(e,t,r){"use strict";r(1756)},1841:function(e,t,r){"use strict";r.r(t);var s=r(720),i={name:"MusicScore",props:{resource:{type:String,default:"http://localhost:8080/music-score/Beethoven_AnDieFerneGeliebte.xml",required:!1}},data:()=>({}),created(){},computed:{},watch:{},mounted(){"undfined"!=typeof window&&this.init()},methods:{init(){const e=r(1799);let t=this.$refs.musicScore;t.style.minWidth="462.81px";const i=new e.OpenSheetMusicDisplay(t,{autoResize:!0,drawCredits:!0,drawTitle:!0,drawSubtitle:!0,drawComposer:!0,drawLyricist:!0,backend:"svg",drawTitle:!0,pageFormat:"#AABBAA",drawMetronomeMarks:!1,drawPartNames:!1,drawMeasureNumbers:!1,measureNumberInterval:4,useXMLMeasureNumbers:!0}),a=this.resource,n=Object(s.isUrl)(a)?a:Object(s.getDomain)()+a;i.load(n).then(()=>{i.EngravingRules.PageBackgroundColor="#FFFFFF",i.render()})}}},a=(r(1800),r(3)),n=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"music-container"},[t("div",{ref:"musicScore"})])}),[],!1,null,"61d47b37",null);t.default=n.exports}}]);