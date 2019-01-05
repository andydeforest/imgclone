import React, { Component } from 'react'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import UploadModal from '../UploadModal'

export default class TopNav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	toggle = (e, imageRefresh = false) => {
		this.setState({ open: !this.state.open });
		if(imageRefresh) {
			this.props.loadImages();
		}
	}

	render() {
		return (
			<div>
				<Navbar expand="md">
					<div className="container">
						<NavbarBrand href="/"><img src="/images/logo.png" alt="ImgClone" /></NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.open} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button outline size="lg" style={{ color: '#FFF' }} onClick={this.toggle}>Upload</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<UploadModal isOpen={this.state.open} toggle={this.toggle} />
			</div>
		)
	}
}
