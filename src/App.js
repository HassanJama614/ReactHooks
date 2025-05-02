
import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  
  constructor(props) {
    console.log("App Constructor Called");
    super(props); 

    
    this.state = {
      person: {
        fullName: "Grace Hopper",
        bio: "An American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg", // Example image URL
        profession: "Computer Scientist, US Navy Rear Admiral"
      },
      shows: false, 
      mountedTime: 0 
    };

   
  }

  
  handleToggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

 
  componentDidMount() {
    console.log("App Component Did Mount");
   
    this.timerID = setInterval(() => {
     
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000); 
  }

 
  componentWillUnmount() {
    console.log("App Component Will Unmount");
   
    clearInterval(this.timerID);
  }


  render() {
    console.log("App Render Called");
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>

        {}
        <div className="timer">
          Time since component mounted: {mountedTime} seconds
        </div>

        {}
        <button onClick={this.handleToggleShow} className="toggle-button">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {}
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
