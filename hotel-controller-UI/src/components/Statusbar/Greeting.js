import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import Clock from '../Statusbar/Clock'

const GreetingContainer = styled.div`
  position: initial;
  left: 0%;
  right: 83.05%;
  top: 0%;
  bottom: 0%;
  width: 202px;
  height: 166px;
`;

const CurrentDate = styled.div`


position: absolute;
left: 0.17%;
top: 61.45%;
bottom: 0%;

width: inherit;

  font-family: Exo;
  font-style: medium;
  font-size: 24px;
  line-height: 32px;
  vertical-align: top;
  letter-spacing: 0.015em;
  align: left;

  color: #000000;
`;

const CurrentTime = styled.div`
  position: absolute;
  left: 0.17%;
  right: 91.69%;
  top: 33.73%;
  bottom: 42.17%;

  font-family: Exo;
  font-style: bold;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  /* identical to box height */
  letter-spacing: 0.15em;


  color: #000000;
`;

const GreetingText = styled.div`
  position: absolute;
  x: 0px;
  left: 0%;
  right: 83.05%;
  top: 0%;
  bottom: 66.27%;

  font-family: Muli;
  font-style: bold;
  font-weight: bold;
  font-size: 22px;
  line-height: 56px;
  line-height: 172%;
  align: left;
  vertical-align: baseline;
  x-constraint: scale;

  /* identical to box height, or 215% */
  display: flex;
  align-items: center;
  letter-spacing: 0.10em;
  color: #000000;
  mix-blend-mode: normal;
  X: 0px;
  Y: 0px;
  W: 202px;
  H: 56px;
`;


const Greeting = () => {
  const moment = require("moment");
  let now = moment().format();
  var name = "Raksani!";

  return (
    <GreetingContainer>
      <GreetingText>
        <p>Hello,</p>
        <font color='#2270FE'>{name}</font>
      </GreetingText>
      <CurrentDate>
        <Moment format="dddd, Do MMMM YYYY">{now}</Moment>
      </CurrentDate>
      <CurrentTime>
        <Clock/>
      </CurrentTime>
    </GreetingContainer>
  );
};

export default Greeting;
