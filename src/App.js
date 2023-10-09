import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/settings.scss'
import Match from './pages/Match'
import Home from './pages/Home'
import Players from './pages/Players'
import Error from './pages/Error'
import Header from './components/Header'

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/match" element={<Match />} />
                <Route path="/players/:id" element={<Players />} />
                <Route path="*" element={<Error />} />
                {/* Ajoutez d'autres routes selon vos besoins */}
            </Routes>
        </Router>
    )
}

export default App
