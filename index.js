var express = require('express');
var app 	= express();
var path 	= require('path');

// load data
var siteData 			= require('./data/site.json');
var footerData 			= require('./data/footer-nav.json');
var mainData			= require('./data/articles.json');
var sliderData			= require('./data/slider.json');
var recommend			= require('./data/recommend.json');
var widgetBanner		= require('./data/widget-banner.json');
var widgetSmallBanner	= require('./data/widget-small-banner.json');

app.set('view engine', 'ejs');

app.use('/',express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
	res.render('pages/index', {
		"siteData" 			: siteData,
		"mainData"			: mainData,
		"sliderData"		: sliderData,
		"recommend"			: recommend,
		"widgetBanner"		: widgetBanner,
		"widgetSmallBanner"	: widgetSmallBanner,
		"footerNav" 		: footerData
	});
});

app.listen(3000, function () {
	console.log('Check http://localhost:3000/ in a browser to see the output.');
});
