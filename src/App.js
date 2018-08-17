import './App.css'

import React, {Component} from 'react'
import { StyledNav, StyledHeader } from 'landing-page-components';
import PHOTO from './dice-blur.jpg'
import styled from 'styled-components';
import { HoverDiv } from './Components'; 

class App extends Component {
  render() {
    return (
	  <div>
		  <StyledNav links={[{href: '#about', text: "About"}, {href: "#email", text: "Sign Up", isButton: true}]} />
		  <StyledHeader imageUrl={PHOTO} backgroundPositionY="20%">
			<HoverDiv>Embrace Random</HoverDiv>
		  </StyledHeader>
	  </div>
	);
  }
}

export default App
