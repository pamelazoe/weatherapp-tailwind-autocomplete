const Location = ({result}) => {
  const {name, country, weatherIcon} = result
  return (
    <div className="flex items-center justify-center h-full w-full content-center tracking-widest text-xl text-white font-semibold md:text-4xl lg:text-2xl">
      {name === undefined ? (result = null) : `${name}, `}

      {country === undefined ? (result = null) : country}
      <img
        src={
          weatherIcon === undefined
            ? null
            : `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        }
        alt={weatherIcon === undefined ? null : 'weather-icon'}
        className="ml-2 h-10 md:ml-2"
      ></img>
    </div>
  )
}
export default Location
