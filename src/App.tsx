import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './styles/global.css';

function App() {


  return (
    <>
      <Header />
      <Tasks />
    </>
  )
}

export default App
