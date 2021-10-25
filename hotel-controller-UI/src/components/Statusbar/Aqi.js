import React from "react";
import styled from "styled-components";
import Pollution from "./PollutionValue";
import { ReactComponent as AqiIconSVG } from "../Icon/aqi-icon.svg";

const AqiContainer = styled.div`
  position: absolute;
  width: 246px;
  height: 108px;
  left: 946px;
  right: 0px;
  bottom: 43px;
  top: 15px;
`;

const AqiText = styled.div`
  position: absolute;
  left: 32px;
  right: 79px;
  bottom: 81px;
  width: 100%;

  font-family: Exo, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;

  color: #242331;
`;
const AqiIcon = styled.div`
  position: absolute;
  left: 0%;
  right: 71.39%;
  top: 33.79%;
  bottom: 3.43%;

  opacity: 0.8;
`;

const Aqi = () => {
  return (
    <AqiContainer>
      <AqiText>AQI (PM 2.5)</AqiText>
      <AqiIcon>
        <AqiIconSVG/>
      </AqiIcon>
      <Pollution />
    </AqiContainer>
  );
};

export default Aqi;
