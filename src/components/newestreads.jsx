import { story1, story2, story3 } from '../assets/Images'

const newestreads = () => {
  return (
    <>
      <h1 className="pt-12 pb-4 text-md sm:text-lg md:text-xl w-auto sm:w-full px-8">
        Newest Reads
      </h1>
      <section
        id="NewestReads"
        className="relative flex flex-col sm:flex-row sm:items-stretch sm:justify-between"
      >
        {/* First story */}
        <div className="flex-1 border rounded-sm border-gray-500 border-opacity-50 flex flex-col mx-4 my-4">
          <img src={story1} className="w-full" />
          <div className="p-4 flex-1">
            <h1 className="text-gray-600 text-sm sm:text-base md:text-lg">
              10 January 2025
            </h1>
            <p className="py-4 font-bold font-serif text-gray-800 text-base sm:text-lg md:text-xl">
              France seeks to protect Russia&apos;s Morozov collection from seizure as masterpieces return home.
            </p>
          </div>
          <button className="self-end text-orange-500 p-4 pt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:text-orange-600">
            Read More →
          </button>
        </div>

        {/* Second story */}
        <div className="flex-1 border rounded-sm border-gray-500 border-opacity-50 flex flex-col mx-4 my-4">
          <img src={story2} className="w-full" />
          <div className="p-4 flex-1">
            <h1 className="text-gray-600 text-sm sm:text-base md:text-lg">
              19 April 2025
            </h1>
            <p className="py-4 font-bold font-serif text-gray-800 text-base sm:text-lg md:text-xl">
              Picasso&apos;s muse as sea creature-will it break $100m at Sotheby&apos;s New York sale?
            </p>
          </div>
          <button className="self-end text-orange-500 p-4 pt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:text-orange-600">
            Read More →
          </button>
        </div>

        {/* Third story */}
        <div className="flex-1 border rounded-sm border-gray-500 border-opacity-50 flex flex-col mx-4 my-4">
          <img src={story3} className="w-full" />
          <div className="p-4 flex-1">
            <h1 className="text-gray-600 text-sm sm:text-base md:text-lg">
              30 October 2025
            </h1>
            <p className="py-4 font-bold font-serif text-gray-800 text-base sm:text-lg md:text-xl">
              Picasso&apos;s muse as sea creature-will it break $100m at Sotheby&apos;s New York sale?
            </p>
          </div>
          <button className="self-end text-orange-500 p-4 pt-0 transition duration-300 ease-in-out transform hover:scale-105 hover:text-orange-600">
            Read More →
          </button>
        </div>
      </section>
    </>
  )
}

export default newestreads
