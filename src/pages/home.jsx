import React, { useState } from 'react'
import { Header } from '../Header'
import { Title } from '../Title'
import { Movies } from '../Movies'

export const HomePage = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      
      <Header />

      <Title name1={"Java"} name2={"C"}></Title>

      <Title 
        name1=".NET" 
        name2="Spring Boot"/>
      <div className="card">
        <button 
          // onClick={() => setCount((count) => count + 1)} 
          onClick={() => setCount("test")} 
          onMouseOver={() => setCount(count + 1)}>
          count is {count} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Movies />
    </div>
  )
}
