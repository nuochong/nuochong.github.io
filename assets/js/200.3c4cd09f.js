(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{2257:function(a,s,e){"use strict";e.r(s);var t=e(3),v=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("在组件依赖开发中，项目作为依赖库没办法单独直接运行，需要依赖进别的项目执行，这时候最常用的方式就是 "),e("code",[a._v("npm link")]),a._v(" 。但用 "),e("code",[a._v("npm link")]),a._v(" 引入有时候会因为各种问题导致构建或者运行时会报错，此时如果直接将文件复制进依赖目录则能正常运行。对于这样的情况，意外的碰到了一个很适合的解决方案——"),e("a",{attrs:{href:"https://github.com/wclr/yalc",target:"_blank",rel:"noopener noreferrer"}},[a._v("yalc"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"yalc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yalc"}},[a._v("#")]),a._v(" Yalc")]),a._v(" "),e("p",[e("code",[a._v("yalc")]),a._v(" 可以在本地将"),e("code",[a._v("npm包")]),a._v("模拟发布，将发布后的资源存放在一个全局存储中。然后可以通过"),e("code",[a._v("yalc")]),a._v("将包添加进需要引用的项目中。")]),a._v(" "),e("p",[a._v("这时候"),e("code",[a._v("package.json")]),a._v("的依赖表中会多出一个"),e("code",[a._v("file:.yalc/...")]),a._v("的依赖包，这就是 yalc 创建的"),e("code",[a._v("flie:")]),a._v("软链接。同时也会在项目根目录创建一个"),e("code",[a._v("yalc.lock")]),a._v("确保引用资源的一致性。因此，测试完项目还需要执行删除"),e("code",[a._v("yalc")]),a._v("包的操作，才能正常使用。当然，"),e("code",[a._v("yalc")]),a._v("也是支持"),e("code",[a._v("link:")]),a._v("链接方式")]),a._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("NPM:\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i yalc -g\n\nYarn:\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" yalc\n")])])]),e("h2",{attrs:{id:"发布依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布依赖"}},[a._v("#")]),a._v(" 发布依赖")]),a._v(" "),e("p",[a._v("在所开发的依赖项目下执行发布操作")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc publish\n")])])]),e("p",[a._v("此时如果存在"),e("code",[a._v("npm 生命周期")]),a._v("脚本："),e("code",[a._v("prepublish")]),a._v("、"),e("code",[a._v("prepare")]),a._v("、"),e("code",[a._v("prepublishOnly")]),a._v("、"),e("code",[a._v("prepack")]),a._v("、"),e("code",[a._v("preyalcpublish")]),a._v("，会按此顺序逐一执行。如果存在："),e("code",[a._v("postyalcpublish")]),a._v("、"),e("code",[a._v("postpack")]),a._v("、"),e("code",[a._v("publish")]),a._v("、"),e("code",[a._v("postpublish")]),a._v("，也会按此顺序逐一执行。")]),a._v(" "),e("p",[a._v("想要完全禁用脚本执行需要使用")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc publish --no-scripts\n")])])]),e("p",[a._v("此时就已经将依赖发布到本地仓库了。此命令只是发包并不会主动推送。")]),a._v(" "),e("p",[a._v("当有新修改的包需要发布并且推送时，可以使用推送命令快速更新所有依赖")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc publish --push\nyalc push // 简写\n")])])]),e("p",[a._v("参数:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("--changed")]),a._v("，快速检查文件是否被更改")]),a._v(" "),e("li",[e("code",[a._v("--replace")]),a._v("，强制替换包")])]),a._v(" "),e("h2",{attrs:{id:"添加依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[a._v("#")]),a._v(" 添加依赖")]),a._v(" "),e("p",[a._v("进入到项目执行")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("my-package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("可以看到项目中添加了"),e("code",[a._v("yalc.lock")]),a._v("文件，"),e("code",[a._v("package.json")]),a._v("对应的包名会有个地址为"),e("code",[a._v("file:.yalc/")]),a._v("开头的项目。\n也可以使用")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("my-package@version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("将版本锁定，避免因为本地新包推送产生影响。")]),a._v(" "),e("p",[a._v("参数:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("--dev")]),a._v("，将依赖添加进"),e("code",[a._v("dependency")]),a._v("中")]),a._v(" "),e("li",[e("code",[a._v("--pure")]),a._v("，不会影响"),e("code",[a._v("package.json")]),a._v("文件")]),a._v(" "),e("li",[e("code",[a._v("--link")]),a._v("，使用 link 方式引用依赖包，"),e("code",[a._v("yalc add [my-package] --link")])]),a._v(" "),e("li",[e("code",[a._v("--workspace (or -W)")]),a._v("，添加依赖到"),e("code",[a._v("workspace:")]),a._v("协议中")])]),a._v(" "),e("h2",{attrs:{id:"更新依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖"}},[a._v("#")]),a._v(" 更新依赖")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc update\nyalc update "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("my-package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("会根据"),e("code",[a._v("yalc.lock")]),a._v("查找更新所有依赖，当发包后并未主动"),e("code",[a._v("push")]),a._v("，可以用此命令在项目内单独更新依赖。")]),a._v(" "),e("h2",{attrs:{id:"移除依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除依赖"}},[a._v("#")]),a._v(" 移除依赖")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc remove "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("my-package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nyalc remove --all // 移除所有依赖并还原\n")])])]),e("h2",{attrs:{id:"查看仓库信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看仓库信息"}},[a._v("#")]),a._v(" 查看仓库信息")]),a._v(" "),e("p",[a._v("当我们要查看本地仓库里存在的包时")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc installations show\n")])])]),e("p",[a._v("要清理不需要的包时")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yalc installations clean "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("my-package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000039658156",target:"_blank",rel:"noopener noreferrer"}},[a._v("更适普的前端 link 工具 yalc"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=v.exports}}]);