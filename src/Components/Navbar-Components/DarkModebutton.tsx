import React, { Component } from "react";

class DarkModeButton extends Component {
  state = { isDarkMode: false };

  sunSVG = (
    <svg
      className="w-[23px] h-[23px] text-gray-900 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );

  moonSVG = (
    <svg
      className="w-[23px] h-[23px] text-gray-600 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
      />
    </svg>
  );

  toggleDarkMode = () => {
    if (!this.state.isDarkMode) {
      document.body.classList.add("dark"); // Flowbite verwendet die Klasse `dark` für den Dark Mode
    } else {
      document.body.classList.remove("dark");
    }
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    return (
      <button
        onClick={this.toggleDarkMode}
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none hover:focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>

        {this.state.isDarkMode ? this.sunSVG : this.moonSVG}
      </button>
    );
  }
}

export default DarkModeButton;
