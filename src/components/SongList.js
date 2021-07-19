import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>Song List</div>;
  }
}

const mapStatetoProps = (state) => {
  return { songs: state.selectedSongs };
};

export default connect(mapStatetoProps)(SongList);
