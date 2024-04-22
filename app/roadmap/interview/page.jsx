
import beforeTheInterview from "@public/assets/roadmaps/before-the-interview.svg"
import Image from "next/image"

const page = () => {
  return (
    <div className="flex justify-center ">
        <Image src={beforeTheInterview} className="max-sm:pt-14 max-sm:pb-14" alt="Before the Interview" />
    </div>
  )
}

export default page