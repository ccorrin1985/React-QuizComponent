import React, { Component } from "react";

export class QuizEnd extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href="">Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;
