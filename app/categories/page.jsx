import Image from 'next/image'
import thunder from '@public/assets/categories/thunder.svg';
import colortool from '../../public/assets/categories/colortool.svg'
import designtool from '../../public/assets/categories/designtool.svg'
import inspiration from '../../public/assets/categories/Inspiration.svg'

import stockphoto from '../../public/assets/categories/stockphoto.svg'
import book from '../../public/assets/categories/book.svg'
import icon from '../../public/assets/categories/icon.svg'
import podcast from '../../public/assets/categories/podcast.svg'
import typo from '../../public/assets/categories/typo.svg'
import uxtool from '../../public/assets/categories/uxtool.svg'

import mockup from '../../public/assets/categories/mockup.svg'

import accessibility from '../../public/assets/categories/accessibility.svg'
import aitool from '../../public/assets/categories/aitool.svg'
import blog from '../../public/assets/categories/blog.svg'
import community from '../../public/assets/categories/community.svg'
import learning from '../../public/assets/categories/learning.svg'
import projecttool from '../../public/assets/categories/projecttool.svg'
import webbuilder from '../../public/assets/categories/webbuilder.svg'


import Link from 'next/link';



const page = () => {
  return (
    <div className='pt-24'>

    <div className='flex justify-center items-center flex-col gap-7 pb-32'>
        <h1 className='text-violet-300 font-semibold text-3xl -mt-3 mb-3'>Design Categories</h1>

        <div className="icons-container  flex flex-wrap justify-center gap-7 lg:px-32 ">
        <Link href='/categories/inspiration'>
        <div className='bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  w-40 h-32 flex flex-col justify-center items-center gap-1 transform
        transition duration-500 cursor-pointer hover:scale-110 hover:bg-gray-300/10 '>
            <Image src={inspiration} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Inspiration</p>
        </div>
        </Link>
        <Link href='/categories/illustrations'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={thunder} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Illustrations</p>
        </div>
        </Link>
        <Link href='/categories/icons'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={icon} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Icons</p>
        </div>
        </Link>
        
        
       
        <Link href='/categories/mockups-uikits'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={mockup} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Mockups + UI Kits</p>
        </div>
        </Link>


        <Link href='/categories/typography'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={typo} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Typography</p>
        </div>
        </Link>

        <Link href='/categories/stock-photos'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={stockphoto} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Stock Photos</p>
        </div>
        </Link>

        <Link href='/categories/learning'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={learning} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Learning</p>
        </div>
        </Link>

        <Link href='/categories/blogs'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={blog} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Blogs</p>
        </div>
        </Link>       

        <Link href='/categories/podcasts'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={podcast} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Podcasts</p>
        </div>
        </Link>

        <Link href='/categories/books'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={book} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Books</p>
        </div>
        </Link>

        <Link href='/categories/accessibility'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={accessibility} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Accessibility</p>
        </div>
        </Link>

        <Link href='/categories/community'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={community} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Community</p>
        </div>
        </Link>

        <Link href='/categories/design-tools'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={designtool} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Design Tools</p>
        </div>
        </Link>

        <Link href='/categories/ux-tools'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={uxtool} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>UX Tools</p>
        </div>
        </Link>

        <Link href='/categories/color-tools'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={colortool} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Color Tools</p>
        </div>
        </Link>

        <Link href='/categories/project-tools'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={projecttool} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Project Tools</p>
        </div>
        </Link>

        <Link href='/categories/ai-tools'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={aitool} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>AI Tools</p>
        </div>
        </Link>

        <Link href='/categories/website-builder'>
        <div className='bg-gray-400 transform cursor-pointer
        transition duration-500 hover:scale-110 hover:bg-gray-300/10  rounded-md bg-clip-padding back drop-filter backdrop-blur-sm bg-opacity-10 w-40 h-32 flex flex-col justify-center items-center gap-1'>
            <Image src={webbuilder} className='w-8 h-8'/>
            <p className='text-base font-semibold text-gray-100 pt-4'>Website Builder</p>
        </div>
        </Link>
     

       
       
       
        </div>
        </div>
        
    </div>
  )
}

export default page