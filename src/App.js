//create a basic architecture

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainComponent from './components/MainComponent'

// import compenents
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainComponent />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
