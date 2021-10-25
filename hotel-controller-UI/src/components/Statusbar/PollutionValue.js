import React from "react";
import styled from "styled-components";

const AqiValueStyle = styled.div `
  position: absolute;
  left: 36.59%;
  right: 36.99%;
  top: 50.93%;
  bottom: 0%;

  font-family: Exo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 53px;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: #636169;
`

const AqiStatusStyle = styled.div `
  position: absolute;
  left: 69.11%;
  top: 66.67%;
  bottom: 13.89%;
  width: 120px;

  font-family: Exo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #fab03c;
`
export default class PollutionValue extends React.Component {
  state = {
    loading: true,
    status: null,
    pm25: null,
    color: null,
  };

  async componentDidMount() {
    try {
      setInterval(async () => {
        /* set temp */
        const psql_call = await fetch('http://localhost:3001');
        const aqiData = await psql_call.json();
        const pm25Value = Math.round(0.0 + aqiData[0].pm25);
        this.setState({
          pm: pm25Value,
          loading: false
        });
        this.checkAqiStatus()
      }, 1000)
    } catch (e) {
      console.log(e)
    }
  }

  checkAqiStatus() {
    let aqival = this.state.pm25
    return (aqival >= 0 && aqival < 51) ? this.setState({
        status: 'Good',
        color: '#5ac251'
      }) :
      (aqival >= 51 && aqival < 101) ? this.setState({
        status: 'Moderate',
        color: '#fab03c'
      }) :
      (aqival >= 101 && aqival < 151) ? this.setState({
        status: 'Unhealthy for Sensitive Groups',
        color: '#f78800'
      }) :
      (aqival >= 201 && aqival < 301) ? this.setState({
        status: 'Unhealthy',
        color: '#e40101'
      }) :
      (aqival > 301) ? this.setState({
        status: 'Very unhealthy',
        color: '#b1277d'
      }) :
      this.setState({
        status: 'Very unhealthy',
        color: '#b1277d'
      })
  }

  render() {
    return (
      <div>
        <AqiValueStyle>{this.state.pm}</AqiValueStyle>
        <AqiStatusStyle style={{ color: this.state.color }}>{this.state.status}</AqiStatusStyle>
      </div>
    );
  }
}
