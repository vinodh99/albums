import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import AlbumDetails from "./AlbumDetails";

class AlbumList extends Component {
  state = {
    albums: []
  };
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetails key={album.title} album={album.title} />
    ));
  }
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }
  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
