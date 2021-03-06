import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "Hey Ya!", duration: "2:00" },
    { title: "Smells Like Teen Spirit", duration: "4:40" },
    { title: "Bye Bye Bye", duration: "3:21" },
    { title: "Toxic", duration: "5:00" },
    { title: "Love Yourself", duration: "3:50" },
    { title: "Wonderwall", duration: "4:39" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
