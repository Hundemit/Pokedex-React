import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

// Interface for NavbarMenuButtons props, expects a callback function.
interface NavbarMenuButtonsProps {
  onMenuToggle: () => void;
}

// Functional component NavbarMenuButtons.
const NavbarMenuButtons: React.FC<NavbarMenuButtonsProps> = (props) => {
  // Gets the current URL location.
  const location = useLocation();

  // Handles button clicks, toggles menu visibility.
  const handleButtonClick = () => {
    props.onMenuToggle();
  };

  return (
    <ul className="flex flex-col gap-2 p-2 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link
          to={"/home"}
          onClick={handleButtonClick}
          className={
            "block px-3 py-2 " +
            (location.pathname.startsWith("/home")
              ? "text-white dark:text-blue-100 bg-blue-700 dark:bg-slate-700 rounded md:bg-blue-50  md:text-blue-700 "
              : "text-gray-900 hover:bg-gray-100 md:hover:bg-blue-50   md:hover:text-blue-700  md:dark:text-blue-100 dark:text-white dark:hover:bg-slate-700  dark:border-gray-700 rounded")
          }
          aria-current="page">
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/pokedex/1"}
          onClick={handleButtonClick}
          className={
            "block px-3 py-2 " +
            (location.pathname.startsWith("/pokedex")
              ? "text-white dark:text-blue-100 bg-blue-700 dark:bg-slate-700 rounded md:bg-blue-50  md:text-blue-700"
              : "text-gray-900 hover:bg-gray-100 md:hover:bg-blue-50   md:hover:text-blue-700  md:dark:text-blue-100 dark:text-white dark:hover:bg-slate-700  dark:border-gray-700 rounded")
          }>
          Pokédex
        </Link>
      </li>
      <li>
        <a
          href="https://janhindemit.de/"
          onClick={handleButtonClick}
          target="_blank"
          className={
            "block px-3 py-2 " +
            (location.pathname.startsWith("/aboutme")
              ? "text-white dark:text-blue-100 bg-blue-700 dark:bg-slate-700 rounded md:bg-blue-50  md:text-blue-700"
              : "text-gray-900 hover:bg-gray-100 md:hover:bg-blue-50   md:hover:text-blue-700  md:dark:text-blue-100 dark:text-white dark:hover:bg-slate-700  dark:border-gray-700 rounded")
          }>
          About Me
        </a>
      </li>
    </ul>
  );
};

export default NavbarMenuButtons;

// class NavbarMenuButttons extends Component {
//   state = {};

//   location = useLocation();

//   render() {
//     return (
//       <ul className="flex flex-col gap-2 p-2 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <Link
//             to={"/home"}
//             className="block px-3 py-2  text-white dark:text-blue-100 bg-blue-700 dark:bg-slate-700 rounded md:bg-blue-50  md:text-blue-700  "
//             aria-current="page"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to={"/pokemon"}
//             className="block px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-blue-50 md:dark:hover:bg-slate-700    md:hover:text-blue-700  md:dark:hover:text-blue-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 rounded"
//           >
//             Pokémon
//           </Link>
//         </li>
//         <li>
//           <Link
//             to={"/aboutme"}
//             className="block px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-blue-50 md:dark:hover:bg-slate-700    md:hover:text-blue-700  md:dark:hover:text-blue-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 rounded"
//           >
//             About Me
//           </Link>
//         </li>
//       </ul>
//     );
//   }
// }

// export default NavbarMenuButttons;
