import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Imoodev from '../assets/Imoodev.png';
/*icons */
import { MdOutlineWbSunny } from 'react-icons/md';
import { LuMoonStar } from 'react-icons/lu';

function NavbarComponent({ activeDark, setActiveDark }) {
	function toggleDarkMode() {
		setActiveDark(!activeDark);
	}

	return (
		
		<div className='dark:bg-mainBlue'>

         <div className='container mx-auto flex lg:flex-row flex-col justify-between items-center h-[100px] px-[4px] '>
			{activeDark ? (
				<img src={Imoodev} alt='logo' className='lg:h-[17px] h-[20px] lg:mt-0 mt-[15px] '/>
			) : (
				<img src={logo} alt='logo' className='lg:h-[17px] h-[20px] lg:mt-0 mt-[15px] ' />
			)}
			<div className='flex items-center gap-[20px] '>
				<ul className='dark:text-white text-mainBlue flex gap-[10px] cursor-pointer font-semibold'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/features'>Features</NavLink>
					</li>
					<li>
						<NavLink to='/themes'>Themes</NavLink>
					</li>
					<li>
						<NavLink to='/blog'>Blog</NavLink>
					</li>
				</ul>

				{activeDark ? (
					<MdOutlineWbSunny
						color='white'
						onClick={toggleDarkMode}
						size={30}
						className='cursor-pointer'
					/>
				) : (
					<LuMoonStar
						onClick={toggleDarkMode}
						size={30}
						className=' cursor-pointer'
					/>
				)}
			</div>
		</div>
		</div>
	);
}

export default NavbarComponent;
