// import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Pics from "../../assets/logo3.png";
import { jobDatas } from "../../interface/index";

//For all the jobs, w are using high order arrya method called Map...
//In this case we shall list all the jobs into an arrya called Data.
const Data: jobDatas[] = [
  {
    id: 1,
    image: Pics,
    title1: "Web Development",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quasi!",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: Pics,
    title1: "Software Engineer",
    time: "Now",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quasi!",
    company: "Liquid Accessories",
  },
  {
    id: 2,
    image: Pics,
    title1: "UI Designer",
    time: "10hrs",
    location: "Manchester",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quasi!",
    company: "Novac Linus Co.",
  },
];

const JobDiv = () => {
  return (
    <div>
      <div className="jobContainer flex justify-center items-center gap-5 py-8 ">
        {Data.map(({ id, image, title1, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className=" group group/item singlejob w-[250px] p-[16px] bg-white rounded-[10px] hover:bg-orange-400 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg group-hover:text-white"
            >
              {/* span starts here */}
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title1}
                </h1>
                <span className="flex items-center gap-1 text-[#ccc]">
                  <BiTimeFive />
                  {time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] border-t-[3px] pt-[20px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              {/* Bringing an image in  */}
              <div className="company flex items-center gap-2 ">
                <img src={image} alt="Comapany Logo" className="w-[15%]" />
                <span className="text-[14px] py-1 block group-hover:text-white">
                  {company}
                </span>
              </div>

              {/* inserting a button */}
              <button
                className="p-[10px] w-full block border-[2px] text-textColor text-[14px] hover:bg-white  hover:text-orange-500 rounded-[5px]
          hover:border-none mt-[10px] "
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobDiv;
