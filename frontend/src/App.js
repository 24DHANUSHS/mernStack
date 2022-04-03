// import logo from './muss.jpeg';
import React, {  useState} from 'react';
import './App.css';
import Login from './components/Login';
import axios from "axios";
import Register from './components/Register';

import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";



function App ()
{
  return(
    // <div>
    // {
    // (inLogin===1)?<Login setInLogin={setInLogin}/>:<Register />
    // };
    // </div>

    <Router>
    <Switch>
      {/* This route is for home component 
      with exact path "/", in component props 
      we passes the imported component*/}
      <Route exact path="/login" component={Login} />
      <Route  path="/register" component={Register} />
                                                                                                            
      <Route  path="" component={Login} />
      
    </Switch>
    </Router>

    
  );

}

export default App;











// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">  

        
//       </header>

//     </div>

//   );
// }


