import React, { useState, useEffect } from 'react'


function Creation() {
  let [races, setRaces] = useState(null);
  let [subraces, setSubRaces] = useState(null);
  let [classes, setClasses] = useState(null);
  let [subclasses, setSubClasses] = useState(null);
  let [backgrounds, setBackgrounds] = useState(null);

  let [prace, setPRace] = useState('None');
  let [psubrace, setPSubRace] = useState('None');
  let [pclass, setPClass] = useState('None');
  let [psubclass, setPSubClass] = useState('None');
  let [pbackground, setPBackGround] = useState('None');

  function handleRaceLoad(data) {
    setRaces(data);
    setSubRaces(data[0][1]);
    console.log(data);
  }

  function handleClassLoad(data) {
    setClasses(data);
    setSubClasses(data[0][1]);
    console.log(data);
  }

  function handleBackgroundLoad(data) {
    setBackgrounds(data);
    console.log(data);
  }

  function handleRaceSelect(event) {
    //populate subrace selection box
    let nameList = event.target.value.split(',');

    setPRace(nameList[0]);
    nameList.shift();
  
    if(nameList.length == 0) {
      setSubRaces(['filler','None']);
      setPSubRace('None');
    }
    else {
      setSubRaces(nameList);
      setPSubRace(nameList[0]);
    }
  }

  function handleSubRaceSelect(event) {
    setPSubRace(event.target.value);
  }

  function handleClassSelect(event) {
    //populate subclass selection box
    let nameList = event.target.value.split(',');

    setPClass(nameList[0]);
    nameList.shift();
  
    if(nameList.length == 0) {
      setSubClasses(['filler','None']);
      setPSubClass('None');
    }
    else {
      setSubClasses(nameList);
      setPSubClass(nameList[0]);
    }
  }

  function handleSubClassSelect(event) {
    setPSubClass(event.target.value);
  }

  function handleBackgroundSelect(event) {
    setPBackground(event.target.value);
  }
  
  //fetch dropdown labels
  useEffect(() => {
    fetch(`/labels/races`)
      .then((response) => response.json())
      .then((data) => handleRaceLoad(data))
      
    fetch(`/labels/classes`)
      .then((response) => response.json())
      .then((data) => handleClassLoad(data))

    fetch(`/labels/backgrounds`)
      .then((response) => response.json())
      .then((data) => handleBackgroundLoad(data))
      
      return () => {}
    },[]);

  return (
    <div>
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
          <select name="subraces" id='subraces' className="w-full" onChange={handleSubRaceSelect}>
            {
              subraces && subraces.map((subrace) => <option value={subrace} key={subrace}>{subrace}</option>)
            }
          </select>
        </div>
        <div className="border-2 border-green-900">
          <label htmlFor="classes">Choose a class:</label>
          <select name="classes" id='classes' className="w-full" onChange={handleClassSelect}>
            {
              classes && classes.map((race) => <option value={race} key={race}>{race[0]}</option>)
            }
          </select>
        </div>
        <div className="border-2 border-green-900">
          <label htmlFor="subclasses">Choose a subclass:</label>
          <select name="subclasses" id='subclasses' className="w-full" onChange={handleSubClassSelect}>
            {
              subclasses && subclasses.map((subrace) => <option value={subrace} key={subrace}>{subrace}</option>)
            }
          </select>
        </div>
        <div className="border-2 border-green-900">
          <label htmlFor="backgrounds">Choose a Background:</label>
          <select name="backgrounds" id='backgrounds' className="w-full" onChange={handleBackgroundSelect}>
            {
              backgrounds && backgrounds.map((background) => <option value={background} key={background}>{background}</option>)
            }
          </select>
        </div>
      </section>
      <section className='grid grid-cols-2 gap-4'>

        <div className='grid grid-cols-6 col-span-full'>
          <div>{ prace }</div>
          <div>{ psubrace }</div>
          <div>{ pclass }</div>
          <div>{ psubclass }</div>
          <div>{ pbackground }</div>
        </div>
      </section>
    </div>
  )
}

export default Creation