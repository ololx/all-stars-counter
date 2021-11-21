var allStarsCount = 0;
			function httpGetAsync(theUrl, callback) {
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.onreadystatechange = function() { 
				
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
					callback(JSON.parse(xmlHttp.response));
				}
				
				xmlHttp.open("GET", theUrl, true);
				xmlHttp.send(null);
			}

			function innerRepos(response) {
				const body = document.getElementsByTagName('BODY')[0];
						
					for(var k in response) {
						console.log(k, response[k]);
						allStarsCount += response[k]["stargazers_count"];
					}
						var array = document.getElementsByTagName('img');
						var img = null;
						if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
						    img = array[0];
							
						} else {
							img = document.createElement('img');
						}
						img.src = 'data:image/svg+xml,' + encodeURIComponent(`
						  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
						    <foreignObject width="100%" height="100%">
						      <div xmlns="http://www.w3.org/1999/xhtml" style="border:1px solid red;padding:0px;">
						        Profile ${allStarsCount}★
						      </div>
						    </foreignObject>
						  </svg>
							  `);
						//img.src = `https://img.shields.io/badge/All_stars-${allStarsCount}★-informational?style=flat-square`;	
						//body.appendChild(img);

						return img;
						
						/*var e = document.createElement('a');
						        var href = 'data:image/svg+xml,' + encodeURIComponent(`
						  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
						    <foreignObject width="100%" height="100%">
						      <div xmlns="http://www.w3.org/1999/xhtml" style="border:1px solid red;padding:0px;">
						        Profile ${allStarsCount}★
						      </div>
						    </foreignObject>
						  </svg>
							  `);
						        e.setAttribute('href', href);
						        e.setAttribute('download', "dold");
						        document.body.appendChild(e);
						        e.click();
						        document.body.removeChild(e);*/
					
			}
			
			httpGetAsync("https://api.github.com/users/ololx/repos", innerRepos);
			httpGetAsync("https://api.github.com/users/innopolis-university-java-team/repos", innerRepos);