import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
console.log(emojipedia);
function createEntry(item) {
  return (
    //the properties below are what get passed to the Entry component
    //item is the param that accesses each entry from the emojipedia
    //array. We pass this function below to be mapped
    <Entry
      key={item.id}
      emoji={item.emoji}
      name={item.name}
      meaning={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
