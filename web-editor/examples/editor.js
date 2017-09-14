var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r["throw"](e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,u)}l((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return l([e,t])}}function l(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=i[a[0]&2?"return":a[0]?"throw":"next"])&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[0,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};(function(e){if(typeof module==="object"&&typeof module.exports==="object"){var t=e(require,exports);if(t!==undefined)module.exports=t}else if(typeof define==="function"&&define.amd){define(["require","exports","../Editor","../project","../Runner"],e)}})(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=e("../Editor");var r=e("../project");var i=e("../Runner");var o="../projects/";var a=document.getElementById("div-file");var u=document.getElementById("load-project");var l=document.getElementById("project");var c=document.getElementById("select-file");var d=document.getElementById("run");var s=document.getElementById("editor");var f=new n.default(s,{automaticLayout:true});var v=document.getElementById("runner");var p=new i.default(v);function b(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:e.preventDefault();return[4,y(o+l.value)];case 1:t.sent();l.setAttribute("disabled","disabled");u.setAttribute("disabled","disabled");u.removeEventListener("click",b);return[2]}})})}function h(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:e.preventDefault();d.setAttribute("disabled","disabled");return[4,p.run()];case 1:t.sent();d.removeAttribute("disabled");return[2]}})})}function m(e){e.preventDefault();f.display(c.value)}function y(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:console.log("Loading project...");return[4,r.default.load(e)];case 1:n.sent();t=r.default.get();console.log("Loaded. Project contains "+(t.files.length+t.environmentFiles.length)+" files.");r.default.getFileNames().sort(function(e,t){return e<t?-1:1}).forEach(function(e){var t=document.createElement("option");t.value=e;t.text=e;c.appendChild(t)});c.addEventListener("change",m);f.display(c.value);a.classList.remove("hidden");return[2]}})})}u.addEventListener("click",b);u.removeAttribute("disabled");l.removeAttribute("disabled");d.addEventListener("click",h)});