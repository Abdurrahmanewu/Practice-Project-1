import SingleLogocard from "./AllLogo/SingleLogocard";

const CompaniesLogo = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a className="flex items-center lg:justify-center">
            <SingleLogocard name="AirBNB" viewBox="0 0 125 35"></SingleLogocard>
          </a>
          <a className="flex items-center lg:justify-center">
            <SingleLogocard name="Google" viewBox="0 0 86 29"></SingleLogocard>
          </a>
          <a className="flex items-center lg:justify-center">
            <SingleLogocard
              name="Microsoft"
              viewBox="0 0 151 34"
            ></SingleLogocard>
          </a>
          <a className="flex items-center lg:justify-center">
            <SingleLogocard
              name="Spotify"
              viewBox="0 0 124 38"
            ></SingleLogocard>
          </a>
          <a className="flex items-center lg:justify-center">
            <SingleLogocard
              name="Mailchim"
              viewBox="0 0 137 37"
            ></SingleLogocard>
          </a>
          <a className="flex items-center lg:justify-center">
            <SingleLogocard
              name="Mashable"
              viewBox="0 0 124 21"
            ></SingleLogocard>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompaniesLogo;
