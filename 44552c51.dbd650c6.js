(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{194:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(O,s(s({ref:t},l),{},{components:n})):r.a.createElement(O,s({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(194)),c={id:"creatingtests",title:"Creating Netkit Test Labs",sidebar_label:"Creating Tests"},s={unversionedId:"dev/guides/creatingtests",id:"version-1.1.3/dev/guides/creatingtests",isDocsHomePage:!1,title:"Creating Netkit Test Labs",description:"Each test in our testing suite has a configuration file and a lab folder associated with it. Here is an example config:",source:"@site/versioned_docs/version-1.1.3/dev/guides/creatingtests.md",slug:"/dev/guides/creatingtests",permalink:"/docs/1.1.3/dev/guides/creatingtests",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.1.3/dev/guides/creatingtests.md",version:"1.1.3",sidebar_label:"Creating Tests",sidebar:"version-1.1.3/docsSidebar",previous:{title:"Creating Kernel Patches",permalink:"/docs/1.1.3/dev/guides/kernelpatches"},next:{title:"Adding New Configuration Options to netkit.conf",permalink:"/docs/1.1.3/dev/guides/addingnewconfigs"}},o=[],l={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each test in our testing suite has a configuration file and a lab folder associated with it. Here is an example config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"NAME=ABR Lab\nDESCRIPTION=Simple lab with two machines joined by a router.\nLAB_FOLDER=abr\nLAB_TIMEOUT=90\nFILES=ping_successful_a,ping_successful_b\nFILES_TIMEOUT=90\n")),Object(i.b)("p",null,"A list of possible configuration settings can be found below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required / Optional"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NAME"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A human readable name of the test."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DESCRIPTION"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A description of the test."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LAB_FOLDER"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The folder that contains the lab files for the test."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LAB_TIMEOUT"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of seconds to wait for lstart to finish before marking the test as failed."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FILES"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A list of comma seperated file names that indicate a test has been successful."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FILES_TIMEOUT"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of seconds to wait for all files listed in FILES to exist before marking the test as failed."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TERMINAL"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A specific terminal emulator to use for this test."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional - defaults to user's terminal defined in netkit.conf")))),Object(i.b)("p",null,"Inside the lab folders, a systemd service named ",Object(i.b)("inlineCode",{parentName:"p"},"netkit-validation.service")," is used to automatically execute a test script (usually found at ",Object(i.b)("inlineCode",{parentName:"p"},"/root/test.sh"),"). This test script is responsible for creating one/many of the files listed in the ",Object(i.b)("inlineCode",{parentName:"p"},"FILES")," configuration. Here's an example of one below, which repeatedly pings a machine until it responds. Once it responds, it creates the ",Object(i.b)("inlineCode",{parentName:"p"},"ping_successful_a")," file inside the ",Object(i.b)("inlineCode",{parentName:"p"},"/hostlab")," directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n\n# Repeatedly attempt to ping until successful\nwhile true; do\n    if ping -c 1 200.0.0.1; then\n        touch /hostlab/ping_successful_a\n        exit 0;\n    fi\ndone\n")),Object(i.b)("p",null,"To create your own test, firstly create a configuration file inside ",Object(i.b)("inlineCode",{parentName:"p"},"tests/configs"),". The number at the front indicates the order in which the tests are ran (please select your number appropiately!) Make sure to configure all required options."),Object(i.b)("p",null,"Create a lab folder inside ",Object(i.b)("inlineCode",{parentName:"p"},"tests/labs/LAB_FOLDER")," where LAB_FOLDER is the value of LAB","_","FOLDER inside your config file."),Object(i.b)("p",null,"Configure your machines and test scripts so that your ",Object(i.b)("inlineCode",{parentName:"p"},"FILES")," are created when the test is successful. We recommend looking at the ABR lab as a basis for your test."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Keep your tests as simple as possible!"))))}b.isMDXComponent=!0}}]);