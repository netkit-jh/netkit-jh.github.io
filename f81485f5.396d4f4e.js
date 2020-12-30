(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{92:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return n})),i.d(t,"metadata",(function(){return r})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return u}));var a=i(3),l=i(7),o=(i(0),i(101)),n={slug:"netkitv1release",title:"Netkit Version 1.0 Released!",author:"TechSupportJosh",author_title:"TechSupportJosh",author_url:"https://github.com/TechSupportJosh",author_image_url:"https://avatars1.githubusercontent.com/u/5190840?s=400&v=4",tags:["release","v1","docker","terminal","bugfixes"]},r={permalink:"/blog/netkitv1release",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/master/blog/blog/2020-12-25-v1-release.md",source:"@site/blog/2020-12-25-v1-release.md",description:"Netkit V1 Release",date:"2020-12-25T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"v1",permalink:"/blog/tags/v-1"},{label:"docker",permalink:"/blog/tags/docker"},{label:"terminal",permalink:"/blog/tags/terminal"},{label:"bugfixes",permalink:"/blog/tags/bugfixes"}],title:"Netkit Version 1.0 Released!",readingTime:1.385,truncated:!1},s=[{value:"Compiling",id:"compiling",children:[]},{value:"New in this release",id:"new-in-this-release",children:[]},{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"Removed",id:"removed",children:[]},{value:"Coming in the future",id:"coming-in-the-future",children:[]}],b={toc:s};function u(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"netkit-v1-release"},"Netkit V1 Release"),Object(o.b)("h2",{id:"compiling"},"Compiling"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Improved build process for the filesystem (decreasing build times from 40 minutes to 10 minutes!) which will make updating and maintaining the filesystem easier."),Object(o.b)("li",{parentName:"ul"},"Improved build process for all modules"),Object(o.b)("li",{parentName:"ul"},"Moved core tools into the build repo"),Object(o.b)("li",{parentName:"ul"},"Updated UML tools to 64 bit (hoorah!)"),Object(o.b)("li",{parentName:"ul"},"Use the UK debian repos to make downloading packages that little bit faster"),Object(o.b)("li",{parentName:"ul"},"Added dockerfile to compile using Docker - thanks @b177y")),Object(o.b)("h2",{id:"new-in-this-release"},"New in this release"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"LFTP & at packages"),Object(o.b)("li",{parentName:"ul"},"Added support for Kitty & Alacritty terminal emulators"),Object(o.b)("li",{parentName:"ul"},"New install script which asks what terminal emulator you wish to use (and handles installation of it!)"),Object(o.b)("li",{parentName:"ul"},"Added message about 'lclean' when labs don't start properly")),Object(o.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Removed mmapper_init failed error message"),Object(o.b)("li",{parentName:"ul"},"Removed failed to load autofs4 module error message"),Object(o.b)("li",{parentName:"ul"},"Set timeout of startup script service to 5 minutes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vstart --version")," now lists the correct kernel/fs version")),Object(o.b)("h2",{id:"removed"},"Removed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Netkit welcome message has been removed (was broken before due to a bad systemd service config)")),Object(o.b)("h2",{id:"coming-in-the-future"},"Coming in the future"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Removing net-tools dependancy from core tools"),Object(o.b)("li",{parentName:"ul"},"Exploring the concept of different distros for filesystems"),Object(o.b)("li",{parentName:"ul"},"Making it more stable :-)")),Object(o.b)("p",null,"Massive thanks to @okman12 and @b177y for assisting me in improving this version :-)"),Object(o.b)("p",null,"Most importantly, we're now at v1.0.0 of our new Netkit :) Our improvements to the building process (removal of rootstrap, combining of the two repos) and our upgrade to Debian Bullseye + Linux Kernel 5.9 justify a big version jump in my opinion. So welcome to v1.0.0, the best update we've had so far :-)"))}u.isMDXComponent=!0}}]);