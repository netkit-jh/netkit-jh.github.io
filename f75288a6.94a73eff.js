(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{143:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return u})),s.d(t,"metadata",(function(){return c})),s.d(t,"toc",(function(){return l})),s.d(t,"default",(function(){return d}));var a=s(3),r=s(7),n=(s(0),s(194)),i=s(210),u={id:"currentbugs",title:"Bugs",sidebar_label:"Bugs"},c={unversionedId:"dev/currentbugs",id:"dev/currentbugs",isDocsHomePage:!1,title:"Bugs",description:"Bugs from the Github Issues Tracker",source:"@site/docs/dev/currentbugs.md",slug:"/dev/currentbugs",permalink:"/docs/dev/currentbugs",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/dev/currentbugs.md",version:"current",sidebar_label:"Bugs",sidebar:"docsSidebar",previous:{title:"Features and Improvements Currently Under Development",permalink:"/docs/dev/featuresinprogress"},next:{title:"Building Netkit-JH",permalink:"/docs/dev/guides/debianbuild"}},l=[{value:"Bugs from the <a href='https://github.com/netkit-jh/netkit-jh-build/issues?q=is%3Aissue+is%3Aopen+label%3Abug'>Github Issues Tracker</a>",id:"bugs-from-the-github-issues-tracker",children:[]}],o={toc:l};function d(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},o,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"bugs-from-the-github-issues-tracker"},"Bugs from the ",Object(n.b)("a",{href:"https://github.com/netkit-jh/netkit-jh-build/issues?q=is%3Aissue+is%3Aopen+label%3Abug"},"Github Issues Tracker")),Object(n.b)(i.a,{label:"bug",mdxType:"IssueCards"}))}d.isMDXComponent=!0},210:function(e,t,s){"use strict";var a=s(0),r=s.n(a),n=s(217),i=s.n(n),u=s(219),c=s(220),l=s.n(c),o=s(221),d=s.n(o);const b=Object(u.setupCache)({maxAge:9e5}),m=i.a.create({adapter:b.adapter});function h(e){return e.labels.map((e=>r.a.createElement("span",{key:e.id,className:"badge",style:{backgroundColor:"#"+e.color,marginLeft:4}},e.name)))}function p(e){const[t,s]=Object(a.useState)("");function n(){window.open(e.issue.html_url,"_blank").focus()}Object(a.useEffect)((()=>{let t=!0;return m({url:e.issue.url,method:"get"}).then((async e=>{e.data;s(e.data)})).catch((async e=>{console.log(e)})),()=>{t=!1}}),[e.issue]);var i=Date.parse(e.issue.created_at)/1e3,u=new Date(0);return u.setUTCSeconds(i),r.a.createElement("div",{class:"card-demo",style:{marginBottom:"20px"}},r.a.createElement("div",{class:"card issue-card"},r.a.createElement("div",{class:"card__header card-clickable",onClick:n},r.a.createElement("div",{class:"avatar"},r.a.createElement("img",{class:"avatar__photo",src:e.issue.user.avatar_url}),r.a.createElement("div",{class:"avatar__intro"},r.a.createElement("h4",{class:"avatar__name"},e.issue.user.login),r.a.createElement("small",{class:"avatar__subtitle"},r.a.createElement("p",null,"Issue created ",u.toLocaleString()))))),r.a.createElement("div",{class:"card__body"},r.a.createElement(h,{labels:e.issue.labels}),r.a.createElement("h1",{class:"card-clickable",onClick:n},e.issue.title),r.a.createElement(l.a,null,t.body?r.a.createElement(d.a,null,t.body):null))))}class g extends r.a.Component{constructor(e){super(e),this.state={issues:[]},this.filterIssues=this.filterIssues.bind(this)}componentDidMount(){this._isMounted=!0,m({url:"https://api.github.com/repos/netkit-jh/netkit-jh-build/issues",method:"get"}).then((async e=>{const t=e.data;this.setState({issues:t});t.filter(this.filterIssues)})).catch((async e=>{console.log(e)}))}filterIssues(e,t,s){if("open"!=e.state)return!1;for(var a=0;a<e.labels.length;a++){if(e.labels[a].name===this.props.label)return!0}return!1}render(){return r.a.createElement("div",null,this.state.issues.filter((e=>this.filterIssues(e))).map((e=>r.a.createElement(p,{key:e.id,issue:e}))))}}t.a=g}}]);