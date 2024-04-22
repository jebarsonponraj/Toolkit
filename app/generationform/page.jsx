"use client";

import React, { useState } from "react";
import { supabase } from "@utils/supabase";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);

    const fetchImageNames = async () => {
        try {
            setIsLoading(true);

            // Fetch image URLs from Supabase storage
            const { data: images, error } = await supabase.storage
                .from("dev")
                .list("", { limit: 383 });

            console.log("Images:", images); // Log the entire images object

            if (error) {
                throw new Error("Failed to fetch image URLs from Supabase.");
            }

            // Create an array of objects with image names and their screenshot URLs
            const imagesData = images.map((image) => {
                return {
                    name: image.name,
                    screenshotUrl: supabase.storage
                        .from("screenshots")
                        .getPublicUrl(image.name).data.publicUrl,
                };
            });

            console.log("Images Data:", imagesData); // Log the array of image names and screenshot URLs

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error("Failed to fetch and log image names:", error);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className="bg-violet-400 text-[#02001E] focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 mt-28 text-center"
                onClick={fetchImageNames} // Call the fetchImageNames function on button click
                disabled={isLoading} // Disable the button while fetching is in progress
            >
                {isLoading ? "Fetching..." : "Fetch and Log Image Names"}
            </button>
        </div>
    );
};

export default page;
