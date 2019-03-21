import React, {
  Component
} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    let seconds = 5;
    this.state = {
      time: seconds
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
      console.log(this.state.time)
      if (this.state.time === -1) {
        this.setState({
          time: 5
        })
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return ( 
      <p> {this.state.time} </p>
    );
  }
}

export default Clock;