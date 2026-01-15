import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user="aman" age={18} img='https://images.unsplash.com/photo-1761839257961-4dce65b72d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' />
        <Card user="sarthak" age={21} img='https://images.unsplash.com/photo-1766903882059-931704d12a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' />
      </div>


    </>

  )
}

export default App
