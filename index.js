/*
 * Add initial function by onLoad() event
 */
window.addEventListener("load", main(), false);

/*
 * The Main function
 */
function main() {
	if (!document.querySelector("body")) {
		 setTimeout("main()", 800);

		 return;
	}

	let starsCounter = new Counter();
	let githubApiClient = new HttpQurey();	
	let starVis = new StarVis(document.getElementsByTagName('BODY')[0]).paint();
	let url = new URL(window.location.href);

	let excludeRepos = url.searchParams.getAll("exclude_repo");
	if (!Array.isArray(excludeRepos)) {
		excludeRepos = [];
	}
	
	let users = url.searchParams.getAll("user");
	if (!Array.isArray(users)) {
		users = [];
	}
	
	for(var user in users) {
		githubApiClient.sendGet(
			`https://api.github.com/users/${users[user]}/repos`, 
			function (response) {
				let repositories = JSON.parse(response);
				for(var repositoryIndex in repositories) {
					if (excludeRepos.includes(repositories[repositoryIndex]["name"])) continue;
					
					starsCounter.increase(repositories[repositoryIndex]["stargazers_count"]);
					starVis.paint(starsCounter.getValue());
				}
			}
		);
	}		
			
}