(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1001:function(t,e,s){},1027:function(t,e,s){"use strict";var n=s(1001);s.n(n).a},1039:function(t,e,s){"use strict";s.r(e);var n={name:"ModuleTransition",props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"}},methods:{setStyle(t){t.style.transition=`all ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateX(-20px)",t.style.opacity=0},unsetStyle(t){t.style.transform="translateX(0)",t.style.opacity=1}}},a=(s(1027),s(2)),i=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"module"},on:{enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,"00f8157b",null);e.default=i.exports}}]);