import { FaLandmark, FaWarehouse } from "react-icons/fa";
import { GiNuclearPlant } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { MdSevereCold } from "react-icons/md";
import { PiThermometerColdFill } from "react-icons/pi";
const Features = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/pyMG4TG/factory.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto p-4 my-6 space-y-2 text-center heading_title">
              <h2
                className="text-6xl font-bold "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Features
              </h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <FaLandmark className="text-4xl sm:text-6xl"></FaLandmark>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  ></path>
                </svg> */}
                <h3 className="my-3 text-3xl font-semibold">
                  Industrial Land for Development
                </h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Expansive tract of industrial land suitable for development
                    into factories or warehouses.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <MdSevereCold className="text-4xl sm:text-6xl" />
                <h3 className="my-3 text-3xl font-semibold">
                  High-capacity Cold Storage Facility
                </h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Specialized cold storage facility with high-capacity
                    refrigeration units.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <ImPower className="text-4xl sm:text-6xl" />
                <h3 className="my-3 text-3xl font-semibold">
                  Power Plant Facility
                </h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Large-scale power generation facility capable of supplying
                    electricity to a city.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <GiNuclearPlant className="text-4xl sm:text-6xl" />
                <h3 className="my-3 text-3xl font-semibold">
                  Production Plant
                </h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Modern production facility equipped for large-scale
                    manufacturing.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <PiThermometerColdFill className="text-4xl sm:text-6xl" />
                <h3 className="my-3 text-3xl font-semibold">
                  Cold Storage Facility
                </h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Temperature-controlled facility suitable for storing
                    perishable goods.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <FaWarehouse className="text-4xl sm:text-6xl" />
                <h3 className="my-3 text-3xl font-semibold">
                  Warehouse Facility
                </h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Spacious warehouse suitable for storage and distribution
                    purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
