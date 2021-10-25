import React from "react";
import styled from "styled-components";
import { ReactComponent as LineSVG } from "../Icon/line-statusbar.svg";

const WeatherContainer = styled.div`
position: absolute;
width: 235px;
height: 121px;
left: 680px;
right: 277px;
top: 12px;
bottom: 33px;
`

const WeatherText = styled.div`
position: absolute;
left: 28%;
right: 33.49%;
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

const WeatherIcon = styled.div`
position: absolute;
left: 0%;
right: 63.28%;
top: 19.23%;
bottom: 4.74%;
`

const WeatherStyle = styled.div`
position: absolute;
left: 46.98%;
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
const Line = styled.div`

position: absolute;
left: 100%;
right: -56.28%;
top: 0%;
bottom: 100%;
`
class Weather extends React.Component {
    state = {
        loading: true,
        temp: '00',
        icon: '10n',
        error: null
    };

    async componentDidMount() {
        try {
            setInterval(async () => {
                /* set temp */
                const psql_call = await fetch('http://localhost:3001');
                const tempData = await psql_call.json();
                const tempValue = Math.round(0.0 + tempData[0].room_temp);
                this.setState({ temp: tempValue, loading: false });
            }, 1000)

            /* set icon */
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=13.7262&lon=100.5478&appid=0b30116adec6324a019992a73ce4df96`);
            const data = await api_call.json();
            this.setState({ icon: data.current.weather[0].icon, error: "" });

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <WeatherContainer>
                <WeatherText>Weather</WeatherText>
                <WeatherIcon>
                    <img width="120" height="120" src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="WeatherIcon" />
                </WeatherIcon>
                <WeatherStyle>{this.state.temp} °C</WeatherStyle>
                <Line>
                    <LineSVG/>
                </Line>
            </WeatherContainer>
        )
    }
}

export default Weather
