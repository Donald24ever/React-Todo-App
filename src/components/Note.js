import React, { Component } from 'react';


class Note extends Component {
      
render() {
    return (
      <div className="note" >
        {this.props.text} <button className="del" onClick={this.props.deleteMethod}>Delete</button>
     </div>
    );
  }
}

export default Note;

