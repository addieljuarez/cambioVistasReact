

import React from 'react';


import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

import Principal from './principal';



export default class App extends React.Component {
  

  changeView(){  
      
  }
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/vistaNueva">Principal</Link>
            </li>
          </ul>
  
          <hr />
  
          <button 
            onClick={this.changeView.bind(this)}
          >test</button>
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path='/vistaNueva' component={Principal} />
          <Route path="/topics" component={Topics} />
          
        </div>
      </Router>
    );
  }
  
}




function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}




