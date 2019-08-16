import React, { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: null
		}
	}

	fetchData = () => {
		axios.get(this.props.url)
		.then(res => {
			this.setState({
				data: res.data
			})
		})
	}


	render() {
		return <div>
			{
				this.state.data
				?
				this.props.renderMyComponent(this.state.data)
				:
				this.fetchData()
			}
		</div>;
	}
}