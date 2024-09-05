import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import About from './component/About/About';
import AddData from './component/AddData/AddData';

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <NavBar/>
                <main style={{ padding: '1rem' }} >
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/addData" element={<AddData/>} />
                        <Route path="/about" element={<About/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
