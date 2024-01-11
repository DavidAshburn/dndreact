import React, { useState } from 'react'

function Stats({active}) {
  if (active) {
    return(
      <div className="grid grid-cols-6">
        <div>Stat</div>
        <div>Stat</div>
        <div>Stat</div>
        <div>Stat</div>
        <div>Stat</div>
        <div>Stat</div>
      </div>
    );
  }
  return(
    <div></div>
  );
}

function Stathud() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section id="stathud" className="w-screen bg-gray-300 min-h-12">
      <div className="w-full grid grid-cols-[1fr_4rem]">
        <p>Stats</p>
        <button onClick={() => isActive ? setIsActive(false) : setIsActive(true)}className="h-8 rounded-full">+</button>
      </div>
      <Stats active = {isActive} />
    </section>
  )
}

export default Stathud