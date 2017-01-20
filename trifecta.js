// Node modules
const Promise = require("bluebird");
const fs = require("fs");
const Git = require("nodegit");
const ncp = Promise.promisify(require('ncp').ncp);
const path = require("path");

// Paths
const destination = process.cwd();
const source = path.join(__dirname, "./generated");


// Set concurrency limit
ncp.limit = 16;

// Copy from source to destination
ncp(source, destination)
	.then(function() {
		// Git init
		return Git.Repository.init(destination, 0);
	})
	.then(function(repo) {
		console.log("Done!");
	})
	.catch(function(err) {
		console.error(err);
	});