import React, { useState } from 'react'
import Stathud from './Stathud.jsx'


function Sheet() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)} className="p-2 px-4 font-bold text-yellow-200 bg-green-500 rounded-md">
          Click Me
        </button>
        <section>
          <Stathud />
        </section>
      </div>
    )
}

export default Sheet