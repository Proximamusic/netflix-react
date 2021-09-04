import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         <Route exact path='/'>
         <Navbar />
         <WelcomePage/>
         </Route>

         <Route exact path='/home'>
         <Navbar />
       <h1>home</h1>
         </Route>

         <Route exact path='/login'>
         <Navbar />
       <h1>login</h1>
         
         </Route>

      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
