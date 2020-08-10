(function(t){function e(e){for(var o,c,i=e[0],s=e[1],u=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuex-todo-manager/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1756:function(t,e,n){"use strict";var o=n("3cc1"),r=n.n(o);r.a},"3cc1":function(t,e,n){},4864:function(t,e,n){"use strict";var o=n("c1a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("AddTodo"),n("FilterTodos"),n("Todos")],1)])},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Todos")]),t._m(0),n("div",{staticClass:"todos"},t._l(t.allTodos,(function(e){return n("div",{key:e.id,staticClass:"todo",class:{"is-complete":e.completed},on:{dblclick:function(n){return t.onDblClick(e)}}},[t._v(" "+t._s(e.title)+" "),n("i",{staticClass:"fas fa-trash-alt",on:{click:function(n){return t.deleteTodo(e.id)}}})])})),0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend"},[n("span",[t._v("Double click to mark as complete")]),n("span",[n("span",{staticClass:"incomplete-box"}),t._v(" = Incomplete ")]),n("span",[n("span",{staticClass:"complete-box"}),t._v(" = Complete ")])])}],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),u=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"Todos",methods:d({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"]),{onDblClick:function(t){var e={id:t.id,title:t.title,completed:!t.completed};this.updateTodo(e)}}),computed:Object(u["c"])(["allTodos"]),created:function(){this.fetchTodos()}},f=p,v=(n("1756"),n("2877")),m=Object(v["a"])(f,c,i,!1,null,"5ac5ff5d",null),b=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Add Todo")]),n("div",{staticClass:"add"},[n("form",{on:{submit:t.onSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},O=[];function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={name:"AddTodo",data:function(){return{title:""}},methods:g({},Object(u["b"])(["addTodo"]),{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},T=j,w=(n("792d"),Object(v["a"])(T,h,O,!1,null,"32fd9421",null)),_=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Filter Todos: "),n("select",{on:{change:function(e){return t.filterTodos(e)}}},[n("option",{attrs:{value:"200"}},[t._v("200")]),n("option",{attrs:{value:"100"}},[t._v("100")]),n("option",{attrs:{value:"50"}},[t._v("50")]),n("option",{attrs:{value:"20"}},[t._v("20")]),n("option",{attrs:{value:"10"}},[t._v("10")]),n("option",{attrs:{value:"5"}},[t._v("5")])])])},P=[],k={name:"FilterTodos",methods:Object(u["b"])(["filterTodos"])},S=k,D=(n("4864"),Object(v["a"])(S,x,P,!1,null,null,null)),C=D.exports,R={name:"app",components:{Todos:b,AddTodo:_,FilterTodos:C}},E=R,$=(n("034f"),Object(v["a"])(E,r,a,!1,null,null,null)),A=$.exports,F=(n("c740"),n("a434"),n("e25e"),n("96cf"),n("89ba")),I=n("bc3a"),M=n.n(I),J={todos:[]},N={allTodos:function(t){return t.todos}},q={fetchTodos:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get("https://jsonplaceholder.typicode.com/todos");case 3:o=t.sent,n("setTodos",o.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addTodo:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,M.a.post("https://jsonplaceholder.typicode.com/todos",{title:n,completed:!1});case 3:r=t.sent,o("newTodo",r.data);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),deleteTodo:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,M.a.delete("https://jsonplaceholder.typicode.com/todos/"+n);case 3:o("removeTodo",n);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),filterTodos:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){var o,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,r=parseInt(n.target.options[n.target.options.selectedIndex].innerText),t.next=4,M.a.get("https://jsonplaceholder.typicode.com/todos?_limit="+r);case 4:a=t.sent,o("setTodos",a.data);case 6:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),updateTodo:function(){var t=Object(F["a"])(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,M.a.put("https://jsonplaceholder.typicode.com/todos/"+n.id,n);case 3:r=t.sent,o("updateTodo",r.data);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},z={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));-1!==n&&t.todos.splice(n,1,e)}},B={state:J,getters:N,actions:q,mutations:z};o["a"].use(u["a"]);var G=new u["a"].Store({modules:{todos:B}});o["a"].config.productionTip=!1,new o["a"]({store:G,render:function(t){return t(A)}}).$mount("#app")},"792d":function(t,e,n){"use strict";var o=n("7df8"),r=n.n(o);r.a},"7df8":function(t,e,n){},"85ec":function(t,e,n){},c1a9:function(t,e,n){}});
//# sourceMappingURL=app.e21c8be8.js.map