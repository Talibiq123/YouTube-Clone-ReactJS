import React,{useState} from "react"; 
import SearchBar from "./Components/SearchBar";
import VideosList from "./Components/VideosList";
import VideoPlay from "./Components/VideoPlay";
import "./app.css";

const App = () => {
  let [videos,setVideos] = useState("")
  let [selectedVideo,setSelectedVideo] = useState("")

  // console.log(videos)
  console.log(selectedVideo)




  return(
    <div>
          <SearchBar  setVideos={setVideos}/> 
          <div className="videos">
            <VideoPlay  selectedVideo={selectedVideo}/>
            <VideosList  videos={videos} setSelectedVideo={setSelectedVideo}/>
          </div>
    </div>
  )
}

export default App;
