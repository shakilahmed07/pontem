import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import tow from "../assets/tow.svg";
import spon1 from "../assets/spon1.svg";
import spon2 from "../assets/spon2.svg";
import spon3 from "../assets/spon3.svg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaChartArea } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import mart from "../assets/mart.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Modal from "../elements/Modal";

const Input = ({ title, createState }) => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });
  };
  return (
    <div className="grid grid-cols-1 justify-items-center ">
      <p className=" text-[11px] text-[#E5E4FA] mt-5 mb-10  flex items-center">
        <img src={tow} alt="" className="mx-2 w-5" /> DEVELOPED BY PONTEM
        NETWORK
      </p>
      <div className="bg-[#16162d]  p-4 rounded-2xl lg:w-[32rem] w-[20rem]">
        <div className="flex justify-between items-center text-white my-2 mx-4">
          <p className="text-lg font-[700] text-white">{title}</p>
          <FiSettings className="text-lg" />
        </div>
        <div className="relative">
          <input
            className="bg-[#31314e] w-full p-4 rounded-2xl text-3xl my-1 text-white outline-0"
            placeholder="0.0"
          />
          <button className="absolute flex items-center top-4 text-white bg-[#1C1C33] text-sm p-2 rounded-xl right-5">
            <img src={mart} className="w-6" alt="" />
            <span className="mx-2">APT</span>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="relative">
          <input
            className="bg-[#31314e] w-full p-4 rounded-2xl text-3xl my-1 text-white outline-0"
            placeholder="0.0"
          />
          <button className="absolute flex items-center top-4 text-white bg-[#6E42CA] text-sm p-2 rounded-xl right-5">
            <span className="mx-2">Select Coin</span>
            <MdKeyboardArrowDown />
          </button>
        </div>
        {createState && (
          <div className="bg-[#31314e] w-full p-2 rounded-2xl flex text-white justify-around bg my-1">
            {[
              { name: "Unconfirmed", id: 1, icon: <FaChartArea /> },
              { name: "Stable", id: 2, icon: <FiTriangle /> },
            ].map((item) => (
              <p
                onClick={() => clickHandler(item.id)}
                className={
                  item.id === active
                    ? "cursor-pointer px-4 w-full py-2 text-lg rounded-3xl font-[700] bg-[#4A495E] flex items-center justify-center"
                    : "cursor-pointer px-4 w-full py-2 text-lg rounded-3xl  font-[700]  flex items-center justify-center"
                }
              >
                {item.icon}
                <p className="mx-3">{item.name}</p>
                <AiOutlineInfoCircle />
              </p>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="bg-[#6e42ca] w-full px-5 py-4 rounded-2xl shadhow-xl text-white font-[700] mb-1 mt-2 hover:text-black transition duration-300 ease-in-out outline-0"
        >
          Connect Wallet
        </button>
        <Modal open={open} setOpen={setOpen} />
      </div>
      <p className="text-[white] text-[12px] my-10">AUDITED BY</p>
      <div className="grid grid-cols-2 gap-y-4 lg:grid-cols-3 ">
        <div>
          <img src={spon1} alt="" className="mx-5 " />
          <br />
          <p className="text-[gray] text-[12px] text-center">View report</p>
        </div>
        <div>
          <img src={spon2} alt="" className="mx-5 mb-3" />
          <br />
          <p className="text-[gray] text-[12px] text-center">View report</p>
        </div>
        <div>
          <img src={spon3} alt="" className="mx-5" />
          <br />
          <p className="text-[gray] text-[12px] text-center">View report</p>
        </div>
      </div>
    </div>
  );
};

export default Input;
