import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Reply extends Component {
    render() {
        return (
            <div>
                <div className="wrap-line"/>
                <h4><FontAwesomeIcon size="1x" icon="comment-dots"/> Leave a Coment:</h4>
                <textarea className="reply-form" name="reply" required></textarea>
                <button className="reply-submit" type="submit">댓글 올리기</button>
                <br/>
                <br/>
                <div className="wrap-line"/> 
            </div>
        );
    }
}

export default Reply;