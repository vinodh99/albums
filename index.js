// import a library to create a component
import React from "react";
import Header from "./src/components/header";
import { Text, AppRegistry } from "react-native";
// create a component
const App = () => {
  return <Header />;
};

// render it to device
AppRegistry.registerComponent("albums", () => App);

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
