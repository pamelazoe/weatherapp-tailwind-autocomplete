import './Temperature.css'
const Temperature = ({title, temp, unit}) => {
  return (
    <div className="temperature grid grid-rows-2 text-white py-3 gap-y-2 font-medium rounded-lg flex flex-col content-center items-center justify-center tracking-wider h-full justify-items-center content-center text-base md:text-3xl md:font-medium md:py-5 lg:text-xl">
      <div className="">{title}</div>
      <div className="flex items-center justify-items-center justify-center text-center text-wrap flex-col break-words text-lg md:text-3xl lg:text-xl">
        {temp}
        {unit}
      </div>
    </div>
  )
}

export default Temperature
