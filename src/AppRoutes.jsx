import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Multiplicacion from './pages/Multiplicacion'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/multiply' element={<Multiplicacion />} />

            <Route path='*' element={<Navigation to='/' />} />
        </Routes>
    )
}
