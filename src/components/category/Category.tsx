import Image from "next/image"
import CategoryButton from "./CategoryButton"

function Category() {
  return (
      <div className="flex flex-col gap-2 ">

        <div className="font-bold text-lg text-gray-800">
          <h1>Select Category</h1>
        </div>

        <div className="flex justify-center items-center relative">
          <div className="cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -left-4">
            <Image src="/left_arrow.svg" alt="to-left icon" width={10} height={10}/>
          </div>

          <div className="flex gap-2 overflow-x-auto overflow-hidden">
            <CategoryButton name='All' imgUrl='' isSelected={true}/>
            <CategoryButton name='Tanghalian' imgUrl='/small_icon_tanghalian.png' isSelected={false}/>
            <CategoryButton name='Hapunan' imgUrl='/small_icon_tanghalian.png' isSelected={false}/>
            <CategoryButton name='Gabihan' imgUrl='/small_icon_tanghalian.png' isSelected={false}/>
            <CategoryButton name='Snacks' imgUrl='/small_icon_tanghalian.png' isSelected={false}/>
            <CategoryButton name='Poison' imgUrl='/small_icon_tanghalian.png' isSelected={false}/>
          </div>

          <div className="cursor-pointer transform transition hover:scale-110 hover:duration-100 ease-in absolute -right-4">
            <Image src="/right_arrow.svg" alt="to-right icon" width={10} height={10}/>
          </div>
        </div>

      </div>
  )
}

export default Category