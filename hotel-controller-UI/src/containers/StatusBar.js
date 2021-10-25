import React from 'react'
import styled from 'styled-components'
import Greeting from '../components/Statusbar/Greeting'
import Temperature from '../components/Statusbar/Temperature'
import Humidity from '../components/Statusbar/Humidity'
import Weather from '../components/Statusbar/Weather'
import Aqi from '../components/Statusbar/Aqi'

const StatusContainer = styled.div`
/* Status Bar */
position: absolute;
width: 1192px;
height: 166px;
left: 124px;
top: 124px;
x-constraint: left;
y-constraint: top;
`
const StatusBar = () => {
    return (
        <StatusContainer>
            <Greeting/>
            <Temperature/>
            <Humidity/>
            <Weather/>
            <Aqi/>
        </StatusContainer>
    )
}

export default StatusBar
