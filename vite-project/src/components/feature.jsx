import React from 'react'
import { features } from '../assets'

const Feature = () => {
  return (
    <div className="relative mt-30 border-b border-neutral-800 min-h-[800px] text-2xl">
        <div className="text-center">
        Features </div>
        <h2 className="text-center text-5xl mt-15">Easily Book Your Game</h2>
        <div className="flex flex-wrap mt-10 ">
            {features.map((Features, index) => (
                <div key={index} className="w-full"> 
                <div className="flex">
                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 justify-center items-center rounded-full"></div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl">{features.text}</h5>
                    </div>
                </div>
                </div>
            ))
            }
        </div>
        </div>
  )
}

export default Feature