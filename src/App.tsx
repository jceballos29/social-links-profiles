import './App.css';
import profilePic from '@/assets/images/avatar-jessica.jpeg';

function App() {
	return (
		<main>
			<div className='card'>
				<figure className='profile-pic'>
					<img src={profilePic} alt='Jessica Randal' />
				</figure>
				<div className='location'>
					<h1 className='name'>Jessica Randall</h1>
					<h2 className='description'>London, United Kingdom</h2>
				</div>
				<p className='bio'>"Front-end developer and avid reader."</p>
				<ul className='links'>
					{[
						'GitHub',
						'Frontend Mentor',
						'LinkedIn',
						'Twitter',
						'Instagram',
					].map((link, index) => (
						<li className='link' key={index}>
							{link}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}

export default App;
