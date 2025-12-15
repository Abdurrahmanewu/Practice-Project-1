import React from "react";
import AirBNB from "./AllLogo/AirBNB";
import Google from "./AllLogo/Google";
import Microsoft from "./AllLogo/Microsoft";
import Spotify from "./AllLogo/Spotify";
import Mailchimp from "./AllLogo/Mailchimp";
import Mashable from "./AllLogo/Mashable";

const CompaniesLogo = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a className="flex items-center lg:justify-center">
            <AirBNB className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a className="flex items-center lg:justify-center">
            <Google className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a className="flex items-center lg:justify-center">
            <Mailchimp className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a className="flex items-center lg:justify-center">
            <Microsoft className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a className="flex items-center lg:justify-center">
            <Spotify className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>

          <a className="flex items-center lg:justify-center">
            <Mashable className="h-9 hover:text-gray-900 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompaniesLogo;
