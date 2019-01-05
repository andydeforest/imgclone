import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import moment from 'moment'
import 'react-image-lightbox/style.css'
import './ImageLayout.css'

export default class ImageLayout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			lightboxVisible: false
		}
	}

	render() {

		let lightbox;

		if(this.state.lightboxVisible) {
			lightbox = (
				<Lightbox
					mainSrc={this.state.selected.src}
					onCloseRequest={() => this.setState({ selected: null, lightboxVisible: false })}
				/>
			);
		}

		if(this.props.images.length === 0 && !this.props.loading) {
			return <div className="row pt-5"><div className="col text-center"><h1 className="text-light">No Images Yet :(</h1></div></div>
		}

		return (
			<div className="row pt-5 image-list">
				{lightbox}
				{this.props.images.map((image, i) => {
					return (
						<div key={i} className="col-md-2 col-xs-6 py-5">
							<Card>
								<CardImg top width="100%" src={image.src} alt="Card image cap" onClick={() => this.setState({ selected: image, lightboxVisible: true })} />
								<CardBody>
									<CardTitle>{image.name}</CardTitle>
									<CardText><small>Uploaded {moment.utc(image.modified.date).utc().from(moment())}</small></CardText>
								</CardBody>
							</Card>
						</div>
					)
				})}
			</div>
		)
	}
}
