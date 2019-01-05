import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Progress, FormText, Alert } from 'reactstrap'
import axios from 'axios'
import './UploadModal.css'

export default class UploadModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
			uploading: false,
			progress: 0,
			errors: []
		}
	}

	resetModal = () => {
		this.setState({ selectedFile: null, uploading: false, progress: 0, errors: [] });
	}

	handleFileChange = e => {
		this.setState({ selectedFile: e.target.files[0] });
	}

	handleSubmit = e => {
		this.setState({ uploading: true });
		const data = new FormData();
		data.append('file', this.state.selectedFile, this.state.selectedFile.name);
		data.append('title', this.state.title);
		axios.post('/api/images/store', data, {
			onUploadProgress: ProgressEvent => {
				this.setState({ progress: ProgressEvent.loaded / ProgressEvent.total * 100 });
			}
		}).then(response => {
			if(response.data.success) {
				this.setState({ selectedFile: null, progress: 0, uploading: false });
				this.props.toggle(e, true);
			} else {
				this.setState({ errors: response.data.errors.file });
			}
		}, error => {
			console.error(error);
		})
	}

	render() {
		return (
			<Modal {...this.props} onClosed={this.resetModal}>
				<ModalHeader toggle={this.props.toggle}>Upload New Image</ModalHeader>
				<ModalBody>
					{this.state.errors.length > 0 && 
						<Alert color="danger">
							There were errors with your upload:
							<ul>
								{this.state.errors.map((error, i) => {
									return <li key={i}>{error}</li>
								})}
							</ul>
						</Alert>
					}
					<Form>
						<FormGroup>
							<input type="file" name="file" id="imageFile" onChange={this.handleFileChange} />
							<FormText color="muted">
								Select an image file to upload. Max size 2MB.
							</FormText>
						</FormGroup>
					</Form>
					{this.state.uploading &&
						<Progress color={this.state.errors.length > 0 ? 'danger' : 'primary'} value={this.state.progress} />
					}
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.handleSubmit}>Upload</Button>{' '}
					<Button color="danger" onClick={this.props.toggle}>Close</Button>
				</ModalFooter>
			</Modal>
		)
	}
}
