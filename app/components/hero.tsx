import Arrow from '@/icons/arrow'
import React from 'react'
import Button from './button'

export const Hero = () => {
  return (
    <div className='px-4 py-16 flex items-center flex-col w-full'>
        <button className='border border-neutral-200 px-4 py-1 text-[#202020] bg-[#E6E9EE] rounded-4xl hover:bg-gray-200 transition duration-200 cursor-pointer'>
            <div className='flex items-center gap-2'>
                Incorporation common mistakes to avoid
                <Arrow/>
            </div>
        </button>
        <div>
            <h1 className='mt-10 font-medium text-7xl text-black tracking-tighter text-center'>Magically simplify <br />accounting and taxes</h1>
            <p className='max-w-2xl mt-4 mx-auto text-center text-neutral-700'>Automated bookkeeping, effortless tax filing, real‑time insights. <br /> Set up in 10 mins. Back to building by 8:05pm.</p>
        </div>
        <div className='flex items-center gap-4 mt-8'>
            <Button/>
            <button className=" text-black px-4 py-2 rounded-md cursor-pointer">Pricing &rarr;</button>
        </div>
        <div>
            <h4 className='mt-12 font-light text-neutral-700'>Currently for US-based Delaware C-Corps.</h4>
        </div>
    </div>
  )
}
