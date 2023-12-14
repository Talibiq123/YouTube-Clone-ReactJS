import axios from "axios";
import React, { useState } from "react";
import './searchbar.css';


const SearchBar = () => {
    let [search, setSearch] = useState("");
    let [video, setVideo] = useState("");
    console.log(video);

    function implementSearch() {
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                key: "AIzaSyCNfHIK_Ize8fFFbTnCmJYi6_rwu2whf28",
                part: "snippet",
                maxResult: 5,
                type: "video",
                q: search
            }
        })
        .then(response => setVideo(response.data.items))
        .catch((error) =>
            console.log(error)
        )
    }

    return (
        <div className="searchbar">
            <input type="text" placeholder="Search" 
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={implementSearch}>Search</button>
        </div>
    )
}

export default SearchBar;