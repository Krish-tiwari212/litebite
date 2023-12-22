import React from 'react';
import filters from '../assets/filter.svg';
import search from '../assets/search.svg';
import right from '../assets/arrow-right.svg';
import food from '../assets/food.png';
import star from '../assets/Star.svg';
import Navbar from '../components/navbar';
function Result() {
	return (
		<>
			<div className="bg-white h-screen w-full pt-10  flex flex-col justify-normal gap-8 ">
				<header className="flex justify-between items-center gap-2 px-2">
					<div className="h-14 w-14 bg-primary/30 rounded-full p-4 border-secondary/40 border-4">
						<img
							src={right}
							alt=""
							className="bg-transparent relative bottom-1 "
						/>
					</div>
					<div className="w-96 h-14 bg-secondary/80 rounded-full  shadow-xl border-black border-2 pt-2 pl-2">
						<div className="bg-transparent text-black text-xl font-medium font-jacques">
							<img src={search} alt="" className="inline w-8 h-6" />
							<span className="relative top-1 left-2">
								What are you looking for?
							</span>
						</div>
					</div>
					<div className="h-14 w-14 bg-primary/30 rounded-full p-4 border-secondary/40 border-4">
						<img src={filters} alt="" className="bg-transparent " />
					</div>
				</header>
				<div className="p-1">
					<div className="w-full h-11 p-2.5 bg-primary/30 border-2 border-secondary flex justify-between ">
						<div className="text-black text-xl font-medium font-jacques ">
							Search Results
						</div>
						<div className="text-black text-xl font-medium font-jacques ">
							27 Results
						</div>
					</div>
				</div>
				<main className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-evenly items-center ">
					<div className=" group w-52 h-60 grid grid-cols-1 bg-white shadow-xl rounded-2xl border-2 border-black/50">
						<img src={food} alt="" className='group-hover:scale-110 duration-200 object-cover'/>
						<div className="flex flex-col w-52 px-2.5 inset-0">
							<div className="flex justify-between  w-50 ">
								<p className="text-black text-lg font-medium font-jacques">
									Pasta
								</p>
								<div>
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
								</div>
							</div>
							<div className="flex justify-between items-center font-jacques">
								<p className='text-black text-md font-normal '>25mins</p>
								<p className='text-black text-sm font-normal '>~By Emma </p>
								<p className='text-secondary text-sm font-semibold '>veg</p>
							</div>
						</div>
					</div>
					<div className=" group w-52 h-60 grid grid-cols-1 bg-white shadow-xl rounded-2xl border-2 border-black/50">
						<img src={food} alt="" className='group-hover:scale-110 duration-200 object-cover'/>
						<div className="flex flex-col w-52 px-2.5 inset-0">
							<div className="flex justify-between  w-50 ">
								<p className="text-black text-lg font-medium font-jacques">
									Pasta
								</p>
								<div>
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
								</div>
							</div>
							<div className="flex justify-between items-center font-jacques">
								<p className='text-black text-md font-normal '>25mins</p>
								<p className='text-black text-sm font-normal '>~By Emma </p>
								<p className='text-secondary text-sm font-semibold '>veg</p>
							</div>
						</div>
					</div>
					<div className=" group w-52 h-60 grid grid-cols-1 bg-white shadow-xl rounded-2xl border-2 border-black/50">
						<img src={food} alt="" className='group-hover:scale-110 duration-200 object-cover'/>
						<div className="flex flex-col w-52 px-2.5 inset-0">
							<div className="flex justify-between  w-50 ">
								<p className="text-black text-lg font-medium font-jacques">
									Pasta
								</p>
								<div>
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
								</div>
							</div>
							<div className="flex justify-between items-center font-jacques">
								<p className='text-black text-md font-normal '>25mins</p>
								<p className='text-black text-sm font-normal '>~By Emma </p>
								<p className='text-secondary text-sm font-semibold '>veg</p>
							</div>
						</div>
					</div>
					<div className=" group w-52 h-60 grid grid-cols-1 bg-white shadow-xl rounded-2xl border-2 border-black/50">
						<img src={food} alt="" className='group-hover:scale-110 duration-200 object-cover'/>
						<div className="flex flex-col w-52 px-2.5 inset-0">
							<div className="flex justify-between  w-50 ">
								<p className="text-black text-lg font-medium font-jacques">
									Pasta
								</p>
								<div>
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
								</div>
							</div>
							<div className="flex justify-between items-center font-jacques">
								<p className='text-black text-md font-normal '>25mins</p>
								<p className='text-black text-sm font-normal '>~By Emma </p>
								<p className='text-secondary text-sm font-semibold '>veg</p>
							</div>
						</div>
					</div>
					<div className=" group w-52 h-60 grid grid-cols-1 bg-white shadow-xl rounded-2xl border-2 border-black/50">
						<img src={food} alt="" className='group-hover:scale-110 duration-200 object-cover'/>
						<div className="flex flex-col w-52 px-2.5 inset-0">
							<div className="flex justify-between  w-50 ">
								<p className="text-black text-lg font-medium font-jacques">
									Pasta
								</p>
								<div>
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
								</div>
							</div>
							<div className="flex justify-between items-center font-jacques">
								<p className='text-black text-md font-normal '>25mins</p>
								<p className='text-black text-sm font-normal '>~By Emma </p>
								<p className='text-secondary text-sm font-semibold '>veg</p>
							</div>
						</div>
					</div>
                    <div className=" group w-52 h-60 grid grid-cols-1 bg-white shadow-xl rounded-2xl border-2 border-black/50">
						<img src={food} alt="" className='group-hover:scale-110 duration-200 object-cover '/>
						<div className="flex flex-col w-52 px-2.5 inset-0">
							<div className="flex justify-between  w-50 ">
								<p className="text-black text-lg font-medium font-jacques">
									Pasta
								</p>
								<div>
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
									<img src={star} className="inline w-6 h-6" />
								</div>
							</div>
							<div className="flex justify-between items-center font-jacques">
								<p className='text-black text-md font-normal '>25mins</p>
								<p className='text-black text-sm font-normal '>~By Emma </p>
								<p className='text-secondary text-sm font-semibold '>veg</p>
							</div>
						</div>
					</div>
				</main>
                <Navbar/>
			</div>
		</>
	);
}

export default Result;
