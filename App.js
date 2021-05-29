import { StatusBar } from 'expo-status-bar';
import React,  {Component}  from 'react';
import { View } from 'react-native';
import Router from './Router';

const App = () => {
  
    return (
      <>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
      <Router/>
      </>
    );
  }

export default App;  

    


