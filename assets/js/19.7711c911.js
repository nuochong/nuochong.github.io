(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{649:function(e,t,a){},682:function(e,t,a){"use strict";var n=a(649);a.n(n).a},715:function(e,t,a){"use strict";a.r(t);var n=[{active:!1,name:"facebookshare",label:"Facebook",link:()=>"#",meta:(e,t,a,n,i)=>({name:encodeURI(e),link:encodeURI(t),picture:encodeURI(a),caption:encodeURI(i),description:encodeURI(n)})},{active:!1,name:"twittershare",label:"Twitter",link:(e,t,a,n,i)=>encodeURI(`https://twitter.com/intent/tweet?url=${t}&amp;text=${e}&amp;via=${i}`),target:"_blank"},{active:!1,name:"linkedinshare",label:"linkedin",link:(e,t,a,n)=>encodeURI(`https://www.linkedin.com/shareArticle?mini=true&amp;url=${t}&amp;title=${e}&amp;summary=${n}&amp;source=`),target:"_blank"},{active:!1,name:"googleshare",label:"Google plus",link:(e,t)=>encodeURI(`https://plus.google.com/share?url=${t}`),target:"_blank"},{active:!0,name:"qqshare",label:"QQ",link:(e,t)=>encodeURI(`http://connect.qq.com/widget/shareqq/index.html?url=${t}&sharesource=qzone&title=${e}&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述`),target:"_blank"},{active:!1,name:"wechatshare",label:"WeChat",link:(e,t)=>encodeURI(`https://plus.google.com/share?url=${t}`),target:"_blank"},{active:!0,name:"sinashare",label:"Sina",link:(e,t)=>encodeURI(`http://v.t.sina.com.cn/share/share.php?title=${e}&url=${t}&content=utf-8&sourceUrl=url&pic=picurl`),target:"_blank"},{active:!0,name:"zoneshare",label:"Zone",link:(e,t)=>encodeURI(`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=${e}&url=${t}&pics=picurl`),target:"_blank"},{active:!1,name:"youkushare",label:"Youku",link:(e,t)=>encodeURI(""),target:"_blank"},{active:!1,name:"bilibilishare",label:"Bilibili",link:(e,t)=>encodeURI(""),target:"_blank"}],i=(a(21),{name:"SharePost",props:{post:{type:Object,required:!0}},data:()=>({networks:n}),mounted(){this.networks.find(e=>{e.name.includes("facebook")&&e.active&&this.snippetFacebook(),e.name.includes("twitter")&&e.active&&this.snippetTwitter()})},methods:{getFullURL(e){return this.$themeConfig.url+this.post.path+`?utm_source=${e}&amp;utm_medium=single-post&amp;utm_campaign=share`},getLinkInfo(e,t){const a="twitter"===t.name?this.$themeLocaleConfig.share.twitterVia:null;return t.link(e.title,this.getFullURL(t.name),`${this.$themeConfig.url}${e.coverName}.${this.$themeConfig.responsive.ext}`,e.excerpt,a)},snippetFacebook(){window.FB||(window.fbAsyncInit=()=>{window.FB.init({appId:this.$themeConfig.share.facebook.appId,xfbml:!0,version:this.$themeConfig.share.facebook.version}),window.FB.AppEvents.logPageView()},function(e,t,a,n){let i=null,s=e.getElementsByTagName(t)[0];e.getElementById(a)||(i=e.createElement(t),i.id=a,i.src=`//connect.facebook.net/${n.$lang.replace("-","_")}/sdk.js`,s.parentNode.insertBefore(i,s))}(document,"script","facebook-jssdk",this))},facebook(e){const t=e.meta(this.post.title,this.$el.baseURI,`${this.$themeConfig.url}${this.post.coverName}.${this.$themeConfig.responsive.ext}`,this.post.excerpt,this.$themeLocaleConfig.share.facebookCaption);window.FB.ui({method:"feed",display:"popup",name:t.name,link:t.link+"?utm_source=facebook&amp;utm_medium=single-post&amp;utm_campaign=share",picture:t.picture,caption:t.caption,description:t.description})},snippetTwitter(){window.twttr||(window.twttr=((e,t,a)=>{var n=e.getElementsByTagName(t)[0],i=window.twttr||{};if(e.getElementById(a))return i;let s=e.createElement(t);return s.id=a,s.src="https://platform.twitter.com/widgets.js",n.parentNode.insertBefore(s,n),i._e=[],i.ready=e=>{i._e.push(e)},i})(document,"script","twitter-wjs"))},handle(e){"facebook"===e.name&&this.facebook(e)}}}),s=(a(682),a(0)),o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"share"},[a("ul",{staticClass:"share__list"},[a("li",{staticClass:"share__item"},[a("span",{staticClass:"txt-share"},[e._v(e._s(e.$tn("share"))+":")])]),e._v(" "),e._l(e.networks,(function(t,n){return t.active?a("li",{key:t.name+"-"+n,staticClass:"share__item"},[a("a",{staticClass:"link share__link",class:"link--filler-s-"+t.name,attrs:{role:"button",href:e.getLinkInfo(e.post,t),title:t.label,target:t.target},on:{click:function(a){return e.handle(t)}}},[a("span",{staticClass:"icon not-black",class:"icon-"+t.name})])]):e._e()}))],2),e._v(" "),a("div",{attrs:{id:"fb-root"}})])}),[],!1,null,null,null);t.default=o.exports}}]);