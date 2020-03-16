import React, { Component } from 'react';
import logo_transparent from '../assets/logo_transparent.png';
import Map from './map';

class Home extends Component {
	render() {
		return (
			<div style={{ margin: '100px' }}>
				<img src={logo_transparent} alt="mama" style={{ maxHeight: '250px', minWidth: '80px' }} />
				<Map google={this.props.google} center={{ lat: 46.77040934128711, lng: 23.588504791259766}} height="300px" zoom={15} />
			</div>
		);
	}
}

export default Home;
