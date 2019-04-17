// import a library to create a component
import React from "react";
import Header from "./src/components/header";
import { View, AppRegistry } from "react-native";
import AlbumList from "./src/components/AlbumList";

// create a component
const App = () => (
  <View>
    <Header headerText={"albums!"} />
    <AlbumList />
  </View>
);

// render it to device
AppRegistry.registerComponent("albums", () => App);
