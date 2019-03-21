import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Click extends Component {
  constructor(props) {
    super(props);
    let seconds = 20;
    this.state = {
      clicks: 0,
      time: seconds, 
      running: false
    }
  }

  handleClick() {
    if (!this.state.running) {
      this.setState({
        running: true
      });
    }
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
    }));
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.running) {
        this.setState({
          time: this.state.time - 1
        });
        console.log(this.state.time)
        if (this.state.time === -1) {
          if (this.state.clicks >= 20) {
            alert('Has ganado');
          } else {
            alert('Has perdido');
          }
          this.setState({
            clicks: 0,
            time: 20,
            running: false
          })
        }
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <p> {this.state.time} </p>
        <Button variant="contained" onClick = {this.handleClick.bind(this)}>
           {this.state.clicks} Clicks
        </Button>
      </div>
    );
  }

}

export default Click;
