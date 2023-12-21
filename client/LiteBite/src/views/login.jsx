import React from 'react';
import bg from '../assets/LiteBite.jpg';
function login() {
	return (
		<>
			<img
				src={bg}
				alt=""
				className="w-screen h-80 object-cover scale-y-[-1] rounded-tr-[8rem] "
			/>
			<div className="w-screen h-80 object-cover scale-y-[-1] rounded-tr-[8rem] bg-black/40 absolute top-0 right-0 "></div>
			<div className="flex flex-col justify-center items-center p-10 gap-6">
				<div className='flex flex-col justify-between items-start gap-2'>
					<div className="text-black text-2xl font-medium font-jacques">
						Email Address:
					</div>
					<input type="email" name="" id="" className="w-80 h-10 border-b-[3px] border-b-psec active:border-[3px] active:border-psec "/>
				</div>
				<div className='flex flex-col justify-between items-start gap-2 w-80'>
				<div className="text-black  font-medium font-jacques flex justify-between items-center gap-[6.5rem]">
						<div className='text-2xl'>Password:</div>
						<div  className='text-md'>Forgot Password?</div>
					</div>
					<input type='password' name="" id="" className="w-80 h-10 border-b-[3px] border-b-psec active:border-[3px] active:border-psec "/>
				</div>
				
			</div>
			<div className=' mb-10 mr-4 ml-4 flex flex-col justify-center items-center'><button className='w-96 h-16 bg-psec rounded-full text-black text-3xl font-normal font-jacques'>
					Login</button></div>
			<div className='flex justify-center items-center w-[98vw]'><span className='text-black text-xl font-normal font-jacques'>Don’t have an account?</span><span className='text-psec text-xl font-normal font-jacques ml-2'>Sign Up</span></div>
		</>
	);
}

export default login;