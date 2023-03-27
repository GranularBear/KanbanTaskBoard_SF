import React, { useState } from "react";

import { dataMock } from "./localStorage";
import HomePage from "./Routing/HomePage";
import DescriptionPage from './Routing/DescriptionPage';


import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

const App = () => {
    const initiateStorage = () => {
        if (!localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify(dataMock));
        }
    }
    initiateStorage();
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')));

    return (
            <Router>
                <Routes>
                    <Route path='/' exact element={<HomePage data={data} setData={setData} />} />
                    <Route path='/tasks/:id' exact element={<DescriptionPage data={data} setData={setData} />} />
                    <Route path='*' element={<Navigate replace to='/' />} />
                </Routes>
            </Router>
    )
}

export default App;