import React from "react";

function App() {
  const title = "Blog Post";
  const body = "This is my first blog post.";
  const comments = [
    { id: 1, text: "this is the 1st comment" },
    { id: 2, text: "this is the 2nd comment" },
    { id: 3, text: "this is the 3rd comment" },
    { id: 4, text: "this is the 4th comment" },
  ];

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p> {body} </p>
      {Math.random() * 100}
    </div>
  );
}

export default App;
