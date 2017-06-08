const express = require('express');
const async = require('async');
var Router = express.Router();
var Transmission = require('transmission');

transmission = new Transmission({
	host: '',
	port: 8084,
	username: '',
	password: '',
	ssl: false,
	url: '/transmission/rpc',
})


Router.get("/", function(req, res) {
	if (req.query.url) {
		transmission.addUrl(req.query.url, function(err, arg) {
			console.log(err);
			console.log(arg);
			console.log(transmission.status);

			if (err) {
				return res.json({
					status: false,
					message: err
				});
			}
			else {
				return res.json({
					status: true,
					message: "Ok"
				})
			}
		});
	}
	else {
		return res.json({
			status: false,
			message: "No link"
		});
	}
})

module.exports = Router;
