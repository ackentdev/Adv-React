import React, { Component } from 'react';
import axios from 'axios';
import './Presentational.scss'
import Display from './Display';
// https://picsum.photos/v2/list

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        axios.get("https://picsum.photos/v2/list").then( res => {
            console.log(res.data)
            this.setState({
                photos: res.data
            })
        })
    }


    render(){
        return (
            <div>
                <h1><u>Presentational</u></h1>
                <Display data={this.state.photos}/>
            </div>
        )
    }
}

export default Container;