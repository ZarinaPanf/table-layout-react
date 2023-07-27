import { useState } from 'react'
import './App.css'
import UserTable from './UserTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
       <UserTable />
      </div>
      
    </>
  )
}

export default App;
