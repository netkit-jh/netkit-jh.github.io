(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},129:function(e,t,n){"use strict";var a=n(0),r=n(130);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},130:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},140:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(129),o=n(122),l=n(55),c=n.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:b,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[h,O]=Object(a.useState)(l),v=a.Children.toArray(e.children);if(null!=d){const e=m[d];null!=e&&e!==h&&b.some((t=>t.value===e))&&O(e)}const g=e=>{O(e),null!=d&&f(d,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},141:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(121)),o=n(140),l=n(141),c={id:"debianbuild",title:"Building Netkit-JH with Debian Bullseye",sidebar_label:"Building with Debian"},s={unversionedId:"dev/guides/debianbuild",id:"version-1.0.0/dev/guides/debianbuild",isDocsHomePage:!1,title:"Building Netkit-JH with Debian Bullseye",description:"Setup a Debian OS",source:"@site/versioned_docs/version-1.0.0/dev/guides/debianbuildguide.mdx",slug:"/dev/guides/debianbuild",permalink:"/docs/dev/guides/debianbuild",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.0.0/dev/guides/debianbuildguide.mdx",version:"1.0.0",sidebar_label:"Building with Debian",sidebar:"version-1.0.0/someSidebar",previous:{title:"Building Netkit-JH with Docker",permalink:"/docs/dev/guides/dockerbuild"},next:{title:"Building TCPDump for Netkit",permalink:"/docs/dev/guides/tcpdump"}},u=[{value:"Setup a Debian OS",id:"setup-a-debian-os",children:[]},{value:"Install Packages",id:"install-packages",children:[]},{value:"Download this Repo",id:"download-this-repo",children:[]},{value:"Running the Build Process",id:"running-the-build-process",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"setup-a-debian-os"},"Setup a Debian OS"),Object(i.b)("p",null,"You could install Debian on bare metal but we recommend that you set up a virtual machine for Netkit builds. Install a debian Bullseye VM in a virtualisation platform of your choice (e.g. VirtualBox, VMWare, KVM+QEMU, User-mode Linux... Joking do not use UML)."),Object(i.b)("p",null,"You should configure the VM to have at least 4GB RAM, 30GB of storage and as much processing power as you can allocate it."),Object(i.b)("h2",{id:"install-packages"},"Install Packages"),Object(i.b)("p",null,"To install the packages required for building run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ sudo apt install git make dpkg-dev debootstrap libreadline-dev\n")),Object(i.b)("h2",{id:"download-this-repo"},"Download this Repo"),Object(i.b)("p",null,"To get a local copy of this repo on the vm run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/netkit-jh/netkit-jh-build.git\n$ cd netkit-jh-build\n")),Object(i.b)("p",null,"The following commands assume your current working directory is the root of this repository."),Object(i.b)("h2",{id:"running-the-build-process"},"Running the Build Process"),Object(i.b)("p",null,"To compile all components of Netkit-JH (the kernel, the filesystem and the core executables) run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make\n")),Object(i.b)("p",null,"If you would like to build specific components, you can pass commands to ",Object(i.b)("inlineCode",{parentName:"p"},"make"),". Some examples are shown below:"),Object(i.b)(o.a,{defaultValue:"kern",values:[{label:"Kernel",value:"kern"},{label:"Filesystem",value:"fs"},{label:"Core",value:"core"},{label:"Clean",value:"clean"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"kern",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make build-kernel\n\n"))),Object(i.b)(l.a,{value:"fs",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make build-fs\n\n"))),Object(i.b)(l.a,{value:"core",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make build-core\n\n"))),Object(i.b)(l.a,{value:"clean",mdxType:"TabItem"},Object(i.b)("p",null,"To clean up the files used in the build process run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo make mrproper\n\n")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The kernel must be built before the filesystem! This is because the kernel modules are copied over to the filesystem as part of the fs build process. If you don't give any arguments to ",Object(i.b)("inlineCode",{parentName:"p"},"make")," this won't be an issue, but if you decide to make the filesystem with ",Object(i.b)("inlineCode",{parentName:"p"},"build-fs")," before the kernel has been built, it will not build successfully."))))}d.isMDXComponent=!0}}]);