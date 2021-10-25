import React from "react";
import styled from "styled-components";
import { ReactComponent as LightSwitchOnSVG } from "../Icon/lightswitchon.svg";
import { ReactComponent as LightSwitchOffSVG } from "../Icon/lightswitchoff.svg";

const LightSwitchStyle = styled.div`
position: sticky;
display: flex;
width: 99px;
height: 70px;
`
const Adjustment = styled.div`
padding-left: 20px;

`
class LightSwitch extends React.Component {
  state = {
    switch: false,
    lightStatus: false,
  };

  handleClick = () => {
    this.setState({
      switch: !this.state.switch,
      lightStatus: !this.state.lightStatus,
    });
  };

  render() {
    return (
        <LightSwitchStyle>
          {
            this.state.switch && this.state.lightStatus ? 
            ( <Adjustment><LightSwitchOnSVG onClick={this.handleClick} /></Adjustment>) : 
            ( <LightSwitchOffSVG onClick={this.handleClick} />)
          }
        </LightSwitchStyle>
    );
  }
}

export default LightSwitch;
