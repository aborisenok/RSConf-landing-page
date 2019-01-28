import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import HomePage from './pages/homePage/homePage';
import PeoplePage from './pages/peoplePage/peoplePage';
import Footer from './components/footer';

//mocked components, remove while ready
//const PeoplePage = () => <div></div>;

class App extends Component {
  render() {
    return (
			<Router>
				<>
					<Header />
					<Route exact path="/" component={HomePage} />
					<Route path="/photographers" component={PeoplePage} />
					<Footer />
				</>
			</Router> 
    )
  }
}

export default App;