import React, { Component } from 'react';

class Iframe extends Component {
    constructor(props){
        super(props)
        this.state= {
            response : "Loding...",
        }
        this.handleHtml(this.props.active)
    }
    
    componentWillReceiveProps(next){
        this.handleHtml(next.active)
    }

    handleHtml(where){
        fetch("/static/documents/"+where+".html").then((res) =>{
            let rtn = res.text();
            return rtn;
        }).then((res) => {
            this.setState({
                response : res,
            })
        })
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={ {__html: this.state.response} }/>
        );
    }
}

export default Iframe;