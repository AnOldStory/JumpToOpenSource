import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <div className={ this.props.active === this.props.level ? "book-nav-article-active": "book-nav-article"}>
                <ul onClick={this.props.handle.bind(null,this.props.level)}>
                    {this.props.index}
                </ul>                
            </div>
        );
    }
}

export default Article;