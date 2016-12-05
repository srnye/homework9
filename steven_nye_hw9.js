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
	console.log("Usage: node steven_nye_hw9.js [-c customerDataFolder] [-f dataFile] [-u userName]");
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
	console.log("With no arguments, it provides a usage statement");
}
