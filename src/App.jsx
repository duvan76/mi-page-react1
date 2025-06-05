import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import NewRestaurant from './pages/NewRestaurant';
import './styles/style.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/new" component={NewRestaurant} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;