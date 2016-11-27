import React, { Component } from 'react';

class Controller extends Component {

	constructor(props){
		super(props);
		this.state = {
			width: "",
			height: ""
		};
		this.send = this.send.bind(this);
		this.setWidth = this.setWidth.bind(this);
		this.setHeight = this.setHeight.bind(this);
	}

	send() {
		this.props.setWH(parseInt(this.state.width), parseInt(this.state.height));
	}

	setWidth(e) {
		this.setState({
			width: e.target.value
		})
	}

	setHeight(e) {
		this.setState({
			height: e.target.value
		})
	}

	render() {
		return ( <div>
				width <input onChange={ this.setWidth }/>
				height <input onChange={ this.setHeight } />
				<button onClick={this.send}>Change Board</button>
			</div>
		)
	}
}

export default Controller;
