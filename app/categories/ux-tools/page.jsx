"use client";
import Cards from "@components/cards/Cards";
import { useState } from "react";
import {  usePathname } from 'next/navigation';

const page = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const pathname = usePathname();
    const splitPathname = pathname.split("/")[2];
    const formattedPathname = splitPathname
        .split("-")
        .map((word) => {
            if (word.toLowerCase() === "ux") {
            return word.toUpperCase();
            } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
            }
        })
        .join(" ");
    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    };
    return (    
        <div>
            <Cards selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} heading={formattedPathname} path={splitPathname}/>
        </div>
    )
}

export default page;