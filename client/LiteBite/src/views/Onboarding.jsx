import React from 'react'
import bg from '../assets/LiteBite.jpg';
import {Link} from 'react-router-dom'
function Onboarding() {
  return (
    <>
			<img
				src={bg}
				alt=""
				className="w-full h-screen object-cover scale-y-[-1]"
			/>
			<div className="absolute top-0 left-0 bg-black/40 w-full h-screen flex flex-col justify-center items-center gap-24 pb-16">
				<div className="text-white text-5xl font-decol font-medium">
					Welcome to LiteBite
				</div>
				<div className="flex flex-col justify-evenly items-center gap-2">
					<div>
						<Link to='login'><button className="w-96 h-16 bg-yellow-500 rounded-full text-black text-3xl font-normal font-jacques">
							Login
						</button></Link>
					</div>
					<div className="flex justify-around gap-4">
                        <div className='w-36 h-px border-2 mt-4 border-white'></div>
						<div className="text-white text-3xl font-normal font-jacques">
							OR
						</div>
                        <div className='w-36 h-px border-2 mt-4 border-white'></div>
					</div>

					<Link to='signup'><div>
						<button className="w-96 h-16 bg-yellow-500 rounded-full text-black text-3xl font-normal font-jacques">
							Sign Up
						</button>
					</div></Link>
				</div>
			</div>
		</>
  )
}

export default Onboarding