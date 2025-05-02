// src/App.js
import React, { Component } from 'react';
import './App.css'; // We'll add some styles here later

class App extends Component {
  // 1. Constructor to initialize state and bind methods
  constructor(props) {
    console.log("App Constructor Called");
    super(props); // Always call super(props) first in the constructor

    // 2. Implement the state
    this.state = {
      person: {
        fullName: "Grace Hopper",
        bio: "An American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg", // Example image URL
        profession: "Computer Scientist, US Navy Rear Admiral"
      },
      shows: false, // Initially, the profile is hidden
      mountedTime: 0 // To store the interval time
    };

    // Binding the toggle method to 'this' instance (if not using arrow function)
    // this.handleToggleShow = this.handleToggleShow.bind(this);
  }

  // 3. Toggle button handler (using arrow function for auto-binding)
  handleToggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  // 5. Lifecycle method: componentDidMount
  // This runs after the component output has been rendered to the DOM.
  // Perfect place to start timers.
  componentDidMount() {
    console.log("App Component Did Mount");
    // Start the interval timer
    this.timerID = setInterval(() => {
      // Update the mountedTime state every second
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000); // 1000 milliseconds = 1 second
  }

  // Lifecycle method: componentWillUnmount
  // This runs right before the component is removed from the DOM.
  // Crucial for cleaning up timers or subscriptions to prevent memory leaks.
  componentWillUnmount() {
    console.log("App Component Will Unmount");
    // Clear the interval when the component unmounts
    clearInterval(this.timerID);
  }

  // Render method: defines the component's UI
  render() {
    console.log("App Render Called");
    const { person, shows, mountedTime } = this.state; // Destructure state for easier access

    return (
      <div className="App">
        <h1>Person Profile</h1>

        {/* 5. Field showing time since mount */}
        <div className="timer">
          Time since component mounted: {mountedTime} seconds
        </div>

        {/* 4. Button to toggle the profile visibility */}
        <button onClick={this.handleToggleShow} className="toggle-button">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {/* Conditional Rendering: Show profile only if 'shows' is true */}
        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} className="profile-img" />
            <h2>{person.fullName}</h2>
            <h3>{person.profession}</h3>
            <p>{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
