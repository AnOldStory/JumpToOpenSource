import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Cleaner.css'



class Cleaner extends Component {
    render() {
        return (
            <div className="cleaner">
                {this.props.active>-1?
                    <button className="cleaner-left" onClick={this.props.handle.bind(null,this.props.active>-1?this.props.active-1:-1)}>
                        <FontAwesomeIcon size="3x" icon="angle-left" />
                    </button>
                :
                    <div/>
                }
               
                {this.props.active<31?
                    <button className="cleaner-right" onClick={this.props.handle.bind(null,this.props.active<31?this.props.active+1:-1)}>
                        <FontAwesomeIcon size="3x" icon="angle-right" />
                    </button>
                :
                    <div/>
                }
            </div>
        );
    }
}

export default Cleaner;