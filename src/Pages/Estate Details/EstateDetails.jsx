const EstateDetails = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/7yTtrBF/power-plant.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            className="max-w-md"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 className="mb-5 text-5xl font-bold"> Gas Power Plant </h1>
            <p className="mb-5">
              The Gas Power Plant stood like a metallic fortress against the
              skyline, its towering smokestacks belching plumes of industrial
              might into the air. Rows of buildings stretched into the distance,
              a labyrinth of concrete and steel where the pulse of machinery
              reverberated through every inch of space. Within its walls, a
              symphony of activity unfolded.
            </p>
            <button className="btn_wave btn2 rounded-md">Get Started</button>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* details card */}
      <div className="hero min-h-screen bg-base-200 my-20">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <img
            src="https://i.ibb.co/pyMG4TG/factory.jpg"
            className="w-full h-full rounded-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div className="" data-aos="fade-left" data-aos-duration="1000">
            <h1 className="text-5xl font-bold">Factory Complex</h1>
            <p className="py-6 text-justify">
              The factory complex stood like a metallic fortress against the
              skyline, its towering smokestacks belching plumes of industrial
              might into the air. Rows of buildings stretched into the distance,
              a labyrinth of concrete and steel where the pulse of machinery
              reverberated through every inch of space. Within its walls, a
              symphony of activity unfolded. Conveyor belts hummed with
              ceaseless motion, transporting raw materials to be molded and
              shaped by the hands of automation. Workers clad in protective gear
              moved with precision, their tasks synchronized to the rhythm of
              the assembly line. Amidst the clang of metal and the hiss of
              steam, innovation took form. Engineers huddled over blueprints,
              their minds alight with the possibilities of progress.
              Technological marvels emerged from the depths of the factory
              floor, each one a testament to human ingenuity and the relentless
              pursuit of efficiency. Yet, beneath the veneer of productivity,
              shadows lingered. The air carried the scent of industry toll, a
              reminder of the sacrifices made in the name of progress. Workers
              toiled under harsh conditions, their faces etched with weariness
              as they labored to keep the wheels of commerce turning. Outside
              the confines of the complex, the landscape bore the scars of its
              presence. Rivers ran thick with pollutants, the land marred by the
              footprint of progress. Yet, amidst the bleakness, there remained a
              glimmer of hope—a belief that within these walls, solutions could
              be found, and a brighter future forged from the fires of industry.
            </p>
            <p className="absolute top-3 left-5 bg-red-500 opacity-60 w-[70px] text-center text-white cursor-pointer rounded-md"></p>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <p className=" font-semibold tracking-wide">
                  Area: 2000 sqt ft
                </p>
                <p>Rent</p>
                <p>Price: $ 5000 </p>
                <div className="flex justify-between"></div>
                <p>Location: City X, State Y</p>
              </div>
              <button type="button" className="btn_wave btn1 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateDetails;
