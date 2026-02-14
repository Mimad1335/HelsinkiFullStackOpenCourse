import { useState, useEffect } from 'react'
import countryApi from './network/countryApi'
import CountryComp from './components/Country'
import './App.css'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countryDetails, setCountryDetails] = useState(null)
  const [countryLatLong, setCountryLatLong] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)

  useEffect( () => {
    countryApi
    .getAll()
    .then(allNames => setCountries(allNames))
    .catch(error => console.log('something went wrong fetching all countries'))
  }, [])

  const updateWeatherDetails = (latLong) => {

    console.log("latlong 1", latLong)

    countryApi
    .getWeather({latLong})
    .then(weather => setCurrentWeather(weather))
    .catch(error => {console.log("failed to get weather details.")})

  }

  useEffect(() => {
    if(filteredCountries.length === 1){
      console.log("country is", country)
      countryApi
      .getCountry({country})
      .then(details => {
        setCountryDetails(details)
        console.log("latlong 2", details.latlng)
        updateWeatherDetails(details.latlng)
        setCountryLatLong(details.latlng)
      })
    }
  }, [country])

  const onCountryChange = (event) =>{
    setCountry(event.target.value)
    const filtered = countries.filter( name => name.toLowerCase().includes(country.toLowerCase()))
    setFilteredCountries(filtered)
    if(filtered.length === 1){
      setCountry(filtered[0])
    }
  }

  return (
    <div>
      <div>
        <form>
          <div>
            find Countries <input value={country} onChange={onCountryChange}/>
          </div>
        </form>

        <CountryComp.Countries countries={filteredCountries} setCountry={setCountry} setFilteredCountries={setFilteredCountries}/>
        <CountryComp.Country countryDetails={countryDetails}/>
        <CountryComp.CountryWeather currentWeather={currentWeather}/>
      </div>
    </div>
  )
}

export default App
