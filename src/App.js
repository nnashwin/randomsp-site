import './App.css'

import React, {Component} from 'react'
import { StyledNav, StyledHeader } from 'landing-page-components';

class App extends Component {
  render() {
    return (
	  <div>
		  <StyledNav links={[{href: '#about', text: "About"}, {href: "#email", text: "Sign Up", isButton: true}]} />
		  <StyledHeader imageUrl={"https://placekitten.com/1200/700"}></StyledHeader>
		  <div className="App-instructions App-flex">
			<img className="App-logo" src={require('./react.svg')}/>
			<p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
		  </div>
	  </div>
	);
  }
}

export default App
