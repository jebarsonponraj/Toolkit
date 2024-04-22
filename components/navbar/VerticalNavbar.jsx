import Image from "next/image"

import homeIcon from "@public/assets/navIcons/home-icon.svg"
import categoriesIcon from "@public/assets/navIcons/category-icon.svg"
import roadmapIcon from "@public/assets/navIcons/roadmap-icon.svg"
import couponIcon from "@public/assets/navIcons/coupons-icon.svg"
import aboutIcon from "@public/assets/navIcons/about-icon.svg"


const VerticalNavbar = () => {
  return (
    <div className="navIcons-container ml-16 flex flex-col gap-10 w-18 p-[14px] border-2  rounded-full  bg-[#02001E]/90 border-gray-700   drop-shadow-2xl fixed mt-32">
        <Image src={homeIcon} className='w-6 h-6 mt-2'/>
        <Image src={categoriesIcon} className='w-6 h-6'/>
        <Image src={roadmapIcon} className='w-6 h-6'/>
        <Image src={couponIcon} className='w-6 h-6'/>
        <Image src={aboutIcon} className='w-6 h-6 mb-2'/>
    </div>
  )
}

export default VerticalNavbar;