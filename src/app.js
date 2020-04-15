import Header from './components/Header';

import './scss/app.scss';

const app = () => {
	document.getElementById('header').innerHTML = Header();
	//document.getElementById('user').innerHTML = await User();
};

// Load app
app();
