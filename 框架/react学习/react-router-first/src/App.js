import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const  Hone = () => (
  <div><h2>Home</h2></div>
)

const About = () => (
  <div><h2>About</h2></div>
)

const Topic = ({match}) => (
  <div><h3>{match.params.topicId}</h3></div>
)

const Topics = ({match}) => (
  <div>
    <h2></h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Porps v. State
        </Link>
      </li>
    </ul>
    <Route path={`${match.path}/topicId`} component={Topic}></Route>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" compoment={Hone} />
      <Route path="about" componnent={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default BasicExample
