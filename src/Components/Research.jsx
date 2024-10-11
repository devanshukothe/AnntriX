import React from 'react'

function Research() {

   const pptUrl = "https://docs.google.com/presentation/d/FILE_ID/embed";

   const title = "Your Research Paper Title";
    const authors = ["Author One", "Author Two"];
    const abstract = "This is the abstract of the research paper.";
    const body = "This is where the main content of the paper goes...";
  return (
   <div>
            <h1>{title}</h1>
            <h3>By: {authors.join(", ")}</h3>
            <h4>Abstract</h4>
            <p>{abstract}</p>
            <h4>Body</h4>
            <p>{body}</p>
        </div>
        
  )
}

export default Research