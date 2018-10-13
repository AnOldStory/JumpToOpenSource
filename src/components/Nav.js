import React, { Component } from 'react';
import Chapter from './Chapter';
import Article from  './Article';

import '../css/Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="book-nav">
                <div className="book-name">
                    Jump To <br/> Open Source
                </div>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={0} index="BIGG" handle={this.props.handle}/>
                    <Article active={this.props.active} level={1} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={2} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={3} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={4} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={5} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={6} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={7} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={8} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={9} index="imSmall" handle={this.props.handle}/>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={10} index="BIGG" handle={this.props.handle}/>
                    <Article active={this.props.active} level={11} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={12} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={13} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={14} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={15} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={16} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={17} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={18} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={19} index="imSmall" handle={this.props.handle}/>
                <div className="nav-line"/> 
                
                <Chapter active={this.props.active} level={10} index="BIGG" handle={this.props.handle}/>
                    <Article active={this.props.active} level={20} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={21} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={22} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={23} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={24} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={25} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={26} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={27} index="imSmall" handle={this.props.handle}/>
                    <Article active={this.props.active} level={28} index="imSmall" handle={this.props.handle}/>
                <div className="nav-line"/> 
            </div>
        )
    }
}

export default Nav;