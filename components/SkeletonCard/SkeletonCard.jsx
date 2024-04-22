import CardImage from "next/image";
import linkIcon from "@public/assets/link.svg"
import Image from "next/image";
import FigmaSS from "@public/assets/FigmaSS.jpg";

import loadingIcon from "@public/assets/loadingIcon.svg";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card animate-pulse">
        <div
                className="cards flex flex-col gap-1 backdrop-blur-sm border-2 rounded-lg shadow bg-[#151C29]/25 border-gray-700 px-3 pt-3 h-[18rem] w-[20.5rem]">
                <div role="status" class="flex items-center justify-center h-36 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 mb-2">
                </div>
                <div className="flex gap-1">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
    </div>
  )
}

export default SkeletonCard