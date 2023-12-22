import React from 'react';
import user1 from '../assets/user.svg';
import heart from '../assets/heart.svg';
import help from '../assets/help.svg';
import home from '../assets/home.svg';
import search from '../assets/search.svg';
function navbar() {
	return (
		<div className="bg-[#498463CC] w-full h-16 flex flex-row justify-around">
			<img src={home} alt="" />
			<img src={heart} alt="" />
			<img src={search} alt="" />
			<img src={help} alt="" />
			<img src={user1} alt="" />
		</div>
	);
}

export default navbar;
