import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'


function App() {
  
  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)

  //petición a la api
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

  useEffect(()=> {
  axios.get(url)
  .then(resp => {
    setLocation(resp.data)
    setHasError(false)
  })
  .catch(err => {
    console.log(err)
    setHasError(true)
  })
  }, [idLocation])


  return (
    <>
    <h1 className='title'>Rick And Morti</h1>
    <FormLocation
    setIdLocation = {setIdLocation}
    />
    {
      hasError
      ?(<h1>📕 hey, you must provide an id from 1 to 126 😥</h1>)
      :(
        <>
          <LocationInfo 
           location = {location}
         />
        <div className='resident-container'>
        {
          location?.residents.map(url => (
          <ResidentCard
          key={url}
          url={url}
          />
         ))
         }
        </div>
        </>
      )
    }
    </>
  )
}

export default App
