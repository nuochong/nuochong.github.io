(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{2033:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),n("p",[t._v("在 H5 + Native 的混合开发模式中，让人诟病最多的恐怕就是加载 H5 页面过程中的白屏问题了。下面这张图描述了从 WebView 初始化到 H5 页面最终渲染的整个过程。")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:a(576),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("p",[t._v("image\n其中目前主流的优化方式主要包括：")]),t._v(" "),n("ol",[n("li",[t._v("针对 WebView 初始化：该过程大致需耗费 70~700ms。当客户端刚启动时，可以先提前初始化一个全局的 WebView 待用并隐藏。当用户访问了 WebView 时，直接使用这个 WebView 加载对应网页并展示。")]),t._v(" "),n("li",[t._v("针对向后端发送接口请求：在客户端初始化 WebView 的同时，直接由 Native 开始网络请求数据，当页面初始化完成后，向 Native 获取其代理请求的数据。")]),t._v(" "),n("li",[t._v("针对加载的 js 动态拼接 html（单页面应用）：可采用多页面打包， 服务端渲染，以及构建时预渲染等方式。")]),t._v(" "),n("li",[t._v("针对加载页面资源的大小：可采用懒加载等方式，将需要较大资源的部分分离出来，等整体页面渲染完成后再异步请求分离出来的资源，以提升整体页面加载速度。")])]),t._v(" "),n("p",[t._v("当然还有很多其它方面的优化，这里就不再赘述了。本文重点讲的是，在与静态资源服务器建立连接，然后接收前端静态资源的过程。由于这个过程过于依赖用户当前所处的网络环境，因此也成了最不可控因素。当用户处于弱网时，页面加载速度可能会达到 4 到 5 s 甚至更久，严重影响用户体验。而离线包方案就是解决该问题的一个比较成熟的方案。")]),t._v(" "),n("h2",{attrs:{id:"技术方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[t._v("#")]),t._v(" 技术方案")]),t._v(" "),n("p",[t._v("首先阐述下大概思路：")]),t._v(" "),n("p",[t._v("我们可以先将页面需要的静态资源打包并预先加载到客户端的安装包中，当用户安装时，再将资源解压到本地存储中，当 WebView 加载某个 H5 页面时，拦截发出的所有 http 请求，查看请求的资源是否在本地存在，如果存在则直接返回资源。")]),t._v(" "),n("p",[t._v("下面是整体技术方案图，其中 CI/CD 我默认使用 Jenkins，当然也可以采用其它方式。")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:a(577),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("h2",{attrs:{id:"前端部分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端部分"}},[t._v("#")]),t._v(" 前端部分")]),t._v(" "),n("p",[t._v("相关代码：")]),t._v(" "),n("p",[t._v("离线包打包插件："),n("a",{attrs:{href:"https://github.com/mcuking/offline-package-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mcuking/offline-package-webpack-plugin"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("应用插件的前端项目："),n("a",{attrs:{href:"https://github.com/mcuking/mobile-web-best-practice",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mcuking/mobile-web-best-practice"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("首先需要在前端打包的过程中同时生成离线包，我的思路是 webpack 插件在 emit 钩子时（生成资源并输出到目录之前），通过 compilation 对象（代表了一次单一的版本构建和生成资源）遍历读取 webpack 打包生成的资源，然后将每个资源（可通过文件类型限定遍历范围）的信息记录在一个资源映射的 json 里，具体内容如下：")]),t._v(" "),n("p",[t._v("资源映射 json 示例")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packageId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mwbp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packageId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mwbp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"remoteUrl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://122.51.132.117/js/app.67073d65.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js/app.67073d65.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mimeType"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/javascript"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("其中 remoteUrl 是该资源在静态资源服务器的地址，path 则是在客户端本地的相对路径（通过拦截该资源对应的服务端请求，并根据相对路径从本地命中相关资源然后返回）。")]),t._v(" "),n("p",[t._v("最后将该资源映射的 json 文件和需要本地化的静态资源打包成 zip 包，以供后面的流程使用。")]),t._v(" "),n("h2",{attrs:{id:"离线包管理平台"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#离线包管理平台"}},[t._v("#")]),t._v(" 离线包管理平台")]),t._v(" "),n("p",[t._v("相关代码：")]),t._v(" "),n("p",[n("strong",[t._v("离线包管理平台前后端")]),t._v("："),n("a",{attrs:{href:"https://github.com/mcuking/offline-package-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mcuking/offline-package-admin"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("文件差分工具")]),t._v("："),n("a",{attrs:{href:"https://github.com/Exoway/bsdiff-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Exoway/bsdiff-nodejs"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("从上面有关离线包的阐述中，有心者不难看出其中有个遗漏的问题，那就是当前端的静态资源更新后，客户端中的离线包资源如何更新？难不成要重新发一个安装包吗？那岂不是摒弃了 H5 动态化的特点了么？")]),t._v(" "),n("p",[t._v("而离线包平台就是为了解决这个问题。下面我以 mobile-web-best-practice 这个前端项目为例讲解整个过程：")]),t._v(" "),n("p",[t._v("mobile-web-best-practice 项目对应的离线包名为 main，第一个版本可以如上文所述先预置到客户端安装包里，同时将该离线包上传到离线包管理平台中，该平台除了保存离线包文件和相关信息之外，还会生成一个名为 packageIndex 的 json 文件，即记录所有相关离线包信息集合的文件，该文件主要是提供给客户端下载的。大致内容如下：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module_name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"origin_file_path"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/download/main/07eb239072934103ca64a9692fb20f83"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"origin_file_md5"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ec624b2395a479020d02262eee36efe4"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"patch_file_path"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/download/main/b4b8e0616e75c0cc6f34efde20fb6f36"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"patch_file_md5"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6863cdacc8ed9550e8011d2b6fffdaba"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errorCode"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("其中 data 中就是所有相关离线包的信息集合，包括了离线包的版本、状态、以及文件的 url 地址和 md5 值等。")]),t._v(" "),n("p",[t._v("当 mobile-web-best-practice 更新后，会通过 offline-package-webpack-plugin 插件打包出一个新的离线包。这个时候我们就可以将这个离线包上传到管理平台，此时 packageIndex 中离线包 main 的版本就会更新成 2。")]),t._v(" "),n("p",[t._v("当客户端启动并请求最新的 packageIndex 文件时，发现离线包 main 的版本比本地对应离线包的版本大时，会从离线包平台下载最新的版本，并以此作为查询本地静态资源文件的资源池。")]),t._v(" "),n("p",[t._v("讲到这里读者可能还会有一个疑问，那就是如果前端仅仅是改动了某一处，客户端仍旧需要下载完整的新包，岂不是很浪费流量同时也延长了文件下载的时间？")]),t._v(" "),n("p",[t._v("针对这个问题我们可以使用一个文件差分工具 - bsdiff-nodejs，该 node 工具调用了 c 语言实现的 bsdiff 算法（基于二进制进行文件比对算出 diff/patch 包）。当上传版本为 2 的离线包到管理平台时，平台会与之前保存的版本为 1 的离线包进行 diff ，算出 1 到 2 的差分包。而客户端仅仅需要下载差分包，然后同样使用基于 bsdiff 算法的工具，和本地版本 1 的离线包进行 patch 生成版本 2 的离线包。")]),t._v(" "),n("p",[t._v("到此离线包管理平台大致原理就讲完了，但仍有待完善的地方，例如：")]),t._v(" "),n("ol",[n("li",[t._v("增加日志功能")]),t._v(" "),n("li",[t._v("增加离线包达到率的统计功能")])]),t._v(" "),n("h2",{attrs:{id:"客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),n("p",[t._v("相关项目：")]),t._v(" "),n("p",[n("strong",[t._v("集成离线包库的安卓项目")]),t._v("："),n("a",{attrs:{href:"https://github.com/mcuking/mobile-web-best-practice-container",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mcuking/mobile-web-best-practice-container"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("客户端的离线包库目前仅开发了 android 平台，该库是在 webpackagekit（个人开发的安卓离线包库）基础上进行的二次开发，主要实现了一个多版本文件资源管理器，可以支持多个前端离线包预置到客户端中。其中拦截请求的源码如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OfflineWebViewClient")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebViewClient")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TargetApi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION_CODES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOLLIPOP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  @Override\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" WebResourceResponse "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldInterceptRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("WebView view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WebResourceRequest request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    final String url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    WebResourceResponse resourceResponse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWebResourceResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resourceResponse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldInterceptRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resourceResponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 从本地命中并返回资源\n   * @param url 资源地址\n   */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" WebResourceResponse "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWebResourceResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("String url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      WebResourceResponse resourceResponse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PackageManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resourceResponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("通过对 WebviewClient 类的 shouldInterceptRequest 方法的复写来拦截 http 请求，并从本地查找是否有相应的前端静态资源，如果有则直接返回。")]),t._v(" "),n("h2",{attrs:{id:"部分问题解答"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部分问题解答"}},[t._v("#")]),t._v(" 部分问题解答")]),t._v(" "),n("ol",[n("li",[t._v("离线包是否可以自动更新？")])]),t._v(" "),n("p",[t._v("当前端资源通过 CI 机自动打包后部署到静态资源服务器，那么又如何上传到离线包平台呢？我曾经考虑过当前端资源打包好时，通过接口自动上传到离线包平台。但后来发现可行性不高，因为我们的前端资源是需要经过测试阶段后，通过运维手动修改 docker 版本来更新前端资源。如果自动上传，则会出现离线包平台已经上传了了未经验证的前端资源，而静态资源服务器却没有更新的情况。因此仍需要手动上传离线包。当然读者可以根据实际情况选择合适的上传方式。")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("多 App 情况下如何区分离线包属于哪个 App？\n在上传的离线包填写信息的时候，增加了 appName 字段。当请求离线包列表 json 文件时，在 query 中添加 appName 字段，离线包平台会只返回属于该 App 的离线包列表。")]),t._v(" "),n("li",[t._v("一定要在 App 启动的时候下载离线包吗？\n当然可以做的更丰富些，比如可以选择在客户端连接到 Wi-Fi 的时候，或者从后台切换到前台并超过 10 分钟时候。该设置项可以放在离线包平台中进行配置，可以做成全局有效的设置或者针对不同的离线包进行个性化设置。")]),t._v(" "),n("li",[t._v("如果客户端离线包还没有下载完成，而静态资源服务器已经部署了最新的版本，那么是否会出现客户端展示的页面仍然是旧的版本呢？如果这次改动的是接口请求的变动，那岂不是还会引起接口报错？")])]),t._v(" "),n("p",[t._v("这个大可不必担心，上面的代码中如果 http 请求没有命中任何前端资源，则会放过该请求，让它去请求远端的服务器。因此即使本地离线包资源没有及时更新，仍然可以保证页面的静态资源是最新的。也就是说有一个兜底的方案，出了问题大不了回到原来的请求服务器的加载模式。")]),t._v(" "),n("h2",{attrs:{id:"结束语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),n("p",[t._v("至此整个方案的大致原理已经阐述完了，更多细节问题读者可以参考文中提供的项目链接，所有端的代码都已经托管到了我的 github 上了。")]),t._v(" "),n("p",[t._v("这也算完成了我一个夙愿：实现一套离线包方案并且完全开源出来。最后希望对大家有所帮助～")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/6tlYIR16sCE74hVfMIYbKw",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hybrid App 离线包方案实践"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);