import React from 'react'
import Temperature from './Temperature'

const Weather = ({result, isToggled, setIsToggled}) => {
  const {name, main, weather, uvIndex} = result

  if (!name) return null
  const celsiusToFahrenheit = temp => (temp * 1.8 + 32).toFixed(1)
  const weatherIcon = [...weather].map(w => w.icon)
  const icon = weatherIcon[0].replace('n', 'd')

  return (
    <div className="weather-data w-full flex flex-wrap grid grid-cols-4 gap-x-2 md:gap-x-8 md:mt-4 lg:gap-x-4">
      <Temperature
        title="Now"
        icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        temp={
          !isToggled ? main.temp.toFixed(1) : celsiusToFahrenheit(main.temp)
        }
        unit={!isToggled ? 'º' : 'º'}
      />

      <Temperature
        title="Min"
        icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        temp={
          !isToggled
            ? main.temp_min.toFixed(1)
            : celsiusToFahrenheit(main.temp_min)
        }
        unit={!isToggled ? 'º' : 'º'}
      />

      <Temperature
        title="Max"
        icon={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        temp={
          !isToggled
            ? main.temp_max.toFixed(1)
            : celsiusToFahrenheit(main.temp_max)
        }
        unit={!isToggled ? 'º' : 'º'}
      />

      <Temperature title="UV" temp={uvIndex.value} />
    </div>
  )
}

export default Weather
