import React from "react";
import VideoPlay from "./Components/VideoPlay";
import VideosList from "./Components/VideosList";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <VideoPlay />
      <VideosList />
    </div>
  );
}

export default App;
