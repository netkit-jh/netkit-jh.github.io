(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{111:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return c})),s.d(t,"metadata",(function(){return l})),s.d(t,"toc",(function(){return u})),s.d(t,"default",(function(){return d}));var a=s(3),n=s(7),r=(s(0),s(194)),i=s(210),c={id:"featuresinprogress",title:"Features and Improvements Currently Under Development",sidebar_label:"Upcoming Features"},l={unversionedId:"dev/featuresinprogress",id:"dev/featuresinprogress",isDocsHomePage:!1,title:"Features and Improvements Currently Under Development",description:"Enhancements from the Github Issues Tracker",source:"@site/docs/dev/featuresinprogress.md",slug:"/dev/featuresinprogress",permalink:"/docs/next/dev/featuresinprogress",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/dev/featuresinprogress.md",version:"current",sidebar_label:"Upcoming Features",sidebar:"docsSidebar",previous:{title:"Getting Started with Netkit Development",permalink:"/docs/next/dev/gettingstarted"},next:{title:"Bugs",permalink:"/docs/next/dev/currentbugs"}},u=[{value:"Enhancements from the <a href='https://github.com/netkit-jh/netkit-jh-build/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement'>Github Issues Tracker</a>",id:"enhancements-from-the-github-issues-tracker",children:[]}],o={toc:u};function d(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"enhancements-from-the-github-issues-tracker"},"Enhancements from the ",Object(r.b)("a",{href:"https://github.com/netkit-jh/netkit-jh-build/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement"},"Github Issues Tracker")),Object(r.b)(i.a,{label:"enhancement",mdxType:"IssueCards"}))}d.isMDXComponent=!0},210:function(e,t,s){"use strict";var a=s(0),n=s.n(a),r=s(217),i=s.n(r),c=s(219),l=s(220),u=s.n(l),o=s(221),d=s.n(o);const m=Object(c.setupCache)({maxAge:9e5}),h=i.a.create({adapter:m.adapter});function p(e){return e.labels.map((e=>n.a.createElement("span",{key:e.id,className:"badge",style:{backgroundColor:"#"+e.color,marginLeft:4}},e.name)))}function b(e){const[t,s]=Object(a.useState)("");function r(){window.open(e.issue.html_url,"_blank").focus()}Object(a.useEffect)((()=>{let t=!0;return h({url:e.issue.url,method:"get"}).then((async e=>{e.data;s(e.data)})).catch((async e=>{console.log(e)})),()=>{t=!1}}),[e.issue]);var i=Date.parse(e.issue.created_at)/1e3,c=new Date(0);return c.setUTCSeconds(i),n.a.createElement("div",{class:"card-demo",style:{marginBottom:"20px"}},n.a.createElement("div",{class:"card issue-card"},n.a.createElement("div",{class:"card__header card-clickable",onClick:r},n.a.createElement("div",{class:"avatar"},n.a.createElement("img",{class:"avatar__photo",src:e.issue.user.avatar_url}),n.a.createElement("div",{class:"avatar__intro"},n.a.createElement("h4",{class:"avatar__name"},e.issue.user.login),n.a.createElement("small",{class:"avatar__subtitle"},n.a.createElement("p",null,"Issue created ",c.toLocaleString()))))),n.a.createElement("div",{class:"card__body"},n.a.createElement(p,{labels:e.issue.labels}),n.a.createElement("h1",{class:"card-clickable",onClick:r},e.issue.title),n.a.createElement(u.a,null,t.body?n.a.createElement(d.a,null,t.body):null))))}class f extends n.a.Component{constructor(e){super(e),this.state={issues:[]},this.filterIssues=this.filterIssues.bind(this)}componentDidMount(){this._isMounted=!0,h({url:"https://api.github.com/repos/netkit-jh/netkit-jh-build/issues",method:"get"}).then((async e=>{const t=e.data;this.setState({issues:t});t.filter(this.filterIssues)})).catch((async e=>{console.log(e)}))}filterIssues(e,t,s){if("open"!=e.state)return!1;for(var a=0;a<e.labels.length;a++){if(e.labels[a].name===this.props.label)return!0}return!1}render(){return n.a.createElement("div",null,this.state.issues.filter((e=>this.filterIssues(e))).map((e=>n.a.createElement(b,{key:e.id,issue:e}))))}}t.a=f}}]);