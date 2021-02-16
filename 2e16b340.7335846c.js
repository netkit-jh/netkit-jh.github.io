(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{194:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||o;return n?i.a.createElement(m,s(s({ref:t},d),{},{components:n})):i.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),o=(n(0),n(194)),r={id:"doc",title:"Writing Docs",sidebar_label:"Writing Docs"},s={unversionedId:"website/doc",id:"version-1.1.3/website/doc",isDocsHomePage:!1,title:"Writing Docs",description:"Add a Markdown File",source:"@site/versioned_docs/version-1.1.3/website/doc.md",slug:"/website/doc",permalink:"/docs/website/doc",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.1.3/website/doc.md",version:"1.1.3",sidebar_label:"Writing Docs",sidebar:"version-1.1.3/docsSidebar",previous:{title:"Working on the Netkit-JH Docs Site",permalink:"/docs/website/start"},next:{title:"Creating a Blog Post",permalink:"/docs/website/blog"}},c=[{value:"Add a Markdown File",id:"add-a-markdown-file",children:[]},{value:"Document Header",id:"document-header",children:[]},{value:"Adding to The Sidebar",id:"adding-to-the-sidebar",children:[]},{value:"Adding Content",id:"adding-content",children:[]},{value:"Versioning",id:"versioning",children:[]}],d={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"add-a-markdown-file"},"Add a Markdown File"),Object(o.b)("p",null,"To add a page to the docs create a markdown file in the ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," directory (or a subdirectory of ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," if necessary)."),Object(o.b)("p",null,"Docs should use ",Object(o.b)("inlineCode",{parentName:"p"},".md")," as the extension unless you are using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features/#embedding-react-components-with-mdx"}),"MDX")," - which for a normal doc is usually not the case. You can always rename docs later if you decide to add MDX."),Object(o.b)("h2",{id:"document-header"},"Document Header"),Object(o.b)("p",null,"Every doc file needs a header - this means it starts with a simple block of text with some configuration options."),Object(o.b)("p",null,"This example should be sufficient for most docs, but a full list of options can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features/#markdown-headers"}),"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markdown"}),"---\nid: uniquestring\ntitle: My Helpful Document\nsidebar_label: Helpful Doc\n---\n\n## Heading 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nIn vehicula eros vel ultrices accumsan. Nunc nec lorem\nleo. Nullam at dui mauris. Ut ex diam, mollis viverra nisl\na, semper dignissim diam.\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"id")," needs to be something unique - check that the id you plan to use hasn't already been used by looking in ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"title")," is displayed as the first heading on a docs page."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sidebar_label")," is what is shown in the navigation sidebar for the doc. It is a good idea to have something short here, and have the ",Object(o.b)("inlineCode",{parentName:"p"},"title")," as something slightly longer if needed."),Object(o.b)("h2",{id:"adding-to-the-sidebar"},"Adding to The Sidebar"),Object(o.b)("p",null,"Usually you will want your document to be accessible through the navigation sidebar. If you look at ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," you will see the current categories. Try to put your doc into one of these categories as this keeps the sidebar clean. If you think a new category is needed, take a look at the sidebar ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/sidebar/"}),"docs")," for guidance."),Object(o.b)("h2",{id:"adding-content"},"Adding Content"),Object(o.b)("p",null,"Now you are ready to add the content of your new doc page! Have a look at the docusaurus docs for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/markdown-features"}),"markdown features")," for hints on formatting the doc."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/static-assets"}),"This")," page might also be useful if you plan to use static assets such as images in your doc."),Object(o.b)("h2",{id:"versioning"},"Versioning"),Object(o.b)("p",null,"We are using versioning for this site as Netkit-JH is being frequently updated, and lots of docs are specific to a Netkit-JH release."),Object(o.b)("p",null,"Normally you should just add to the ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," directory as this is the ",Object(o.b)("inlineCode",{parentName:"p"},"Next")," version - the default version that will be shown to site visitors."),Object(o.b)("p",null,"Anything that is put in the ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," directory will be frozen as the next release, when that point is reached. For example, if the latest release is ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0")," and the next release is ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.1"),", then everything currently in ",Object(o.b)("inlineCode",{parentName:"p"},"docs")," will be frozen as version ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.1"),", when the release happens."),Object(o.b)("p",null,"If you want to make a doc specific to a particular release then place it in ",Object(o.b)("inlineCode",{parentName:"p"},"versioned_docs/VERSION"),". "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Example:")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Say the latest release was ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0")," and the next release is ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.1"),"."),Object(o.b)("p",{parentName:"div"},"You are writing a doc that is relevant to ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0"),", but you know it will no longer apply in ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.1"),"."),Object(o.b)("p",{parentName:"div"},"You should put this doc in the ",Object(o.b)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0.0/")," directory."))))}l.isMDXComponent=!0}}]);