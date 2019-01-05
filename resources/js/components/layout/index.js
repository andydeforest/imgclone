import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TopNav from './TopNav'
import './Layout.css'

export default class Layout extends Component {
	render() {
		return (
			<div>
				<TopNav loadImages={this.props.loadImages} />
				<div className="container-fluid" id="main-container">
					{this.props.children}
				</div>
			</div>
		)
	}
}
