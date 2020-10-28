import React from "react";
import ar1 from './ar1.png';


export default function Story({ story, index ,selected}) {
  return (
    <div className="story">
      
       
        <img src={ar1} /> <h3><a target="_blank" href={story.url}>{story.text} </a></h3>
       
       <h5>Author : {story.author}</h5>

     
   
    
  
    </div>
  );
}