
const Country = ({countryDetails}) => {
    if(countryDetails == null){
        return null

    }else{
        console.log("the country details", countryDetails)

        return(
            <div>
                <div><h2>{countryDetails.name.common}</h2></div>

                <div>
                    <div>Capital {countryDetails.capital[0]}</div>
                    <div>Area {countryDetails.area}</div>
                </div>

                <div><h2>Languages</h2></div>

                <ul>
                    {Object.values(countryDetails.languages).map(langName =>
                        <li key={langName}>{langName}</li>
                    )}
                </ul>

                <div><img src={countryDetails.flags.png}/></div>

                <div><h2>Weather in {countryDetails.capital[0]}</h2></div>
                
            </div>
        )

    }
}

const CountryWeather = ({currentWeather}) => {

    if(currentWeather === null){
        return null
    }else{
        const iconUrl = `https://openweathermap.org/payload/api/media/file/${currentWeather.weather[0].icon}@2x.png`
        console.log(iconUrl)
        return(
            <div>
                <div>Temperature {currentWeather.main.temp} Celcius</div>
                <div><img src={iconUrl}/></div>
                <div>Wind {currentWeather.wind.speed} m/s</div>
            </div>
        )
    }
}

const Countries = ({countries, setCountry, setFilteredCountries}) => {
    if(countries.length > 10){
        return(<div>Too many matches, specify another filter</div>)

    }else if(countries.length > 1 && countries.length < 10){
        return(
            <div>
                {countries.map(country => 
                    <div key={country}>
                        {country}
                        <button onClick={() => {
                            setFilteredCountries([country])
                            setCountry(country)}
                        }>Show</button>
                    </div>
                )}
            </div>
        )

    }else if(countries.length === 0){

        return(
            <div>No countries match specified filter</div>
        )

    }else{
        return null
    }

}

export default {Countries, Country, CountryWeather}