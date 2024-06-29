import Image from "next/image"

function SearchBar() {
  return (
    <div className="py-3 px-2 rounded-full flex items-center justify-between gap-2 bg-grayButton h-[55px] md:w-[500px] w-1/2">
      <Image src='/search_icon.svg' width={35} height={35} alt="search icon" className="hidden sm:block"/>

      <input type="text" placeholder="Search Here" className="bg-transparent outline-none text-gray-500 border-b-2 w-full ml-2 sm:ml-0"/>

      <button className="bg-white py-2 px-6 rounded-3xl font-semibold text-gray-500 transition hover:bg-maroon hover:text-white duration-150 ease-in-out md:w-[100px] ">
        Search
      </button>
    </div>
  )
}

export default SearchBar