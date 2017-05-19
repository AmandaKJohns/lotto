import React, { Component } from 'react';

class Main extends Component {    

  handleSubmit = (e) => {
    // complete form submission
  }
  
  render() {
    return (
      <div className="main-content home">
        <h2>Broadway Lottery</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="First Name" ref={(input) => this.firstName = input}/>
          <input type="text" placeholder="Last Name" ref={(input) => this.lastName = input}/>
          <input type="text" placeholder="email" ref={(input) => this.email = input}/>
          <button type="submit">Enter</button>       
        </form>
      </div>
    );
  }
}

export default Main;