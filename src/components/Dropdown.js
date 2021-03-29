import { NavLink } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ handleClick, click }) => {
  return (
    <div
      className={
        click
          ? "text-center items-center bg-transparent font-sans text-white font-extrabold text-xl mx-12 md:h-full md:grid md:grid-rows-2 lg:hidden"
          : "hidden"
      }
    >
      <div className="flex justify-end md:row-span-1 md:text-3xl">
        <NavLink
          to="/search"
          className="menu-item my-2 justify-self-end"
          onClick={handleClick}
        >
          SEARCH
        </NavLink>
      </div>
      <div className="flex justify-end md:row-span-1 md:text-3xl">
        <NavLink
          to="/about"
          className="menu-item my-2 justify-self-end"
          onClick={handleClick}
        >
          ABOUT
        </NavLink>
      </div>
    </div>
  );
};

export default Dropdown;
