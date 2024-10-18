import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Multiplicacion from './pages/Multiplicacion'
import HomePage from './pages/HomePage'
import Suma from './pages/Suma'



export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/multiply' element={<Multiplicacion />} />
            <Route path='/suma' element={<Suma />} />

            <Route path='*' element={<Navigation to='/' />} />
        </Routes>
    )
}
