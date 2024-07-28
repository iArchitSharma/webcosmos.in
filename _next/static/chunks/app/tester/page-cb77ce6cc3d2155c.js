(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{7615:function(e,t,r){Promise.resolve().then(r.bind(r,1733)),Promise.resolve().then(r.bind(r,4323)),Promise.resolve().then(r.bind(r,302))},357:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function l(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var o=[],c=!1,d=-1;function u(){c&&n&&(c=!1,n.length?o=n.concat(o):d=-1,o.length&&m())}function m(){if(!c){var e=a(u);c=!0;for(var t=o.length;t;){for(n=o,o=[];++d<t;)n&&n[d].run();d=-1,t=o.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new h(e,t)),1!==o.length||c||a(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var l=r[e]={exports:{}},i=!0;try{t[e](l,l.exports,n),i=!1}finally{i&&delete r[e]}return l.exports}n.ab="//";var s=n(229);e.exports=s}()},1733:function(e,t,r){"use strict";var n=r(7437),s=r(2265);t.default=()=>{let[e,t]=(0,s.useState)([]),[r,l]=(0,s.useState)({firstName:"",lastName:"",email:"",budget:"",message:"",agreement1:!1,agreement2:!1}),[i,a]=(0,s.useState)("");(0,s.useRef)(null);let o=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},c=e=>{let{name:t,value:n,type:s,checked:i}=e.target;l({...r,[t]:"checkbox"===s?i:n})},d=async n=>{if(n.preventDefault(),!r.firstName||!r.lastName||!r.email||!r.budget||!r.message||!r.agreement2){alert("Please fill out all fields and select at least one option.");return}let s=await fetch("".concat("http://localhost:5000/send"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r,selectedOptions:e.filter(Boolean)})});console.log(await s.json()),s.ok?(a("Your details have been received successfully. We will contact you shortly."),l({firstName:"",lastName:"",email:"",budget:"",message:"",agreement1:!1,agreement2:!1}),t([])):a("There was an error sending your details. Please try again.")};return(0,n.jsxs)("div",{className:"max-w-4xl mx-auto p-8 bg-black text-white",children:[i&&(0,n.jsx)("div",{className:"mb-4 p-4 bg-green-500 text-black rounded",children:i}),(0,n.jsxs)("form",{onSubmit:d,children:[(0,n.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8",children:["A new website","Branding","Motion graphics","E-Commerce","Development","On-going support","App from scratch"].map(t=>(0,n.jsx)("button",{type:"button",onClick:()=>o(t),className:"border border-white rounded-full px-6 py-2 hover:bg-heading-white hover:text-black ".concat(e.includes(t)?"bg-white text-black":""),children:t},t))}),(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[(0,n.jsx)("input",{type:"text",name:"firstName",placeholder:"First name*",value:r.firstName,onChange:c,className:"border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400"}),(0,n.jsx)("input",{type:"text",name:"lastName",placeholder:"Last name*",value:r.lastName,onChange:c,className:"border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400"}),(0,n.jsx)("input",{type:"email",name:"email",placeholder:"Email*",value:r.email,onChange:c,className:"border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400 md:col-span-2"})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:(0,n.jsx)("input",{type:"text",name:"budget",placeholder:"Budget (\xa3)",value:r.budget,onChange:c,className:"border-b-2 border-white bg-black w-full py-2 focus:outline-none placeholder-gray-400"})}),(0,n.jsxs)("p",{className:"mb-4",children:["More info on minimum/typical budget sizes can be found ",(0,n.jsx)("a",{href:"#",className:"text-blue-400 underline",children:"here"}),"."]}),(0,n.jsx)("textarea",{name:"message",placeholder:"Message",value:r.message,onChange:c,className:"border-b-2 border-white bg-black w-full py-2 mb-8 focus:outline-none placeholder-gray-400"}),(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsxs)("label",{className:"flex items-center mb-4",children:[(0,n.jsx)("input",{type:"radio",name:"agreement1",checked:r.agreement1,onChange:c,className:"mr-2"}),(0,n.jsx)("span",{className:"text-gray-400",children:"I'm happy to receive a monthly newsletter from KOTA"})]}),(0,n.jsxs)("label",{className:"flex items-center",children:[(0,n.jsx)("input",{type:"radio",name:"agreement2",checked:r.agreement2,onChange:c,className:"mr-2"}),(0,n.jsx)("span",{className:"text-gray-400",children:"I understand that KOTA will securely hold my data in accordance with their privacy policy."})]})]}),(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)("button",{type:"submit",className:"bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200",children:"Submit"})})]})]})}},4323:function(e,t,r){"use strict";var n=r(7437),s=r(2265);r(5305);var l=r(357);let i=[{id:1,title:"Boost your conversion rate",description:"Everything on the web from a simple Website to enterprise Web Apps",image:"/test.png",href:"#"},{id:2,title:"How to use search engine optimization to drive sales",description:"Everything on the web from a simple Website to enterprise Web Apps",image:"/test.png",href:"#"},{id:3,title:"Improve your customer experience",description:"Everything on the web from a simple Website to enterprise Web Apps",image:"/test.png",href:"#"},{id:4,title:"New Feature",description:"Description of the new feature",image:"/test.png",href:"#"},{id:5,title:"this is no. 5 Improve your customer experience",description:"Everything on the web from a simple Website to enterprise Web Apps",image:"/test.png",href:"#"},{id:6,title:"this is no. 6 Improve your customer experience",description:"Description of the new feature",image:"/test.png",href:"#"}];t.default=()=>{let e=l.env.NEXT_PUBLIC_BASE_PATH,t=(0,s.useRef)(null),[r,a]=(0,s.useState)(0),o=()=>{let e=t.current;if(e){let t=e.scrollWidth/2,r=e.clientWidth;e.scrollLeft=t+i.length*r/2.4-r/2.4}};(0,s.useEffect)(()=>{let e=t.current,r=e.scrollWidth/2,n=e.clientWidth,s=()=>{let t=e.scrollLeft;a(t),t>=r+n/2?e.scrollLeft=t-r:t<=n/2&&(e.scrollLeft=r+t-n/2)},l=()=>{o()};return e.addEventListener("scroll",s),window.addEventListener("resize",l),o(),()=>{e.removeEventListener("scroll",s),window.removeEventListener("resize",l)}},[]);let c=(e,t,r)=>{let n=r/3;return 1-Math.min(Math.abs(t+r/2.4-(e*n+n/3.3))/r*2,1)};return(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsx)("div",{ref:t,className:"flex overflow-x-scroll hide-scrollbar -mx-4 px-4 space-x-4 horizontal-scroll",children:i.concat(i).concat(i).map((r,s)=>{var l,i;return(0,n.jsx)("div",{className:"inline-block flex-none w-1/3 px-2 mb-8",style:{transform:"scale(".concat(c(s,(null===(l=t.current)||void 0===l?void 0:l.scrollLeft)||0,(null===(i=t.current)||void 0===i?void 0:i.clientWidth)||1),")"),transition:"transform 0.2s ease"},children:(0,n.jsx)("a",{href:r.href,children:(0,n.jsx)("div",{className:"bg-cover bg-center h-64 rounded-lg shadow-md",style:{backgroundImage:"url(".concat(e).concat(r.image,")")},children:(0,n.jsxs)("div",{className:"bg-black bg-opacity-50 h-full rounded-lg p-4 flex flex-col justify-end",children:[(0,n.jsx)("h2",{className:"text-xl font-bold text-white mt-2",children:r.title}),(0,n.jsx)("p",{className:"text-sm text-gray-300",children:r.description})]})})})},s)})})})}},302:function(e,t,r){"use strict";var n=r(7437),s=r(2265),l=r(357);t.default=e=>{let{testimonials:t,showViewMore:r}=e,i=l.env.NEXT_PUBLIC_BASE_PATH||"",[a,o]=(0,s.useState)(0);return(0,n.jsx)("div",{className:"text-white p-8 rounded-lg mx-auto",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("div",{className:"w-1/3 pr-6 flex flex-col space-y-2",children:[t.map((e,t)=>(0,n.jsxs)("button",{className:"flex items-start p-4 rounded-lg text-left transition-all duration-300 ease-in-out ".concat(t===a?"bg-gray-700":""),onClick:()=>o(t),children:[(0,n.jsx)("img",{src:"".concat(i).concat(e.image),alt:e.name,className:"w-8 h-8 rounded-full"}),(0,n.jsxs)("div",{className:"ml-4",children:[(0,n.jsx)("div",{className:"font-bold text-xl pb-2",children:e.name}),(0,n.jsx)("div",{className:"text-sm",children:e.position})]})]},t)),r&&(0,n.jsx)("a",{href:"".concat(l.env.NEXT_PUBLIC_BASE_PATH,"/testimonial"),className:"p-8 text-left text-blue-500 mt-2 hover:underline",children:"View other 20 testimonials →"})]}),(0,n.jsx)("div",{className:"w-2/3",children:(0,n.jsxs)("blockquote",{className:"p-6",children:[(0,n.jsx)("h3",{className:"font-bold text-2xl mb-3",children:t[a].short}),(0,n.jsxs)("p",{className:"text-xl italic mb-4 font-light",children:['"',t[a].testimonial,'"']})]})})]})})}},5305:function(){}},function(e){e.O(0,[180,971,23,744],function(){return e(e.s=7615)}),_N_E=e.O()}]);