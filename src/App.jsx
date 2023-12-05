import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Odoh Collins',
        bio: 'I am 40 year old, I am from Nigeria',
        imgSrc: 'https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // You can replace this with an actual image URL
        profession: 'Software Developer',
      },
      show: false,
      interval: 0,
    };
  }

  componentDidMount() {
    // Set up an interval to update the time interval since the component mounted
    this.setState({
      interval: setInterval(() => {
        this.setState({ interval: this.state.interval + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.state.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Person" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time interval since mount: {this.state.interval} seconds</p>
      </div>
    );
  }
}

export default App;