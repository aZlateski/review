import React, { useState, useEffect } from "react";
import Story from "./Story";
import Header from "./Header";
import './App.css';




function App() {

  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState("React");

  const search =()=>{
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const newStories = response.hits
        .map((result) => ({
          text: result.title,
          url: result.url,
          author: result.author,
          
        }))       
      setStories(newStories);
      setQuery(response.query);
    }); 
  }

const handleSubmit = (event) =>{
event.preventDefault()
search()
}

const handleChange =(event)=>{
  setQuery(event.target.value)
}


useEffect(() => {
  console.log("stories changed!");
}, [stories]);

  useEffect(() => {
   search()
  }, []);

  return (
    <div className="app">
      <div className="Header">
        <Header />
      </div>
      <div className="Search">
       <form onSubmit={handleSubmit}><input className="inputText" onChange={handleChange} type="text" placeholder="Search..." value={query} />
       </form>
      </div>
      <div className="story-list">        
        {stories.map((story, index,selected) => (
          <Story
            key={index}
            index={index}
            story={story}
            selected={selected}
      
          />
        ))}
      </div>
     
    </div>
  );
}

export default App 