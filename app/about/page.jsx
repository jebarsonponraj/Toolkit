'use client';

import {useState, useEffect} from "react";
import Link from "next/link";


const page = () => {


  const [names, setNames] = useState(["Jebarson"]);
  const [currentNames, setCurrentNames] = useState(names);


  useEffect(() => {
    // Shuffle names on page load
    const shuffledNames = [...names];
    if (Math.random() < 0.5) {
      shuffledNames.reverse();
    }
    setCurrentNames(shuffledNames);
  }, []);


  return (
    <div className="">

<div className=" lg:mx-32 lg:pt-32  pt-20 px-2 ">
   
<div className=" px-5 pb-4 ">
     <h1 className="text-violet-300 lg:text-5xl text-4xl font-semibold leading-normal tracking-wide">
          About us
         </h1>
        <p className=" lg:text-xl text-white text-base ">
         We are dedicated to providing developers and designers with a treasure
         trove of free resources and tools. Together, let's build a future
          where creativity knows no bounds!"
        </p>
      </div>



         <div className=" px-5 pb-4">
        <h1 className="text-violet-300 lg:text-3xl text-2xl font-semibold leading-normal tracking-wide">
           Submit Resources
         </h1>
         <p className="  text-white text-base lg:text-xl mb-3">
          If you know any other tools, then just submit it and we will make sure to
      push it on the list.
     </p>

        <Link href="/submitform">
           <a className="text-white p-1.5 outline-dashed outline-2 rounded">click here →  </a>{" "}
        </Link>
        
       </div>



<section className="md:flex justify-between">
<div className=" px-5 pb-4">
         <h1 className="text-violet-300  text-xl font-semibold leading-normal tracking-wide">
           Other Products
         </h1>
         <div className="  text-white text-sm ">
           <a className="text-base" href="">
             Mybasket.bio{" "}
           </a>
           <span className="text-gray-500"> - upcoming</span>
           <p className="text-gray-500">
             Make online store in just a click of a button.
           </p>
         </div>

         <div className="  text-white text-sm pt-2">
           <a className="text-base" href="">
             Pagiefy{" "}
           </a>
           <span className="text-gray-500"> - upcoming</span>
           <h2 className="text-gray-500">
             Create a landing page in just a single prompt.{" "}
           </h2>
         </div>
       </div>



       <div className=" px-5 pb-4">
         <h1 className="text-violet-300  text-xl font-semibold leading-normal tracking-wide">
           The Product
         </h1>
         <p className="  text-white text-sm ">
           <a href="">FAQ</a>
         </p>
         <p className="  text-white text-sm pt-2 ">
           <a href="">Contact</a>
           <br />
     </p>
       </div>

       <div className=" px-5 pb-4">
         <h1 className="text-violet-300  text-xl font-semibold leading-normal tracking-wide">       Legal
         </h1>

<Link href="">
<p className="  text-white text-sm ">
           <a >Terms of Service</a>
         </p>
</Link>
         


         <p className="  text-white text-sm pt-2 ">
           <a href="">Privacy Policy</a>
           <br />
         </p>
       </div>
       <div className=" px-5 pb-4">
         <h1 className="text-violet-300  text-xl font-semibold leading-normal tracking-wide">
          Sponsor us
     </h1>
        <p className="  text-white text-sm ">
       <a href="">Buy me a coffee</a>
     </p>
   </div>


</section>

      
   <p className="px-5 text-violet-300 text-xs pb-24">
     © 2023. Made w/ 💜 by <a className=" underline"target="_blank" href={ "https://twitter.com/JebarsonPonraj"}>{currentNames[0]}</a>
   </p>

</div>
     </div>


    );


   
 
  
};

export default page;
