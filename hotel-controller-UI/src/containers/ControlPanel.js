import React from 'react'
import styled from "styled-components";
import LoopPane from '../components/Controlpanel/LoopPane'


const ServiceStyle = styled.div`
position: absolute;
width: 1120px;
height: 580px;
left: 170px;
right: 170px;
top: 333px;
// border: 1px solid #BFBEBE;
align-items: center;
`
const ControlPanel = () => {
    return (
        <ServiceStyle>
            <LoopPane/>
        </ServiceStyle>
        
    )
}

export default ControlPanel
