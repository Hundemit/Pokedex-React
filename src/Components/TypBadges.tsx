import React, { Component } from "react";

type TypBadgesProps = {
  text: any;
  type: any;
};

class TypBadges extends Component<TypBadgesProps> {
  // Array defining different types along with their associated CSS classes.
  type = [
    {
      label: "normal",
      css: "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
    },
    {
      label: "fire",
      css: "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    },
    {
      label: "water",
      css: "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    },
    {
      label: "electric",
      css: "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      label: "grass",
      css: "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      label: "flying",
      css: "bg-blue-50 text-blue-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-200",
    },
    {
      label: "bug",
      css: "bg-green-50 text-green-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-700 dark:text-green-200",
    },
    {
      label: "poison",
      css: "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
    },
    {
      label: "rock",
      css: "bg-yellow-50 text-yellow-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-800 dark:text-yellow-100",
    },
    {
      label: "ground",
      css: "bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300",
    },
    {
      label: "dark",
      css: "bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300",
    },
    {
      label: "fighting",
      css: "bg-orange-300 text-orange-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-800 dark:text-orange-400",
    },

    {
      label: "ice",
      css: "bg-indigo-50 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
    },
    {
      label: "psychic",
      css: "bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-700 dark:text-pink-300",
    },
    {
      label: "ghost",
      css: "bg-violet-100 text-violet-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-violet-700 dark:text-violet-300",
    },
    {
      label: "dragon",
      css: "bg-blue-800 text-blue-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-300",
    },
  ];

  // Method to handle and return the CSS class string based on propType.
  handleType = (propType: any): String => {
    // Find the corresponding type object from the 'type' array and return its css.
    const typeObject = this.type.find((t) => t.label === propType);
    return typeObject ? typeObject.css : "";
  };

  // Render method to render the component.

  render() {
    return (
      // Set the className dynamically using handleType method and render the text prop.
      <span className={"text-xs font-medium px-2.5 py-0.5 " + this.handleType(this.props.type)}>
        {this.props.text}
      </span>
    );
  }
}

export default TypBadges;
