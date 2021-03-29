import Form from '../components/Form'
import Error from '../components/Error'
import Weather from '../components/Weather'
import AuthorData from '../components/AuthorData'
import AuthorDataReverse from '../components/AuthorDataReverse'
import Dropdown from '../components/Dropdown'
import ToggleSwitch from '../components/ToggleSwitch'
import Location from '../components/Location'
import Description from '../components/Description'

import './Search.css'

const Search = ({
  click,
  handleClick,
  name,
  links,
  username,
  instagram_username,
  twitter_username,
  img,
  portfolio_url,
  autoCompleteRef,
  isToggled,
  setIsToggled,
  searchQuery,
  setSearchQuery,
  errorSearch,
  errorInput,
  setErrorInput,
  result,
  description,
  unsplashLink,
}) => {
  return (
    <>
      <div className="row-span-2">
        <Dropdown click={click} handleClick={handleClick} />
      </div>
      <div className="row-span-2"></div>
      <div className="flex flex-wrap content-center row-span-1">
        <div className="w-full px-7 md:px-12 lg:hidden">
          <AuthorData
            name={name}
            links={links}
            username={username}
            instagram_username={instagram_username}
            twitter_username={twitter_username}
            rawImage={img}
            portfolio_url={portfolio_url}
            unsplashLink={unsplashLink}
          />
        </div>
      </div>
      <div className="acrylic-container grid row-span-9 grid-cols-3 w-full relative">
        <div className="acrylic grid w-full rounded-t-3xl p-7 w-screen flex h-full sm:col-span-3 md:col-span-3 md:p-11 lg:col-span-1 lg:w-full lg:rounded-3xl lg:p-7">
          <div className="z-50 w-full flex flex-col grid grid-rows-8">
            <div className="row-span-1">
              <Form
                autoCompleteRef={autoCompleteRef}
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            <div className="row-span-1 w-full flex items-center">
              <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
            </div>
            <div
              className={
                errorInput
                  ? 'row-span-1 flex justify-center items-center text-red-400 '
                  : 'row-span-1 hidden border-box'
              }
            >
              {errorInput ? (
                <Error message="Please choose a valid location" />
              ) : null}
            </div>

            <div className="row-span-1 flex items-center w-full">
              {errorSearch ? null : <Location result={result} />}
            </div>
            <div
              className={
                errorSearch
                  ? 'row-span-3 flex text-white mx-7 px-7 bg-black bg-opacity-20 rounded-xl'
                  : 'row-span-3 flex text-white py-2'
              }
            >
              {errorSearch ? (
                <Error
                  message={`There are no results for this search: ${result.city}, ${result.country}`}
                />
              ) : (
                <Weather
                  result={result}
                  isToggled={isToggled}
                  setIsToggled={setIsToggled}
                />
              )}
            </div>
            <div className="row-span-2 flex items-center justify-center w-full h-5/6 p-2 truncate overflow-ellipsis overflow-x-scroll">
              <Description description={description} />
            </div>
          </div>
        </div>
        <div className="hidden sm:hidden md:hidden lg:flex lg:col-span-2 lg:mb-5">
          <AuthorDataReverse
            name={name}
            links={links}
            username={username}
            instagram_username={instagram_username}
            twitter_username={twitter_username}
            rawImage={img}
            unsplashLink={unsplashLink}
            // html={html}
            portfolio_url={portfolio_url}
          />
        </div>
      </div>
    </>
  )
}

export default Search
