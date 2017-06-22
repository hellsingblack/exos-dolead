import React from "react";
import ReactDom from 'react-dom';
import { connect } from "react-redux";

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  state = {
    selected: [],
  }
  
  onSelect = (e) => {
    const el = e.target.getAttribute('id');
    
    if (this.state.selected.includes(el)){
      return;
    }

    if (this.state.selected.length === 2) {
      const id = this.state.selected[this.state.selected.length-1];
      ReactDom.findDOMNode(this.refs[id]).setAttribute('class', '');
      this.state.selected.pop();
    }
    
    if (this.state.selected.length < 3) {
      ReactDom.findDOMNode(this.refs[el]).setAttribute('class', 'selected');
      this.state.selected.push(el);
    }

  }
  
  render() {
    return (
      <div>
        <button id="fast" ref="fast" onClick={this.onSelect}>FAST</button>
        <button id="cheap" ref="cheap" onClick={this.onSelect}>CHEAP</button>
        <button id="reliable" ref="reliable" onClick={this.onSelect}>RELIABLE</button>
      </div>
    )
  }
}
