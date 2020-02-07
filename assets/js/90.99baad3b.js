(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{760:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"写在开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在开头"}},[t._v("#")]),t._v(" 写在开头")]),t._v(" "),a("p",[t._v("由于业务调整需要，最近接手了公司内部云平台的项目 H。看了代码，开发了几个需求，我的第一感觉是，H 项目真的是严肃又有历史感！因为它经过了好多位前端同学多年的开发与维护，“前任”小伙伴们在里面花费了大量的时间与精力。这里面涉及到的技术栈也错综复杂，包含了 react、webpack、reflux、mobx 以及不少手动封装的类库和组件，日积月累，已经包含了十几个子项目，代码体积可见一斑。")]),t._v(" "),a("h2",{attrs:{id:"发现问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发现问题"}},[t._v("#")]),t._v(" 发现问题")]),t._v(" "),a("p",[t._v("随着时间的迁移和代码体积越来越庞大，开发体验的问题也就随之出现。比如，使用 webpack-dev-server 启动服务时，你可能需要等待 90s；又比如，改一行代码调试 bug 时，你可能需要等待 35s。这是在 8g 运行内存的 MacBook 上面的开发体验，如果你的电脑运行内存比这个低的话，可能会更久…")]),t._v(" "),a("p",[t._v("额…，启动了一下项目，106 秒…（综合一下更高的电脑配置，这里统一按 90s 计算）")]),t._v(" "),a("p",[t._v("想象一下，改一个小 bug，启动 devServer，等 90s，加一行代码保存，再等 35s，果断不能忍 🙅‍♂️。")]),t._v(" "),a("p",[t._v("怀着内心的崇敬，以及小心谨慎的态度，我决定对它优化一波。")]),t._v(" "),a("h2",{attrs:{id:"解决思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),a("p",[t._v("一方面，H 项目的 webpack 配置是一个典型的多入口类型，每次打包出来的代码包含了十几个子项目模块。但是一般的开发需求往往集中在一个子项目中去开发，所以只需要打包某个具体的子项目就满足了。")]),t._v(" "),a("p",[t._v("另一方面，项目构建打包的大部分时间花费在了 loader 上面，其中主要是 babel-loader 和 eslint-loader，如果把 loader 编译的结果缓存下来应该能有效缩短构建时间。")]),t._v(" "),a("p",[t._v("OK，有了思路，下面便开始对症下药。")]),t._v(" "),a("h2",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),a("p",[a("strong",[t._v("第一次优化")])]),t._v(" "),a("p",[t._v("出于保密考虑，下文中插图将统一使用 demo。")]),t._v(" "),a("p",[t._v("首先先来看一下代码的目录结构。")]),t._v(" "),a("p",[t._v("这里的 projectA、projectB、projectC 相当于项目 H 中的各个子项目，他们之间相互没有直接的业务关系，但是共用了一些封装的组件、第三方依赖、公共样式和其他配置。一般来说，我们开发业务需求的时候，往往集中在一个项目中，所以并没有必要打包所有项目。")]),t._v(" "),a("p",[t._v("那我们改进的思路是把项目的多个打包入口搞成动态的即可，动态打包的最终理想效果是，"),a("code",[t._v("npm start + 项目名")]),t._v("，webpack 知道打包某个项目或所有项目。")]),t._v(" "),a("p",[t._v("第一步，把 webpack 打包的入口配置拎出来，这里为"),a("code",[t._v("entry.config.js")])]),t._v(" "),a("p",[t._v("此外，"),a("code",[t._v("devServer")]),t._v("需要知道，具体打包哪个项目？所以，这里用一个 entry.js 文件来保存环境变量，即打包的项目名，就一行代码，")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entryName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'projectA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("第三步，执行脚本（dev 用于本地构建， build 用于生产环境打包）来修改"),a("code",[t._v("entry.js")]),t._v("，这里以"),a("code",[t._v("devServer")]),t._v("本地构建为例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" projectName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./config/entry.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("exports.entryName = '")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("projectName"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" exec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child_process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execSync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm run serve'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stdio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inherit'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("dev.js 和 build.js 为测试和生产环境的打包脚本，接收打包的项目名并写入"),a("code",[t._v("entry.js")]),t._v("，然后启动"),a("code",[t._v("devServer")]),t._v("或者"),a("code",[t._v("npm run build")]),t._v("。")]),t._v(" "),a("p",[t._v("修改 package.json 文件用来执行这两个脚本，")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node config/dev.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node config/build.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service lint"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("最后一步，配置 webpack 打包入口起点。（做 demo 使用的是 vue-cli，所以只需要简单修改下 vue.config.js，webpack 配置同理修改即可）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pagesConfigObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./config/entry.config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pagesConfigObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lintOnSave"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然后看下完整的 entry.config.js,")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entryObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./entry'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" configObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目A")]),t._v("\n  projectA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/projects/projectA/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/projectA.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'projectA.html'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目B")]),t._v("\n  projectB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/projects/projectB/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/projectB.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'projectB.html'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目C")]),t._v("\n  projectC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/projects/projectC/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/projectC.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'projectC.html'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entryObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entryName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" configObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("entryObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entryName"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" configObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entryObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("到了这里，第一次的优化就完了。")]),t._v(" "),a("p",[t._v("总结一下，以构建子项目 projectA 为例。"),a("code",[t._v("npm start projectA")]),t._v("，执行 dev.js 脚本，把 projectA 传给脚本。"),a("code",[t._v("process.argv[2]")]),t._v("拿到项目名称，写入到 entry.js 文件。已经可以动态获取想要打包的项目名称了，然后通过 entry.config.js 动态导出打包入口配置，修改 webpack 配置便达到了目的。")]),t._v(" "),a("p",[t._v("这里是第一次优化的 demo")]),t._v(" "),a("p",[a("strong",[t._v("第二次优化")])]),t._v(" "),a("p",[t._v("第一次优化完，虽然达到了目的，但是迟迟没有提 pr。原因有二，一是写文件的操作和使用"),a("code",[t._v("child_process")]),t._v("的方式让我感觉姿势不是很优雅；二是我们可能需要处理 stdout 和 stderr 展示到 terminal 中。困惑之余咨询了一下文蔺，后面又改进了一版。")]),t._v(" "),a("p",[t._v("这里以"),a("code",[t._v("npm start")]),t._v("为例，执行了 "),a("a",{attrs:{href:"http://start.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("start.sh"),a("OutboundLink")],1),t._v(" 脚本，并通过 cross-env 保存环境变量，即子项目名。")]),t._v(" "),a("p",[t._v("然后，从进程中获取动态的子项目名，如果没有子项目名，则默认打包所有子项目。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" entryName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APP_ENTRIES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("相比于第一次，去掉了不必要的写文件操作和使用子进程，优雅多了。")]),t._v(" "),a("p",[t._v("好了，试一下项目 H 的构建速度，这里只启动最常用的用户端为例，")]),t._v(" "),a("p",[t._v("这里是第二次优化的 demo")]),t._v(" "),a("p",[a("strong",[t._v("第三次优化")])]),t._v(" "),a("p",[t._v("40 多秒，舒服了一点，暂且认为时间缩短了一半，为什么还这么慢？看了一下耗时，babel-loader 和 eslint-loader 显然十分耀眼。")]),t._v(" "),a("p",[t._v("由于业务需求逐渐增加，代码体积越来越大，每次执行构建的时候，babel-loader 和 eslint-loader 会把所有的文件都重复编译一遍，显然有些吃力。")]),t._v(" "),a("p",[t._v("这样的重复工作是否可以被缓存下来呢？答案肯定是可以的，其实大部分 Loader 都提供了 cache 配置项，比如在 babel-loader 中，可以通过设置 cacheDirectory 来开启缓存，babel-loader 就会将每次的编译结果写进硬盘（默认 node_modules/.cache/babel-loader）。")]),t._v(" "),a("p",[t._v("除此之外，还可以使用 cache-loader， 这也是我在项目中采用的方案。它所做的事情很简单， babel-loader 开启 cache 后做的事情，将 loader 的编译结果写入硬盘（默认 node_modules/.cache ），再次构建如果文件没有发生变化则会直接拉取缓存。")]),t._v(" "),a("p",[t._v("使用很简单，如官方 demo 所示，只需要把它放在代价高昂的 loader 的最前面即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cache-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("OK，再次感受一下项目 H 的构建速度，以只启动最常用的用户端为例，")]),t._v(" "),a("p",[t._v("17 秒，这样的构建速度我认为还能接受，感觉两个字，通畅！")]),t._v(" "),a("h2",{attrs:{id:"写在结尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在结尾"}},[t._v("#")]),t._v(" 写在结尾")]),t._v(" "),a("p",[t._v("关于此次优化，一是通过环境变量动态构建子项目，二是将 loader 的编译结果缓存，最终缩短了 60%以上的构建时间，大大提升了开发体验。然而，随着业务需求的增加，构建时间肯定还会越来越长。我也在思考，是否可以更加细化的进行构建打包，具体到模块甚至是组件呢？后续有待研究…")]),t._v(" "),a("p",[t._v("需求不息，优化不止，希望能给优化开发体验、提升构建速度的小伙伴们一个参考。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/f8boF_R2cyMMDTjyv7jHKA",target:"_blank",rel:"noopener noreferrer"}},[t._v("记一次 webpack 构建提速"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);