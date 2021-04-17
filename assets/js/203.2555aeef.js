(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{2133:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("在用户登录输入双重身份验证代码时，在用户体验方面存在很多冲突的可能。作为开发人员，在不能降低用户体验的前提下，应该构建支持帐户安全需求。但有时候感觉这些需求好像是一场相互之间的战争。")]),t._v(" "),n("p",[t._v("在这篇文章中，看看简单的 "),n("code",[t._v("<input>")]),t._v("元素和 HTML 属性将有助于我们提高用户的双重身份验证体验。")]),t._v(" "),n("h2",{attrs:{id:"默认体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认体验"}},[t._v("#")]),t._v(" 默认体验")]),t._v(" "),n("p",[t._v("当你为 Web 应用程序实现双重身份验证（可能使用 Authy 双重身份验证 API）时，用户需要一份表单让输入一次性的密码，然后提交。你可以创建类似于以下 HTML 的内容：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/sessions/check-2fa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      Please enter the code you were sent:\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Check token\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("这已经是一个很好的经验了。"),n("code",[t._v("<input>")]),t._v("具有 name 和唯一 ID， "),n("code",[t._v("<label>")]),t._v("使用正确的 for 属性显式与其关联，这对可访问性很重要。为了达到同样的效果，你还可以将 "),n("code",[t._v("<label>")]),t._v("内嵌 "),n("code",[t._v("<input>")]),t._v("标签。使用一点 CSS 时，这可能如下所示：")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:s(677),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("p",[t._v("然而，我们可以通过增加几个属性来逐步增强这种体验。")]),t._v(" "),n("h2",{attrs:{id:"获得正确的键盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获得正确的键盘"}},[t._v("#")]),t._v(" 获得正确的键盘")]),t._v(" "),n("p",[t._v("对于带屏幕键盘的手机或设备，首先需要注意的是，我们正在展示完整的虚拟键盘。一次性密码是由数字字符组成，因此最好给用户显示一个数字键盘。")]),t._v(" "),n("p",[t._v("你可能会认为，将 "),n("code",[t._v("<input>")]),t._v('的类型从"文本"切换到"数字"就可以解决：')]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("p",[t._v("但是你错了。这确实触发了 iOS 上的另一个键盘，但它仍然包含了一些无用的键。")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:s(678),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("p",[t._v("改变字段的类型会改变浏览器解释该字段的方式，但也可能导致错误; 如果双重认证代码以 0 开头，数字字段可能会去掉前导的 0。")]),t._v(" "),n("h2",{attrs:{id:"输入模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输入模式"}},[t._v("#")]),t._v(" 输入模式")]),t._v(" "),n("p",[t._v("Inputmode 属性改变了浏览器应该显示的键盘，而不改变字段的数据含义。我们希望从数字键盘输入。因此，改为添加输入模式“ numeric”")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inputmode")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("numeric"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("p",[t._v("Inputmode 还有许多其他值，包括电话号码的“tel”、“email”、“decimal”、“url”、“search”和“ none” ，以便在需要呈现自己的键盘时使用。关于 CSS Tricks 的这篇文章提供了不同输入模式所需的所有细节。")]),t._v(" "),n("p",[t._v("对支持 inputmode 的浏览器来说是很友好的，但是几年前还是一片空白。对于较老的浏览器，还有另外一个技巧可以触发数字键盘，并免费提供一些额外的验证。")]),t._v(" "),n("h2",{attrs:{id:"模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[t._v("#")]),t._v(" 模式")]),t._v(" "),n("p",[t._v("Pattern 属性允许你使用正则表达式来验证 "),n("code",[t._v("<input>")]),t._v("的内容。使用模式[0-9]*告诉浏览器只接受字段中的数字，并在不支持输入模式的浏览器中触发数字键盘。")]),t._v(" "),n("p",[t._v("我们的 HTML 现在如下所示：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inputmode")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("numeric"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pattern")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[0-9]*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("p",[t._v("键盘是一个更简单的数字输入：")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:s(679),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("p",[t._v("有一件事可以让填写的表格变得更加容易，那就是自动填写一次性密码。")]),t._v(" "),n("h2",{attrs:{id:"html-自动完成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html-自动完成"}},[t._v("#")]),t._v(" HTML 自动完成")]),t._v(" "),n("p",[t._v("按照 MDN 的说法，允许 Web 开发人员在指定用户代理填写表单字段值时必须提供自动帮助的任何权限，以及浏览器关于该字段中预期信息类型的指导。")]),t._v(" "),n("p",[t._v("在 iOS 和 macOS 上的 Safari 浏览器中，可以利用这个优势，让浏览器提供双重认证代码，这些代码通过短信发送到设备上，属性值为“one-time-code”的 autocomplete 属性将触发此行为。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inputmode")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("numeric"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pattern")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[0-9]*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autocomplete")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one-time-code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("p",[t._v("有了这个，我们的 "),n("code",[t._v("<input>")]),t._v("就完整了，现在用户体验如下所示：")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:s(680),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("h2",{attrs:{id:"其他有用的自动补全值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他有用的自动补全值"}},[t._v("#")]),t._v(" 其他有用的自动补全值")]),t._v(" "),n("p",[t._v("有许多可用的自动补全值，它涵盖了从姓名、地址到信用卡和其他帐户详细信息的一切内容。对于注册和登录表单，一些有用的自动补全值提示: "),n("code",[t._v("username")]),t._v(", "),n("code",[t._v("email")]),t._v(", "),n("code",[t._v("new-password")]),t._v(", "),n("code",[t._v("current-password")]),t._v("。")]),t._v(" "),n("p",[t._v("在网页上，对浏览器和密码管理器查找登录表单有很好的启发式作用，但是使用 "),n("code",[t._v("usename")]),t._v(" 和 "),n("code",[t._v("current-password")]),t._v(" 使它变得非常明显。如果你要在不同的页面上使用用户名和密码构建登录表单，那么你肯定需要考虑使用这些属性。")]),t._v(" "),n("p",[t._v("在注册表单中，确保使用“new-password”值，因为它在某些浏览器中会触发密码建议。")]),t._v(" "),n("figure",[n("img",{staticClass:"md-image",attrs:{src:s(681),alt:""}}),n("figcaption",[t._v("An image")])]),t._v(" "),n("h2",{attrs:{id:"在其他浏览器中自动完成一次性密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在其他浏览器中自动完成一次性密码"}},[t._v("#")]),t._v(" 在其他浏览器中自动完成一次性密码")]),t._v(" "),n("p",[t._v("这种自动完成的行为目前只存在于 iOS 和 macOS 上的 Safari 中，但是 Chrome 团队正在研究类似的想法来简化这个过程。目前有一个模仿安卓的短信接收 API 的实验。这将允许开发者从短信中提取一次性密码，并且，因为它是 JavaScript 的，可以立即提交表单，为用户节省更多的时间。")]),t._v(" "),n("p",[t._v("在编写本 API 的时候，这个 API 是原始版本测试的一部分，它允许你测试并反馈给 Chrome 团队。如果您对此感兴趣，请注册并尝试 API。")]),t._v(" "),n("h2",{attrs:{id:"通过-html-获得更好的体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过-html-获得更好的体验"}},[t._v("#")]),t._v(" 通过 HTML 获得更好的体验")]),t._v(" "),n("p",[t._v("在这篇文章中，我们已经看到，只需要一些 HTML 属性，我们就可以改善用户的登录体验，尤其是在移动设备上。")]),t._v(" "),n("p",[n("code",[t._v("<input>")]),t._v("元素是我们可以访问的最有趣的 HTML 元素之一。根据属性，它可以是文本字段、范围滑块、文件选择器、按钮等等。")]),t._v(" "),n("p",[t._v("如果您正在寻找更好的双重身份验证体验，那么请查看 Authy 推送身份验证，它完全减少了代码的复制。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/DI2ZlYOK-MTh_kpArM-5Pw",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过 HTML 属性可改善用户的双重身份验证体验"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);