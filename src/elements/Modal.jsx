import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import money from "../assets/money.svg";
import pontam from "../assets/pontam.png";
import mart from "../assets/mart.svg";
import raise from "../assets/raise.svg";
import fcw from "../assets/fcq.svg";
import ponem from "../assets/ponem.svg";
import reco from "../assets/reco.svg";
import ImportWallet from "./ImportWallet";
export default function Example({ open, setOpen }) {
  const [showMore, setShowMore] = useState(false);
  const [walletImport, setWalletImport] = useState(false);

  const cancelButtonRef = useRef(null);

  const menus = [
    { name: "Petra Wallet", img: pontam },
    { name: "Martain Wallet", img: mart },
    { name: "Rise Wallet", img: raise },
    { name: "Fewcha Wallet", img: fcw },
  ];
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-0"
          leaveTo="opacity-0"
        >
          <div className="fixed top-[0px] left-[0px] right-[0px]  justify-items-center bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed top-14 left-[0px] right-[0px]  justify-items-center z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4  sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl shadow-xl transition-all sm:my-8    ">
                <div className="bg-[#16162D] pb-1">
                  {!walletImport ? (
                    <div className="p-4 lg:w-[30rem]">
                      <div className="flex flex-col items-center w-full relative ">
                        <p className="text-xl text-white font-[700]">
                          Connect a Wallet
                        </p>
                        <p
                          className="absolute text-white font-[500] top-0 right-0"
                          onClick={() => setOpen((prevState) => !prevState)}
                          ref={cancelButtonRef}
                        >
                          <AiOutlineClose />
                        </p>
                        <img src={money} alt="" className="my-2" />
                        <p className="text-lg text-white mb-3">
                          To continue working with the site, you need to connect
                          a wallet and allow the site access to your account
                        </p>
                      </div>

                      <div className="flex flex-col items-center transition duration-300 ">
                        <div
                          onClick={() => setWalletImport((pre) => !pre)}
                          className="cursor-pointer bg-[#28253E] flex items-center justify-between px-3 my-1 w-full py-3 shadow-2xl rounded-2xl"
                        >
                          <div className="flex items-center">
                            <img src={ponem} alt="" className="w-10 mr-5" />
                            <div>
                              <p className="text-left text-lg font-[700] text-white">
                                Pontem Wallet
                              </p>
                              <p className="text-left text-[13px] opacity-50 text-white">
                                The best choice for apatos network
                              </p>
                            </div>
                          </div>
                          <img src={reco} alt="" />
                        </div>
                        <div
                          onClick={() => setShowMore((prevstate) => !prevstate)}
                          className="cursor-pointer bg-[#28253E] flex items-center px-3 my-1 w-full py-3 shadow-2xl rounded-2xl"
                        >
                          <p className="bg-[gray] rounded-3xl p-2 mr-5 text-white text-2xl">
                            {showMore ? (
                              <MdKeyboardArrowUp />
                            ) : (
                              <MdKeyboardArrowDown />
                            )}
                          </p>
                          <p className="text-left text-lg font-[700] text-white">
                            Other Wallets
                          </p>
                        </div>
                        {showMore &&
                          menus.map((menu) => (
                            <div
                              onClick={() => setWalletImport((pre) => !pre)}
                              className="cursor-pointer bg-[#28253E] flex items-center px-3 my-1 w-full py-3 shadow-2xl rounded-2xl"
                            >
                              <img
                                src={menu.img}
                                alt=""
                                className="w-10 mr-5"
                              />
                              <p className="text-left text-lg text-white font-[500]">
                                {menu.name}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <ImportWallet />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
