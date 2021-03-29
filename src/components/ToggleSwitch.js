const ToggleSwitch = ({isToggled, setIsToggled}) => {
  const onToggle = () => setIsToggled(!isToggled)
  return (
    <div className="grid grid-rows-1 grid-cols-5 w-full justify-center items-center flex-row">
      <div className="col-start-2 flex justify-center text-xl text-white md:text-3xl lg:text-xl">
        °C
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-2/3 col-start-3 inline-block align-middle select-none transition duration-200 ease-in flex items-center">
          <input
            type="checkbox"
            checked={isToggled}
            onChange={onToggle}
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-black bg-opacity-30 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 bg-opacity-30 cursor-pointer w-full md:w-3/5 lg:w-full"
          ></label>
        </div>
      </div>
      <div className="col-start-4 flex justify-center text-xl text-white md:text-3xl lg:text-xl">
        °F
      </div>
    </div>
  )
}

export default ToggleSwitch
