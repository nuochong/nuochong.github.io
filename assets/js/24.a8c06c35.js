(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{656:function(t,e,n){},701:function(t,e,n){"use strict";var s=n(656);n.n(s).a},716:function(t,e,n){"use strict";n.r(e);var s=n(38),a=n(2);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:{"/":{message:"New content 🎉🎉",buttonText:"Refresh"},"/zh/":{message:"有新内容可用 🎉🎉",buttonText:"刷新"}},updateEvent:null}),computed:{popupConfig(){return Object(a.g)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created(){s.a.$on("sw-updated",this.onSWUpdated),!0==={"/":{message:"New content 🎉🎉",buttonText:"Refresh"},"/zh/":{message:"有新内容可用 🎉🎉",buttonText:"刷新"}}&&(this.rawPopupConfig=o)},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(701),n(0)),i=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=i.exports}}]);