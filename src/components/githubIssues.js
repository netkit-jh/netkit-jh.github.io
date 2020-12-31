import React from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})
 
const api = axios.create({
  adapter: cache.adapter
})

function assertIssueType(labels, filterlabel){
    console.table(labels);
    labels.forEach(label => {
        console.log(label.name, filterlabel);
        if (label.name === filterlabel){
            console.log("FOUND ENHANCEMENT");
            return true;
        }
    })
    console.log("NOT ENHANCEMENT");
    return false;
}

function Issue(props){
    return(
        <div class="card-demo" style={{'margin-bottom': '20px'}}>
          <div class="card">
            <div class="card__header">
              <div class="avatar">
                <img
                  class="avatar__photo"
                  src={props.issue.user.avatar_url}
                />
                <div class="avatar__intro">
                  <h4 class="avatar__name">{props.issue.user.login}</h4>
                  <small class="avatar__subtitle">
                    <a href={props.issue.html_url}>{props.issue.html_url}</a>
                  </small>
                </div>
              </div>
            </div>
            <div class="card__body">
            <h1>{props.issue.title}</h1>
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
          console.log("__TEST__");
        var testfiltered = issues.filter(this.filterIssues);
        console.table(testfiltered);
          console.log("__END__");
      })
      .catch(async (error) => {
        console.log(error);
      })
    }

    filterIssues(issue, index, array){
       console.log(issue.state);
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
