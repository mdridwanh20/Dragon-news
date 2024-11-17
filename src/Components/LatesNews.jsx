import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

export default function LatesNews() {
    return (
        <div className='flex items-center gap-2 p-3 bg-slate-200'>
            <button className='bg-[#D72050] text-white py-1 px-4 rounded-sm'> Latest </button>

            <Marquee pauseOnHover={true}>
                <Link to='/news'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>

                <p className='px-6'>| |</p>

                <Link to='/news'>
                    Germany Stunned by Spain in Extra-Time Thriller
                </Link>

                <p className='px-6'>| |</p>

                <Link to='/news'>
                    Spain Knock Out Hosts Germany to Reach Euro 2024 Semi-Finals
                </Link>

                <p className='px-6'>| |</p>

                <Link to='/news'>
                    Merino's Late Header Knocks Germany Out of Euros
                </Link>

            </Marquee>

        </div>
    )
}
