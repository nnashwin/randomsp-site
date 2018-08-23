import './App.css'

import React, {Component} from 'react'
import { StyledNav, StyledHeader, StyledIconSection } from 'landing-page-components';
import PHOTO from './dice-blur.jpg'
import styled from 'styled-components';
import { HoverDiv } from './Components'; 

class App extends Component {
  render() {
	  const iconArr = [{
		title: "Science Backed",
		  pic: "\u{1F52C}",
		  desc: <div dangerouslySetInnerHTML={{__html: 'Computer Simulations show the <a href="https://www.forbes.com/sites/alexknapp/2013/03/22/computer-simulation-suggests-that-the-best-investment-strategy-is-a-random-one/#7164db1e5136">fallacy of investing strategy</a>'}} />,
	  },
	  {
		title: "Customizable delivery",
		  pic: "\u{1F4E6}",
		  desc: 'Decide when you want to receive your "stock tips" in your inbox.'
	  },
	  {
		title: "Choose your Index",
		  pic: "\u{1F579}",
		  desc: 'Indices at your fingertips.  Choose random stocks from one of five indices, or one randomly selected from all indices.'
	  }
	  ]
    return (
	  <div>
		  <StyledNav links={[{href: '#about', text: "About"}, {href: "#email", text: "Sign Up", isButton: true}]} />
		  <StyledHeader imageUrl={PHOTO} backgroundPositionY="20%">
			<HoverDiv>Embrace Random</HoverDiv>
		  </StyledHeader>

		<StyledIconSection icons={iconArr} />
	  </div>
	);
  }
}

export default App
