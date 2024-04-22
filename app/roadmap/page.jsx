import Link from "next/link";

const page = () => {
  return (
 
      <div className="text-center pt-24">
        <h1 className='text-3xl lg:text-4xl  text-violet-300 font-semibold pb-2'>Roadmaps 🚀</h1>
<div className="pt-7 grid gap-4 justify-center lg:grid-cols-4 lg:px-14">
<Link href="/roadmap/interview">
  <button className=" border-[#DCB7FB] bg-white/20 border-[1px] w-72 py-2 rounded-lg cursor-pointer  shadow-lg shadow-[#DCB7FB]/25 text-white text-base ">
    Before the Interview
  </button>
</Link>

  <button className=" border-[#DCB7FB] bg-white/20 border-[1px] w-72 py-2 rounded-lg cursor-pointer  shadow-lg shadow-[#DCB7FB]/25 text-white text-base ">
    Front-end Dev
  </button>

  <button className=" border-[#DCB7FB] bg-white/20 border-[1px] w-72 py-2 rounded-lg cursor-pointer  shadow-lg shadow-[#DCB7FB]/25 text-white text-base ">
    UI/UX Design
  </button>
  <button className=" border-[#DCB7FB] bg-white/20 border-[1px] w-72 py-2 rounded-lg cursor-pointer  shadow-lg shadow-[#DCB7FB]/25 text-white text-base ">
    Coming soon...
  </button>
  
</div>


       
      </div>
   
  );
};

export default page;
