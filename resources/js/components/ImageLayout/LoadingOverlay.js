import React, { Component } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import './LoadingOverlay.css'

export default class LoadingOverlay extends Component {
	render() {
		return (
			<div className="loading-overlay m-auto h-100" style={{ 'display': this.props.loading ? '' : 'none' }}>
				<div className="loading-spinner" style={{ 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translateX(-50%) translateY(-50%)' }}>
				<ClipLoader
					sizeUnit={"px"}
					size={150}
					color={'#fff'}
					loading={this.props.loading}
				/>
				</div>
			</div>
		)
	}
}
