import { Background } from "../assets/Images";
import Hamburger from "../assets/hamburger.svg";

const Hero = () => {
  return (
    <header className="relative flex flex-col justify-between items-center z-10 h-auto">
      {/* The navbar */}
      <div className="absolute top-0 flex w-full justify-between items-center">
        <span className="relative z-10 text-white py-2 px-2 text-l md:text-xl lg:text-2xl">
          ARTJUNKS
        </span>

        {/* Writing the navbar elements */}
        <ul className="hidden md:flex justify-between items-center">
          {["Home", "About", "Artists", "Careers", "News", "Company"].map((item) => (
            <li
              key={item}
              id={item}
              className="relative z-10 text-white mx-4 text-xs md:text-sm lg:text-l"
            >
              {item}
            </li>
          ))}
          {/* Get started button */}
                <button
                id="button"
                className="relative border-white border-[1.5px] rounded-[4px] z-10 text-white mx-4 px-[9px] text-xs md:text-sm lg:text-l transition transform hover:scale-105 active:scale-95 hover:bg-white hover:text-black duration-300"
                >
                Get Started
                </button>
              </ul>

              {/* The Hamburger icon */}
        <img
          src={Hamburger}
          alt="menu"
          className="block md:hidden mx-2 my-2 w-6 h-6 cursor-pointer relative z-10"
        />
      </div>

      {/* The hero background */}
      <img src={Background} className="w-full h-auto" alt="Background" />

      {/* Writing the hero section */}
      <section className="absolute max-w-full sm:max-w-sm md:max-w-md lg:max-w-md top-1/2 transform -translate-y-1/2 inset-x-0 flex flex-col items-center sm:items-start md:items-start z-10">
        <div className="hidden sm:block absolute top-[0%] mx-9 bg-white w-16 h-3"></div>
        <h1 className="text-white text-4xl px-8 pt-8 text-center sm:text-left md:text-left font-serif">
          Art pieces made easy accessible for everyone
        </h1>
        <h2 className="px-8 text-white py-6 text-center sm:text-left md:text-left font-serif">
          Learn, buy, and trade art pieces of your favorite artists around the world using cryptocurrency.
        </h2>

        <button className="text-white mx-8 px-6 border-2 border-white rounded-md hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 font-serif">
          Learn More
        </button>
      </section>
    </header>
  );
};

export default Hero;
