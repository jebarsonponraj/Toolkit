"use client";
import { supabase } from "@utils/supabase";
import { useState, useEffect } from "react";
import axios from "axios";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";

const categories = [
    {
        category: "Accessibility",
        subcategory: [
            "Accessibility Tools",
            "Hand-Off",
            "Guides & Articles",
            "Color Contrast Checker"
        ]
    },
    {
        category: "AI Tools",
        subcategory: [ "Art & Image Generators",
        "Design Conferences",
        "AI Design Tools",
        "AI Coding Assistants",
        "AI Copywriting & Content Creation"],
    },

    {
        category: "Blogs",
        subcategory: [
            "UX Blogs",
        "Version Control",
        "Design Blogs",
        "Best Company Blogs",
        "Designer News"
        ]
    },

    {
        category: "Books",
        subcategory: [ "Design Thinking Books",
        "User Experience Books",
        "User Behavior & Psychology",
        "Product Design Books"],
    },


    {
        category: "Color Tools",
        subcategory: [  "Color Combinations",
        "Color Apps",
        "Color Picker",
        "Gradient Inspiration"],
    },


    {
        category: "Community",
        subcategory: [ "Design Communities",
        "Networks & Jobs",
        "Design Conferences"],
    },


    {
        category: "Design Tools",
        subcategory: [ "Automation",
        "Shape & Pattern",
        "Design & Prototyping",
        "Motion & Animation Tools",
        "Hand-Off",
        "Vector Tools",
        "Brand Platforms",
        "Version Control",
        "Design System & Styleguide",
        "Photo & Image",
        "Presentation Tools",
        "Useful Helpers",
        "3D Design Tools",
        "Social Media Design Tools",
        "Screenshot Tools",
        "Video",
        "Image Optimization Tools",
        "Audio, Voice & Chat Design Tools",
        "Device Mockups"],
    },


    {
        category: "Icons",
        subcategory: [  "Pro Icons",
        "Open Source",
        "Animated Icons",
        "Icon Organizer"],
    },


    {
        category: "Illustrations ",
        subcategory: [ "3D Illustration Sets",
        "Open Source",
        "Avatars",
        "HQ Illustrations"],
    },


    {
        category: "Inspiration ",
        subcategory: [     "Web",
        "Graphic & Brand",
        "Portfolio",
        "Mobile",
        "UI",
        "Ecommerce & Ad",
        "Product & Startup",
        "Landing Page",
        "Photography",
        "Search & Organization",
        "Email",
        "SaaS",
        "Video",
        "Stock Photos"],
    },



    {
        category: "Learnings ",
        subcategory: ["Design Guides & Tips",
        "Best Practices",
        "Design Courses",
        "YouTube Channels"],
    },



    {
        category: "Mockups + UI Kits ",
        subcategory: [ "Product Mockups",
        "UI Freebies",
        "Sketch & XD",
        "Webflow Resources",
        "HQ Assets",
        "Device Mockups",
        "Popular UI Kits",
        "Figma Resources"],
    },



    {
        category: "Podcasts ",
        subcategory: [ "Design Podcasts",
        "UX Podcasts",
        "Product Design Podcasts"],
    },




    {
        category: "Project Tools ",
        subcategory: [  "Collaboration & Whiteboard Tools",
        "Project Management",
        "Video Communication & Screen Sharing",
        "Timezone Tools"],
    },



    {
        category: "Stock Photos ",
        subcategory: [  "User Images, Faces & Avatars",
        "Stock Photos",
        "HQ Stock Photos & Video",
        "Stock Videos"],
    },



    {
        category: "Typography ",
        subcategory: [    "Type & Experiments",
        "Inspiration",
        "Font Manager",
        "Pro Fonts",
        "Libraries",
        "Editor",
        "Type Scale Calculator",
        "Useful",
        "Type Finder"],
    },



    {
        category: "UX Tools ",
        subcategory: [   "UX Copy & Dummy Content",
        "Prototyping Tools",
        "User Testing & Research",
        "Flows & Charts",
        "User Images, Faces & Avatars",
        "Wireframing Tools"],
    },


    {
        category: "Website Builder ",
        subcategory: [    "Design Tool to Website",
        "No-Code App Builder",
        "Low Code Platforms",
        "No-Code Website Builder",
        "Portfolio Builder",
        "Hand-Off",
        "Screenshot Tools",
        "Notion to Website or App",
        "AI Coding Assistants",
        "UI Freebies"],
    },





];

const screenshotOptions = {
    method: "GET",
    url: "https://screenshot-url-to-image.p.rapidapi.com/screenshot",
    params: {
        width: "1920",
        height: "1080",
        fullscreen: "false",
    },
    headers: {
        "X-RapidAPI-Key": "ae7775a44cmsh8abf12f2e177c9ap161b2fjsn029c90da0568",
        "X-RapidAPI-Host": "screenshot-url-to-image.p.rapidapi.com",
    },
};

const descriptionOptions = {
    method: "GET",
    url: "https://og-link-preview.p.rapidapi.com/",
    params: {},
    headers: {
        "X-RapidAPI-Key": "1b6561259bmshc8128d8aca74397p10107ejsna1a6bb349b29",
        "X-RapidAPI-Host": "og-link-preview.p.rapidapi.com",
    },
};

