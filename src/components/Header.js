import {NavLink} from 'react-router-dom'
import DotsVertical from './DotsVertical'
import './Header.css'

const Header = ({handleClick, click}) => {
  return (
    <>
      <nav
        className="flex items-center h-20 ml-7 mr-3 justify-between relative md:w-full md:mx-10 lg:mr-0"
        role="navigation"
      >
        <NavLink
          to="/"
          className="font-sans font-extrabold text-white text-3xl col-start-2  col-span-6 active md:text-6xl lg:text-4xl"
          id="logo"
          onClick={handleClick}
        >
          weatherApp
        </NavLink>
        <div
          className={
            'col-start-11 col-end-12 justify-self-end md:h-10 md:w-10 md:flex md:justify-self-end lg:hidden'
          }
          onClick={handleClick}
        >
          {click ? (
            <DotsVertical rotation="transform rotate-90" />
          ) : (
            <DotsVertical rotation="transform rotate-0" />
          )}
        </div>

        <div className="hidden pr-8 sm:hidden md:hidden lg:block font-sans text-white text-xl tracking-wide font-black">
          <NavLink
            to="/search"
            className="menu-item p-4 lg:ml-7 active:bg-green-700"
            onClick={handleClick}
          >
            SEARCH
          </NavLink>
          <NavLink
            to="/about"
            className="menu-item p-4 lg:ml-7"
            onClick={handleClick}
          >
            ABOUT
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Header
