import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar title='GitHub Finder' />
    </BrowserRouter>
  )
}

export default App
