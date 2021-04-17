(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{2053:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("在软件开发领域，我们总是致力于创建可复用的组件，架构被设计为可适应多种情境，并且我们始终在寻找一种即便在面临未知情况时，也能自动让逻辑正确行事的方法。\n尽管在某些情境下可能并不总是易于做到甚或根本不可行，但我们心里总想找到能被复现并变为可被应付的通用算法的某些模式。所谓 "),n("strong",[t._v("泛型（Generics）")]),t._v(" 的概念就是该行为的另一个例子，只是，这次我们不诉诸宏大，而是在代码层面的细枝末节中试图找出并描绘上述的模式。\n"),n("strong",[t._v("且听我细细道来……")])]),t._v(" "),n("h2",{attrs:{id:"何为泛型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何为泛型"}},[t._v("#")]),t._v(" 何为泛型？")]),t._v(" "),n("p",[t._v("泛型是种一旦理解就乐在其中的概念，所以让我只是先从这样描述它开始吧：")]),t._v(" "),n("blockquote",[n("p",[t._v("泛型之于类型（Types），犹类型之于变量也")])]),t._v(" "),n("p",[t._v("换言之，泛型为你提供了一种不用指定特别某种类型就能使用若干类型的方式。这给你的函数定义、类型定义，甚至接口定义赋予了更高一层的灵活性。\n用于解释泛型威力的典型例子，莫过于 identity 函数。该函数本质上只是原样返回你传入的唯一参数，别无他用，但如果你思考一下，如何在一种强类型语言中定义这样一个函数呢？")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面的函数对于数字工作良好，那字符串呢？或布尔值？自定义类型又如何？在 TypeScript 中要覆盖所有可能性，明显只能选择 "),n("code",[t._v("any")]),t._v(" 类型了：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这还挺行得通的，但此刻你的函数实际上丢失了所有类型的概念，你将不能在本该有确定类型信息的地方使用它们了。本质上来说现在你可以传入任何值而编译器将一言不发，这和你使用普通的 JavaScript 就没有区别了（即无论怎样都没有类型信息了）：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myVar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fernando'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myVar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 工作良好！")]),t._v("\n\nmyVar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myVar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 也能工作，尽管打印了 "undefined"')]),t._v("\n")])])]),n("p",[t._v("现在因为没有类型信息了，编译器就不能检查和函数相关的任何事情以及变量了，如此一来我们运行出了一个意外的 “undefined”（若将本例推及有更多逻辑复杂逻辑的真实场景将很可能变成最糟糕的一段程序）。\n我们该如何修复这点并避免使用 "),n("code",[t._v("any")]),t._v(" 类型呢？")]),t._v(" "),n("h3",{attrs:{id:"typescript-泛型来拯救"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-泛型来拯救"}},[t._v("#")]),t._v(" TypeScript 泛型来拯救")]),t._v(" "),n("p",[t._v("正如我曾 "),n("strong",[t._v("尝试")]),t._v(" 说的那样：一个泛型就像若干类型的一个变量，这意味着我们可以定义一个表示任何类型的变量，同时能保持住类型信息。后者是关键，因为那正是 "),n("code",[t._v("any")]),t._v(" 做不到的。基于这种想法，现在可以这样重构我们的 identity 函数：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generic-function"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("identity")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("记住，用来表示泛型名字的可以是任意字母，你可以随意命名。但使用一个单字母呢，看起来是个标准了，所以我们也从善如流。\n这不单让我们定义了一个可被任意类型使用的函数，现在相关的变量也将保留你所选择类型的正确信息。如下：")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:a(684),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("p",[t._v("图片中两件事情值得注意：")]),t._v(" "),n("ol",[n("li",[t._v("我直接在函数名之后（在 < 和 > 之间）指定了类型。在本例中，由于函数签名足够简单，我们其实可以省略这部分来调用函数而编译器将会从所传参数推断出类型。然而，如果你把单词 "),n("code",[t._v("number")]),t._v(" 改为 "),n("code",[t._v("string")]),t._v(" 则整个例子将不再工作。")]),t._v(" "),n("li",[t._v("现在无法打印出 "),n("code",[t._v("length")]),t._v(" 属性了，因为数字没有这个属性。")])]),t._v(" "),n("p",[t._v("这正是你期待一个强类型语言该做的事情，并且这也是当定义 通用的 行为时为何你要使用泛型的原因。")]),t._v(" "),n("h2",{attrs:{id:"我还能用泛型做些什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我还能用泛型做些什么"}},[t._v("#")]),t._v(" 我还能用泛型做些什么？")]),t._v(" "),n("p",[t._v("前面的例子常被称为泛型的 “Hello World”, 你能在任何一篇文章中找到它，但它是解释泛型潜能的一个绝佳途径。但还有些其他你能做到的有趣之事，当然了总是在类型安全领域的，别忘了，你要构建能在多种环境下复用的东西，同时还要努力保持住我们非常关心的类型信息。")]),t._v(" "),n("h3",{attrs:{id:"自动结构检查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动结构检查"}},[t._v("#")]),t._v(" 自动结构检查")]),t._v(" "),n("p",[t._v("泛型中的这一点无疑是我最喜欢的了。考虑如下场景：你有一个固定的结构（即一个对象）并且你在试图动态地访问其中一个属性。我们之前已经像这样完成了这个功能：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("我并没有用到 "),n("code",[t._v("hasOwnProperty")]),t._v(" 或其他类似的技术，但你能明白要点就好，你需要执行一个基础的结构检查以确保能控制所访问的属性不属于对象的情况。现在，让我们将其转换为类型安全的 "),n("code",[t._v("TypeScript")]),t._v(" 并看看泛型能如何帮助我们：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  age"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  city"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generic-function"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPersonProp")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" Person"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("现在，请注意我是如何使用泛型符号的：我不是仅声明了一个泛型 K，同时还说明了它 "),n("strong",[t._v("继承自 Person 中的键类型")]),t._v("。 这太棒了！你可以声明式的界定你传入的值会匹配字符串 "),n("code",[t._v("name")]),t._v("、"),n("code",[t._v("age")]),t._v(" 或 "),n("code",[t._v("city")]),t._v("。本质上你声明了一个枚举值，而当你这么想的时候，就没之前那么兴奋了吧。但你也不用止步于此，可以通过像这样重新定义该函数来重燃激情：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("K")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这就对了，我们现在有了两个泛型，后一个被声明为继承自前一个中的键，但本质上的好处是你现在不再受限于某一种具体类型（即 "),n("code",[t._v("Person")]),t._v(" 类型的对象) 了，该函数可被你放心大胆地用于任何类型或结构了。\n下面是当你用一个非法属性名使用它时将会发生的：")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:a(685),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("h3",{attrs:{id:"泛型类-generic-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型类-generic-classes"}},[t._v("#")]),t._v(" 泛型类（Generic classes）")]),t._v(" "),n("p",[t._v("泛型不仅应用于函数签名，亦可用来定义你自己的泛型类。这提供了将通用逻辑封装进可复用构造中的能力，让一些有意思的行为变得可能。\n下面是一个例子：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Not implemented'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Horse")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Riding the horse...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Feeding the dog...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" Animal"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  animal"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animal"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" animal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DogHandler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Dog"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HorseHandler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handler"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Horse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("在本例中，我们定义了一个可以处理任意动物类型的处理类，虽说不用泛型也能做到，但使用泛型的益处在最后两行显而易见。这是因为借助泛型，处理类逻辑完全被封装进了一个泛型类中，从而我们可以约束类型并创建指定类型的类，这样的类只对动物类型生效。你也可以在此添加额外的行为，而类型信息也得以保留。\n来自这个例子的另一个收获是，泛型可被约束为仅继承自指定的一组类型。正如你所见，"),n("code",[t._v("T")]),t._v(" 只能是 "),n("code",[t._v("Dog")]),t._v(" 或 "),n("code",[t._v("Horse")]),t._v(" 而非其他。")]),t._v(" "),n("h3",{attrs:{id:"可变参数元组-variadic-tuples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可变参数元组-variadic-tuples"}},[t._v("#")]),t._v(" 可变参数元组（Variadic Tuples）")]),t._v(" "),n("p",[t._v("实际上这是 TypeScript 4.0 中的新特性。并且尽管我 已经在"),n("a",{attrs:{href:"https://blog.bitsrc.io/typescript-4-0-what-im-most-excited-about-4ee89693e02e",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),n("OutboundLink")],1),t._v("中介绍了它，此处仍会快速回顾一下。\n概况来说，可变参数元组带来的，是用泛型定义某元组中一个可变的部分，默认情况下这部分什么都没有。\n一个普通的元组定义将产生一个固定尺寸的数组，其所有元素都是预定义好的类型：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTuple")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myList"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyTuple "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fernando'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Doglio'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("现在，归功于泛型和可变参数元组，你可以这样做：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myList"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fernando'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Doglio'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myList"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fernando'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Doglio'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("如果你注意看，我们使用了一个泛型 "),n("code",[t._v("T")]),t._v("（继承自一个 "),n("code",[t._v("unknown")]),t._v(" 数组）用以将一个可变部分置于元组中。因为 "),n("code",[t._v("T")]),t._v(" 是 "),n("code",[t._v("unknown")]),t._v(" 类型的一个列表，你可以在里面装任何东西。比分说，你可以将其定义为单一类型的一个列表，就像这样：")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anotherTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" oneNumber"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" twoNumbers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" manyNumbers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" anotherTuple"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("天高任鸟飞，本质上你可以定义出一种模板元组的形式，以供稍后随意（当然要按照你设置的模板）使用。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("泛型是一种非常强大的工具，虽然有时阅读由其编写的代码宛如天书，但熟能生巧。慢慢品味，用心阅读，你将看到其内在的潜能。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6878868818836488205",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript：一个好泛型的价值"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);