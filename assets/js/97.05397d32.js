(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1193:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在 Node.js 中，模块是一个库或框架，也是一个 Node.js 项目。Node.js 项目遵循模块化的架构，当我们创建了一个 Node.js 项目，意味着创建了一个模块，这个模块的描述文件，被称为 package.json。\n我之前看别人项目中 package.json 文件的"),a("code",[s._v("scripts")]),s._v("这样写：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rimraf \\"config/.conf.json\\" && rimraf \\"src/next.config.js\\" && cpx \\".conf.json\\" \\"config/\\" && nodemon server/index.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clean"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rimraf ./dist && mkdir dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prebuild"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run clean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack"')]),s._v("\n")])])]),a("p",[s._v("当时看的有点懵， 于是又补了下相关知识， 发现原来 package.json 有很多地方被我们忽略了呀， 如果有道友和我一样有点懵的话， 本文不容错过。")]),s._v(" "),a("h2",{attrs:{id:"bin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bin"}},[s._v("#")]),s._v(" bin")]),s._v(" "),a("p",[s._v("它是一个命令名和本地文件名的映射。在安装时，如果是全局安装，npm 将会使用符号链接把这些文件链接到 prefix/bin，如果是本地安装，会链接到./node_modules/.bin/。\n通俗点理解就是我们全局安装， 我们就可以在命令行中执行这个文件， 本地安装我们可以在当前工程目录的命令行中执行该文件。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gynpm"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./bin/index.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("这个 index.js 文件的头部必须有这个"),a("code",[s._v("#!/usr/bin/env node")]),s._v("节点， 否则脚本将在没有节点可执行文件的情况下启动。")])]),s._v(" "),a("h2",{attrs:{id:"小实验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小实验"}},[s._v("#")]),s._v(" 小实验")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("npm init -y")]),s._v("创建一个 package.json 文件。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mason"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("在 package.json 的同级目录新建 index.js 文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env node")]),s._v("\n\nconsole.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cool'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("然后在项目目录下执行：mac 下："),a("code",[s._v("sudo npm i -g")]),s._v(", window 下："),a("code",[s._v("npm i -g")]),s._v("接下来你在任意目录新开一个命令行， 输入"),a("code",[s._v("mason")]),s._v("， 你讲看到\n"),a("code",[s._v("cool")]),s._v("字段。\n不知道通过这个小实验能不能帮助大家更好的理解这个"),a("code",[s._v("bin")]),s._v("的作用。像我们常用的"),a("code",[s._v("vue-cli")]),s._v("，"),a("code",[s._v("create-react-app")]),s._v("等都是通过 bin 属性将命令映射到了全局上。")]),s._v(" "),a("h2",{attrs:{id:"main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main"}},[s._v("#")]),s._v(" main")]),s._v(" "),a("p",[s._v("main 很重要， 它是我们项目的主要入口。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.js"')]),s._v("\n")])])]),a("p",[s._v("像这样， 我们项目就会以根目录下的 app.js 文件作为我们的项目入口文件了。")]),s._v(" "),a("h2",{attrs:{id:"scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[s._v("#")]),s._v(" scripts")]),s._v(" "),a("p",[s._v("npm 允许在 package.json 文件里面，使用 scripts 字段定义脚本命令。 优点： 项目的相关脚本，可以集中在一个地方。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行npm run test即可。\n")])])]),a("p",[s._v("可以利用 npm 提供的很多辅助功能。\nnpm 脚本的原理非常简单。每当执行 npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。\n比较特别的是，npm run 新建的这个 Shell，会将当前目录的 node_modules/.bin 子目录加入 PATH 变量，执行结束后，再将 PATH 变量恢复原样。\n这意味着，当前目录的 node_modules/.bin 子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写 mocha test 就可以了。")]),s._v(" "),a("h2",{attrs:{id:"通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[s._v("#")]),s._v(" *通配符")]),s._v(" "),a("p",[a("code",[s._v("*")]),s._v("表示任意文件名，"),a("code",[s._v("**")]),s._v("表示任意一层子目录。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jshint *.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jshint **/*.js"')]),s._v("\n")])])]),a("p",[s._v("如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tap test/\\*.js"')]),s._v("\n")])])]),a("h2",{attrs:{id:"脚本传参符号：–"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本传参符号：–"}},[s._v("#")]),s._v(" 脚本传参符号：–")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --mode=development --open --iframe=true "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("h2",{attrs:{id:"脚本执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本执行顺序"}},[s._v("#")]),s._v(" 脚本执行顺序")]),s._v(" "),a("p",[s._v("并行执行（即同时的平行执行），可以使用"),a("code",[s._v("&")]),s._v("符号")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script1.js "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script2.js\n")])])]),a("p",[s._v("继发执行（即只有前一个任务成功，才执行下一个任务），可以使用"),a("code",[s._v("&&")]),s._v("符号")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script1.js "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run script2.js\n")])])]),a("h2",{attrs:{id:"脚本钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本钩子"}},[s._v("#")]),s._v(" 脚本钩子")]),s._v(" "),a("p",[s._v("npm 脚本有 pre 和 post 两个钩子， 可以在这两个钩子里面，完成一些准备工作和清理工作\neg:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clean"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rimraf ./dist && mkdir dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prebuild"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run clean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack"')]),s._v("\n")])])]),a("p",[s._v("npm 默认提供下面这些钩子:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("prepublish,postpublish\npreinstall,postinstall\npreuninstall,postuninstall\npreversion,postversion\npretest,posttest\nprestop,poststop\nprestart,poststart\nprerestart,postrestart\n")])])]),a("h2",{attrs:{id:"拿到-package-json-的变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拿到-package-json-的变量"}},[s._v("#")]),s._v(" 拿到 package.json 的变量")]),s._v(" "),a("p",[s._v("npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。\n首先，通过 npm"),a("em",[s._v("package")]),s._v("前缀，npm 脚本可以拿到 package.json 里面的字段。比如，下面是一个 package.json。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"view"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node view.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("我们可以在自己的 js 中这样：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.2.5")]),s._v("\n")])])]),a("h2",{attrs:{id:"常用脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用脚本"}},[s._v("#")]),s._v(" 常用脚本")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clean"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rimraf dist/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本地搭建一个 HTTP 服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http-server -p 9090 dist/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打开浏览器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"open:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"opener http://localhost:9090"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实时刷新")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"livereload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"live-reload --port 9091 dist/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构建 HTML 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build:html"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jade index.jade > dist/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只要 CSS 文件有变动，就重新执行构建")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch:css"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"watch 'npm run build:css' assets/styles/\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只要 HTML 文件有变动，就重新执行构建")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch:html"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"watch 'npm run build:html' assets/html\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 部署到 Amazon S3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy:prod"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s3-cli sync ./dist/ s3://example-com/prod-site/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构建 favicon")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build:favicon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node scripts/favicon.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("h2",{attrs:{id:"介绍几个在-npm-脚本中好用的模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍几个在-npm-脚本中好用的模块"}},[s._v("#")]),s._v(" 介绍几个在 npm 脚本中好用的模块")]),s._v(" "),a("p",[a("strong",[s._v("cpx 全局复制")])]),s._v(" "),a("p",[s._v("一个很好用的模块， 可以监视全局文件变化， 并将其复制到我们想要的目录\n我们使用 npm 安装就可以在 npm 的脚本中使用了：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"copy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpx '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(".conf.json"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("config/"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(' "')]),s._v("\n")])])]),a("p",[s._v("这样我们运行"),a("code",[s._v("npm run copy")]),s._v("就可以将根目录下的"),a("code",[s._v(".conf.json")]),s._v("文件拷贝到"),a("code",[s._v("config")]),s._v("文件夹下了, 如果没有 config 文件夹就会新建一个。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("cpx "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*.{html,png,jpg}"')]),s._v(" app --watch\n")])])]),a("p",[s._v("当 src 目录下的任意.html, .png, .jpg 等文件发生变化就拷贝到 app 目录下。\n"),a("strong",[s._v("cross-env 能跨平台地设置及使用环境变量")])]),s._v(" "),a("p",[s._v("大多数情况下，在 windows 平台下使用类似于: NODE_ENV=production 的命令行指令会卡住，windows 平台与 POSIX 在使用命令行时有许多区别（例如在 POSIX，使用$ENV_VAR,在 windows，使用%ENV_VAR%。。。）\ncross-env 让这一切变得简单，不同平台使用唯一指令，无需担心跨平台问题:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production node server/index.js"')]),s._v(",\n")])])]),a("p",[a("strong",[s._v("dependencies 和 devDependencies")]),s._v("\n这两个主要就是存放我们项目依赖的库的地方了， devDependencies 主要是存放用于本地开发的， dependencies 会在我们开发的时候带到线上。\n通过"),a("code",[s._v("npm i xxx -S")]),s._v("会放在 dependencies，"),a("code",[s._v("npm i xxx -D")]),s._v("会放在 devDependencies。所以我们在装包的时候一定要考虑这个包在线上是否用的到， 不要全都放到 dependencies 中，增加我们打包的体积和效率。")]),s._v(" "),a("h2",{attrs:{id:"peerdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies"}},[s._v("#")]),s._v(" peerDependencies")]),s._v(" "),a("p",[s._v("我们在一些项目的 package.json 中看到这个属性， 它主要是考虑兼容问题，通俗点理解， 我们通过这个属性可以告诉要使用我们这个模块的人：\n你要使用我， 最好把 xxx1, xxx2 也带上， 不然我可能会给你带来麻烦的。")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"peerDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"xxx1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"xxx2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这样在装包的时候同时也会， 带上 xxx1 和 xxx2 这两个包。\n个人觉得比较重要的就是这几个了。还有一些， 像："),a("code",[s._v("author, version, keywords, description")]),s._v("这些就很好理解了。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/_6kcZ5eGJYGkegGTm3PcOA",target:"_blank",rel:"noopener noreferrer"}},[s._v("你真的懂 package.json 吗"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);