import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiSuspensionBridge } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import {
  BsThreeDots,
  BsCodeSquare,
  BsDiscord,
  BsTelegram,
} from "react-icons/bs";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Modal from "../elements/Modal";

const components = [
  { name: "Swap", href: "/", status: true, icon: false },
  { name: "Pools", href: "/add-liquidity", status: false, icon: false },
  { name: "Create Pool", href: "/create-pool", status: false, icon: false },
  { name: "Redeem LP", href: "/", status: false, icon: false },
  { name: "Bridge", href: "/add-liquidity", status: false, icon: true },
  { name: "Stats", href: "/create-pool", status: false, icon: false },
];

const options = [
  { name: "Learn more", icon: <AiOutlineInfoCircle /> },
  { name: "Onboarding", icon: <BsCodeSquare /> },
  { name: "Docs Testnet", icon: <SiReadthedocs /> },
  { name: "Discord", icon: <BsDiscord /> },
  { name: "Feedback for partners", icon: <MdOutlineDynamicFeed /> },
  { name: "Telegram Community", icon: <BsTelegram /> },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openPageNav, setOpenMenuNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Swap");

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex text-white items-center font-[700]">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="bg-[#1C1C33] py-2 ml-1 px-3 rounded-3xl shadhow-xl  lg:flex items-center hidden ">
            <AiOutlineInfoCircle className="text-white px-1 text-2xl bg-[#1C1C33] rounded-3xl shadhow-xl" />
            <p>Learn More</p>
          </div>
          <div className="cursor-pointer relative lg:hidden z-10">
            <p
              onClick={() => setOpenMenuNav((prevstate) => !prevstate)}
              className="text-white text-sm bg-[#1C1C33] py-2 px-5 rounded-3xl mx-2 shadhow-xl"
            >
              {current}{" "}
            </p>
            {openPageNav && (
              <div className="text-white absolute left-0 top-14 p-4 rounded-3xl bg-[#16162d] w-52">
                {components.map((item, index) => (
                  <NavLink
                    to={item.href}
                    key={index}
                    onClick={() => {
                      setOpenMenuNav((prevstate) => !prevstate);
                      setCurrent(item.name);
                    }}
                  >
                    <p className="flex items-center py-2 font-[700] text-[#FFFFFFDE] hover:text-white">
                      {item.name}
                    </p>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex text-white items-center font-[700] bg-[#1C1C33] p-1 rounded-3xl">
            {components.map((item, index) => (
              <NavLink
                to={item.href}
                key={index}
                className={
                  item.status
                    ? "px-4 py-2 bg-[#4A495E] font-[500] text-sm rounded-3xl flex"
                    : "px-4 flex font-[500] items-center "
                }
              >
                {item.icon ? (
                  <GiSuspensionBridge className="mr-3 text-2xl" />
                ) : (
                  ""
                )}
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <IoIosNotifications className="text-white text-[37px] bg-[#1C1C33] p-2 rounded-3xl shadhow-xl" />
          <button
            className="bg-[#6e42ca] px-3 py-2 lg:rounded-2xl rounded-3xl  shadhow-xl lg:text-[15px] text-[12px] text-white font-[500] mx-3 hover:text-black transition duration-300 ease-in-out outline-0 hover:bg-[#c4b5fd]"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            Connect Wallet
          </button>
          <Modal open={open} setOpen={setOpen} />
          <div className="relative z-10 cursor-pointer ">
            <BsThreeDots
              onClick={() => setOpenMenu((prevstate) => !prevstate)}
              className="text-white text-4xl bg-[#1C1C33] p-2 rounded-3xl shadhow-xl"
            />
            {openMenu && (
              <div className="text-white absolute right-4 top-14 p-4 rounded-xl bg-[#16162d] w-52 ">
                {options.map((item) => (
                  <p
                    key={item.name}
                    className="flex items-center py-2 font-[700] text-[#FFFFFFDE] hover:text-white"
                  >
                    <span className="mr-2 ">{item.icon}</span>
                    {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" flex items-center lg:justify-between justify-center mx-8 ">
        <p className="mr-5 lg:block hidden">.</p>
        <Outlet />
        <div className="text-white mt-40 cursor-pointer lg:block hidden">
          <FaDiscord className="my-10 text-xl opacity-40 hover:opacity-100" />
          <FaTelegramPlane className="my-10 text-xl opacity-40 hover:opacity-100" />
          <FaTwitter className="my-10 text-xl opacity-40 hover:opacity-100" />
          <FaGithub className="my-10 text-xl opacity-40 hover:opacity-100" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
