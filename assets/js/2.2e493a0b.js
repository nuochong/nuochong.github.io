(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1747:function(t,a,s){},1791:function(t,a,s){"use strict";s(1747)},1849:function(t,a,s){"use strict";s.r(a);var e={name:"Footer",mixins:[s(182).a],components:{CardAuthor:()=>Promise.resolve().then(s.bind(null,429)),Newsletter:()=>s.e(1).then(s.bind(null,1850)),LazyLoad:()=>s.e(3).then(s.bind(null,1829))},data:()=>({canvasWdith:"auto",canvasHeight:"auto"}),computed:{getAuthor(){return this.$authors.filter(t=>t.frontmatter.lang===this.$localeConfig.lang)}},beforeDestroy(){},mounted(){this.$nextTick(()=>{this.circleMagic()})},methods:{isShow:t=>t,circleMagic:function(t){var a,s,e,o,l=this,i=[],n=!0,r="rgba(255,255,255,.5)",c=10,h=.3,p=.2,f=this.$refs.footer;function v(){n=!(document.body.scrollTop>s)}function _(){a=f.clientWidth,s=f.clientHeight,f.height=s+"px",e.width=a,e.height=s}function m(){n&&(o.clearRect(0,0,a,s),i.forEach(t=>{t.draw()})),requestAnimationFrame(m)}function d(){var t=this;function e(){t.pos.x=Math.random()*a,t.pos.y=s+100*Math.random(),t.alpha=.1+Math.random()*p,t.scale=.1+.6*Math.random(),t.speed=Math.random(),t.color="random"===r?"rgba("+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.random().toPrecision(2)+")":r}t.pos={},e(),this.draw=function(){t.alpha<=0&&e(),t.pos.y-=t.speed,t.alpha-=2e-4,o.beginPath(),o.arc(t.pos.x,t.pos.y,t.scale*c,0,2*Math.PI,!1),o.fillStyle=t.color,o.fill(),o.closePath()}}!function(){a=f.offsetWidth,s=f.offsetHeight,(e=l.$refs.homeTopCanvas).parentElement.style.overflow="hidden",e=l.$refs.homeTopCanvas,l.canvasWdith=a,l.canvasHeight=s,o=e.getContext("2d");for(var t=0;t<a/2*h;t++){var n=new d;i.push(n)}m()}(),window.addEventListener("scroll",v,!1),window.addEventListener("resize",_,!1)}}},o=(s(1791),s(3)),l=Object(o.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{ref:"footer",staticClass:"footer ",attrs:{id:"footer"}},[s("div",{staticClass:"footer-box1"},[s("svg",{staticClass:"footer-box__shape",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1366 161"}},[s("path",{attrs:{d:"M-11.925-4809v-154.746c40.454,19.75,273.683,130.936,420.544,142.612,161.25,12.821,339.978-42.709,521.543-86.3,169.82-40.769,395.43,29.2,423.912,38.429v60Z",transform:"translate(11.926 4970)"}})])]),t._v(" "),s("div",{staticClass:"footer-box2"},[s("svg",{staticClass:"footer-box__shape",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1366 246"}},[s("path",{attrs:{d:"M-1505.5-4725.5v-238.1c8.149-3.133,18.138-5.059,29.672-5.9h30.954c201.21,11.667,696.6,224.535,855.572,236.458,205.129,15.385,287.179-164.1,432.047-175.625a42.381,42.381,0,0,1,16.756,1.857V-4725.5Z",transform:"translate(1506 4971)"}})]),t._v(" "),s("ul",{staticClass:"footer-social__list"},t._l(t.$themeLocaleConfig.social,(function(t,a){return s("li",{key:t.name+"-"+a,staticClass:"footer-social__item"},[s("a",{attrs:{href:t.link,target:"_blank",rel:"noopener external",title:"Follow us on Facebook"}},[s("span",{staticClass:"icon footer-social__icon",class:"icon-"+t.name})])])})),0),t._v(" "),s("div",{staticClass:"footer-newsletter not-black"},[t.$themeLocaleConfig.newsletter.action?s("newsletter"):t._e()],1)]),t._v(" "),s("section",{staticClass:"footer-box3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"column sm-50 footer-card"},[t.getAuthor.length?s("lazy-load",[s("card-author",{staticClass:"footer__card-author",attrs:{shadow:!1,author:t.getAuthor[0]}}),t._v(" "),s("div",{staticClass:"watermark-logo"})],1):t._e()],1),t._v(" "),s("div",{staticClass:"column sm-50 footer-nav"},[s("div",{staticClass:"row justify-right"},[t.$themeLocaleConfig.footer.nav1.items.length?s("div",{staticClass:"column xs-50 sm-40 md-33 footer-nav__box footer-nav__box--1 not-black"},[s("h2",{staticClass:"meta-text title not-black"},[t._v(t._s(t.$themeLocaleConfig.footer.nav1.title))]),t._v(" "),s("nav",{staticClass:"footer-nav1"},[s("ul",t._l(t.$themeLocaleConfig.footer.nav1.items,(function(a,e){return t.isShow(a.isShow)?s("li",{key:a.label+"-"+e,staticClass:"footer-nav1__item",on:{click:function(s){return t.handleKeepAlive(a)}}},[a.path?s("a",{staticClass:"not-black",attrs:{href:"javascript:;"},on:{click:function(s){return t.handleKeepAlive(a)}}},[t._v(t._s(a.label))]):t._e(),t._v(" "),a.link?s("a",{staticClass:"not-black",attrs:{href:a.link,rel:"noopener nofollow",target:"_blank"}},[t._v(t._s(a.label))]):t._e()]):t._e()})),0)])]):t._e(),t._v(" "),t.$themeLocaleConfig.footer.nav2.items.length?s("div",{staticClass:"column xs-50 sm-40 md-33 footer-nav__box footer-nav__box--2"},[s("h2",{staticClass:"meta-text title not-black"},[t._v(t._s(t.$themeLocaleConfig.footer.nav2.title))]),t._v(" "),s("nav",{staticClass:"footer-nav2"},[s("ul",t._l(t.$themeLocaleConfig.footer.nav2.items,(function(a,e){return s("li",{key:a.label+"-"+e,staticClass:"footer-nav2__item"},[a.path?s("router-link",{staticClass:"not-black",attrs:{to:a.path}},[t._v(t._s(a.label))]):t._e(),t._v(" "),a.link?s("a",{staticClass:"not-black",attrs:{href:a.link,rel:"noopener nofollow",target:"_blank"}},[t._v(t._s(a.label))]):t._e()],1)})),0)])]):t._e()])]),t._v(" "),s("div",{staticClass:"cpolumn sm-100 footer-copy"},[s("visitors-total"),t._v(" "),s("p",{staticClass:"footer-copy-last",domProps:{innerHTML:t._s(t.$themeLocaleConfig.copy)}})],1)]),t._v(" "),s("span",{staticClass:"shapes shapes--circle",staticStyle:{left:"3%",top:"-20%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--primary shapes--color3",staticStyle:{left:"30%",top:"-15%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--primary",staticStyle:{left:"13%",top:"-80%",transform:"rotate(45deg)"}}),t._v(" "),s("span",{staticClass:"shapes shapes--circle shapes--color4",staticStyle:{left:"40%",top:"200px"}}),t._v(" "),s("span",{staticClass:"shapes shapes--primary",staticStyle:{left:"15%",bottom:"10%",transform:"rotate(75deg)"}}),t._v(" "),s("span",{staticClass:"shapes shapes--circle shapes--color3",staticStyle:{right:"50%",top:"30%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--primary",staticStyle:{right:"20%",top:"-100%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--circle",staticStyle:{right:"10%",top:"-20%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--color4",staticStyle:{right:"35%",top:"-20%",transform:"rotate(45deg)"}}),t._v(" "),s("span",{staticClass:"shapes shapes--circle",staticStyle:{left:"40%",top:"-50%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--color3",staticStyle:{right:"30%",top:"20%"}}),t._v(" "),s("span",{staticClass:"shapes shapes--circle shapes--primary",staticStyle:{right:"30%",bottom:"20%"}})]),t._v(" "),s("canvas",{ref:"homeTopCanvas",staticStyle:{position:"absolute",left:"0px",bottom:"0px"},attrs:{width:t.canvasWdith,height:t.canvasHeight}})])}),[],!1,null,null,null);a.default=l.exports}}]);