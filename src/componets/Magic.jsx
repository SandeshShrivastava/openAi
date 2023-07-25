import React from "react"


export default function Magic({ arrayItems, selectoption }) {
  return (
    <>
      <h1 className="heading">Open AI</h1>

      <div className="grid-main" value="object" onClick={(item) => selectoption(item.Option)}>
        {arrayItems && arrayItems.map((item) => {

          return <>
            <div>
              <h3 className="grid-child" defaultValue={Object}>{item.name}</h3>
              <p >{item.discription}</p>
            </div>

          </>
        })}


      </div>

    </>

  );
}
