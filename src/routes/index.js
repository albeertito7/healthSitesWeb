const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	//res.send("Hello World");
	//res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('index', { title: 'HealthSites' });
});

router.get('/about-us', (req, res) => {
	//res.send("Hello World");
	//res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('about', { title: 'About Us' });
});

router.get('/app', (req, res) => {
	//res.send("Hello World");
	//res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('app', { title: 'The App' });
});

router.get('/contact', (req, res) => {
	//res.send("Hello World");
	//res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('contact', { title: 'Contact Page' });
});

router.get('/privacy-policy', (req, res) => {
	//res.send("Hello World");
	//res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('privacyPolicy', { title: 'Privacy Policy' });
});

module.exports = router;