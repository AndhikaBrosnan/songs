import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song) {
    return (
      <div>
        <h1>Pick a Song</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Song Detail:</h1>
      <b>Title: {song.title}</b> <br></br>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStatetoProps)(SongDetail);
