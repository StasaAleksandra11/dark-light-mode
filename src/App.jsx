import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { useState } from 'react';
import FooterComponent from './components/FooterComponent'
function App() {
	const [activeDark, setActiveDark] = useState(true);
	return (
		<div className={activeDark ? 'dark' : ''}>
			<div className='dark:bg-mainBlue'>
				<NavbarComponent  activeDark={activeDark} setActiveDark={setActiveDark}/>
				<Outlet />
				<FooterComponent activeDark={activeDark}/>
			</div>
		</div>
	);
}

export default App;
