(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(194)),c={id:"introduction",title:"Introduction Lab",sidebar_label:"Introduction Lab"},o={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction Lab",description:"Introduction to Netkit - ABR Lab",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/introduction.md",version:"current",sidebar_label:"Introduction Lab",sidebar:"docsSidebar",previous:{title:"Netkit Install Guide",permalink:"/docs/"},next:{title:"Using Tmux With Netkit-JH",permalink:"/docs/usingtmux"}},b=[{value:"Introduction to Netkit - ABR Lab",id:"introduction-to-netkit---abr-lab",children:[]},{value:"Creating <code>a</code>, <code>b</code>, and <code>r</code>",id:"creating-a-b-and-r",children:[{value:"<code>a.startup</code>",id:"astartup",children:[]},{value:"<code>b.startup</code>",id:"bstartup",children:[]},{value:"<code>r.startup</code>",id:"rstartup",children:[]},{value:"<code>lab.conf</code>",id:"labconf",children:[]}]}],l={toc:b};function d(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction-to-netkit---abr-lab"},"Introduction to Netkit - ABR Lab"),Object(i.b)("p",null,"For this lab we are going to create three machines ",Object(i.b)("inlineCode",{parentName:"p"},"a"),", ",Object(i.b)("inlineCode",{parentName:"p"},"b"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"r"),", launch them using ",Object(i.b)("inlineCode",{parentName:"p"},"lstart"),", and finally analyse the contents of their ",Object(i.b)("inlineCode",{parentName:"p"},".startup")," files. The resulting folder structure should look roughly as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ ls\na/  a.startup  b/  b.startup  lab.conf  lab.dep  r/  r.startup\n")),Object(i.b)("p",null,"The final network mapping is illustrated below."),Object(i.b)("p",null,Object(i.b)("img",{alt:"ABR lab network diagram",src:n(269).default})),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please ensure Netkit is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./"}),"installed")," correctly prior to following these steps. This lab will ",Object(i.b)("strong",{parentName:"p"},"not")," work without Netkit running on your machine."))),Object(i.b)("h2",{id:"creating-a-b-and-r"},"Creating ",Object(i.b)("inlineCode",{parentName:"h2"},"a"),", ",Object(i.b)("inlineCode",{parentName:"h2"},"b"),", and ",Object(i.b)("inlineCode",{parentName:"h2"},"r")),Object(i.b)("p",null,"Start by creating a folder for our lab, which we will name ",Object(i.b)("inlineCode",{parentName:"p"},"abr"),". You may want to do this within an ",Object(i.b)("inlineCode",{parentName:"p"},"nklabs")," directory, which can then be used for future labs. Change directory (",Object(i.b)("inlineCode",{parentName:"p"},"cd"),") to this new ",Object(i.b)("inlineCode",{parentName:"p"},"abr")," folder."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ mkdir -p nklabs/abr\n$ cd nklabs/abr\n")),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},".startup")," files for each machine, a ",Object(i.b)("inlineCode",{parentName:"p"},"lab.conf")," file, and a ",Object(i.b)("inlineCode",{parentName:"p"},"lab.dep")," file. The braces ",Object(i.b)("inlineCode",{parentName:"p"},"{...}")," are used here to allow you to create multiple files at once (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html"}),"brace expansion"),"). In other words, ",Object(i.b)("inlineCode",{parentName:"p"},"{a, b}.txt")," would result in ",Object(i.b)("inlineCode",{parentName:"p"},"a.txt")," and ",Object(i.b)("inlineCode",{parentName:"p"},"b.txt"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ touch {a,b,r}.startup lab.{conf,dep}\n")),Object(i.b)("p",null,"Next, edit the contents of each file using your favourite text editor (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"gedit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"vim"),", ",Object(i.b)("inlineCode",{parentName:"p"},"nano"),", etc.)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ gedit {a,b,r}.startup lab.{conf,dep} &\n")),Object(i.b)("p",null,"We are going to put in the parameters from the network diagram into the various files. Understanding the contents of the files is left as an exercise for the reader. It is worth noting that you don't have to set a MAC address - Netkit will do this for you, however you can override this as shown below."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is advisable to type out the contents of the files below manually rather than copy-pasting them."))),Object(i.b)("h3",{id:"astartup"},Object(i.b)("inlineCode",{parentName:"h3"},"a.startup")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ifconfig eth0 hw ether 00:aa:aa:aa:aa:aa:aa\nifconfig eth0 172.28.97.42/29\n\nroute add default gw 172.28.97.41\n")),Object(i.b)("h3",{id:"bstartup"},Object(i.b)("inlineCode",{parentName:"h3"},"b.startup")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ifconfig eth0 hw ether 00:bb:bb:bb:bb:bb:bb\nifconfig eth0 10.0.0.2/27\n\nroute add default gw 10.0.0.1\n")),Object(i.b)("h3",{id:"rstartup"},Object(i.b)("inlineCode",{parentName:"h3"},"r.startup")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ifconfig eth1 hw ether 00:81:81:81:81:81:81\nifconfig eth1 172.28.97.41/29\n\nifconfig eth2 hw ether 00:82:82:82:82:82:82\nifconfig eth2 10.0.0.1/27\n")),Object(i.b)("h3",{id:"labconf"},Object(i.b)("inlineCode",{parentName:"h3"},"lab.conf")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"a[0]=lanX\n\nr[1]=lanX\nr[2]=lanY\n\nb[0]=lanY \n")),Object(i.b)("p",null,"Before launching Netkit we need to create a folder for each machine."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ mkdir a b r\n")),Object(i.b)("p",null,"Finally, we are ready to launch the machines. Run ",Object(i.b)("inlineCode",{parentName:"p"},"lstart")," and you should see terminal windows pop up for machines ",Object(i.b)("inlineCode",{parentName:"p"},"a"),", ",Object(i.b)("inlineCode",{parentName:"p"},"b"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"r"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ lstart\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Launching the terminals using lstart",src:n(270).default})),Object(i.b)("p",null,"To kill the machines, just run ",Object(i.b)("inlineCode",{parentName:"p"},"lcrash")," in your original terminal window."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ lcrash\n")),Object(i.b)("p",null,"Voil\xe0! You have successfully created your first Netkit lab."),Object(i.b)("p",null,"\ud83d\udc38"))}d.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/abr_guide_network_diagram-b19c454aca2e15c177e1653b16bf0717.jpg"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/abr_guide_terminal_lstart-c518d5e3c368d7c5cc5354d12174f6a8.png"}}]);