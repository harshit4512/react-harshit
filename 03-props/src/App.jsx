import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='atul' age={55}/>
      <Card user='geeta' age='52'/>
    </div>
  )
}

export default App


// App.jsx-> parent
// card.jsx-> child

// we send data from parent to child means from App.jsx to card.jsx