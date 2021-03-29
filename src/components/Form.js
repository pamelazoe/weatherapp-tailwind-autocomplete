import './Form.css'

const Form = ({autoCompleteRef, searchQuery, setSearchQuery}) => {
  return (
    <>
      <div className="bg-black bg-opacity-20 rounded-md flex justify-center items-center text-white text-base font-extrabold h-3/4">
        <div className="w-full">
          <div className="grid grid-cols-12 h-full" id="city-input">
            <input
              className="search-city col-span-12 w-full px-3 outline-none text-base md:text-2xl lg:text-lg"
              id="city"
              ref={autoCompleteRef}
              onChange={event => setSearchQuery(event.target.value)}
              placeholder="Please enter a city to get the weather"
              onClick={event => (event.target.value = '')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
