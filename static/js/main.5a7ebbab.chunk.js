(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{55:function(t,e,c){},56:function(t,e,c){},57:function(t,e,c){},58:function(t,e,c){},64:function(t,e,c){},65:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c(1),i=c.n(n),a=c(31),o=c.n(a),l=c(12),r=c(15),d=c(21),j=c(8),u=c(11),b=c(5),h=c.n(b),m=(c(55),function(t){return Object(s.jsx)("i",{onClick:t.onClick,className:"badge badge--".concat(t.color.name," ").concat(t.className)})}),f=(c(56),c.p+"static/media/remove.f6fba105.svg"),O=function(t){return Object(s.jsx)("ul",{onClick:t.onClick,className:"list",children:t.items.map((function(e,c){return Object(s.jsxs)("li",{onClick:t.onClickItem?function(){t.onClickItem(e)}:null,className:e.active||t.activeItem&&t.activeItem.id===e.id?"active":"",children:[Object(s.jsx)("i",{children:e.icon?e.icon:Object(s.jsx)("i",{className:"badge badge--".concat(e.color.name)})}),Object(s.jsxs)("span",{children:[e.name,e.tasks&&" (".concat(e.tasks.length,") ")]}),t.isRemovable&&Object(s.jsx)("img",{onClick:function(){!function(e){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a?")&&h.a.delete("http://localhost:3003/lists/"+e.id).then((function(){t.onRemove(e.id)}))}(e)},className:"list__remove-icon",src:f,alt:"remove icon"})]},c)}))})},x=c.p+"static/media/close.0563020f.svg",p=(c(57),function(t){var e=Object(n.useState)(!1),c=Object(j.a)(e,2),i=c[0],a=c[1],o=Object(n.useState)(3),l=Object(j.a)(o,2),r=l[0],d=l[1],b=Object(n.useState)(""),f=Object(j.a)(b,2),p=f[0],k=f[1],v=Object(n.useState)(!1),C=Object(j.a)(v,2),w=C[0],g=C[1];Object(n.useEffect)((function(){Array.isArray(t.colors)&&d(t.colors[0].id)}),[t.colors]);var N=function(){a(!1),k(""),d(t.colors[0].id)};return Object(s.jsxs)("div",{className:"add-list",children:[Object(s.jsx)(O,{onClick:function(){a(!0)},items:[{icon:Object(s.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{d:"M8 1V15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(s.jsx)("path",{d:"M1 8H15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"}]}),i&&Object(s.jsxs)("div",{className:"add-list__popup",children:[Object(s.jsx)("img",{src:x,onClick:N,alt:"close_btn",className:"add-list__popup-close-btn"}),Object(s.jsx)("input",{value:p,onChange:function(t){k(t.target.value)},className:"field",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430"}),Object(s.jsx)("div",{className:"add-list__popup-colors",children:t.colors.map((function(t){return Object(s.jsx)(m,{onClick:function(){return d(t.id)},color:t,className:r===t.id&&"active"},t.id)}))}),Object(s.jsx)("button",{onClick:function(){p?(g(!0),h.a.post("http://localhost:3003/lists",{name:p,colorid:r}).then((function(e){var c=t.colors.find((function(t){return t.id===r})),s=Object(u.a)(Object(u.a)({},e.data),{},{color:c,tasks:[]});t.onAdd(s),N(),g(!1)})).catch((function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430")}))):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430")},className:"button",children:w?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}),k=c.p+"static/media/edit.5be2348c.svg",v=c.p+"static/media/add.23ef596b.svg",C=function(t){var e=Object(n.useState)(!1),c=Object(j.a)(e,2),i=c[0],a=c[1],o=Object(n.useState)(""),l=Object(j.a)(o,2),r=l[0],d=l[1],u=Object(n.useState)(!1),b=Object(j.a)(u,2),m=b[0],f=b[1],O=function(){a(!i),d("")};return Object(s.jsxs)("div",{className:"tasks__form",children:[!i&&Object(s.jsxs)("div",{className:"tasks__form-new",onClick:O,children:[Object(s.jsx)("img",{src:v,alt:"add icon"}),Object(s.jsx)("span",{children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})]}),i&&Object(s.jsxs)("div",{className:"tasks__form-block",children:[Object(s.jsx)("input",{value:r,onChange:function(t){d(t.target.value)},className:"field",type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(s.jsx)("button",{className:"button",disabled:m,onClick:function(){var e={listId:t.list.id,text:r,completed:!1};f(!0),h.a.post("http://localhost:3003/tasks",e).then((function(e){t.onAddTask(t.list.id,e.data),O()})).catch((function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u0434\u0430\u0447\u0438")})).finally((function(){f(!1)}))},children:m?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(s.jsx)("button",{className:"button button--grey",onClick:O,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})},w=function(t){var e=t.id,c=t.text,n=t.list,i=t.onRemove,a=t.onEdit;return Object(s.jsxs)("div",{className:"tasks__items-row",children:[Object(s.jsxs)("div",{className:"checkbox",children:[Object(s.jsx)("input",{id:"task-".concat(e),type:"checkbox"}),Object(s.jsx)("label",{htmlFor:"task-".concat(e),children:Object(s.jsx)("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Object(s.jsx)("p",{children:c}),Object(s.jsxs)("div",{className:"tasks__items-row-actions",children:[Object(s.jsx)("div",{onClick:function(){return a(n.id,{id:e,text:c})},children:Object(s.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z",fill:"black"})})}),Object(s.jsx)("div",{onClick:function(){return i(n.id,e)},children:Object(s.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"})})})]})]},e)},g=(c(58),function(t){return Object(s.jsxs)("div",{className:"tasks",children:[Object(s.jsx)(l.b,{to:"/lists/".concat(t.list.id),children:Object(s.jsxs)("h2",{style:{color:t.list.color.hex},className:"tasks__title",children:[t.list.name," ",Object(s.jsx)("img",{onClick:function(){var e=window.prompt("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430",t.list.name);e&&(t.onEditTitle(t.list.id,e),h.a.patch("http://localhost:3003/lists/"+t.list.id,{name:e}).catch((function(){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430")})))},src:k,alt:"edit icon"})]})}),Object(s.jsxs)("div",{className:"tasks__items",children:[!t.withoutEmpty&&t.list.tasks&&!t.list.tasks.length&&Object(s.jsx)("h2",{children:"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),t.list.tasks&&t.list.tasks.map((function(e){return Object(s.jsx)(w,Object(u.a)(Object(u.a)({list:t.list},e),{},{onEdit:t.onEditTask,onRemove:t.onRemoveTask}),e.id)})),Object(s.jsx)(C,{list:t.list,onAddTask:t.onAddTask},t.list.id)]})]})}),N=c(2),_=function(){var t=Object(n.useState)(null),e=Object(j.a)(t,2),c=e[0],i=e[1],a=Object(n.useState)(null),o=Object(j.a)(a,2),l=o[0],u=o[1],b=Object(n.useState)(null),m=Object(j.a)(b,2),f=m[0],x=m[1],k=Object(N.e)(),v=Object(N.f)(),C=function(t,e){var s=c.map((function(c){return c.id===t&&(c.tasks=[].concat(Object(d.a)(c.tasks),[e])),c}));i(s)};Object(n.useEffect)((function(){h.a.get("http://localhost:3003/lists?_expand=color&_embed=tasks").then((function(t){i(t.data)})),h.a.get("http://localhost:3003/colors").then((function(t){u(t.data)}))}),[]);var w=function(t,e){var s=c.map((function(c){return c.id===t&&(c.name=e),c}));i(s)};return Object(n.useEffect)((function(){var t=v.pathname.split("lists/")[1];if(c){var e=c.find((function(e){return e.id===Number(t)}));x(e)}}),[c,v.pathname]),Object(s.jsxs)("div",{className:"todo",children:[Object(s.jsxs)("div",{className:"todo__sidebar",children:[Object(s.jsx)(O,{onClickItem:function(){k.push("/")},items:[Object(r.a)({active:"/"===k.location.pathname,icon:Object(s.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001V8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z",fill:"black"})}),name:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"},"active",!0)]}),c?Object(s.jsx)(O,{items:c,onRemove:function(t){var e=c.filter((function(e){return e.id!==t}));i(e)},onClickItem:function(t){k.push("/lists/".concat(t.id))},activeItem:f,isRemovable:!0}):"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",Object(s.jsx)(p,{onAdd:function(t){var e=[].concat(Object(d.a)(c),[t]);i(e)},colors:l})]}),Object(s.jsxs)("div",{className:"todo__tasks",children:[Object(s.jsx)(N.a,{exact:!0,path:"/",children:c&&c.map((function(t,e){return Object(s.jsx)(g,{list:t,onAddTask:C,onEditTitle:w,withoutEmpty:!0},e)}))}),c&&f&&Object(s.jsx)(g,{onEditTask:function(t,e){var s=window.prompt("\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",e.text);if(s){var n=c.map((function(c){return c.id===t&&(c.tasks=c.tasks.map((function(t){return t.id===e.id&&(t.text=s),t}))),c}));i(n),h.a.patch("http://localhost:3003/tasks/"+e.id,{text:s})}},onRemoveTask:function(t,e){if(window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443?")){var s=c.map((function(c){return c.id===t&&(c.tasks=c.tasks.filter((function(t){return t.id!==e}))),c}));i(s),h.a.delete("http://localhost:3003/tasks/"+e).catch((function(){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")}))}},list:f,onAddTask:C,onEditTitle:w})]})]})};c(64);o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(_,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.5a7ebbab.chunk.js.map