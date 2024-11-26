import {Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
<Routes>
  
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/watchhistory' element={<WatchHistory/>} />
</Routes>
<Footer/>
    
     
    </>
  )
}

export default App
