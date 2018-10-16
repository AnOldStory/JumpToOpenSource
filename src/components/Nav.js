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

                <Chapter active={this.props.active} level={0} index="BIGG0" handle={this.props.handle}/>
                    <Article active={this.props.active} level={1} index="imSmall1" handle={this.props.handle}/>
                    <Article active={this.props.active} level={2} index="imSmall2" handle={this.props.handle}/>
                    <Article active={this.props.active} level={3} index="imSmall3" handle={this.props.handle}/>
                    <Article active={this.props.active} level={4} index="imSmall4" handle={this.props.handle}/>
                    <Article active={this.props.active} level={5} index="imSmall5" handle={this.props.handle}/>
                    <Article active={this.props.active} level={6} index="imSmall6" handle={this.props.handle}/>
                    <Article active={this.props.active} level={7} index="imSmall7" handle={this.props.handle}/>
                    <Article active={this.props.active} level={8} index="imSmall8" handle={this.props.handle}/>
                    <Article active={this.props.active} level={9} index="imSmall9" handle={this.props.handle}/>
                <div className="nav-line"/> 

                <Chapter active={this.props.active} level={10} index="BIGG10" handle={this.props.handle}/>
                    <Article active={this.props.active} level={11} index="imSmall11" handle={this.props.handle}/>
                    <Article active={this.props.active} level={12} index="imSmall12" handle={this.props.handle}/>
                    <Article active={this.props.active} level={13} index="imSmall13" handle={this.props.handle}/>
                    <Article active={this.props.active} level={14} index="imSmall14" handle={this.props.handle}/>
                    <Article active={this.props.active} level={15} index="imSmall15" handle={this.props.handle}/>
                    <Article active={this.props.active} level={16} index="imSmall16" handle={this.props.handle}/>
                    <Article active={this.props.active} level={17} index="imSmall17" handle={this.props.handle}/>
                    <Article active={this.props.active} level={18} index="imSmall18" handle={this.props.handle}/>
                    <Article active={this.props.active} level={19} index="imSmall19" handle={this.props.handle}/>
                <div className="nav-line"/> 
                
                <Chapter active={this.props.active} level={20} index="BIGG20" handle={this.props.handle}/>
                    <Article active={this.props.active} level={21} index="imSmall21" handle={this.props.handle}/>
                    <Article active={this.props.active} level={22} index="imSmall22" handle={this.props.handle}/>
                    <Article active={this.props.active} level={23} index="imSmall23" handle={this.props.handle}/>
                    <Article active={this.props.active} level={24} index="imSmall24" handle={this.props.handle}/>
                    <Article active={this.props.active} level={25} index="imSmall25" handle={this.props.handle}/>
                    <Article active={this.props.active} level={26} index="imSmall26" handle={this.props.handle}/>
                    <Article active={this.props.active} level={27} index="imSmall27" handle={this.props.handle}/>
                    <Article active={this.props.active} level={28} index="imSmall28" handle={this.props.handle}/>
                <div className="nav-line"/> 
                
            </div>
        )
    }
}

export default Nav;