import React, { Component } from 'react';
import Cleaner from './Cleaner';
import Content from './Content';

import '../css/Wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="book-wrapper">
                <Cleaner active={this.props.active} handle={this.props.handle}/>
                <Content active={this.props.active}/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Wrapper;