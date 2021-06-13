(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{2183:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在一个项目中，我们会用 HRM 热更新来让我们修改的代码在浏览器中快速看到效果，快速验证我们的代码是否正确。")]),s._v(" "),n("p",[s._v("当项目开始变大，为了提效、跨项目复用，我们会不可避免的需要开始去拆分一些通用的 NPM 模块。")]),s._v(" "),n("p",[s._v("对于 NPM 包的调试方式，传统的方法是下面这样子的：")]),s._v(" "),n("h2",{attrs:{id:"一、直接修改-dependencies"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、直接修改-dependencies"}},[s._v("#")]),s._v(" 一、直接修改 dependencies")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npm-test"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:实际包地址"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("真正的纯手工 😂，上线后还需要时刻记得修改 dependencies，现在应该也没什么人用这种方法了，不细讲了。")]),s._v(" "),n("h2",{attrs:{id:"二、npm-link"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、npm-link"}},[s._v("#")]),s._v(" 二、npm link")]),s._v(" "),n("p",[s._v("官方文档"),n("sup",{staticClass:"footnote-ref"},[n("a",{attrs:{href:"#fn1",id:"fnref1"}},[s._v("[1]")])])]),s._v(" "),n("p",[s._v("原理：将调试的包跟项目中做一个软链")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" 对应npm包地址\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n")])])]),n("p",[s._v("之后可以在命令行中看到如下日志，则说明 npm 库已经链接到你本地 node_modules 下面了")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("✔ Installed "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" packages\n✔ Linked "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" latest versions\n✔ Run "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" scripts\n✔ All packages installed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("used 213ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("network 209ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", speed "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".25KB/s, json "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("910B"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", tarball 0B"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" /Users/beidan/.nvm/versions/node/v14.5.0/lib/node_modules/npm-test@ -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /对应的包实际地址\n")])])]),n("p",[s._v("之后只需要将项目对应的包链到你本地的全局地址即可")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" 项目地址\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" npm-test\n")])])]),n("p",[s._v("同样的，我们可以在命令行中看到如下日志，则说明项目中的包也已经链接成功")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" /对应的包实际地址@ -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /Users/beidan/.nvm/versions/node/v14.5.0/lib/node_modules/npm-test\n")])])]),n("p",[s._v("对于 Npm link 方式，「因为 Npm 和 项目属于不同的项目，它们有自己的 node_modules」,如果组件和应用都使用了同一个依赖，它们会在各自的 node_modules 去查找，如果这个依赖不支持多例，应用就会异常。如果 npm 的编译规则 和应用的编译规则不匹配，也同样会出问题。如下：")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("hooks can only be called inside the body of a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" component\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("NPM 组件 和你的项目使用了 React Hooks 的情况，React 会报致命异常。（原因是 React Hooks 依赖上下文，所以全局只能使用一个，即使是版本完全一样的，官方推荐的解决方法 React 错误提示"),n("sup",{staticClass:"footnote-ref"},[n("a",{attrs:{href:"#fn2",id:"fnref2"}},[s._v("[2]")])]),s._v("）")])]),s._v(" "),n("h2",{attrs:{id:"三、更好的调试方式-yalc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、更好的调试方式-yalc"}},[s._v("#")]),s._v(" 三、更好的调试方式：yalc")]),s._v(" "),n("p",[s._v("官方文档"),n("sup",{staticClass:"footnote-ref"},[n("a",{attrs:{href:"#fn3",id:"fnref3"}},[s._v("[3]")])])]),s._v(" "),n("p",[s._v("yalc 将组件的包依赖提升至应用中，在全局添加组件依赖，在应用下新建文件拉取依赖，即使有共同的依赖也会从应用的 node_modules 去查找。"),n("strong",[s._v("「使用 yalc 可以避免上面 npm link 的依赖问题」")])]),s._v(" "),n("figure",[n("img",{attrs:{src:a(617),alt:""}}),n("figcaption",[s._v("章节配图")])]),s._v(" "),n("p",[s._v("使用起来也非常方便：")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i yalc -g\nyalc publish // 在对应的 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" 包中发布\n\nyalc "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" // 在对应的项目中 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" 对应的包\n")])])]),n("h2",{attrs:{id:"四、实际应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、实际应用"}},[s._v("#")]),s._v(" 四、实际应用")]),s._v(" "),n("p",[s._v("我们期望的工作流程是这样子的。")]),s._v(" "),n("figure",[n("img",{attrs:{src:a(618),alt:""}}),n("figcaption",[s._v("章节配图")])]),s._v(" "),n("p",[s._v("在灰色区域，期望是自动化的，而不是写一下代码，重新 build 一下, 那自动监听更新文件可以用一下 nodemon 。")]),s._v(" "),n("p",[s._v("nodemon 可以来监视文件更改并执行对应的命令。")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("nodemon\n --ignore dist/ "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略目录")]),s._v("\n --ignore node_modules/\n --watch projects "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 观察目录")]),s._v("\n -C "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只在变更后执行，首次启动不执行命令")]),s._v("\n -e ts,html,less,scss "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监控指定后缀名的文件")]),s._v("\n --debug "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调试")]),s._v("\n -x "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build && yalc push"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义命令")]),s._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("可以通过 nodemon -h 查看更多命令")])]),s._v(" "),n("p",[s._v("结合 yalc ，我们来重新改造下 npm 包调试的流程。")]),s._v(" "),n("h3",{attrs:{id:"一、在-npm-包中增加命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、在-npm-包中增加命令"}},[s._v("#")]),s._v(" 一、在 npm 包中增加命令")]),s._v(" "),n("p",[s._v("npm 命令我写过一篇文章，不了解可以看一下： 你要知道的 Npm Script 都在这里")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"打包包的命令"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"async"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build && yalc push"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"nodemon --ignore dist/ --ignore node_modules/ --watch src/ -C -e ts,tsx,scss --debug -x 'tnpm run async'\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动监听")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),n("h3",{attrs:{id:"二、项目中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、项目中"}},[s._v("#")]),s._v(" 二、项目中")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yalc "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" 包名\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start\n")])])]),n("p",[s._v("这样子，在 npm 包中修改，在项目中可以快速看到结果，快速验证了，并且不会出现 npm link 中各种奇奇怪怪的问题。")]),s._v(" "),n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/oVtC9-dxStqICFPhSrALKQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("居然有比 npm link 更好的调试？"),n("OutboundLink")],1)]),s._v(" "),n("hr",{staticClass:"footnotes-sep"}),s._v(" "),n("section",{staticClass:"footnotes"},[n("ol",{staticClass:"footnotes-list"},[n("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[n("p",[n("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/commands/npm-link",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1),s._v(" "),n("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[n("i",{staticClass:"iconfont iconback7"})])])]),s._v(" "),n("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[n("p",[n("a",{attrs:{href:"https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html%5D",target:"_blank",rel:"noopener noreferrer"}},[s._v("React 错误提示"),n("OutboundLink")],1),s._v(" "),n("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[n("i",{staticClass:"iconfont iconback7"})])])]),s._v(" "),n("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[n("p",[n("a",{attrs:{href:"https://github.com/wclr/yalc",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1),s._v(" "),n("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[n("i",{staticClass:"iconfont iconback7"})])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);