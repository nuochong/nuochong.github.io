(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{2084:function(v,t,_){"use strict";_.r(t);var a=_(3),i=Object(a.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),a("p",[v._v("原本只是想简单的聊一下代码格式化的问题，无奈本文拖沓了很久，在此期间，我又思考了很多，我越来越觉得代码格式化是一门艺术。为了衬托“艺术”二字，可能叫“代码美化”更贴切一点，但是本文的深度远没有标题那么宏大。")]),v._v(" "),a("p",[v._v("在我看来，代码质量不仅体现在逻辑上，也要体现在形式上。尤其前端代码，在日渐复杂的单页面开发中，代码格式化不仅是为了美观，也是为了更好的阅读及检查。关于代码的格式化并没有统一的标准，每个人都有自己的见解，所以本文的目的以探讨和推荐为主。")]),v._v(" "),a("p",[v._v("可能很少有人会去考虑这方面的问题，毕竟美化插件都是现成的，比如常用的 Prettier，只要一个快捷键就可以迅速格式化，但是代码格式化插件的标准并不一定是最好的。")]),v._v(" "),a("p",[v._v("本文范例主要以 Angular 为主，但是代码美化的建议同样适用于 React 和 Vue。")]),v._v(" "),a("h2",{attrs:{id:"每行代码多少字符合适"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每行代码多少字符合适"}},[v._v("#")]),v._v(" 每行代码多少字符合适？")]),v._v(" "),a("p",[v._v("关于代码字符数一直是一个争论不休的问题。在 Python 编码风格指导(PEP8) 规定了每行不超过 80 个字符。Prettier 默认也是 80 个字符。")]),v._v(" "),a("p",[v._v("赞成这条规范的人认为 80 个字符紧凑美观，在大屏显示器也可以分多栏显示。如下图所示：")]),v._v(" "),a("figure",[a("img",{staticClass:"md-image",attrs:{src:_(633),alt:""}}),a("figcaption",[v._v("An image")])]),v._v(" "),a("p",[v._v("我最开始也是赞成 80 个字符的建议，但是当我遵循这条规范写了近一年的 Angular 代码之后，我发现这条规范有一些缺陷。")]),v._v(" "),a("p",[v._v("首先这条规范是 Python 编码风格的建议，而 Python 的代码是以缩进代表代码块，类、函数等在定义时也没有大括号及小括号，算上括号前的空格，这就比一般的代码少几个字符。")]),v._v(" "),a("p",[v._v("其次现代的编程模式大多是面向对象的风格，类的继承、接口实现等都可能导致代码很长，在 Angular 中可能还会实现多个钩子函数的接口。")]),v._v(" "),a("p",[v._v("另外，Angular 的代码风格建议不要为了精简变量命名而损失易读性，所以很多时候函数命名可能很长，再加上类型系统及链式调用等，单行代码很容易超过 80 个字符，这样就会造成过多的折行。")]),v._v(" "),a("p",[v._v("下面是一段使用 80 字符宽度格式化的 TS 代码：")]),v._v(" "),a("figure",[a("img",{staticClass:"md-image",attrs:{src:_(628),alt:""}}),a("figcaption",[v._v("An image")])]),v._v(" "),a("p",[v._v("我们再看一下扩大到 100 字符之后的效果：")]),v._v(" "),a("figure",[a("img",{staticClass:"md-image",attrs:{src:_(629),alt:""}}),a("figcaption",[v._v("An image")])]),v._v(" "),a("p",[v._v("这段代码或许还不是最典型的例子，但是也能看出两者的不同，在实际的业务当中，类似的折行可能更多，而从我个人的角度来看，过多的折行反而破坏了代码的完整度。目前常用的代码宽度有三种，分别是 80、100、120，很显然，80 太短，120 太长，以中庸之道，取 100 刚好。")]),v._v(" "),a("h2",{attrs:{id:"模板格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板格式化"}},[v._v("#")]),v._v(" 模板格式化")]),v._v(" "),a("p",[v._v("代码宽度对模板（html）的影响也很大，下面我们重点聊一下关于模板的格式化问题。以下是使用 Prettier 的默认设置格式化的效果：")]),v._v(" "),a("figure",[a("img",{staticClass:"md-image",attrs:{src:_(630),alt:""}}),a("figcaption",[v._v("An image")])]),v._v(" "),a("p",[v._v("上面这种格式化方案非常普遍，但是我个人并不喜欢这种格式化的效果，原因有以下几点：")]),v._v(" "),a("ul",[a("li",[v._v("开始标签末尾的尖括号看上去有点突兀。")]),v._v(" "),a("li",[v._v("所有属性全部换行，整体有些松散，模板代码可能变得很长。")]),v._v(" "),a("li",[v._v("标签和属性的区分度不高。")])]),v._v(" "),a("p",[v._v("我比较喜欢下面的格式化方案，整齐紧凑，属性之间相互对齐，标签一目了然。")]),v._v(" "),a("figure",[a("img",{staticClass:"md-image",attrs:{src:_(631),alt:""}}),a("figcaption",[v._v("An image")])]),v._v(" "),a("p",[v._v("简单说一下上面这种格式化效果的方法：需要使用 VSCode 默认的 HTML 格式化插件。在 首选项-设置-扩展-HTML，设置 Wrap Attributes 属性，选择 preserve-aligned（保留属性的包装，但对齐），这个选项允许单行显示多个标签。")]),v._v(" "),a("p",[v._v("Prettier 好像无法实现（有了解的朋友可以给我留言）。")]),v._v(" "),a("h2",{attrs:{id:"属性排序及建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性排序及建议"}},[v._v("#")]),v._v(" 属性排序及建议")]),v._v(" "),a("p",[v._v("最近在格式化代码的过程中，我总结了一套排序规则及格式化建议，大家可以参考一下。")]),v._v(" "),a("h2",{attrs:{id:"属性排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性排序"}},[v._v("#")]),v._v(" 属性排序")]),v._v(" "),a("p",[v._v("给元素属性排序是一个可有可无的操作，但是合理的属性顺序同样有利于代码的阅读及检查。这和排列 CSS 属性顺序几乎是一样的。在编写 CSS 的时候，我会刻意的按照以下顺序排列属性：")]),v._v(" "),a("ol",[a("li",[v._v("Positioning")]),v._v(" "),a("li",[v._v("Box model")]),v._v(" "),a("li",[v._v("Typographic")]),v._v(" "),a("li",[v._v("Visual")]),v._v(" "),a("li",[v._v("Misc")])]),v._v(" "),a("p",[v._v("详情参考 Code Guide，以下是元素属性的排序建议：")]),v._v(" "),a("ul",[a("li",[v._v("模板引用变量")]),v._v(" "),a("li",[v._v("class")]),v._v(" "),a("li",[v._v("结构型指令")]),v._v(" "),a("li",[v._v("属性型指令")]),v._v(" "),a("li",[v._v("双向绑定")]),v._v(" "),a("li",[v._v("属性绑定")]),v._v(" "),a("li",[v._v("事件绑定")])]),v._v(" "),a("h2",{attrs:{id:"格式化建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化建议"}},[v._v("#")]),v._v(" 格式化建议")]),v._v(" "),a("ul",[a("li",[v._v("五个及五个以下属性尽量不要强制换行")]),v._v(" "),a("li",[v._v("某些属性建议放在一起，比如 ngModel 和 name，label 和 value")]),v._v(" "),a("li",[v._v("元素标签尽量对齐（除单行元素外）")]),v._v(" "),a("li",[v._v("插值表达式尽量换行")]),v._v(" "),a("li",[v._v("和 type 有关的属性尽量前置")])]),v._v(" "),a("p",[v._v("以下是根据以上规则格式化后的代码：")]),v._v(" "),a("figure",[a("img",{staticClass:"md-image",attrs:{src:_(632),alt:""}}),a("figcaption",[v._v("An image")])]),v._v(" "),a("h2",{attrs:{id:"函数格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数格式化"}},[v._v("#")]),v._v(" 函数格式化")]),v._v(" "),a("p",[v._v("我觉得模板和函数非常类似，模板属性就好比函数参数。如果使用 Prettier 进行格式化，函数字符超出限制之后，所有参数默认全部折行显示，这种方式的潜在问题和模板属性折行的问题非常类似，我觉得函数参数如果也能用 preserve-aligned 可能会更好，但是 VSCode 无法做到这一点。")]),v._v(" "),a("p",[v._v("谷歌推荐 clang-format 进行格式化，初步试了一下，并没有达到满意的效果，可能配置文件有点问题。我觉得关于函数的格式化问题暂时可以不必深究。")]),v._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("p",[v._v("代码美化只是一种形式，它不会对逻辑产生任何影响，但是好的代码格式会间接影响我们编码的速度，甚至影响到代码的质量。")]),v._v(" "),a("p",[v._v("本文篇幅有限，也有很多不当之处，如果读者对代码美化有更好的建议，欢迎留言评论。")]),v._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/-dq_-VnzyOfUbCHldhCmrA",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端代码美化的艺术"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);