"use client";

import Image from "next/image";
import enterIcon from "@public/assets/entericon.svg";
import { supabase } from "@utils/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import linkIcon from "@public/assets/linkicon.svg";
import backArrow from "@public/assets/back_arrow.svg";

import SkeletonCard from "@components/SkeletonCard/SkeletonCard";

const page = () => {
  const router = useRouter();

  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("alltools")
        .select()
        .eq("isAdded", "TRUE");
      if (error) {
        setFetchError("Could not fetch Design data");
        setData(null);
        console.log(error);
      }
      if (data) {
        setData(data);
        console.log(data);
        setFetchError(null);
      }
    };
    fetchData();
  }, []);

  const handleBack = () => {
    router.back();
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncated = words.slice(0, 5).join(" ");
    return `${truncated} ${words.length > 5 ? "more..." : ""}`;
  };

  return (
    <div className="searchBar  pt-9 flex flex-col justify-center items-center gap-3 ">
      <div className="searchBar__container relative   w-full px-3 mt-7 ">
        <div className="lg:px-28 md:px-28 sm:px-24  ">
          <input
            className="w-full  p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-50 relative "
            placeholder="Search Resources"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button
          className="flex justify-center items-center gap-1 text-2xl font-semibold text-gray-50 text-left absolute left-3 -top-10 pb-3"
          onClick={handleBack}
        >
          <Image src={backArrow} />
          <p>Back</p>
        </button>
      </div>

      {fetchError && <p className="text-red-500">{fetchError}</p>}
      {data ? (
        <div className="cards-container text-gray-50 flex flex-wrap justify-center items-center gap-8 px-7 ">
          {data
            .filter((data) => {
              return (
                searchTerm.toLowerCase() === "" ||
                data.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
            })
            .map((data) => (
              <div
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector(".glassmorp").style.opacity = 1;
                  e.currentTarget
                    .querySelector("img")
                    .classList.add("hover:scale-110");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector(".glassmorp").style.opacity = 0;
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
                    className="object-cover h-[18rem] w-[23.5rem] transition duration-350 ease-in-out hover:scale-110 rounded-xl p-1 "
                  />
            
                  <div 
                  className="glassmorp -translate-y-16   w-full p-3 items-center justify-center  bg-gray-700 bg-opacity-30 backdrop-filter backdrop-blur-md   opacity-0 transition-opacity duration-300 ease-in-out"
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

                <div></div>
              </div>
            ))}
        </div>
      ) : (
        // Skeleton loading animation
        <div className="cards-container text-gray-50 flex flex-wrap justify-center items-center gap-5 px-3  pt-4 cursor-pointer">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
    </div>
  );
};

export default page;








