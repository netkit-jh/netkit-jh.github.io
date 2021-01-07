(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(147)),o=n(168),l=n(169),c={id:"dockerbuild",title:"Building Netkit-JH with Docker",sidebar_label:"Building with Docker"},d={unversionedId:"dev/guides/dockerbuild",id:"dev/guides/dockerbuild",isDocsHomePage:!1,title:"Building Netkit-JH with Docker",description:"Netkit-JH does not require a specific distro for building, however it is good practice to isolate your development environment from your host. Docker is a good way to do this without the need for a full virtual machine. The main advantage is that you don't need to install all the development tools on your main system - you just pull the docker image.",source:"@site/docs/dev/guides/dockerbuildguide.mdx",slug:"/dev/guides/dockerbuild",permalink:"/docs/dev/guides/dockerbuild",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/dev/guides/dockerbuildguide.mdx",version:"current",sidebar_label:"Building with Docker",sidebar:"docsSidebar",previous:{title:"Building Netkit-JH",permalink:"/docs/dev/guides/debianbuild"},next:{title:"Building TCPDump for Netkit",permalink:"/docs/dev/guides/tcpdump"}},b=[{value:"Install Docker",id:"install-docker",children:[]},{value:"Clone the Netkit Build Repo",id:"clone-the-netkit-build-repo",children:[]},{value:"Pull the Docker Image",id:"pull-the-docker-image",children:[]},{value:"Running the Build Process in the Docker Image",id:"running-the-build-process-in-the-docker-image",children:[]},{value:"Modifying The Docker Image",id:"modifying-the-docker-image",children:[]}],s={toc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Netkit-JH does not require a specific distro for building, however it is good practice to isolate your development environment from your host. Docker is a good way to do this without the need for a full virtual machine. The main advantage is that you don't need to install all the development tools on your main system - you just pull the docker image."),Object(r.b)("h2",{id:"install-docker"},"Install Docker"),Object(r.b)("p",null,"Install docker using the instructions ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"here"),"."),Object(r.b)("h2",{id:"clone-the-netkit-build-repo"},"Clone the Netkit Build Repo"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/netkit-jh/netkit-jh-build.git\n$ cd netkit-jh-build\n")),Object(r.b)("p",null,"The following commands assume that your working directory\nis the root of this repo."),Object(r.b)("h2",{id:"pull-the-docker-image"},"Pull the Docker Image"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker pull netkitjh/netkit-builder-deb\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are building an older version of Netkit-JH and this image doesn't work, you might want to look for older ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/netkitjh/netkit-builder-deb/tags"}),"tags"),"."))),Object(r.b)("h2",{id:"running-the-build-process-in-the-docker-image"},"Running the Build Process in the Docker Image"),Object(r.b)("p",null,"To compile all components of Netkit-JH (the kernel, the filesystem and the core executables) run:"),Object(r.b)(o.a,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run --privileged -v $(pwd):/netkit-build -it netkit-builder-deb\n"))),Object(r.b)(l.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("p",null,"N.b. Windows is not frequently tested with Netkit-JH so use at your own risk!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"# With CMD\n> docker run --privileged -v %cd%:/netkit-build -it netkitjh/netkit-builder-deb\n\n# With Powershell\n> docker run --privileged -v $(pwd):/netkit-build -it netkit-builder-deb\n")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You need to pass a volume, mapping the netkit-jh-build directory to /netkit-build in the container. On linux you do this by adding ",Object(r.b)("inlineCode",{parentName:"p"},"-v $(pwd):/netkit-build")," to the docker container (assuming you are in the netkit-jh-build directory). You can also pass the direcory by full or relative path, but if you are one directory up from netkit-jh-build, you must pass it as ",Object(r.b)("inlineCode",{parentName:"p"},"./netkit-jh-build")," rather than just ",Object(r.b)("inlineCode",{parentName:"p"},"netkit-jh-build"),"!"),Object(r.b)("p",{parentName:"div"},"The following examples, as with most of these docs, will give linux commands. So make sure to look at the above example for windows and use that for reference when building with docker on windows."))),Object(r.b)("p",null,"If you would like to pass your own arguments to ",Object(r.b)("inlineCode",{parentName:"p"},"make"),", you can add ",Object(r.b)("inlineCode",{parentName:"p"},'-e MAKE_ARGS=""')," to the docker command, with the necessary ",Object(r.b)("inlineCode",{parentName:"p"},"make")," arguments. Some examples are shown below:"),Object(r.b)(o.a,{defaultValue:"kern",values:[{label:"Kernel",value:"kern"},{label:"Filesystem",value:"fs"},{label:"Core",value:"core"},{label:"Clean",value:"clean"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kern",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="build-kernel" -it netkit-builder-deb\n'))),Object(r.b)(l.a,{value:"fs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="build-fs" -it netkit-builder-deb\n'))),Object(r.b)(l.a,{value:"core",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="build-core" -it netkit-builder-deb\n'))),Object(r.b)(l.a,{value:"clean",mdxType:"TabItem"},Object(r.b)("p",null,"To clean up the files used in the build process run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="mrproper" -it netkit-builder-deb\n')))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The kernel must be built before the filesystem! This is because the kernel modules are copied over to the filesystem as part of the fs build process. If you don't give any MAKE_ARGS this won't be an issue, but if you decide to give ",Object(r.b)("inlineCode",{parentName:"p"},'MAKE_ARGS="build-fs"')," before the kernel has been built, it will not build successfully."))),Object(r.b)("h2",{id:"modifying-the-docker-image"},"Modifying The Docker Image"),Object(r.b)("p",null,"If we have missed out a package or something else needs changing in the docker image, you will need to change the Dockerfile, and rebuild the image."),Object(r.b)("p",null,"If you manage to fix anything, please let us know by opening an issue on GitHub, or by making a pull request with the changes!"),Object(r.b)("p",null,"To build the docker image:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd netkit-jh-build\n$ docker build -t netkit-builder-deb .\n")),Object(r.b)("p",null,"This creates an image under the name 'netkit-builder-deb'."))}u.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),b=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(n),p=a,m=s["".concat(o,".").concat(p)]||s[p]||u[p]||r;return n?i.a.createElement(m,l(l({ref:t},d),{},{components:n})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},148:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},157:function(e,t,n){"use strict";var a=n(0),i=n(158);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},158:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},168:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(157),o=n(148),l=n(55),c=n.n(l);const d=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:s,groupId:u,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(r.a)(),[g,v]=Object(a.useState)(l),j=a.Children.toArray(e.children);if(null!=u){const e=m[u];null!=e&&e!==g&&s.some((t=>t.value===e))&&v(e)}const O=e=>{v(e),null!=u&&h(u,e)},f=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},s.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case d:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},169:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);