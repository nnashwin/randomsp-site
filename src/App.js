import './App.css'

import React, {Component} from 'react'
import { StyledNav, StyledHeader, 
	StyledIconSection,
	SplitSection,
	SplitTextTitle,
	SplitTextBody,
	SplitTextDiv,
	SplitPicDiv,
	CenteredSection,
	CenteredTitle,
	StyledEmailSection,
	StyledEmailInput,
	StyledSubmitButton
} from 'landing-page-components';
import sizes from 'point-breaks';
import dicePhoto from './dice-blur.jpg';
import arrowPic from './arrow.jpg';
import closePic from './close-up.jpg';
import budgetPic from './budget.jpg';
import styled from 'styled-components';
import { HoverDiv, SignUpButton } from './Components';

class App extends Component {
  constructor(props) {
	  super(props);
  	  this.state = {width: 0};
  }

  updateWidth() {
	this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
	this.updateWidth();
	window.addEventListener("resize", this.updateWidth.bind(this));
  }

  componentWillUnmount() {
	window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  emailSubmitClicked() {
	console.log('email submitted');
  }

  render() {
	  const smallTabletWidth = Number(sizes.smallTablet.width.slice(0, -2));
	  const setSplitDivOrder = (orderInput, title, body) => {
		return (
			<SplitTextDiv order={orderInput}>
				<SplitTextTitle>
					{title}
				</SplitTextTitle>
				<SplitTextBody>{body}</SplitTextBody>	
			</SplitTextDiv>
		);
	  }

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
	  }];
    return (
	  <div>
		  <StyledNav links={[{href: '#about', text: "About"}, {href: "#callToAction", text: "Sign Up", isButton: true}]} />
		  <StyledHeader imageUrl={dicePhoto} backgroundPositionY="20%">
			<HoverDiv>Embrace Random</HoverDiv>
		  </StyledHeader>
		<StyledIconSection id="#about" icons={iconArr} />

		<SplitSection>
			<SplitPicDiv order={'right'} imageUrl={arrowPic} />
			{setSplitDivOrder('left', 'Save Time', 'No more choosing stocks.  No more thinking.  Let the power of random and not putting all of your eggs in one basket balance and diversify your investments, son!')}
		</SplitSection>
		<SplitSection>
			{ this.state.width < smallTabletWidth ? <SplitPicDiv order={'right'} imageUrl={budgetPic} /> : <SplitPicDiv order={'left'} imageUrl={budgetPic} />}
			{ this.state.width < smallTabletWidth ? setSplitDivOrder('left', 'Save Money', 'Instead of Paying Percents out of your Investment Portfolio, pay a few dollars a month and SAVE! Check out <a href="https://www.investopedia.com/university/mutualfunds/mutualfunds2.asp">article</a> for reference.') 
				: setSplitDivOrder('right', 'Save Money', 'Instead of Paying Percents out of your Investment Portfolio, pay a few dollars a month and SAVE! Check out <a href="https://www.investopedia.com/university/mutualfunds/mutualfunds2.asp">article</a> for reference.') }
		</SplitSection>
		<SplitSection>
			<SplitPicDiv order={'right'} imageUrl={closePic} />
			<SplitTextDiv order={'left'}>
				<SplitTextTitle>Feel at Ease</SplitTextTitle>
				<SplitTextBody>Log into whichever brokerage site you use (we recommend <a href="https://www.investopedia.com/university/mutualfunds/mutualfunds2.asp">RobinHood</a> for no transaction fees) and put relatively small investments into the random stock provided.</SplitTextBody>
			</SplitTextDiv>
		</SplitSection>
		<CenteredSection>
			<CenteredTitle id="callToAction">
				Sign Up Now!
			</CenteredTitle>
			<StyledEmailSection>
				<form action="https://medium.us17.list-manage.com/subscribe/post?u=2a967cb7147ef8c27721091a1&amp;id=a41c6508fe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
						<div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true"><input type="text" name="b_2a967cb7147ef8c27721091a1_a41c6508fe" tabIndex="-1" value="" /></div>
						<div className="clear">
							<a class="gumroad-button" href="https://gum.co/scuB" target="_blank" data-gumroad-single-product="true">Product Link</a>
						</div>
				</form>
			</StyledEmailSection>
		</CenteredSection>
	  </div>
	);
  }
}

export default App
