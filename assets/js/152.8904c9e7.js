(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{2105:function(t,a,r){"use strict";r.r(a);var e=r(3),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("很多前端开发者应该都寻找过跨平台的 App 解决方案，包括没有同时独立开发 iOS 和 Android 双端原生 app 的开发者，应该都接触过或者看到过 Google 的 Flutter 框架。我对于 iOS 原生开发与基于 Vue.js 的 web 开发比较熟悉，并在一个正在进行的蓝牙硬件项目中应用了 Flutter 框架，经历的漫长的适应，在本文中我将以 iOS 原生开发者与 web 开发者的视角看待 Flutter 框架，简单罗列 Flutter 的优势与缺点。")]),t._v(" "),r("h2",{attrs:{id:"flutter-优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-优点"}},[t._v("#")]),t._v(" Flutter 优点")]),t._v(" "),r("p",[t._v("Flutter 的优点非常明显，如果你选择一个跨平台框架，与众多基于 html 的跨平台框架相比，Flutter 绝对是体验最好，性能与构建思路几乎最接近原生开发的框架。")]),t._v(" "),r("h3",{attrs:{id:"性能强大-流畅"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能强大-流畅"}},[t._v("#")]),t._v(" 性能强大，流畅")]),t._v(" "),r("p",[t._v("Flutter 对比 weex 和 react native 相比，性能的强大是有目共睹的。基于 dom 树渲染原生组件，很难与直接在原生视图上绘图比肩性能，Google 作为一个轮子大厂，直接在两个平台上重写了各自的 UIKit，对接到平台底层，减少 UI 层的多层转换，UI 性能可以比肩原生，这个优势在滑动和播放动画时尤为明显。")]),t._v(" "),r("h3",{attrs:{id:"路由设计优秀"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由设计优秀"}},[t._v("#")]),t._v(" 路由设计优秀")]),t._v(" "),r("p",[t._v("Flutter 的路由传值非常方便，push 一个路由，会返回一个 Future 对象（也就是 Promise 对象），使用 await 或者.then 就可以在目标路由 pop，回到当前页面时收到返回值。这个反向传值的设计基本是甩了微信小程序一条街了。弹出 dialog 等一些操作也是使用的路由方法，几乎不用担心出现传值困难")]),t._v(" "),r("h3",{attrs:{id:"单例模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),r("p",[t._v("Flutter 支持单例模式，单例模式的实现也非常简单。单例模式很好的解决了一些问题。相比之下，js 的单例则并不是一个真正的单例，或者说不是一个简单的单例，这也是受限于 js 所运行的环境。单例模式并不总是合理的，容易被滥用。但是在 App 的初期开发中，往往一个容易实现的单例可以帮助我们快速完成一些逻辑的搭建。")]),t._v(" "),r("h3",{attrs:{id:"优秀的动画设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优秀的动画设计"}},[t._v("#")]),t._v(" 优秀的动画设计")]),t._v(" "),r("p",[t._v("Flutter 的动画简单到不可思议，动画对象会根据屏幕刷新率每秒产生很多个（一般是 60 个）浮点数，只需要将一个组件属性通过部件（Tween）关联到动画对象上，Flutter 会确保在每一帧渲染正确的组件，从而形成连贯的动画。这种十分暴力的操作在 Flutter 上却看不到明显的卡顿，这也是 Flutter 的一个魔力所在。相比之下其他跨平台框架几乎不能设计动画……往往会遭遇非常严重的性能问题。")]),t._v(" "),r("h3",{attrs:{id:"ui-跨平台稳定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui-跨平台稳定"}},[t._v("#")]),t._v(" UI 跨平台稳定")]),t._v(" "),r("p",[t._v("Google 直接在两个平台上在底层重写了 UIKit，不依赖于 Css 等外部解释器，几乎不存在 UI 表达不理想，渲染不正常的情况，可以获得非常稳定的 UI 表达效果。Css 换个浏览器就有不同的表现，基于 Css 的跨平台框架很难获得稳定的 UI 表现。")]),t._v(" "),r("h3",{attrs:{id:"可选静态的语言-语言特性优秀"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可选静态的语言-语言特性优秀"}},[t._v("#")]),t._v(" 可选静态的语言，语言特性优秀")]),t._v(" "),r("p",[t._v("Dart 是一个静态语言，这也是相对于 js 的一个优势。Dart 可以被编译成 js，但是看起来更像 java。静态语言可以避免错误，获得更多的编辑器提示词，极大的增加可维护性。很多 js 库也已经用 ts 重写了，Vue3.0 的底层也将全部使用 ts 编写，静态语言的优势不言而喻。")]),t._v(" "),r("h2",{attrs:{id:"flutter-缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-缺点"}},[t._v("#")]),t._v(" Flutter 缺点")]),t._v(" "),r("h3",{attrs:{id:"假装跨平台-躲不开原生代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#假装跨平台-躲不开原生代码"}},[t._v("#")]),t._v(" 假装跨平台，躲不开原生代码")]),t._v(" "),r("p",[t._v("这是最大的问题，跨平台框架说白了就是 UI 跨平台，最后还是在原生平台运行，本来两个平台就有天壤之别，一套代码就想吃掉 iOS 和 Android 在实际应用之中其实根本就不现实。Flutter 具有与原生代码互相调用的能力固然非常科学，但是问题反而显得更加明显——我一个前端工程师上哪里去知道什么是 UIViewController，什么是 Activity 呢？我要是双端都熟悉，学习 Flutter 就显得很没有必要。这是一个很矛盾的点，特别是在团队里，只有几个前端突然想学 Flutter，是绝对做不来大项目的，如果有原生开发者，那就没必要搞 Flutter 了。")]),t._v(" "),r("h3",{attrs:{id:"组合而不是继承的思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组合而不是继承的思路"}},[t._v("#")]),t._v(" 组合而不是继承的思路")]),t._v(" "),r("p",[t._v("Flutter 提倡“组合”，而不是“继承”。在 iOS 开发中，我们经常会继承 UIView，重写 UIView 的某个生命周期函数，再添加一些方法和属性，来完成一个自定义的 View。但是在 Flutter 中这些都是不可能的——属性都是 final 的，例如你继承了了一个 Container，你是不能在它的生命周期中修改他的属性的。你始终需要嵌套组合几种 Widget，例如 Row，Container，ListView 等 Widget。这种方法非常不符合直觉，初学时很难想明白如何构建一个完整的组件。")]),t._v(" "),r("h3",{attrs:{id:"widget-的类型难以选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#widget-的类型难以选择"}},[t._v("#")]),t._v(" Widget 的类型难以选择")]),t._v(" "),r("p",[t._v("Flutter 的 Widget 分为 StatefulWidget 和 StatelessWidget 两种，一种是带状态的一种是不带状态的，刚开发的时候很难想明白用哪个，因为 StatelessWidget 也能存值，其实区别就在于框架重构 UI 的时候会使用 State 来重构，如果是 StatelessWidget，暂时存进去的值就没了。但是问题远不止这么简单，好在只是有点麻烦，并不影响产品性能。")]),t._v(" "),r("h3",{attrs:{id:"糟糕的-ui-控件-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#糟糕的-ui-控件-api"}},[t._v("#")]),t._v(" 糟糕的 UI 控件 API")]),t._v(" "),r("p",[t._v("虽然 google 尽可能的让我们通过构造函数定制化 Widget，但是也难免有遗漏的。例如，又一次我想修改一个 Appbar 的高度，居然没有找到关于高度的属性，通过阅读源码发现，高度是写死（const）的。上文已经说过，无法通过生命周期来改变组件属性，自己写 Appbar 显得非常没必要，毕竟我还是想使用 Appbar 的各种方便的功能。最后我只能把他的源码全部复制出来，直接修改高度来使用。初学框架，和一些初级开发者是不可能有迅速阅读源码的能力的（作为框架也不应该产生如此问题）。一些定制化的 UI 的 Api 设计经常有缺失，好在我已经基本习惯了。除了 Appbar 这种复杂的组件，自己写一个小组件也并不费事。")]),t._v(" "),r("h3",{attrs:{id:"糟糕的资源管理设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#糟糕的资源管理设计"}},[t._v("#")]),t._v(" 糟糕的资源管理设计")]),t._v(" "),r("p",[t._v("这里是最蠢的，Flutter 支持动态加载不同分辨率的图片，但是目录设计太鬼畜了。简单的说，Sketch 导出的多分辨率资源，几乎不可能直接拖到 Flutter 里用，极其，极其，麻烦。")]),t._v(" "),r("h3",{attrs:{id:"调试工具的原生支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调试工具的原生支持"}},[t._v("#")]),t._v(" 调试工具的原生支持")]),t._v(" "),r("p",[t._v("由于 Flutter 独有的方案，所以在 IOS 与 Android 中无法使用完整的开发者模式进行调试。")]),t._v(" "),r("h3",{attrs:{id:"不完全支持原生-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不完全支持原生-api"}},[t._v("#")]),t._v(" 不完全支持原生 API")]),t._v(" "),r("p",[t._v("不支持调用所有原生的 api ，如果调用，需要编写各平台语言组件配合 flutter 调用。部分现有 api 依赖于原生 api，若各端原生 api 进行调整，需要 Flutter 团队进行二次调整，开发者不能及时进行更新。")]),t._v(" "),r("h2",{attrs:{id:"补充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),r("p",[t._v("闲鱼团队在 2018 年开始使用 Flutter ，京东金融团队也使用 Flutter ，但就实际情况来说， 混合 Flutter 的闲鱼性能体验非常的不好，还有京东金融，这两款软件几乎是所有应用中最卡的，实际和理论差别太大，这其中肯定还有非常多的影响因素是我们所看不到的，而且是无法避免的。混合模式下包的体积和其它跨端方案没有任何优势，而且还需要学习 Dart 语言。最近闲鱼宣布放弃 Flutter 支持后，转投 H5，新版本的使用流程性有了较大幅度的提升。")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("Flutter 主要的坑就在于需要非常了解原生的环境，其实跨平台的框架都是如此，想要通过跨平台的 API 就拿下双端的开发任务，对认真学习的原生开发者来说也是不公平的。主要的优势则在于动画流畅，很多开发者反应比原生安卓还流畅（存疑），至少在 iOS 上是看不到卡顿的，安卓上动画也很稳定，性能上展示了 Google 的硬实力")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/138798310",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用者必知的 Flutter 优缺点"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);