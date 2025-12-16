import React from "react";
import AllIcons from "./AllIcons/AllIcons";

const StateCard = ({ icon,className, title, description }) => {
  return (
    <div>
      <AllIcons name={icon} className={className} />
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>

      <p className="font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default StateCard;
