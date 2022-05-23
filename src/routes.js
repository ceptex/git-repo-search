import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/repositories' element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    )
}