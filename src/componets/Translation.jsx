import React from "react";

export default function Translation(doStuff, setInput) {
  return (
    <div>
      <textarea
    
        className="text-area"
        cols="60"
        rows="10"
        placeholder="Type your own Mind"
    onChange={(e)=> setInput(e.target.value)}
      ></textarea>
      <br />
      <button className="btn" onClick={doStuff }>
        Do you Surch
      </button>
    </div>
  );
}
