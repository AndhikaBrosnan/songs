const songsReducers = () => {
  return [
    { title: "Hey Ya!", duration: "2:00" },
    { title: "Hey Ya!", duration: "2:00" },
    { title: "Bye Bye Bye", duration: "3:21" },
    { title: "Toxic", duration: "5:00" },
    { title: "Love Yourself", duration: "3:50" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
