"use client";

import { useState, useEffect } from "react";
import { supabase } from "@utils/supabase";
import CardImage from "next/image";
import linkIcon from "@public/assets/linkicon.svg";
import SkeletonCard from "@components/SkeletonCard/SkeletonCard";
import { useRouter } from "next/navigation";

const Cards = ({ selectedCategory, handleCategoryClick, heading, path }) => {
  const [fetchError, setFetchError] = useState(null);
  const [designDataState, setDesignDataState] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchDesignData = async () => {
      const { data, error } = await supabase.from("alltools").select()
      .eq("category", `${heading}`);
      console.log("data", data)
      if (error) {
        setFetchError("Could not fetch Design data");
        setDesignDataState([]);
        console.log(error);
      }
      if (data) {
        setDesignDataState(data);
        setFetchError(null);
      }
    };

    const fetchSubCategories = async () => {
      const { data, error } = await supabase
        .from("alltools")
        .select("subCategory")
        .eq("category", `${heading}`);
        
      if (error) {
        console.error("Error fetching sub-categories:", error);
      } else {
        const uniqueSubCategories = [
          ...new Set(data.map((item) => item.subCategory)),
        ];
        console.log("unique Categories:", uniqueSubCategories);
        setSubCategories(uniqueSubCategories);
      }
    };

    fetchSubCategories();

    fetchDesignData();
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncated = words.slice(0, 5).join(" ");
    return `${truncated} ${words.length > 5 ? "more..." : ""}`;
  };

  const filteredDesignData = selectedCategory
    ? designDataState.filter((data) => data.subCategory === selectedCategory)
    : designDataState;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex   flex-col justify-center items-center gap-5 pb-28">
        <h1 className="text-gray-50 text-4xl font-semibold pt-20">{heading}</h1>

        <div
          className={`sticky  top-16 w-full z-50 p-3  ${
            isScrolled ? "bg-[#02001E]/70 backdrop-blur-md shadow-lg" : ""
          }`}
        >
          <div className=" tags px-4  overflow-y-scroll overflow-x-scroll whitespace-nowrap   text-[#1D1139] flex justify-self-center  gap-3  pr-5 ">

<div className="flex gap-2 lg:ml-32 md:ml-52 sm:ml-96">
{subCategories.map((subCategory, index) => (
  <button
    key={subCategory}
    className={`px-4 gap-2 py-1 text-center rounded-full outline-none w-auto ${
      selectedCategory === subCategory
        ? "bg-violet-300 text-[#02001E]"
        : "bg-[#CFC3FB]/20 text-[#CFC3FB]"
    } ${index === 0 ? "md:ml-4" : ""}`} // Add md:ml-4 class for medium screens and larger
    onClick={() => handleCategoryClick(subCategory)}
  >
    {subCategory}
  </button>
))}
</div>



          </div>
        </div>

        {fetchError && <p className="text-red-500">{fetchError}</p>}
        {designDataState.length === 0 && !fetchError && (
          <div className="cards-container text-gray-50 flex flex-wrap justify-center items-center gap-5 px-3 cursor-pointer">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {filteredDesignData.length > 0 && (
          <div className="cards-container text-gray-50 mx-4 flex flex-wrap justify-center items-center gap-8 cursor-pointer">
            {filteredDesignData.map((data) => (
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
                <div className="relative  overflow-hidden  bg-cover bg-no-repeat rounded-xl border-2 border-gray-800  h-[18rem]">
                  <CardImage
                    src={data.imageUrl}
                    alt={data.name}
                    width={450}
                    height={450}
                    className="object-cover  h-[18rem] w-[23.5rem] transition duration-300 ease-in-out hover:scale-110 rounded-xl p-1 "
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
                      <CardImage className=" " src={linkIcon} />
                    </div>

                    <p className="text-base text-justify mx-3 -mt-1 text-[#f5f5f5]/70">
                      {truncateDescription(data.description)}
                    </p>
                  </div>
                  </div>
                </div>

                <div></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
