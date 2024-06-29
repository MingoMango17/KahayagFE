import Category from '@/components/category/Category'
import FoodSelectionCard from '@/components/foodselectioncard/FoodSelectionCard'
import PromoBanner from '@/components/promobanner/PromoBanner'
import SearchBar from '@/components/searchbar/SearchBar'
import Cart from '@/components/cart/Cart'

const MenuPage = () => {
  return(
    <>
      <div className='flex gap-2 h-[250px] items-center justify-center overflow-x-hidden'>
        <div>
          <PromoBanner title='Special Offer!' name='Marinated Frog' desc='The only delicacy that is not poisonous or whatsoever' imgUrl='/frog.png'/>
        </div>
        <div className='hidden lg:block'>
          <PromoBanner title='Not a Special Offer!' name='Marinated Worm' desc='Once tasted always a drug addict muschroom si jake' imgUrl='/frog.png'/>
        </div>
      </div>

      <div className='px-10'>
        <Category/>
      </div>

      <div className='flex justify-between items-center mx-10 mt-7 pb-5 border-b-2'>
        <p className='font-bold text-lg text-gray-800'>Pick Your Order</p>
        <SearchBar/>
      </div>

      <div className='px-10 py-5 h-[400px] overflow-y-scroll flex gap-5 flex-wrap md:justify-start'>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
        <FoodSelectionCard name='Foodpanda' desc='lamian jud' price={100} imgUrl='/friend_chiken.png'/>
      </div>

      <div className='text-center'>
        @Order Now
      </div>
      
      <Cart itemsCount={20}/>
    </>
  )
}


export default MenuPage