(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1571:function(a,t,s){"use strict";s.r(t);var r=s(3),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"app-开发技术对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-开发技术对比"}},[a._v("#")]),a._v(" APP 开发技术对比")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Native App")]),a._v(" "),r("ul",[r("li",[a._v("一般是指本地化应用，后续简称 NA；")]),a._v(" "),r("li",[a._v("优点：体验好，可以做一些比较好的交互效果，可作为独立软件出售；")]),a._v(" "),r("li",[a._v("缺点：更新较差，需要靠发版本解决；且历史版本无法同步更新，开发成本比较大，需要两波开发人员：Android 和 IOS，分别使用 Object-c 和 Java；")])])])]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Web App")]),a._v(" "),r("ul",[r("li",[a._v("一般是指我们开发的 Html5 网站，后续简称 H5；")]),a._v(" "),r("li",[a._v("优点：开发成本较低，前端开发人员开发一套同时适配 IOS 和 Android；更新好，可随时上线，上线后版本能普及到所有使用的用户；")]),a._v(" "),r("li",[a._v("缺点：体验没有 NA 好，没有独立的软件作为入口（当然后续如果 PWA 能普及并支持下载，这也不再是缺点了）；")])])])]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Hybird App")]),a._v(" "),r("ul",[r("li",[a._v("一般是指混合型 App，一部分是 NA 开发人员开发，一部分是 H5 页面；")]),a._v(" "),r("li",[a._v("优点：跨平台开发周期短、成本低，又能发挥 Native App 体验和性能的优势")]),a._v(" "),r("li",[a._v("缺点：涉及到 H5 与 NA 通信，需要客户端开发和前端开发协同合作；")])])])]),a._v(" "),r("ul",[r("li",[r("p",[a._v("其他 App")]),a._v(" "),r("ul",[r("li",[a._v("js + 原生渲染，框架代表：RN、Weex；自绘 UI + 原生，框架代表：Flutter，对此的介绍可参考移动开发技术简介")])])])]),a._v(" "),r("h2",{attrs:{id:"hybrid-app-应用简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-app-应用简介"}},[a._v("#")]),a._v(" Hybrid App 应用简介")]),a._v(" "),r("p",[a._v("Hybrid App 是半原生半 web 的开发模式，部分界面或者功能是原生的，其余部分是 html 和 js 来完成，最终 webview 加载 H5 页面；入职百度后第一个做的成型的产品是 Hybrid App，在开发过程中研究了 H5 与 NA 通信机制，特对通信机制进行介绍。")]),a._v(" "),r("p",[r("strong",[a._v("举例")]),a._v("\n在安卓中可以通过开启”设置“->”开发者选项“->”显示布局边界“，所有 NA 部分都会被框选出来，例如百度 App 中的首页，所有部分都有框选，整个页面都为 NA 实现；如下图所示；")]),a._v(" "),r("figure",[r("img",{attrs:{src:s(476),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("p",[a._v("再比如百度 App 中的搜索结果页，上面搜索框的部分和下面的 Bar 都是 NA 的，而中间嵌入的刘德华页面为 H5 页面，如下图所示；再比如飞猪的机票预定页等")]),a._v(" "),r("figure",[r("img",{attrs:{src:s(477),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(482),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("p",[a._v("这种页面比比皆是，采用 H5 和 NA 结合 即 Hybrid App 的形式呈现。")]),a._v(" "),r("h3",{attrs:{id:"通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信"}},[a._v("#")]),a._v(" 通信")]),a._v(" "),r("p",[a._v("以我接触到的通信方式分别进行解析；")]),a._v(" "),r("h4",{attrs:{id:"_1、na-和-h5-分别将方法挂载在-window-上-供对方使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、na-和-h5-分别将方法挂载在-window-上-供对方使用"}},[a._v("#")]),a._v(" 1、NA 和 H5 分别将方法挂载在 window 上，供对方使用")]),a._v(" "),r("h5",{attrs:{id:"h5-调用-na"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h5-调用-na"}},[a._v("#")]),a._v(" H5 调用 NA")]),a._v(" "),r("p",[a._v("NA 页面将方法注入到 window 上，H5 直接调用")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[a._v("webview"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("addjs "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" 原生渲染，框架代表："),r("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RN")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("、WeexInterface")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'BdTing'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),r("p",[a._v("在 Object 中定义 play 方法；")]),a._v(" "),r("p",[a._v("H5 调用")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[a._v("window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("BdTing"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("play")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 播放")]),a._v("\n")])])]),r("h5",{attrs:{id:"na-调用-h5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#na-调用-h5"}},[a._v("#")]),a._v(" NA 调用 H5")]),a._v(" "),r("p",[a._v("H5 将方法挂载在 window 上")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[a._v("window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("BdTing"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("share")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),r("p",[a._v("NA 调用 H5 的方法")]),a._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[a._v("webview"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadUrl")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'js + 原生渲染，框架代表：RN、Weex:share()'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),r("blockquote",[r("p",[a._v("注：addjs + 原生渲染，框架代表：RN、WeexInterface 在安卓 4.2 以下存在安全漏洞；")])]),a._v(" "),r("h4",{attrs:{id:"_2、na-和-h5-通过-jsbridge-桥梁进行通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、na-和-h5-通过-jsbridge-桥梁进行通信"}},[a._v("#")]),a._v(" 2、NA 和 H5 通过 JsBridge 桥梁进行通信")]),a._v(" "),r("p",[a._v("原理：基于 iframe 修改 src 值，NA 可以捕获 url 变化，根据 url 变化，判断 H5 的意图，大体通信过程如下图所示；")]),a._v(" "),r("figure",[r("img",{attrs:{src:s(483),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("p",[a._v("在启动 App 时，App 会在 webview 中执行一个 js 文件，这个文件在 NA 与 H5 中间建立了一个桥梁，NA 与 H5 基于这个桥梁通信，这个 js 文件的作用如下图所示；具体的 js 文件见 JsBridge")]),a._v(" "),r("ul",[r("li",[a._v("创建一个隐藏的 iframe，iframe 的作用是在 H5 与 NA 通信时，会修改 iframe 的 src 值，src 的变化会触发 shouldOverriderUrlLoading 方法，这个方法的第二个参数为 src 值，方法内解析 src 值判断 H5 的意图；")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(484),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ul",[r("li",[r("p",[a._v("在 webview 中的 window 上挂载 JsBridge 对象，这个对象中包含了一些方法：")])]),a._v(" "),r("li",[r("p",[a._v("H5 调用 NA 的方法，参数：事件名称、参数、回调函数")])]),a._v(" "),r("li",[r("p",[a._v("callHandler 方法会修改 iframe 的 src 值，NA 捕获到 src 变化，解析 src，判断 H5 意图；")])]),a._v(" "),r("li",[r("p",[a._v("根据数据和事件，NA 做相应的处理，处理完成后，调用回调函数，同时把想回传给 H5 的数据作为回调函数的参数传递；")])]),a._v(" "),r("li",[r("p",[a._v("注册方法，在 NA 状态变化时执行，参数：方法名，回调函数")])]),a._v(" "),r("li",[r("p",[a._v("registerHandler 会将方法名对应的回调函数挂载在"),r("code",[a._v("messageHandlers")]),a._v("，即"),r("code",[a._v("messageHandlers[methodname] = callback")]),a._v(";")])]),a._v(" "),r("li",[r("p",[a._v("NA 状态发生变化，想通知 H5，则调用相应的挂载在 messageHandlers 上的方法；")])]),a._v(" "),r("li",[r("p",[r("code",[a._v("registerHandler")]),a._v("方法")])]),a._v(" "),r("li",[r("p",[r("code",[a._v("callHandler")]),a._v("方法")])])]),a._v(" "),r("blockquote",[r("p",[a._v("注：如果这两个方法比较抽象，可以看一下下面的流程详解，再回过来看当前的说明；")])]),a._v(" "),r("h3",{attrs:{id:"h5-调用-na-详细流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h5-调用-na-详细流程"}},[a._v("#")]),a._v(" H5 调用 NA 详细流程")]),a._v(" "),r("figure",[r("img",{attrs:{src:s(485),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("p",[a._v("我们以音频播放举例：由于希望用户离开 H5 页面时仍然可以播放音频的要求，我们采用 Hybrid App 的方案，其中音频列表是 H5 实现，播放器是 NA 实现。当用户点击音频列表中的一项时，触发的 H5 和 NA 交互流程如下：")]),a._v(" "),r("ol",[r("li",[a._v("H5 通知 NA 需要播放的音频相关参数以及回调函数，即调用 JsBridge 对象的 callHandler 方法；")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(486),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[a._v("callHandler 内会修改 iframe 的 src 值为："),r("code",[a._v("yy:__QUEUE_HAS_MESSAGE")]),a._v("，同时将 H5 的回调函数和相关参数 push 到消息队列；")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(487),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[a._v("src 值的变化被 NA 捕获，NA 捕获后解析 src 值，根据 src 的 "),r("code",[a._v("yy:__QUEUE_HAS_MESSAGE")]),a._v(" 判断 H5 有消息通知到自己，NA 会调用 JsBridge 的"),r("code",[a._v("_fetchQueue")]),a._v(" 方法")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(488),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[r("code",[a._v("_fetchQueue")]),a._v(" 方法会再次修改 iframe 的 src 值，将参数和调用的方法名统一添加到 src 上；NA 捕获到 src 变化后，会解析出音频参数和方法名：play，同时打开 NA 的播放器页面并播放相应的音频，并调用 JsBridge 的 "),r("code",[a._v("_handleMessageFromNative")])])]),a._v(" "),r("li",[r("p",[r("code",[a._v("_handleMessageFromNative")]),a._v(" 方法内将调用初始消息队列保存的回调函数，并将 NA 要通知 H5 的消息作为回调函数的参数调用。")])])]),a._v(" "),r("blockquote",[r("p",[a._v("注：这个流程图中的一个疑问点是为什么需要通信两次，第一次 修改 iframe 的 src 值，通知 NA 有消息，NA 再去调用 JsBridge 里面的方法，JsBridge 的方法再修改 iframe 的 src 值，src 值变动再次被 NA 捕获，NA 再解析相应的数据，关于这个问题可以查看 github 上的 issue；")])]),a._v(" "),r("h2",{attrs:{id:"na-调用-h5-详细流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#na-调用-h5-详细流程"}},[a._v("#")]),a._v(" NA 调用 H5 详细流程")]),a._v(" "),r("figure",[r("img",{attrs:{src:s(489),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("p",[a._v("我们以音频下载举例：下载功能是 NA 实现，下载完成后 H5 页面内会显示相应的下载状态：已下载、未下载；触发的 H5 和 NA 交互流程如下：")]),a._v(" "),r("ol",[r("li",[a._v("H5 需要在 App 启动时注册：监听下载状态，调用 JsBridge 的 registerHandler 方法，参数为通信名（"),r("code",[a._v("listenDownload")]),a._v("）和对应要执行的方法（即 H5 监听到 NA 传来的消息时，会触发的方法）")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(478),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[a._v("registerHandler 执行会存储 "),r("code",[a._v("listenDownload")]),a._v(" 对应的方法；")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(479),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[a._v("当 NA 页面用户点击了下载时，NA 会调用 "),r("code",[a._v("_handleMessageFromNative")]),a._v(" 方法，并将下载的音频相关信息和最初与 H5 约定的点击下载时的名字"),r("code",[a._v("listenDownload")]),a._v("作为参数传递给"),r("code",[a._v("_handleMessageFromNative")])])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(480),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("code",[a._v("_handleMessageFromNative")]),a._v("会根据映射获取"),r("code",[a._v("listenDownload")]),a._v("对应的方法名，并执行；H5 方法内会根据判断下载完成或者下载失败，并做相应的状态显示；")])]),a._v(" "),r("figure",[r("img",{attrs:{src:s(481),alt:"章节配图"}}),r("figcaption",[a._v("章节配图")])]),a._v(" "),r("h2",{attrs:{id:"后续"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后续"}},[a._v("#")]),a._v(" 后续")]),a._v(" "),r("p",[a._v("在安卓的个别机型上使用 JsBridge 通信时，H5 连续两次跟 NA 通信，会存在消息被吞的情况，即 NA 的 "),r("code",[a._v("shouldOverrideUrlLoading")]),a._v("未被触发，我们当时采用延时的办法解决；该 issue 中也有提到此问题；")]),a._v(" "),r("p",[a._v("在混合式开发中，JsBridge 的安全性和兼容性比较好，很多开发仍然采用这种模式，理解其中的工作原理，可以帮助更快的定位问题；")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/Uj1_mJ_1jrTKA3aT12hGiw",target:"_blank",rel:"noopener noreferrer"}},[a._v("Hybrid 应用中 H5 与 Native 通信"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);