/**
 * The type HttpClient.
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.11.2021 13:05
 */ 
class HttpClient {

	static newInstance(url) {
		return new HttpClient(url);
	}

	_url = null;

	constructor(url) {
		if (url == null) console.error(`The url couldn't be ${url}`);

		this._url = url;
	}

	get value() {
		return this._url;
	}

	requestGet(paramsAndVars, callback, args) {
		if (paramsAndVars == null) console.error(`The other part of request url couldn't be ${paramsAndVars}`);
		
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() { 
				
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				callback(JSON.parse(xmlHttp.response), args);
			}

		}
			
		xmlHttp.open("GET", this._url + "/" + paramsAndVars, true);
		xmlHttp.send(null);
	}
}