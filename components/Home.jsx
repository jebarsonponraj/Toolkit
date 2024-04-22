"use client";

import Image from "next/image";
import linkIcon from "@public/assets/linkicon.svg";
import SkeletonCard from "@components/SkeletonCard/SkeletonCard";
import { useState, useEffect } from "react";
import { supabase } from "@utils/supabase";


const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [designData, setDesignData] = useState(null);

  useEffect(() => {
    const fetchDesignData = async () => {
      const { data, error } = await supabase
        .from("alltools")
        .select()
        .order("isAdded", { ascending: false })
        .limit(9);
      if (error) {
        setFetchError("Could not fetch Design data");
        setDesignData(null);
        console.log(error);
      }
      if (data) {
        setDesignData(data);
        console.log(data);
        setFetchError(null);
      }
    };
    fetchDesignData();
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncated = words.slice(0, 5).join(" ");
    return `${truncated} ${words.length > 5 ? "& more" : ""}`;
  };

  return (
    <div>
      <div>
        <h1
          className=" pt-24 pb-10 px-[3px]
          
                        text-white
                        font-bold
                        lg:text-5xl
                       text-3xl
                       text-center
                    "
        >
          An Essential <span className="text-violet-300">Toolkit</span> for{" "}
          <br />
          Designers 🎨 and Developers👨🏻‍💻
        </h1>
      </div>

      <section className="   gap-7   pb-32">
        <div className="  ">
          <p
            className="text-white
                        font-semibold
                        text-2xl
                        flex
                        justify-center
                       pb-7
                       
                      
                        
                       "
          >
            Recents 📌
          </p>

          <div className="flex-col justify-center items-center mx-7">
            <div className="flex justify-center ">
              {fetchError && <p className="text-red-500">{fetchError}</p>}

              {designData ? (
                <div className="cards-container text-gray-50 flex flex-wrap justify-center items-center gap-8  ">
                  {designData.map((data) => (
                    <div
                      className="cards cursor-pointer flex flex-col gap-1 shadow "
                      
                      key={data.name}
                    >
                      {/* cards */}

                      <div
                        onMouseEnter={(e) => {
                          e.currentTarget.querySelector(
                            ".glassmorp"
                          ).style.opacity = 1;
                          e.currentTarget
                            .querySelector("img")
                            .classList.add("hover:scale-110");
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.querySelector(
                            ".glassmorp"
                          ).style.opacity = 0;
                          e.currentTarget
                            .querySelector("img")
                            .classList.remove("hover:scale-110");
                        }}
                      >
                        <div className="relative overflow-hidden  bg-cover bg-no-repeat rounded-xl border-2 border-gray-800  h-[18rem]">
                          <Image
                            src={data.imageUrl}
                            alt="Preview Image"
                            width={450}
                            height={450}
                            className="object-cover  h-[18rem] w-[23.5rem] transition duration-300 ease-in-out hover:scale-110 rounded-xl p-1 "
                          />


                          <div className="glassmorp -translate-y-16   w-full p-3 bg-gray-700 bg-opacity-30 backdrop-filter backdrop-blur-md   opacity-0 transition-opacity duration-300 ease-in-out"
                          onClick={() => window.open(data.url, "_blank")} 
                          >
                            <div className="flex-column mb-2 items-center">

                            <div className="flex justify-between mx-3 -mt-1">
                              <p className="font-medium  text-xl text-[#f5f5f5]">
                                {data.name}
                              </p>
                              <Image className="" src={linkIcon} />
                            </div>

                            <p className="text-base mx-3 -mt-1  text-justify  text-[#f5f5f5]/70">
                              {truncateDescription(data.description)}
                            </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Skeleton loading animation
                <div className="cards-container text-gray-50 flex flex-wrap justify-center items-center gap-5 px-3 cursor-pointer">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  {/* Add more skeleton cards as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <div className="flex gap-1">
        <p className="font-semibold text-xl text-[#f5f5f5]">{data.name}</p>
        <Image className="" src={linkIcon} />
        </div> 
        <p className="text-base text-[#f5f5f5]/70  ">{truncateDescription(data.description)}</p> */
}
