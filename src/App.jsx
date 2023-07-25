alert("WellCome to MY AI")
import { useState } from "react";
import "./App.css";
import { arrayItems } from "./Choose/Item";
import Magic from "./componets/Magic";

import Translation from "./componets/Translation";

function App() {
  const [input, setInput] = useState("");
  

  const [Option, setOption] = useState({});

  const selectoption = () => {
   
    setOption(Translation)
   
  };

  const doStuff = () => {
console.log({Option});
  };

  return (
    <>
      <div className="app">
        {Object.values(Option).length === 0 ? (
          <Magic arrayItems={arrayItems} selectoption={selectoption}/>
        ) : (
          <Translation doStuff={doStuff} setInput={setInput}/>
        )}
      </div>
    </>
  );
}

export default App;
