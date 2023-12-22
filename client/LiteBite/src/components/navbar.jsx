import React from 'react';
import user1 from '../assets/user.svg';
import heart from '../assets/heart.svg';
import help from '../assets/help.svg';
import home from '../assets/home.svg';
import search from '../assets/search.svg';
function navbar() {
	return (
		<div className="bg-[#498463CC] w-full h-16 flex flex-row justify-around items-center">
					<img src={home} className='w-10 h-10' />
					<img src={heart} className='w-10 h-10' />
					<img src={search} className='w-8 h-8' />
					<img src={help} className='w-8 h-8' />
					<img src={user1} className='w-8 h-8' />
				</div>
	);
}

export default navbar;
