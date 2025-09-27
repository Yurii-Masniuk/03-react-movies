import { useState } from 'react'
import axios from 'axios'
import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  const handleSearch = (query: string) => {

  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />


    </>
  )
}

export default App
