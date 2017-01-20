const Promise = require("bluebird");
const fs = require("fs");
const Git = require("nodegit");
const ncp = Promise.promisify(require('ncp').ncp);
const path = require("path");

const destination = process.cwd();
const source = path.join(__dirname, "./generated");


ncp.limit = 16;

ncp(source, destination)
	.then(function() {
		return Git.Repository.init(destination, 0);
	})
	.then(function(repo) {
		console.log("Done!");
	})
	.catch(function(err) {
		console.error(err);
	});