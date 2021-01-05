(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(121)),o={id:"tcpdump",title:"Building TCPDump for Netkit",sidebar_label:"Building TCPDump"},p={unversionedId:"dev/guides/tcpdump",id:"version-1.0.0/dev/guides/tcpdump",isDocsHomePage:!1,title:"Building TCPDump for Netkit",description:"Netkit-JH requires a vanilla version of TCPDump (rather than the TCPDump from Debian's repositories) as Debian's TCPDump patches do not allow us to do this:",source:"@site/versioned_docs/version-1.0.0/dev/guides/tcpdump.md",slug:"/dev/guides/tcpdump",permalink:"/docs/dev/guides/tcpdump",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.0.0/dev/guides/tcpdump.md",version:"1.0.0",sidebar_label:"Building TCPDump",sidebar:"version-1.0.0/someSidebar",previous:{title:"Building Netkit-JH with Debian Bullseye",permalink:"/docs/dev/guides/debianbuild"},next:{title:"Installing Additional Packages",permalink:"/docs/dev/guides/fspackages"}},c=[],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Netkit-JH requires a vanilla version of TCPDump (rather than the TCPDump from Debian's repositories) as Debian's TCPDump patches do not allow us to do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tcpdump -i eth0 -w /hostlab/eth0.pcap\n")),Object(i.b)("p",null,"Instead, we would have to do:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tcpdump -i eth0 -w /hostlab/eth0.pcap -Z root -C 1\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tcpdump -i eth0 > /hostlab/eth0.pcap\n")),Object(i.b)("p",null,"To build TCPDump, firstly start a Netkit machine with a tap interface (this will require root privileges) and 512MB of RAM."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ vstart netkit_tcpdump --eth0=tap,10.0.0.1,10.0.0.2 --mem=512\n")),Object(i.b)("p",null,"Once the VM has started, run the commands below to configure DNS, download build packages and compile TCPDump."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ echo "nameserver 8.8.8.8" > /etc/resolv.conf\n$ apt update && apt install git make build-essential flex bison\n$ git clone https://github.com/the-tcpdump-group/tcpdump\n$ git clone https://github.com/the-tcpdump-group/libpcap\n$ cd libpcap\n$ ./configure && make\n$ cd ../tcpdump\n$ ./configure && make\n$ cp tcpdump /hosthome/tcpdump\n$ cp tcpdump.1 /hosthome/tcpdump.1\n')),Object(i.b)("p",null,"Now move the ",Object(i.b)("inlineCode",{parentName:"p"},"tcpdump")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tcpdump.1")," files out of your home directory into the applicable directories inside ",Object(i.b)("inlineCode",{parentName:"p"},"netkit-jh-build/fs/filesystem-tweaks"),"."))}l.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(m,p(p({ref:t},u),{},{components:n})):a.a.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);