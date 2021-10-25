import React from "react";
import styled from "styled-components";
import { ReactComponent as TempIconSVG } from "../Icon/temp-icon.svg";
import { ReactComponent as LineSVG } from "../Icon/line-statusbar.svg";

const TemperatureContainer = styled.div`
position: absolute;
left: 292px;
right: 752px;
top: 15px;
bottom: 43px;
overflow-x: 292px;
overflow-y: 15px;
`

const TemperatureText = styled.div`
position: absolute;
left: 8px;
bottom: 81px;

font-family: Exo, sans-serif;
font-style: normal;
font-weight: 100;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.1em;

color: #242331;

vertical-align: center;
`
const Celsius = styled.div`
position: absolute;
left: 51px;
right: 36.5;
top: 58px;
bottom: 10px;

font-family: Exo;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 53px;
/* identical to box height */
display: flex;
align-items: center;

color: #636169;

width: 97px;
height: 53px;
`
const CelsiusIcon = styled.div`
position: absolute;
left: 0px;
top: 42.48px;
right: 148px;
bottom: 10.2px;
`
const Line = styled.div`

position: absolute;
right: 0px;
left: 184.5px;

`
class Temperature extends React.Component {
    state = {
        loading: true,
        temp: '0',
        error: null
    };

    async componentDidMount() {
        try {
            setInterval(async () => {
                /* set temp */
                const psql_call = await fetch('http://localhost:3001');
                const tempData = await psql_call.json();
                const tempValue = Math.round(0.0 + tempData[0].temp);
                this.setState({ temp: tempValue, loading: false });
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <TemperatureContainer>
                <TemperatureText>Temperature</TemperatureText>
                <CelsiusIcon>
                    <TempIconSVG />
                </CelsiusIcon>
                <Celsius>{this.state.temp} °C</Celsius>
                <Line>
                    <LineSVG/>
                </Line>
            </TemperatureContainer>
        )
    }
}

export default Temperature
