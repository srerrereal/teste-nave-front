import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import HomePage from "./components/screens/HomePage";
import Cadastro from "./components/screens/Cadastro";
import Vagas from "./components/screens/Vagas";

function App() {
  return (


<BrowserRouter>
    <div className="App">

        <Navbar/>
        <Switch>


            <Route exact path='/' component={HomePage}/>

            <Route path='/signup' component={Cadastro}/>
            <Route path='/vagas' component={Vagas}/>
        </Switch>

    </div>

</BrowserRouter>

  );
}

export default App;
