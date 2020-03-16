import React from 'react';
import Map from './pages/map';
import Home from './pages/home';
import Login from './pages/logIn';
import ForBusinesses from './pages/business';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import bg from './assets/bg.jpg';
import logo_transparent from './assets/logo_transparent.png';

const barStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	listStyle: 'none',
	margin: '0',
	padding: '0',
	height: '30vh'
};

const inline = {
	display: 'inline'
};

const navi = {
  textAlign: "center",
	backgroundImage: `url(${bg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
};

export default function BasicExample() {
	return (
		<Router>
			<div>
				<div style={navi}>
					<ul style={barStyle}>
						<li style={inline}>
							<Link to="/">Home</Link>
						</li>
						<li style={inline}>
							<Link to="/ForBusinesses">For Businesses</Link>
						</li>
						<li style={inline}>
							<Link to="/map">Map</Link>
						</li>
						<li style={inline}>
							<Link to="/login">Log In</Link>
						</li>
					</ul>
					<img src={logo_transparent} alt="mama" style={{ maxHeight: '250px', minWidth: '80px', paddingBottom: "80px" }} />
				</div>
				<hr />

				{/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/ForBusinesses">
						<ForBusinesses />
					</Route>
					<Route path="/map">
						<MapPage />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

// You can think of these components as "pages"
// in your app.

function MapPage() {
	return (
		<div className="App">
			<Map />
		</div>
	);
}
