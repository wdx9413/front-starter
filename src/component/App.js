import React from 'react';
import '../style/App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import First from './First';
import Second from './Second';
const App = () => {
    return (
        <Router>
            <Link to='/1'>first</Link>
            <div className='app'>
                app
            </div>
            <Route path='/1' component={First}></Route>
            <Route path='/2' component={Second}></Route>
        </Router>
        
    );
}

export default App;



