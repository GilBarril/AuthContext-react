import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalProvider from './context/globalContext';
import axiosConfiguration from './axiosConfiguration'

axiosConfiguration()

const Base = lazy(() => import('./views/Base'));
const ChainResult = lazy(() => import('./views/ChainResult'));
const Search = lazy(() => import('./views/Search'));
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const ValidateError = lazy(() => import('./views/ValidateError'));
const Tutorial = lazy(() => import('./views/Tutorial'));
const Validation = lazy(() => import('./views/Validation'));
const SearchRegister = lazy(() => import('./views/SearchRegister'));
const Notary = lazy(() => import('./views/Notary'));

export default function App() {


    return (
        <ThemeProvider theme={this.state.theme}>
            <Suspense fallback={<div>Loading...</div>}>
                <GlobalProvider>
                    <Router>
                        <Switch>
                            <Base exact path="/" component={Home} name={"HOME"} />
                            <Base exact path="/about" component={About} name={"ABOUT"} />
                            <Base exact path="/result/:hash?" component={ChainResult} name={"CHAINRESULT"} />
                            <Base exact path="/search" component={Search} name={"SEARCH"} />
                            <Base exact path="/tutorial" component={Tutorial} name={"TUTORIAL"} />
                            <Base exact path="/validation" component={Validation} name={"VALIDATION"} />
                            <Base exact path="/searchregister" component={SearchRegister} name={"SEARCHREGISTER"} />
                            <Base exact path="/notary/:hash" component={Notary} name={"NOTARY"} />
                            <Base exact path="/error" component={ValidateError} name={"VALIDATE_ERROR"} />
                        </Switch>
                    </Router>
                </GlobalProvider>
            </Suspense>
        </ThemeProvider>
    )

}

