import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Reply extends Component {
    constructor(props){
        super(props)
        this.state={
            animate : 0
        }
        this.handleAnimate=this.handleAnimate.bind(this);
    }

    componentWillReceiveProps(next){
        if (this.props.active !== next.active){
            this.setState({
                animate:1
            })
        }
    }

    handleAnimate(){
        this.setState({
            animate:0
        })
    }

    render() {
        return (
            <div className={this.state.animate === 0 ? "reply" : "reply-up"} onAnimationEnd={this.handleAnimate}>
                <div className="wrap-line"/>
                <h4><FontAwesomeIcon size="1x" icon="comment-dots"/> Leave a Coment:</h4>
                <textarea className="reply-form" name="reply" required></textarea>
                <button className="reply-submit" type="submit">댓글 올리기</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Reply;