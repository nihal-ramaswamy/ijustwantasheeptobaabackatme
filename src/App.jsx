import './App.css';
import React from 'react';
import SheepGoBaa from './components/sheep/sheepGoBaa.jsx';
import About from './components/about/about.jsx';
import Home from './components/home/home.jsx';
import NavBar from './components/navbar/navbar.jsx';
import Dropdown from './components/dropdown/dropdown.jsx';
import Footer from './components/footer/footer.jsx';
import Contact from './components/contact/contact.jsx';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Dropdown />
                    <header className="App-header">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/sheepGoBaa" exact>
                                <SheepGoBaa />
                            </Route>
                            <Route path="/about" exact>
                                <About />
                            </Route>
                            <Route path="/contact" exact>
                                <Contact />
                            </Route>
                        </Switch>
                    </header>
                    <Footer />
            </Router>
        </div>
  );
}

export default App;
