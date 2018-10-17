import React, { Component } from 'react';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft,faAngleRight,faCommentDots } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faAngleLeft,faAngleRight,faCommentDots)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: -1,
      showbox : 0
    }
    this.handleActive = this.handleActive.bind(this)
    this.handleShowbox = this.handleShowbox.bind(this)
  }

  handleActive(what,event){
    this.setState({
      active:what
    })
  }

  handleShowbox(){
    this.setState({
      showbox: !this.state.showbox
    })
  }

  render() {
    return (
      <div className="App">
        <Nav active={this.state.active} handle={this.handleActive}/>
        <Wrapper active={this.state.active} handle={this.handleActive}/>
      </div>
    );
  }
}

export default App;