const Page = () => {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);


    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const closeFailModal = () => {
      setShowFailModal(false);
  };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubCategory("");
    };

    const captureScreenshot = async (websiteUrl) => {
        screenshotOptions.params.url = websiteUrl;
        const response = await axios.request(screenshotOptions);
        const screenshotUrl = response.data.screenshotUrl;
        return screenshotUrl;
    };

    const fetchDescription = async (websiteUrl) => {
        descriptionOptions.params.url = websiteUrl;
        const response = await axios.request(descriptionOptions);
        const { data } = response;
        const websiteDescription = data.description;
        console.log(data);
        return websiteDescription;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("https://formsubmit.co/pingtogracix@gmail.com", {
          name,
          email,
          url,
          category,
          subCategory,
      });

        if (submitting) {
            return;
        }

        try {
            setSubmitting(true);
            const websiteUrl = url.trim();



            // Check if the URL already exists in the database
            const { data: existingData, error: existingError } = await supabase
                .from("alltools")
                .select("url")
                .eq("url", websiteUrl);

            if (existingError) {
                throw new Error("Failed to check existing URL");
            }

            if (existingData && existingData.length > 0) {
                // URL already exists, show an alert
                alert("Resource already exists.");
                return;
            }

            // URL does not exist, continue with adding the resource
            const screenshotUrl = await captureScreenshot(websiteUrl);
            const websiteDescription = await fetchDescription(websiteUrl);

            const { data } = await supabase.from("alltools").insert({
                url: websiteUrl,
                imageUrl: screenshotUrl,
                description: websiteDescription,
                category: category,
                subCategory: subCategory,
                name: name,
            });

            console.log("Supabase entry created successfully:", data);
            setShowConfetti(true);
            setUrl("");
            setDescription("");
            setImageUrl("");
            setCategory("");
            setSubCategory("");
            setName("");
            setEmail("");

            setSubmitting(false);
            {
              setShowSuccessModal(true);
            }
        } catch (error) {
            setSubmitting(false);
            setShowFailModal(true);
            console.error("Failed to create Supabase entry:", error);
        }
    };

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 12000);

            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    const { width, height } = useWindowSize();

    return (
        <div className="pt-24">
            <div className="lg:mx-20 px-8 lg:pb-7 pt-10 pb-32">
                <h1 className="text-violet-300 text-2xl font-semibold text-center">
                    Submit Resources
                </h1>

                <form
                    className="lg:mx-80 lg:py-20 lg:pt-6 pt-7"
                    onSubmit={handleSubmit}
                >
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            className="w-full px-3 py-2 border-2 text-[#f5f5f5] border-[#f5f5f5]/20 bg-[#151C29]/30 rounded-md focus:outline-none focus:border-[#C4B5FD]"
                            placeholder=" Email Id "
                            required
                            name={email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border-2 text-[#f5f5f5] border-[#f5f5f5]/20 bg-[#151C29]/30 rounded-md focus:outline-none focus:border-[#C4B5FD]"
                            placeholder="Resource Name"
                            required
                            name={name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="url"
                            className="w-full px-3 py-2 border-2 text-[#f5f5f5] border-[#f5f5f5]/20 bg-[#151C29]/30 rounded-md focus:outline-none focus:border-[#C4B5FD]"
                            placeholder="Url"
                            required
                            name={url}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full px-3 py-2 border-2 text-[#f5f5f5] border-[#f5f5f5]/20 bg-[#151C29]/30 rounded-md focus:outline-none focus:border-[#C4B5FD]"
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat.category} value={cat.category}>
                                    {cat.category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <select
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                            className="w-full px-3 py-2 border-2 text-[#f5f5f5] border-[#f5f5f5]/20 bg-[#151C29]/30 rounded-md focus:outline-none focus:border-[#C4B5FD]"
                            required
                            disabled={!category}
                        >
                            <option value="">Select Subcategory</option>
                            {categories
                                .find((cat) => cat.category === category)
                                ?.subcategory.map((sub) => (
                                    <option key={sub} value={sub}>
                                        {sub}
                                    </option>
                                ))}
                        </select>
                    </div>
                    {/* <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 border-2 text-[#f5f5f5] border-[#f5f5f5]/20 bg-[#151C29]/30 rounded-md focus:outline-none focus:border-[#C4B5FD]"
              placeholder=' Description (50 letters)'
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={50}
              required
            />
          </div> */}
                    <div className="flex justify-center pt-3">
                        <button
                            type="submit"
                            className="bg-violet-400 text-[#02001E] focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
                            disabled={submitting} // Disable the button when submitting is true
                        >
                            {submitting ? "Submitting..." : "Submit 🚀"}
                        </button>
                    </div>
                </form>
            </div>
            {showConfetti && <Confetti width={width} height={height} />}
            <SuccessModal show={showSuccessModal} onClose={closeSuccessModal} />
            <FailModal show={showFailModal} onClose={closeFailModal} />
        </div>
    );
};

export default Page;
