!function(){function n(n){if(Array.isArray(n))return n}function t(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}function a(r,a){return n(r)||t(r)||o(r,a)||e()}function c(n,t,e,r,o,a,c){try{var i=n[a](c),l=i.value}catch(n){return void e(n)}i.done?t(l):Promise.resolve(l).then(r,o)}function i(n,t){var e,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(l){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(n,c)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}Object.create;Object.create;var l,s,u=(l=function(n){var t,e,r;return i(this,(function(o){switch(o.label){case 0:t="https://restcountries.com/v3/name/".concat(n,"?fields=name,capital,population,flags,languages"),o.label=1;case 1:return o.trys.push([1,4,,5]),[4,fetch(t)];case 2:return(e=o.sent()).ok?[4,e.json()]:[2,Promise.reject(new Error(e.status))];case 3:return[2,o.sent()];case 4:return r=o.sent(),console.error(r),[2,Promise.reject(new Error("An error occurred while fetching the data."))];case 5:return[2]}}))},s=function(){var n=this,t=arguments;return new Promise((function(e,r){var o=l.apply(n,t);function a(n){c(o,e,r,a,i,"next",n)}function i(n){c(o,e,r,a,i,"throw",n)}a(void 0)}))},function(n){return s.apply(this,arguments)}),f=document.getElementById("search-box"),p=document.querySelector(".country-list"),y=document.querySelector(".country-info");p.addEventListener("click",(function(n){var t=n.target.closest("li");if(t){var e=t.id;u(e).then((function(n){d(n)}))}}));var h=_.debounce((function(){var n=f.value.trim();n?u(n).then((function(n){d(n),n.length>10?Notiflix.Notify.info("Too many matches found. Please enter a more specific name."):n.length>=2&&n.length<=10?Notiflix.Notify.success("".concat(n.length," countries found.")):1===n.length?Notiflix.Notify.success("One country found."):Notiflix.Notify.failure("Oops, there is no country with that name.")})):p.innerHTML=""}),300),m=function(n){var t={ul:{display:"flex","flex-direction":"column",gap:"10px",padding:0},li:{"list-style":"none",display:"inline-flex",gap:"10px",cursor:"pointer"},img:{width:"40px"},p:{margin:0},h4:{"font-size":"30px","font-weight":"bold",margin:0},span:{"font-weight":"bold"}}[n];return Object.entries(t).map((function(n){var t=a(n,2),e=t[0],r=t[1];return"".concat(e,":").concat(r)})).join(";")},d=function(n){var t=n.map((function(n){var t=n.name.common,e=n.flags;return'\n        <li id="'.concat(t,'" style="').concat(m("li"),'">\n          <img src="').concat(e[0],'" alt="').concat(t,' flag" style="').concat(m("img"),'">\n          <p style="').concat(m("p"),'">').concat(t,"</p>\n        </li>\n      ")})).join("");if(p.innerHTML=t,p.style.cssText=m("ul"),y.innerHTML="",1===n.length){var e=n[0],r=e.name,o=e.capital,a=e.population,c=e.languages,i=e.flags;p.innerHTML="",y.innerHTML='\n        <ul style="'.concat(m("ul"),'">\n          <li style="').concat(m("li"),'">\n            <img src="').concat(i[0],'" alt="').concat(r.common,' flag" style="').concat(m("img"),'">\n            <h4 style="').concat(m("h4"),'">').concat(r.common,'</h4>\n          </li>\n          <li style="').concat(m("li"),'">\n            <span style="').concat(m("span"),'">Capital:</span>\n            <p style="').concat(m("p"),'">').concat(o[0]||"-",'</p>\n          </li>\n          <li style="').concat(m("li"),'">\n            <span style="').concat(m("span"),'">Population:</span>\n            <p style="').concat(m("p"),'">').concat(a,'</p>\n          </li>\n          <li style="').concat(m("li"),'">\n            <span style="').concat(m("span"),'">Languages:</span>\n            <p style="').concat(m("p"),'">').concat(Object.values(c).join(", "),"</p>\n</li>\n</ul>")}};f.addEventListener("input",h)}();
//# sourceMappingURL=index.23805b2e.js.map
