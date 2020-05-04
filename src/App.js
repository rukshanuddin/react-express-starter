import React, { Component } from 'react';
import me from './me.jpg';
import './App.css';
import SMSForm from './SMSForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Text Me!</h1>
          <img src={me} alt="me" />
          <p>This is a really basic form to send me an SMS. I followed a tutorial on the Twilio blog and tweaked it so it sends a text message from my Twilio trial number, with my number as a default value. I built it in about 5 minutes with instructions from the tutorial.
          </p>
          <br></br>
          <p><strong>I would love an opportunity at Twilio to learn and grow as a developer.<br/>Thank you for your consideration.</strong></p>
          <SMSForm />
        </header>
      </div>
    );
  }
}

export default App;
