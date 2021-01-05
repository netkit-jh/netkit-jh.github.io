(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,h=l["".concat(a,".").concat(b)]||l[b]||p[b]||i;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(121)),a={id:"gettingstarted",title:"Getting Started with Netkit Development",sidebar_label:"Getting Started"},c={unversionedId:"dev/gettingstarted",id:"version-1.0.0/dev/gettingstarted",isDocsHomePage:!1,title:"Getting Started with Netkit Development",description:"Making a Build Environment",source:"@site/versioned_docs/version-1.0.0/dev/gettingstarted.md",slug:"/dev/gettingstarted",permalink:"/docs/dev/gettingstarted",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.0.0/dev/gettingstarted.md",version:"1.0.0",sidebar_label:"Getting Started",sidebar:"version-1.0.0/someSidebar",previous:{title:"Testing Your Netkit Installation",permalink:"/docs/testing"},next:{title:"Features and Improvements Currently Under Development",permalink:"/docs/dev/featuresinprogress"}},u=[{value:"Making a Build Environment",id:"making-a-build-environment",children:[]},{value:"Where to Start",id:"where-to-start",children:[]},{value:"What Can I do to Help?",id:"what-can-i-do-to-help",children:[]},{value:"Contributing to Netkit-JH",id:"contributing-to-netkit-jh",children:[]}],s={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"making-a-build-environment"},"Making a Build Environment"),Object(i.b)("p",null,"When you make changes to the source code for the Netkit kernel, filesystem or code, you need to build them to produce the updated component. It is recommended to use an environment set up specifically for development rather than using your primary machine. This can be done using a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"guides/debianbuild"}),"virtual machine")," or by running the build process in a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"guides/dockerbuild"}),"docker container"),"."),Object(i.b)("h2",{id:"where-to-start"},"Where to Start"),Object(i.b)("p",null,"If you want to learn how develop and contribute towards Netkit, we recommend you start with something simple, such as changing the list of packages installed on the base filesystem. We have a guide for that ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"guides/fspackages"}),"here"),"."),Object(i.b)("h2",{id:"what-can-i-do-to-help"},"What Can I do to Help?"),Object(i.b)("p",null,"If you want to help with Netkit-JH development but don't know where to start, have a look at the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netkit-jh/netkit-jh-build/issues"}),"Issues")," on Github, and at the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"featuresinprogress"}),"Upcoming Features")," - this contains ideas that we want to add to future versions of Netkit, but have not necessarily started working on."),Object(i.b)("h2",{id:"contributing-to-netkit-jh"},"Contributing to Netkit-JH"),Object(i.b)("p",null,"We are currently hosting the source for Netkit-JH on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/netkit-jh"}),"Github"),"."),Object(i.b)("p",null,"Before making changes you want to contribute, you should fork the repository you want to work on\n(most likely netkit-jh-build). You should make your changes on your fork, then create a pull request\nto merge your changes into the active netkit-jh repository. For more info we will soon be adding\na guide on how to contribute!"))}d.isMDXComponent=!0}}]);