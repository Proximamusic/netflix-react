import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import HomeScreen from './components/HomeScreen';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
         <Route exact path='/'>
         <Navbar />
         <WelcomePage/>
         </Route>

         <Route exact path='/home'>
          <HomeScreen/>
         </Route>

         <Route exact path='/login'>
         <LoginPage />
         </Route>

      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
