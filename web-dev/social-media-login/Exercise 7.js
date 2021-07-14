var database = [ {
	username: "cookiemilk421",
	password: "abcdefg"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	},
];


var newsfeed = [
	{
		username: "naughtynichole",
		timeline: "So sleepy. Last night was a rough night ;)"
	},
	{
		username: "quarantinequinoa",
		timeline: "This quarantine is driving me crazy, even if it's for the best."
	},
	{
		username: "pictureparfait",
		timeline: "Check out this dish!"
	},
];


function isUserValid(username, password) {
		for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}


function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}


var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);