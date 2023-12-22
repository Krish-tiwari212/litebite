import React from 'react';
import hamburger from '../assets/hamburger.svg';
import logo from '../assets/logo.png';
import user from '../assets/user1.svg';
import camera from '../assets/camera.svg';
import search from '../assets/search.svg';
import filters from '../assets/filter.svg';
import arrow from '../assets/Arrow.svg';
function Home() {
	return (
		<div className="bg-white h-screen w-full pt-10 pl-6 pr-4 flex flex-col justify-normal gap-10 ">
			<header className="flex justify-between items-center ">
				<div className="h-14 w-14 bg-primary/30 rounded-full p-4 border-secondary/40 border-4">
					<img src={hamburger} alt="" className="relaive bg-transparent " />
				</div>
				<div className="">
					<img src={logo} alt="" className="h-20 w-42" />
				</div>
				<div className="h-14 w-14 bg-primary/30 rounded-full p-4 border-secondary/40 border-4">
					<img src={user} alt="" className="relaive bg-transparent" />
				</div>
			</header>
			<div className="h-screen w-full flex flex-col justify-normal items-center">
				<div className="w-96 h-14 bg-secondary/80 rounded-full  shadow-border border-black flex justify-evenly border-2 pt-2 gap-6 shadow-2xl">
					<div className="bg-transparent text-black text-xl font-medium font-jacques">
						<img src={search} alt="" className="inline" />
						<span className="relative top-1 left-2">
							What are you looking for?
						</span>
					</div>
					<div>
						<img src={camera} alt="" />
					</div>
				</div>
				<div className="flex justify-between w-96 pt-6">
					<div>
						<span className='text-black text-xl font-medium font-jacques'>Veg Only</span>
						<div className="w-14 h-8 relative inline ml-2">
							<div className="w-12 h-6 left-0 top-0 absolute bg-black rounded-2xl"></div>
							<div className="w-4 h-4 left-[24.67px] top-[3px] absolute bg-white rounded-full"></div>
						</div>
					</div>
					<div>
						<img src={filters} alt="" className='w-10 h-8'/>
					</div>
				</div>
        <div className="flex justify-between w-96 pt-8">
					<div>
						<span className='text-black text-xl font-medium font-jacques'>Recommended Recipes </span>
					</div>
					<div>
            <span className='text-black text-xl font-medium font-jacques'>See All</span>
						<img src={arrow} alt="" className='inline mb-1 ml-1'/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
