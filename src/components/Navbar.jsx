
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 
                    bg-gray-800 dark:bg-gray-900 
                    border-b border-gray-700 dark:border-gray-600
                    transition-colors duration-300 gap-x-10">
      {/* Navigation Links */}
      <div className="flex gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 dark:text-blue-300 font-semibold text-xl transition-colors duration-300"
                : "text-white dark:text-gray-200 font-medium text-xl hover:text-blue-300 dark:hover:text-blue-400 transition-colors duration-300"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
