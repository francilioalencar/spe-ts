import React from 'react';
import logo from './logo.svg';
import './App.css';
import Usuario from './model/usuario/usuario';
import EmpresaView from './componete/empresa/empres-componete';
import Home from './componete/home/home';


const API_URL = process.env.REACT_APP_API_URL;


function App() {


  return (

    <Home/>

    );
}

export default App;
