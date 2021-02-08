(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(194)),s={id:"fspackages",title:"Installing Additional Packages",sidebar_label:"Installing Additional Packages"},o={unversionedId:"dev/guides/fspackages",id:"version-1.0.0/dev/guides/fspackages",isDocsHomePage:!1,title:"Installing Additional Packages",description:"Download this Repo",source:"@site/versioned_docs/version-1.0.0/dev/guides/fspackages.md",slug:"/dev/guides/fspackages",permalink:"/docs/1.0.0/dev/guides/fspackages",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.0.0/dev/guides/fspackages.md",version:"1.0.0",sidebar_label:"Installing Additional Packages",sidebar:"version-1.0.0/someSidebar",previous:{title:"Building TCPDump for Netkit",permalink:"/docs/1.0.0/dev/guides/tcpdump"},next:{title:"Creating Kernel Patches",permalink:"/docs/1.0.0/dev/guides/kernelpatches"}},l=[{value:"Download this Repo",id:"download-this-repo",children:[]},{value:"Modify Package List",id:"modify-package-list",children:[]},{value:"Modify the Disabled Services List",id:"modify-the-disabled-services-list",children:[]},{value:"Build the New Filesystem",id:"build-the-new-filesystem",children:[]},{value:"Test the New Filesystem",id:"test-the-new-filesystem",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"download-this-repo"},"Download this Repo"),Object(r.b)("p",null,"To get a local copy of this repo on the vm run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/netkit-jh/netkit-jh-build.git\n$ cd netkit-jh-build\n")),Object(r.b)("h2",{id:"modify-package-list"},"Modify Package List"),Object(r.b)("p",null,"Edit the file ",Object(r.b)("em",{parentName:"p"},"fs/packages-list")),Object(r.b)("p",null,"We need to append the name of the package as it would be found in the package manager. For example if we were to install ",Object(r.b)("inlineCode",{parentName:"p"},"nginx")," normally we would run ",Object(r.b)("inlineCode",{parentName:"p"},"apt install nginx"),". Therefore we will add 'nginx' to the end of this file."),Object(r.b)("h2",{id:"modify-the-disabled-services-list"},"Modify the Disabled Services List"),Object(r.b)("p",null,"If the package that you have added creates a systemd service which is enabled by default, it is often a good idea to disable it. If you don't need the service running by default in every Netkit VM, it is better that it is disabled in the filesystem image, and enabled in the machine's startup file."),Object(r.b)("p",null,"To do this we can edit the ",Object(r.b)("em",{parentName:"p"},"fs/disabled-services")," file and add the name of the systemd service."),Object(r.b)("h2",{id:"build-the-new-filesystem"},"Build the New Filesystem"),Object(r.b)("p",null,"Build the filesystem as shown in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"dockerbuild"}),"docker")," or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"debianbuild"}),"vm")," guide, depending on your development environment.\nWhen finished, the filesystem should appear as a tarfile in the root of the netkit-jh-build directory, with a name similar to netkit-fs-0.1.8.tar.bz2 (but with a different version number)."),Object(r.b)("h2",{id:"test-the-new-filesystem"},"Test the New Filesystem"),Object(r.b)("p",null,"Extract the filesystem to a different location to your main install (you don't want to override the filesystem in $NETKIT_HOME in case there are problems with the filesystem!)."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir nk_test\n$ cd nk_test\n$ tar -xvf netkit-fs-0.1.8.tar.bz2\n$ ls -lha $NETKIT_HOME/fs # take note of where the symbolic link netkit-fs points to\n$ ln -sfn netkit-ng/fs/netkit-fs-0.1.8 $NETKIT_HOME/fs/netkit-fs\n")),Object(r.b)("p",null,"Now you can run a Netkit lab and test if your software package has been installed on the filesystem."),Object(r.b)("p",null,"After testing, you might want to revert to using the original netkit filesystem that was installed by default.\nTo do this simply change the symbolic link back with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"$ ln -sfn $NETKIT_HOME/fs/netkit-fs-0.1.8 $NETKIT_HOME/fs/netkit-fs\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Replace the ",Object(r.b)("inlineCode",{parentName:"p"},"$NETKIT_HOME/fs/netkit-fs-0.1.8")," in the last command with the file which was originally pointed to by the symbolic link"))))}d.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=i,f=b["".concat(s,".").concat(u)]||b[u]||p[u]||r;return n?a.a.createElement(f,o(o({ref:t},c),{},{components:n})):a.a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);