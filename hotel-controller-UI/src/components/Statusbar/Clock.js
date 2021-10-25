import React, { Component } from 'react';

function FormattedDate(props) {
    return <div>{props.date.toLocaleTimeString('th-TH',{ hour12: false })}</div>;
  }
  
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div>
            <FormattedDate date={this.state.date} />
          </div>
        );
      }
    }
 export default Clock;