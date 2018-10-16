import React, { Component } from 'react';

class Chapter extends Component {
    render() {
        return (
            <div className={ this.props.active === this.props.level ? "book-nav-chapter-active": "book-nav-chapter"}>
                <ul onClick={this.props.handle.bind(null,this.props.level)}> 
                    {this.props.index}
                </ul>
            </div>
        );
    }
}

export default Chapter;