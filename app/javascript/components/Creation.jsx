import React, { useState, useEffect } from 'react'


function Creation() {
  let [races, setRaces] = useState(null);
  let [subraces, setSubRaces] = useState(null);

  function handleRaceLoad(data) {
    setRaces(data);
    setSubRaces(data[0][1]);
    console.log(data);
  }

  function handleRaceSelect(event) {
    //populate subrace selection box
    let nameList = event.target.value.split(',');
    nameList.shift();
  
    if(nameList.length == 0) {
      setSubRaces(['filler','None']);
    }
    else {
      setSubRaces(nameList);
    }
  }
  
  //fetch dropdown labels
  useEffect(() => {
    fetch(`/labels/races`)
      .then((response) => response.json())
      .then((data) => handleRaceLoad(data))      
      return () => {}
    },[])
    

  return (
    <section className="grid w-screen grid-cols-8 gap-2">
      <div className="border-2 border-green-900">
        <label htmlFor="races">Choose a race:</label>
        <select name="races" id='races' className="w-full" onChange={handleRaceSelect}>
          {
            races && races.map((race) => <option value={race} key={race}>{race[0]}</option>)
          }
        </select>
      </div>
      <div className="border-2 border-green-900">
        <label htmlFor="subraces">Choose a subrace:</label>
        <select name="subraces" id='subraces' className="w-full">
          {
            subraces && subraces.map((subrace) => <option value={subrace} key={subrace}>{subrace}</option>)
          }
        </select>
      </div>
    </section>
  )
}

export default Creation