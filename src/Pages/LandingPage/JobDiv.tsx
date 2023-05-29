// import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Pics from "../../assets/logo3.png";
const JobDiv = () => {
  return (
    <div>
      <div className="jobContainer flex justify-center items-center gap-5 py-8 ">
        <div className=" group group/item singlejob w-[250px] p-[16px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          {/* span starts here */}
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
              Web Developer
            </h1>
            <span className="flex items-center gap-1 text-[#ccc]">
              <BiTimeFive />
              Now
            </span>
          </span>

          <h6 className="text-[#ccc]"> Canada</h6>
          <p className="text-[13px] text-[#959595] border-t-[3px] pt-[20px] mt-[20px] group-hover:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            harum ratione aliquam repellendus animi
          </p>

          {/* Bringing an image in  */}
          <div className="company flex items-center gap-2">
            <img src={Pics} alt="Comapany Logo" className="w-[15%]" />
            <span className="text-[14px]">Novac Linus Co.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDiv;
