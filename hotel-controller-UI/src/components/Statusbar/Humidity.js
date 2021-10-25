import React from "react";
import styled from "styled-components";
import { ReactComponent as HumidIconSVG } from "../Icon/humid-icon.svg";
import { ReactComponent as LineSVG } from "../Icon/line-statusbar.svg";

const HumidityContainer = styled.div`
position: absolute;
left: 42.2%;
right: 43.46%;
top: 7.23%;
bottom: 19.88%;
`

const HumidityText = styled.div`
position: absolute;
left: 15.79%;
right: 27.49%;
top: 2.48%;
bottom: 75.21%;

font-family: Exo, sans-serif;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.1em;

color: #242331;
`
const Humid = styled.div`
position: absolute;
left: 44.44%;
right: 20.47%;
top: 47.93%;
bottom: 8.27%;

font-family: Exo;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 53px;
/* identical to box height */
display: flex;
align-items: center;

color: #636169;
`
const HumidIcon = styled.div`
position: absolute;
left: 0%;
right: 64.11%;
top: 38.4%;
bottom: 5.56%;
`
const Line = styled.div`

position: absolute;
left: 100%;
right: -70.76%;
top: 0%;
bottom: 100%;

`
class Humidity extends React.Component {
    state = {
        loading: true,
        humid: '00',
        error: null
    };

    async componentDidMount() {
        try {
            setInterval(async () => {
                /* set humidity */
                const psql_call = await fetch('http://localhost:3001');
                const humidData = await psql_call.json();
                const humidValue = Math.round(0.0 + humidData[0].humidity);
                this.setState({ humid: humidValue, loading: false });
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <HumidityContainer>
                <HumidityText>Humidity</HumidityText>
                <HumidIcon>
                    <HumidIconSVG />
                </HumidIcon>
                <Humid>{this.state.humid}</Humid>
                <Line>
                    <LineSVG/>
                </Line>
            </HumidityContainer>
        )
    }
}
export default Humidity
