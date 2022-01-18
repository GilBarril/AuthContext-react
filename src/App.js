import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routers/PrivateRoute';

const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));


export default function App() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<PrivateRoute/>}>
                        <Route isAuthenticated={false} element={<Home/>} name={"HOME"} />
                    </Route>
                    <Route exact path="/login" element={<Login/>} name={"LOGIN"} />
                </Routes>
            </Router>
        </Suspense>

    )
}

