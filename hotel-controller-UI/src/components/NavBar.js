import React from 'react'
import styled from 'styled-components'
const Bar = styled.div`

position: fixed;
width: 100%;
height: 60px;
left: 0;
top: 0;
background: #242331;
display: block;
`

const Text = styled.div`

position: fixed;
width: auto;
height: 40px;
left: 544px;
top: 20px;

font-family: 'Exo';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.15em;

color: #FDFFFC;
`

const NavBar = () => {
    return (
        <Bar>
            <Text>
                VMova Hotel Resort & Spa
            </Text>
        </Bar>
    )
}

export default NavBar
