(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(194)),o=n(202),c=n(203),s={id:"debianbuild",title:"Building Netkit-JH",sidebar_label:"Building Netkit-JH"},l={unversionedId:"dev/guides/debianbuild",id:"dev/guides/debianbuild",isDocsHomePage:!1,title:"Building Netkit-JH",description:"Setup Your System for Building Netkit-JH",source:"@site/docs/dev/guides/debianbuildguide.mdx",slug:"/dev/guides/debianbuild",permalink:"/docs/next/dev/guides/debianbuild",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/dev/guides/debianbuildguide.mdx",version:"current",sidebar_label:"Building Netkit-JH",sidebar:"docsSidebar",previous:{title:"Bugs",permalink:"/docs/next/dev/currentbugs"},next:{title:"Building Netkit-JH with Docker",permalink:"/docs/next/dev/guides/dockerbuild"}},b=[{value:"Setup Your System for Building Netkit-JH",id:"setup-your-system-for-building-netkit-jh",children:[{value:"Install Packages",id:"install-packages",children:[]}]},{value:"Download this Repo",id:"download-this-repo",children:[]},{value:"Running the Build Process",id:"running-the-build-process",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"setup-your-system-for-building-netkit-jh"},"Setup Your System for Building Netkit-JH"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is no longer necessary to use debian for building Netkit-JH, however it is a good idea to use\na dev environment separate to your host. If you don't want to set up a vm for this, it might be\neasier to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"dockerbuild"}),"use docker")))),Object(r.b)("p",null,"If you use a VM, you should configure the VM to have at least 4GB RAM, 30GB of storage and as much processing power as you can allocate it."),Object(r.b)("h3",{id:"install-packages"},"Install Packages"),Object(r.b)("p",null,"To install the packages required for building run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt install apt-utils git make debootstrap \\\n    libreadline-dev init-system-helpers initscripts \\\n    insserv bison flex gcc-multilib bc quilt xz-utils \\\n    libvdeplug-dev\n")),Object(r.b)("p",null,"If you're not using a debian-based system you may need to find the equivalent of these packages for your distro as they may be named differently."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If a command in the build process fails due to a missing program, have a look in the Dockerfile to see if there are any new packages in the 'apt-install' command which you have not yet installed - with the build process constantly changing we may be adding / removing packages from the build dependencies."))),Object(r.b)("h2",{id:"download-this-repo"},"Download this Repo"),Object(r.b)("p",null,"To get a local copy of this repo on the vm run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/netkit-jh/netkit-jh-build.git\n$ cd netkit-jh-build\n")),Object(r.b)("p",null,"The following commands assume your current working directory is the root of this repository."),Object(r.b)("h2",{id:"running-the-build-process"},"Running the Build Process"),Object(r.b)("p",null,"To compile all components of Netkit-JH (the kernel, the filesystem and the core executables) run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make\n")),Object(r.b)("p",null,"If you would like to build specific components, you can pass commands to ",Object(r.b)("inlineCode",{parentName:"p"},"make"),". Some examples are shown below:"),Object(r.b)(o.a,{defaultValue:"kern",values:[{label:"Kernel",value:"kern"},{label:"Filesystem",value:"fs"},{label:"Core",value:"core"},{label:"Clean",value:"clean"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"kern",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make build-kernel\n\n"))),Object(r.b)(c.a,{value:"fs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make build-fs\n\n"))),Object(r.b)(c.a,{value:"core",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make build-core\n\n"))),Object(r.b)(c.a,{value:"clean",mdxType:"TabItem"},Object(r.b)("p",null,"To clean up the files used in the build process run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make mrproper\n\n")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The kernel must be built before the filesystem! This is because the kernel modules are copied over to the filesystem as part of the fs build process. If you don't give any arguments to ",Object(r.b)("inlineCode",{parentName:"p"},"make")," this won't be an issue, but if you decide to make the filesystem with ",Object(r.b)("inlineCode",{parentName:"p"},"build-fs")," before the kernel has been built, it will not build successfully."))))}d.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},199:function(e,t,n){"use strict";var a=n(0),i=n(200);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},200:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},202:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(199),o=n(195),c=n(55),s=n.n(c);const l=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(r.a)(),[f,v]=Object(a.useState)(c),g=a.Children.toArray(e.children);if(null!=d){const e=m[d];null!=e&&e!==f&&u.some((t=>t.value===e))&&v(e)}const O=e=>{v(e),null!=d&&h(d,e)},j=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},203:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);