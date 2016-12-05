#! /usr/local/bin/node

/*
 * FILE: steven_nye_hw9.js
 *
 * USAGE:
 *
 * DESCRIPTION:
 *
 * AUTHOR: Steven R. Nye, stevennye@mail.weber.edu
 */

//Declaration of usage function
function usageState()
{
	console.log("Usage: node steven_nye_hw9.js [-c customerDataFolder] [-f dataFile] [-u userName] [-p userPass]");
	console.log("All arguments are REQUIRED");
}

//Declaration of help function
function helpFun()
{
	console.log("Usage: node steven_nye_hw9.js --help");
	console.log("--help Prints this help message");
	console.log("-c Creates customer folder on the home directory (if there isn't one already)");
	console.log("-f Specifies which datafile will be copied over from the directory");
	console.log("-u Specifies user's username on the customer directory (icarus server)");
	console.log("-p Specifies user's password on the customer directory (icarus server)");
	console.log("With no arguments, it provides a usage statement");
}

//check args
if (process.argv.length <= 2)
{
	usageState();
	process.exit(-1);
}
else if (process.argv.length != 10)
{
	console.log("Incorrect number of arguments, exiting...");
	process.exit(-1);
}
else if (process.argv[2] != "-c")
{
	console.log("Invalid argument, exiting...");
	process.exit(-1);
}
else if (process.argv[4] != "-f")
{
	console.log("Invalid argument, exiting...");
	process.exit(-1);
}
else if (process.argv[6] != "-u")
{
	console.log("Invalid argument, exiting...");
	process.exit(-1);
}
else if (process.argv[8] != "-p")
{
	console.log("Invalid argument, exiting...");
	process.exit(-1);
}

//Save args
var dataFolder = process.argv[3];
var dataFile = process.argv[5];
var userName = process.argv[7];
var passWrd = process.argv[9];

var fs = require('fs');

console.log("Working on " + process.env.HOME);
console.log("Checking for data structure...");

//check if folder structure exists
if (!fs.existsSync(dataFolder))
{
	//if folder structure doesnt exist, create it
	console.log("Customer " + dataFolder + " folder is missing");
	console.log("Creating folder...");
	fs.mkdirSync(dataFolder);
	var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
	for (var i in months)
	{
		fs.mkdirSync(dataFolder+"/"+months[i]);
	}
}
else
{
	console.log("Customer " + dataFolder + " folder is already created.");
}

//get date info
var todayDate = new Date().toISOString().slice(0,10);
var d = new Date();
var curMonth = todayDate.split("-")[1];

console.log("Getting file from customer server");

//connect to customer server and retrieve customer file
var client = require('scp2');
client.scp({
	host: 'icarus.cs.weber.edu',
	username: userName,
	password: passWrd,
	path: '/home/hvalle/submit/cs3030/files/'+dataFile
	}, dataFolder+'/'+curMonth+'/'+dataFile+'.'+todayDate, function(err) {if (err) {console.log("SCP failed, check credentials");} else{console.log("SCP successful, file located at [" + dataFolder+'/'+curMonth+'/'+dataFile+'.'+todayDate+']');}});

