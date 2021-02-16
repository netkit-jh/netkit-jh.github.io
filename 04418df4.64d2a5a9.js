(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,d=u["".concat(o,".").concat(h)]||u[h]||p[h]||r;return n?i.a.createElement(d,s(s({ref:t},b),{},{components:n})):i.a.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(194)),o={id:"start",title:"Working on the Netkit-JH Docs Site",sidebar_label:"Introduction"},s={unversionedId:"website/start",id:"website/start",isDocsHomePage:!1,title:"Working on the Netkit-JH Docs Site",description:"This Site",source:"@site/docs/website/start.md",slug:"/website/start",permalink:"/docs/next/website/start",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/website/start.md",version:"current",sidebar_label:"Introduction",sidebar:"docsSidebar",previous:{title:"netkit - manpage",permalink:"/docs/next/man/netkit-manpage-netkit"},next:{title:"Writing Docs",permalink:"/docs/next/website/doc"}},c=[{value:"This Site",id:"this-site",children:[]},{value:"Errors / Broken Links on this Website",id:"errors--broken-links-on-this-website",children:[]},{value:"Setting up a Dev Environment",id:"setting-up-a-dev-environment",children:[]},{value:"Make Some Changes!!",id:"make-some-changes",children:[]},{value:"Merge Your Contributions",id:"merge-your-contributions",children:[]},{value:"Publishing",id:"publishing",children:[]}],b={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"this-site"},"This Site"),Object(r.b)("p",null,"This docs website is built using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io"}),"Docusaurus")," project. This means all the hard work is done for us, so we can just focus on writing good docs :)"),Object(r.b)("p",null,"The site is currently hosted on GitHub Pages, at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://netkit-jh.github.io"}),"https://netkit-jh.github.io"),"."),Object(r.b)("p",null,"Adding a docs page or blog page is very easy - they are just written in markdown - see the docusaurus ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features/"}),"reference")," for supported markdown features."),Object(r.b)("h2",{id:"errors--broken-links-on-this-website"},"Errors / Broken Links on this Website"),Object(r.b)("p",null,"If you find errors in terms of incorrect information in docs, or links that no longer point to the right place you can email ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:billy.bromell@warwick.ac.uk"}),"me")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netkit-jh/netkit-jh.github.io/issues/new"}),"open an issue")," on the Github Issue Tracker."),Object(r.b)("p",null,"Alternatively if you are able to fix the issue yourself, we encourage you to do so and open a pull request!"),Object(r.b)("h2",{id:"setting-up-a-dev-environment"},"Setting up a Dev Environment"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you want to contribute without setting your own testing environment, it is still very easy to write a markdown document! If you ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:billy.bromell@warwick.ac.uk"}),"email me")," with a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"doc"}),"doc")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"blog"}),"blog")," post I can put it onto the website for you!"))),Object(r.b)("p",null,"To run a development version of the site, first ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/netkit-jh/netkit-jh.github.io/fork"}),"fork the repository"),", clone your fork and install necessary packages:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/YOUR_USERNAME/netkit-jh.github.io.git # you can also clone with ssh\n$ cd netkit-jh.github.io\n$ yarn install\n")),Object(r.b)("p",null,"Then run with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn run start\n")),Object(r.b)("h2",{id:"make-some-changes"},"Make Some Changes!!"),Object(r.b)("p",null,"Look at the guides for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"doc"}),"adding docs")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"blog"}),"creating a blog post"),"!"),Object(r.b)("h2",{id:"merge-your-contributions"},"Merge Your Contributions"),Object(r.b)("p",null,"When you've made some changes and want them to be added to the production site, first make sure your repository is up to date with the original:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git pull upstream main\n")),Object(r.b)("p",null,"You can now commit your changes and push them to your fork:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ git add docs/NEWDOC.md sidebars.js # add new / changed files\n$ git commit -m "Added doc page on X topic"\n$ git push -u origin main\n')),Object(r.b)("p",null,"Now open your fork in GitHub @ ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/YOUR_USERNAME/netkit-jh.github.io/pulls"}),"https://github.com/YOUR_USERNAME/netkit-jh.github.io/pulls")),Object(r.b)("p",null,"From here you can click on new pull request. Then make sure the left side shows base repository as ",Object(r.b)("inlineCode",{parentName:"p"},"netkit-jh/netkit-jh.github.io")," and the right side shows the head repository as ",Object(r.b)("inlineCode",{parentName:"p"},"YOUR_USERNAME/netkit-jh.github.io"),"."),Object(r.b)("p",null,"Give the pull request a suitable title and description of what changes were made. These will then be reviewed before hopefully being merged in!"),Object(r.b)("h2",{id:"publishing"},"Publishing"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is only possible if you have direct access to the repo as a contributor. If you are contributing through a pull request you will need a maintainer to publish the site after your pull request has been merged."))),Object(r.b)("p",null,"To deploy the latest version of the site make sure the branch 'main' has the latest changes and is ready to be published, then run (replace <GIT_USER> with your GitHub username):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"GIT_USER=<GIT_USER> \\\n  CURRENT_BRANCH=main \\\n  DEPLOYMENT_BRANCH=gh-pages \\\n  USE_SSH=true \\\n  yarn run deploy\n")),Object(r.b)("p",null,"It might be useful to add this as a function or alias in your shell's config file (e.g. ~/.bashrc or ~/.zshrc) :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"function publish_netkit_docs(){\n    GIT_USER=<GIT_USER> \\\n      CURRENT_BRANCH=main \\\n      DEPLOYMENT_BRANCH=gh-pages \\\n      USE_SSH=true \\\n      yarn run deploy\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Reminder")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If a new version of Netkit-JH has just been released, remember to freeze the documentation! To do this run:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn run docusaurus docs:version VERSION\n")),Object(r.b)("p",{parentName:"div"},"where VERSION is the release, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"1.0.0")))))}l.isMDXComponent=!0}}]);