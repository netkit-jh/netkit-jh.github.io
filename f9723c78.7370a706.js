(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),s=(n(0),n(121)),i=n(139),c={id:"featuresinprogress",title:"Features and Improvements Currently Under Development",sidebar_label:"Upcoming Features"},u={unversionedId:"dev/featuresinprogress",id:"version-1.0.0/dev/featuresinprogress",isDocsHomePage:!1,title:"Features and Improvements Currently Under Development",description:"Enhancements from the Github Issues Tracker",source:"@site/versioned_docs/version-1.0.0/dev/featuresinprogress.md",slug:"/dev/featuresinprogress",permalink:"/docs/dev/featuresinprogress",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/versioned_docs/version-1.0.0/dev/featuresinprogress.md",version:"1.0.0",sidebar_label:"Upcoming Features",sidebar:"version-1.0.0/someSidebar",previous:{title:"Getting Started with Netkit Development",permalink:"/docs/dev/gettingstarted"},next:{title:"Bugs",permalink:"/docs/dev/currentbugs"}},o=[{value:"Enhancements from the <a href='https://github.com/netkit-jh/netkit-jh-build/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement'>Github Issues Tracker</a>",id:"enhancements-from-the-github-issues-tracker",children:[]}],l={toc:o};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"enhancements-from-the-github-issues-tracker"},"Enhancements from the ",Object(s.b)("a",{href:"https://github.com/netkit-jh/netkit-jh-build/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement"},"Github Issues Tracker")),Object(s.b)(i.a,{label:"enhancement",mdxType:"IssueCards"}))}d.isMDXComponent=!0},139:function(e,t,n){"use strict";var r=n(151),a=n(4),s=n(152),i=n.n(s),c=n(153),u=n(0),o=n.n(u),l=n(147),d=n.n(l),m=n(154),p=n(155),f=n.n(p),h=n(156),b=n.n(h),v=Object(m.setupCache)({maxAge:9e5}),g=d.a.create({adapter:v.adapter});function k(e){return e.labels.map((function(e){return o.a.createElement("span",{key:e.id,className:"badge",style:{backgroundColor:"#"+e.color}},e.name)}))}function j(e){var t=Object(u.useState)(""),n=t[0],r=t[1];function a(){window.open(e.issue.html_url,"_blank").focus()}Object(u.useEffect)((function(){return g({url:e.issue.url,method:"get"}).then(function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.data,r(t.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){!1}}),[e.issue]);var s=Date.parse(e.issue.created_at)/1e3,l=new Date(0);return l.setUTCSeconds(s),o.a.createElement("div",{class:"card-demo",style:{marginBottom:"20px"}},o.a.createElement("div",{class:"card issue-card"},o.a.createElement("div",{class:"card__header card-clickable",onClick:a},o.a.createElement("div",{class:"avatar"},o.a.createElement("img",{class:"avatar__photo",src:e.issue.user.avatar_url}),o.a.createElement("div",{class:"avatar__intro"},o.a.createElement("h4",{class:"avatar__name"},e.issue.user.login),o.a.createElement("small",{class:"avatar__subtitle"},o.a.createElement("p",null,"Issue created ",l.toLocaleString()))))),o.a.createElement("div",{class:"card__body"},o.a.createElement(k,{labels:e.issue.labels}),o.a.createElement("h1",{class:"card-clickable",onClick:a},e.issue.title),o.a.createElement(f.a,null,n.body?o.a.createElement(b.a,null,n.body):null))))}var E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={issues:[]},n.filterIssues=n.filterIssues.bind(Object(r.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,g({url:"https://api.github.com/repos/netkit-jh/netkit-jh-build/issues",method:"get"}).then(function(){var t=Object(c.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.data,e.setState({issues:r}),r.filter(e.filterIssues);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},n.filterIssues=function(e,t,n){if("open"!=e.state)return!1;for(var r=0;r<e.labels.length;r++){if(e.labels[r].name===this.props.label)return!0}return!1},n.render=function(){var e=this;return o.a.createElement("div",null,this.state.issues.filter((function(t){return e.filterIssues(t)})).map((function(e){return o.a.createElement(j,{key:e.id,issue:e})})))},t}(o.a.Component);t.a=E}}]);