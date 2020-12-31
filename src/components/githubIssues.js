import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import ShowMore from 'react-show-more';
import ReactMarkdown from 'react-markdown'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})
 
const api = axios.create({
  adapter: cache.adapter
})

function Badges(props){
    return(
        props.labels.map(label => (
            <span
                className="badge"
                style={{backgroundColor: '#' + label.color}}
                >
                {label.name}
            </span>
        ))
    )
}


function Issue(props){
    const [content, updateContent] = useState("");
    useEffect(() => {
        api({
            url: props.issue.url,
            method: 'get'
        })
      .then(async (res) => {
        const issues = res.data;
        updateContent(res.data);
      })
      .catch(async (error) => {
        console.log(error);
      })
    }, [props.issue]);
    function openLink(){
        var win = window.open(props.issue.html_url, '_blank');
        win.focus();
    }
    var utcSeconds = Date.parse(props.issue.created_at)/1000;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    return(
        <div class="card-demo" style={{'margin-bottom': '20px'}}>
          <div class="card issue-card">
            <div class="card__header card-clickable" onClick={openLink}>
              <div class="avatar">
                <img
                  class="avatar__photo"
                  src={props.issue.user.avatar_url}
                />
                <div class="avatar__intro">
                  <h4 class="avatar__name">{props.issue.user.login}</h4>
                  <small class="avatar__subtitle">
                    <p>Issue created {d.toLocaleString()}</p>
                  </small>
                </div>
              </div>
            </div>
            <div class="card__body">
            <Badges labels={props.issue.labels} />
            <h1 class="card-clickable" onClick={openLink}>{props.issue.title}</h1>
            <ShowMore>
                { content.body ? <ReactMarkdown>{content.body}</ReactMarkdown> : null}
            </ShowMore>
            </div>
          </div>
        </div>
    )
}

class IssueCards extends React.Component {
    constructor(props){
        super(props);
        this.state = {issues: []};
        this.filterIssues = this.filterIssues.bind(this)
    }
    componentDidMount(){
        this._isMounted = true;
        api({
            url: `https://api.github.com/repos/netkit-jh/netkit-jh-build/issues`,
            method: 'get'
        })
      .then(async (res) => {
        const issues = res.data;
        this.setState({ issues });
        var testfiltered = issues.filter(this.filterIssues);
      })
      .catch(async (error) => {
        console.log(error);
      })
    }

    filterIssues(issue, index, array){
       if (issue.state != "open"){
           return false;
       } 
       for (var i = 0; i < issue.labels.length; i++) {
           var label = issue.labels[i]
              if (label.name === this.props.label){
                return true;
            }
       } 
       return false;
    }
    render() {
    return (
        <div>
            {
            this.state.issues.filter(issue => this.filterIssues(issue)
            ).map(issue => <Issue issue={issue} />)}
        </div>
        )
    }
}

export default IssueCards;
