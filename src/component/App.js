import React from 'react';
import '../style/App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import First from './First';
import Second from './Second';
const App = () => {
    return (
        <Router>
            <Link to='/1'>first</Link>
            <div>
                app
                <Route path='/1' component={First}></Route>
                <Route path='/2' component={Second}></Route>
            </div>
        </Router>
        
    );
}

export default App;



