(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{194:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,f=s["".concat(r,".").concat(u)]||s[u]||m[u]||o;return t?i.a.createElement(f,c(c({ref:n},b),{},{components:t})):i.a.createElement(f,c({ref:n},b))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=t[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),o=(t(0),t(194)),r={id:"labconf",title:"Understanding lab.conf",sidebar_label:"lab.conf"},c={unversionedId:"labconf",id:"labconf",isDocsHomePage:!1,title:"Understanding lab.conf",description:"What is lab.conf?",source:"@site/docs/labconf.md",slug:"/labconf",permalink:"/docs/next/labconf",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/labconf.md",version:"current",sidebar_label:"lab.conf"},l=[{value:"What is lab.conf?",id:"what-is-labconf",children:[]},{value:"Defining Network Interfaces",id:"defining-network-interfaces",children:[]},{value:"Assigning Machine Memory",id:"assigning-machine-memory",children:[]},{value:"Setting Lab Information",id:"setting-lab-information",children:[]},{value:"Advanced",id:"advanced",children:[]}],b={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-labconf"},"What is lab.conf?"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"lab.conf")," is the file used for configuring your Netkit lab. This should be present in the lab directory. "),Object(o.b)("p",null,"The main purpose of this config is to specify network configuration.\nWe can define the interfaces of a machine in the lab, and specify which collision domains these interfaces are connected to."),Object(o.b)("p",null,"This guide follows on from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"introduction"}),"introduction"),", so it is recommended you have a look at this first."),Object(o.b)("h2",{id:"defining-network-interfaces"},"Defining Network Interfaces"),Object(o.b)("p",null,"To define an interface within lab.conf we use the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"MACHINENAME[INTERFACE_NUMBER]=NETWORK\n")),Object(o.b)("p",null,"Where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MACHINENAME")," is the name of the machine in the lab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"INTERFACE_NUMBER")," is the number of the interface you want to set.\nThis should be a non-negative integer (0 or higher)\nIt makes sense to start your interfaces from 0, and count up from there if you need multiple interfaces."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NETWORK")," is normally the collision domain - this is a virtual switch, and can be specified with a simple string. More advanced options are available such as tapout interfaces. See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./man/netkit-manpage-lab.conf"}),"lab.conf")," for more information.")),Object(o.b)("p",null,"For example, we want machines ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"r")," to each have have an interface connected to the same virtual switch.\nWe can use the following in our ",Object(o.b)("inlineCode",{parentName:"p"},"lab.conf")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"a[0]=lanX\nr[1]=lanX\n")),Object(o.b)("p",null,"This means machine ",Object(o.b)("inlineCode",{parentName:"p"},"a")," will have an interface ",Object(o.b)("inlineCode",{parentName:"p"},"eth0")," which is connected to the ",Object(o.b)("inlineCode",{parentName:"p"},"lanX")," collision domain, and machine ",Object(o.b)("inlineCode",{parentName:"p"},"r")," will have an interface ",Object(o.b)("inlineCode",{parentName:"p"},"eth1")," which is also connected to this collision domain.\nThese machines will therefore be able to communicate as if they are connected to the same switch."),Object(o.b)("h2",{id:"assigning-machine-memory"},"Assigning Machine Memory"),Object(o.b)("p",null,"The default amount of RAM assigned to a Netkit VM is 128MB.\nThis can be changed in ",Object(o.b)("inlineCode",{parentName:"p"},"lab.conf")," to specify the amount of memory by machine.\nWe use the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"MACHINENAME[mem]=NUM\n")),Object(o.b)("p",null,"Where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MACHINENAME")," is the name of the machine in the lab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"NUM")," is the amount of RAM in MegaBytes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mem"),' is the literal string "mem"')),Object(o.b)("p",null,"For example, if we want to give 512MB of memory to machine ",Object(o.b)("inlineCode",{parentName:"p"},"r"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"r[mem]=512\n")),Object(o.b)("h2",{id:"setting-lab-information"},"Setting Lab Information"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"lab.conf")," you can set lab information variables, which will be shown when starting a lab. This can be useful for quickly identifying the purpose of a lab, or for giving your information as an author when distributing the lab, which can give you credit and allow users of the lab to contact you if needed."),Object(o.b)("p",null,"The following options are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LAB_DESCRIPTION")," - a basic description of the lab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LAB_VERSION")," - the version of the lab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LAB_AUTHOR")," - the author(s) of the lab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LAB_EMAIL")," - contact(s) for lab authors"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LAB_WEB")," - URLs for useful resources")),Object(o.b)("p",null,"Example lab.conf section:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'LAB_DESCRIPTION="Netkit lab to explain XYZ concept"\nLAB_VERSION="V1"\nLAB_AUTHOR="John Doe"\nLAB_EMAIL="johndoe@example.com"\nLAB_WEB="https://github.com/johndoe/netkit-lab-xyz"\n')),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("p",null,"For more information on what can be set in ",Object(o.b)("inlineCode",{parentName:"p"},"lab.conf"),", check the manpages ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"man/netkit-manpage-lab.conf"}),"here")," or run ",Object(o.b)("inlineCode",{parentName:"p"},"man lab.conf"),"."))}p.isMDXComponent=!0}}]);