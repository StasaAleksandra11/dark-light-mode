import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { useState } from 'react';
function App() {
	const [activeDark, setActiveDark] = useState(true);
	return (
		<div className={activeDark ? 'dark' : ''}>
			<div className='dark:bg-mainBlue'>
				<NavbarComponent  activeDark={activeDark} setActiveDark={setActiveDark}/>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
