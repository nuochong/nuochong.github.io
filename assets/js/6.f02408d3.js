(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{645:function(t,e,i){},678:function(t,e,i){"use strict";var n=i(645);i.n(n).a},717:function(t,e,i){"use strict";i.r(e);var n={name:"Ads",props:{direction:{type:String,default:"horizontal"}},data:()=>({hideBizu:!1}),computed:{getAd(){const t=this.$themeLocaleConfig.ads;return t[Math.floor(Math.random()*t.length)]}}},a=(i(678),i(0)),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return!t.hideBizu&&t.$themeLocaleConfig.ads.length?i("div",{staticClass:"bizu box-default",class:"bizu--"+t.direction},[i("div",{staticClass:"bizu-image"},[i("span",{staticClass:"bizu-close",on:{click:function(e){t.hideBizu=!0}}},[t._v("×")]),t._v(" "),i("a",{attrs:{href:t.getAd.link,target:"_blank",rel:"nofollow noopener"}},[i("img",{staticClass:"bizu-image__image",attrs:{src:t.getAd.image.src,alt:t.getAd.image.alt}})])]),t._v(" "),i("div",{staticClass:"bizu-info"},[i("a",{staticClass:"bizu-info__link bizu-info__text",attrs:{href:t.getAd.link,target:"_blank",rel:"nofollow noopener"}},[t._v("\n      "+t._s(t.getAd.text)+"\n    ")]),t._v(" "),i("a",{staticClass:"bizu-info__link bizu-info__by",attrs:{href:t.getAd.by.link,target:"_blank",rel:"nofollow noopener"}},[t._v("\n      "+t._s(t.getAd.by.text)+"\n    ")])])]):t._e()}),[],!1,null,null,null);e.default=s.exports}}]);