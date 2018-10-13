import React, { Component } from 'react';
import Iframe from './Iframe';
import Reply from './Reply';

import '../css/Content.css'

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Iframe active={this.props.active}/>
                <br/>
                <Reply active={this.props.active}/>
            </div>
        );
    }
}

export default Content;