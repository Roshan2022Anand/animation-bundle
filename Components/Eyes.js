import React from 'react'

const eyes = ({ eyeMoveX, eyeMoveY }) => {
    return (
        <>
            <div className='border-2 border-blue-500 w-40 h-40 rounded-full overflow-hidden flex justify-center items-center relative'>

                <div className='eyeLids'>
                    <div className='topLid' style={{
                        top: `${(eyeMoveY==-1000)?5:(eyeMoveY > 25) ? (eyeMoveY > 50) ? 50 - 90 : eyeMoveY - 95 : 24 - 90}%`,
                    }}></div>
                    <div className='bottomLid' style={{
                        bottom: `${(eyeMoveY > 65) ? (eyeMoveY > 72) ? 60 - 72 : 60 - eyeMoveY : 10}%`,
                    }}></div>
                </div>

                <div className='relative w-2/3 h-2/3'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-1/4 h-1/4 bg-white text-black' style={{
                        top: `${eyeMoveY}%`,
                        left: `${eyeMoveX}%`
                    }}>.</div>
                </div>
            </div>
        </>
    )
}

export default eyes