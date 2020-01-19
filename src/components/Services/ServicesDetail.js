import React, { Component } from 'react'
import Architecture from './Architecture';
import Kiosks from './Kiosks';
import Uiux from './Uiux';
import Animation from './Animation';
import Graphic from './Graphic';
import Amusement from './Amusement';
import { NavLink }  from 'react-router-dom'
export default class ServicesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceType : ""
        }
        
    }
    componentDidMount() {
        this.setState({
            serviceType: this.props.match.params.serviceType
        })
        window.scrollTo(0, 0)
    }
    render() {
        var service = this.state.serviceType;
        var serviceContent = "";
        if(service=="architecture") {
            serviceContent = <Architecture/>;
        } else if(service=="kiosks"){
            serviceContent = <Kiosks/>;
        } else if(service=="uiux"){
            serviceContent = <Uiux/>;
        } else if(service=="animation"){
            serviceContent = <Animation/>;
        } else if(service=="graphic"){
            serviceContent = <Graphic/>;
        } else if(service=="amusement"){
            serviceContent = <Amusement/>;
        }
        return (
            <div>
                {serviceContent}
            </div>
        )
    }
}
