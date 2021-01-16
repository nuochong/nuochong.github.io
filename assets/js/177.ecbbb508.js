(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{2002:function(r,t,a){"use strict";a.r(t);var e=a(3),v=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[r._v("提示")]),r._v(" "),a("p",[r._v("在创建 Web 应用程序时应始终考虑性能。为了帮助开发者提升应用程序的性能，本文列举了有效提高应用程序性能的 12 种方法。")])]),r._v(" "),a("p",[r._v("性能是创建网页或应用程序时最重要的一个方面。没有人想要应用程序崩溃或者网页无法加载，或者用户的等待时间很长。根据 Kissmetrics，47％的访问者希望网站在不到 2 秒的时间内加载，如果加载过程需要 3 秒以上，则有 40％的访问者会离开网站。")]),r._v(" "),a("p",[r._v("考虑到以上这些数字，你在创建 Web 应用程序时应始终考虑性能。为了帮助你开始，以下提供了有效提高应用程序性能的 12 种方法：")]),r._v(" "),a("h2",{attrs:{id:"_1-在浏览器中缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在浏览器中缓存"}},[r._v("#")]),r._v(" 1. 在浏览器中缓存")]),r._v(" "),a("p",[r._v("要这样做有两种选择。第一种是使用 JavaScript Cache API，我们可以安装 service worker 来使用它。第二种是使用 HTTP 协议缓存。")]),r._v(" "),a("p",[r._v("访问某个对象通常要用脚本。通过把重复访问的对象存储在用户定义的变量中，以及在后续对该对象的引用中使用变量，可以立即实现性能的提升。")]),r._v(" "),a("h2",{attrs:{id:"_2-定义执行的上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义执行的上下文"}},[r._v("#")]),r._v(" 2. 定义执行的上下文")]),r._v(" "),a("p",[r._v("为了有效地衡量你在程序中加入的任何改进，你必须创建一组定义良好的环境，以便测试代码的性能。")]),r._v(" "),a("p",[r._v("对所有 Javascript 引擎的所有版本进行性能测试和优化实际上是不可行的。但是，在单一的环境中进行测试并非一个好习惯，因为你可能会得到片面的结果。因此，建立多个定义良好的环境并测试代码是否有效非常重要。")]),r._v(" "),a("h2",{attrs:{id:"_3-删除未使用的-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除未使用的-javascript"}},[r._v("#")]),r._v(" 3. 删除未使用的 JavaScript")]),r._v(" "),a("p",[r._v("此步骤不仅会缩短传输时间，还会缩短浏览器分析和编译代码所需的时间。为此，你必须考虑以下几点：")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("如果你检测到一个用户未使用的功能，最好删除所有与之相关的 JavaScript 代码，这样网站的加载速度会更快，用户也会有更好的体验。")])]),r._v(" "),a("li",[a("p",[r._v("还有可能，你错误地加入了一个并不需要的库，或者你有依赖项，这些依赖项提供的功能在所有浏览器中原本就有，那么你无需再增加多余的代码。")])])]),r._v(" "),a("h2",{attrs:{id:"_4-避免使用太多内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-避免使用太多内存"}},[r._v("#")]),r._v(" 4. 避免使用太多内存")]),r._v(" "),a("p",[r._v("你应该始终给内存加一条限制，那就是只有绝对必须的内容才能使用内存，因为你无法知道运行应用程序的设备到底需要多少内存。只要你的代码要求浏览器保留新的内存，浏览器的垃圾收集器就会被执行，并停止 JavaScript 的运行。如果经常发生这种情况，页面将变慢。")]),r._v(" "),a("h2",{attrs:{id:"_5-推迟不必要的-js-加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-推迟不必要的-js-加载"}},[r._v("#")]),r._v(" 5. 推迟不必要的 JS 加载")]),r._v(" "),a("p",[r._v("用户希望页面快速加载，但并非所有函数都需要在页面的初始加载时就可用。如果用户必须执行某个操作才能执行某个函数（例如，通过单击某个元素或更改选项卡），那么你可以将该函数的加载推迟到初始页面加载之后。")]),r._v(" "),a("p",[r._v("通过这种方式，你可以避免加载和编译那些会延迟页面初始显示的 JavaScript 代码。页面完全加载后，我们可以再开始加载这些功能，以便它们在用户开始交互时立即可用。在 RAIL 模型 中，Google 建议将此延迟加载以 50 毫秒为单位进行，这样就不会影响用户与页面的交互。")]),r._v(" "),a("h2",{attrs:{id:"_6-避免内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-避免内存泄漏"}},[r._v("#")]),r._v(" 6. 避免内存泄漏")]),r._v(" "),a("p",[r._v("如果内存正在泄漏，则加载的页面将保留越来越多的内存，并最终占用设备的所有可用内存并严重影响性能。你可能见过此类故障（并且可能对此类故障感到懊恼），例如在带有轮播或图像滑动条的页面上。")]),r._v(" "),a("p",[r._v("在 Chrome 开发者工具中，你可以通过在“性能”标签中记录时间线来分析你的网站是否存在内存泄漏。通常，内存泄漏的原因是，你从页面中删除了 DOM，但有一些变量还在引用这些 DOM，因此，垃圾收集器无法消除它们。")]),r._v(" "),a("h2",{attrs:{id:"_7-适当的使用-web-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-适当的使用-web-worker"}},[r._v("#")]),r._v(" 7. 适当的使用 Web worker")]),r._v(" "),a("p",[r._v("当你执行耗时很长的代码时，请使用 Web worker。根据 Mozilla 开发人员网络 (MDN) 文档：“Web Worker 可以在与 Web 应用程序的主执行线程分开的后台线程中运行脚本操作。这样做的好处是你可以在一个单独的线程中执行耗时又费力的的处理，同时让主（通常为 UI）线程运行而不被阻塞或减慢。”")]),r._v(" "),a("p",[r._v("Web worker 允许代码执行处理器密集型计算，而不阻塞用户界面线程。Web Worker 允许你生成新线程并将工作委托给这些线程以获得高效的性能。这样，通常会阻碍其他任务且需要长时间运行的任务将被传递给 worker，从而让主线程可以在无阻碍的情况下运行。")]),r._v(" "),a("h2",{attrs:{id:"_8-将-dom-元素保存在局部变量中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-将-dom-元素保存在局部变量中"}},[r._v("#")]),r._v(" 8. 将 DOM 元素保存在局部变量中")]),r._v(" "),a("p",[r._v("访问 DOM 会很慢。如果要多次读取某元素的内容，最好将其保存在局部变量中。但记住重要的是，如果稍后你会删除 DOM 的值，则应将变量设置为“null”，不然会导致内存泄漏。")]),r._v(" "),a("h2",{attrs:{id:"_9-优先访问局部变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-优先访问局部变量"}},[r._v("#")]),r._v(" 9. 优先访问局部变量")]),r._v(" "),a("p",[r._v("JavaScript 首先搜索以查看变量是否存在于本地，然后才在更高级别的作用域内逐步搜索到全局变量为止。将变量保存在本地作用域内能让 JavaScript 更快地访问它们。")]),r._v(" "),a("p",[r._v("局部变量是基于最具体的作用域的，并且可能会穿过多个级别的作用域，因此查找这一动作可能导致出现通用的查询。在一个它前面没有变量声明的局部变量中定义函数作用域时，需要在每个变量之前加上 let 或 const，以便定义当前作用域，防止查找并加速代码执行。")]),r._v(" "),a("h2",{attrs:{id:"_10-避免使用全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-避免使用全局变量"}},[r._v("#")]),r._v(" 10. 避免使用全局变量")]),r._v(" "),a("p",[r._v("因为脚本引擎在从函数或其他作用域内引用全局变量时需要逐一查看作用域，所以当本地作用域丢失时，该变量将被销毁。如果全局作用域中的变量无法在脚本的生命周期内持续存在，则性能将得到改善。")]),r._v(" "),a("h2",{attrs:{id:"_11-实施一些优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-实施一些优化方案"}},[r._v("#")]),r._v(" 11. 实施一些优化方案")]),r._v(" "),a("ul",[a("li",[r._v("始终使用计算复杂度最低的算法和最佳的数据结构来解决任务。")]),r._v(" "),a("li",[r._v("重写算法以获得相同的结果和更少的计算。")]),r._v(" "),a("li",[r._v("避免递归调用。")]),r._v(" "),a("li",[r._v("给重复的函数加入变量、计算和调用。")]),r._v(" "),a("li",[r._v("分解和简化数学公式。")]),r._v(" "),a("li",[r._v("使用搜索数组：用它们来获取基于另一个的值，而不是使用 switch/case 语句。")]),r._v(" "),a("li",[r._v("使条件总是更有可能为真，以更好地利用处理器的推测执行。")]),r._v(" "),a("li",[r._v("如果可以，请使用位级运算符替换某些操作，因为这些运算符的处理周期较短。")])]),r._v(" "),a("h2",{attrs:{id:"_12-使用工具检测问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-使用工具检测问题"}},[r._v("#")]),r._v(" 12. 使用工具检测问题")]),r._v(" "),a("p",[r._v("Lighthouse 是一个很好的网页性能工具，它可以帮助你审核性能、可访问性、最佳实践和 SEO。谷歌 PageSpeed 旨在帮助开发人员了解网站的性能优化和潜在可改进的方面。这些组件旨在识别网站是否符合 Google Web 性能最佳实践，以及将调整过程自动化。")]),r._v(" "),a("p",[r._v("在 Chrome 中，你还可以使用主菜单中的“更多工具”选项来查看每个选项卡使用的内存和 CPU。对于更高级的分析，你可以使用 Firefox 或 Chrome 中的开发人员工具“性能”视图来分析不同的指标。")]),r._v(" "),a("p",[r._v("devtools 的性能分析允许你在加载页面时模拟 CPU 消耗、网络和其他指标，以便识别和修复问题。")]),r._v(" "),a("p",[r._v("为了更深入地了解，建议你使用 JavaScript Navigation Timing API，它允许你详细测量代码的每个部分从编程本身中获取的内容。")]),r._v(" "),a("p",[r._v("对于基于 Node.js 构建的应用程序，NodeSource Platform 也是一种非常好、影响低的方式，它可以在非常精细的级别上探索应用程序性能。")]),r._v(" "),a("p",[r._v("全面的 Node.js 指标可帮助你识别内存泄漏源或其他性能问题，并更快地解决这些问题。")]),r._v(" "),a("h3",{attrs:{id:"最后的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的说明"}},[r._v("#")]),r._v(" 最后的说明")]),r._v(" "),a("p",[r._v("在代码的可读性和优化之间保持平衡很重要。代码由计算机解释，但我们需要确保代码将来可以由我们自己或其他人维护，因此它们需要易于理解。")]),r._v(" "),a("p",[r._v("请记住：应始终考虑性能，但不应将性能凌驾于错误检测和功能添加之上。")]),r._v(" "),a("h3",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[r._v("#")]),r._v(" 参考文献")]),r._v(" "),a("ul",[a("li",[a("p",[r._v("JavaScript 优化:\n"),a("a",{attrs:{href:"https://www.humanlevel.com/articulos/desarrollo-web/optimizacion-de-javascript.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.humanlevel.com/articulos/desarrollo-web/optimizacion-de-javascript.html"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[r._v("如何优化你的网页:\n"),a("a",{attrs:{href:"https://www.arsys.es/blog/programacion/diseno-web/optimizar-web-javascript-imagenes/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.arsys.es/blog/programacion/diseno-web/optimizar-web-javascript-imagenes/"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[r._v("14 Claves Para Optimizar C.Digo JavaScript:\n"),a("a",{attrs:{href:"https://www.todojs.com/14-claves-para-optimizar-codigo-javascript/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.todojs.com/14-claves-para-optimizar-codigo-javascript/"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[r._v("提高 JavaScript 性能的 30 个技巧:\n"),a("a",{attrs:{href:"https://www.monitis.com/blog/30-tips-to-improve-javascript-performance/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.monitis.com/blog/30-tips-to-improve-javascript-performance/"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[r._v("使用 Web Workers 优化 JavaScript 应用程序性能:\n"),a("a",{attrs:{href:"https://www.twilio.com/blog/optimize-javascript-application-performance-web-workers",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.twilio.com/blog/optimize-javascript-application-performance-web-workers"),a("OutboundLink")],1)])]),r._v(" "),a("li",[a("p",[r._v("NodeSource 的 N|Solid:\n"),a("a",{attrs:{href:"https://nodesource.com/products/nsolid",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://nodesource.com/products/nsolid"),a("OutboundLink")],1)])])]),r._v(" "),a("p",[r._v("英文原文:\n"),a("a",{attrs:{href:"https://nodesource.com/blog/improve-javascript-performance",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://nodesource.com/blog/improve-javascript-performance"),a("OutboundLink")],1)]),r._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Vs970kKXRg0muZzmTC-ihg",target:"_blank",rel:"noopener noreferrer"}},[r._v("提高 JavaScript 性能的 12 个技巧"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);