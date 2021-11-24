/**
 * The type RequestObjectFacroty
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 24.11.2021 11:05
 */
var RequestObjectFacroty = function() {
	
	this.newInstance = function () {
		var instance = null;
		if ((instance = getActiveXObject("Msxml2.XMLHTTP")) == null) {
			instance = getActiveXObject("Microsoft.XMLHTTP");
		}
		
		if(!instance && typeof(XMLHttpRequest) != 'undefined') {
            instance = new XMLHttpRequest();
        }
		
		return instance;
    };

    var getActiveXObject = function(name) {
    	try {
            return new ActiveXObject(name);
        } catch(e) {
			console.log(`The ActiveXObject didn't with error - ${e}`);
			return null;
        }
    }
}


/**
 * The type EndpointClient
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.11.2021 13:05
 */
var EndpointClient = function(requestObjectFacroty = new RequestObjectFacroty(), contentType = `application/json`) {
    
    this.METHODS = {
    	GET: `GET`,
    	POST: `POST`,
    	PATCH: `PATCH`,
    	PUT: `PUT`,
    	DELETE: `DELETE`
    };

    var _contentType = null;

    var _requestObjectFacroty = null;

    this.sendGet = function(url, handler, async = true) {
    	this.sendRequest(url, this.METHODS.GET, handler, async);
    };

    this.sendPost = function(url, handler, async = true, data = null) {
    	this.sendRequest(url, this.METHODS.POST, handler, async, data);
    };

    this.sendRequest = function(url, method, handler) {
		this.sendRequest(url, method, handler);
    };

    this.sendRequest = function(url, method, handler, async = true, data = null) {
		let requestObject = _requestObjectFacroty.newInstance();
		requestObject.onreadystatechange = function() {
			try {
	            if (requestObject.readyState == 4) {
	            	if (requestObject.status == 200) {
	                    handler(requestObject.response);
	                } else {
	                	console.log(`Waiting response status - 200. Current status - ${requestObject.status}`);
	                }
	            }

	            if (requestObject.readyState != 4) {
	                console.log(`Waiting response state - 4. Current state - ${requestObject.readyState}`);
	            }
	        }
	        catch (e) {
	            console.error(`There was error during waiting HTTP response - ${e}`);
	        }
    };
		requestObject.open(method, url, async);
		requestObject.send(data);
    };

    var _init = function(requestObjectFacroty = new RequestObjectFacroty(), contentType = `application/json`) {
    	 _requestObjectFacroty = requestObjectFacroty;
    	 _contentType = contentType;
    };

    _init(requestObjectFacroty, contentType);

}