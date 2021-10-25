import React from 'react'
import StatusBar from './containers/StatusBar';
import ControlPanel from './containers/ControlPanel';
import NavBar from './components/NavBar';
import styled from "styled-components";

const AppStyle = styled.div`
align: center;
`
const App = () => {
  return (
    <AppStyle>
      <StatusBar />
      <ControlPanel />
      <NavBar />
    </AppStyle>

  )
}

export default App

