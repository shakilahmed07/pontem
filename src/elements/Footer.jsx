import React from 'react'
import { FaDiscord, FaTelegramPlane, FaTwitter, FaGithub } from 'react-icons/fa';
import coin from '../assets/coin.svg'

const Footer = () => {
    return (
        <div className='lg:text-center text-[gray] font-[500] lg:mt-52 relative px-4'>
            <div className='lg:flex justify-center cursor-pointer'>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Pontem
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Liquidswap DEX
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Move Code Playground
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Resource Center
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Documentation
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Get Started
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Ambassador Program
                </p>
                <p className='m-2 lg:text-lg text-sm hover:text-white'>
                    Privacy Policy
                </p>
            </div>

            <div className='text-white flex cursor-pointer lg:hidden block my-2'>
                <FaDiscord className='mx-4 lg:text-xl text-sm opacity-40 hover:opacity-100' />
                <FaTelegramPlane className='mx-4 lg:text-xl text-sm opacity-40 hover:opacity-100' />
                <FaTwitter className='mx-4 lg:text-xl text-sm opacity-40 hover:opacity-100' />
                <FaGithub className='mx-4 lg:text-xl text-sm opacity-40 hover:opacity-100' />
            </div>
            <p className='my-5 lg:text-sm text-[10px]'>
                © 2022 Pontem Technology Ltd. All Rights Reserved. Terms of use. Version 1.12.23.
            </p>
            <div className='fixed right-0 bottom-5 flex items-center lg:px-4'>
                <p className='rounded-lg p-2 bg-[#16162D] mr-1 text-sm text-white'>List Coin</p>
                <img src={coin} alt="" />
            </div>
        </div>
    )
}

export default Footer