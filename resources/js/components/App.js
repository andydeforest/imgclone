import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'
import ImageLayout from './ImageLayout'
import LoadingOverlay from '../components/ImageLayout/LoadingOverlay'
import axios from 'axios'

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			images: [],
			loading: true
		}
	}

	componentDidMount() {
		this.loadImages();
	}

	loadImages = () => {
		axios.get('/api/images').then(response => {
			this.setState({ images: response.data.images });
		}, error => {
			console.error(error);
		}).then(() => this.setState({ loading: false}));

	}

	render() {
		return (
			<Layout loadImages={this.loadImages}>
				<LoadingOverlay loading={this.state.loading} />
				<ImageLayout {...this.state} />
			</Layout>
		)
	}
}

if(document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
