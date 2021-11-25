/**
 * The type METHODS
 * 
 * This is an enum with HTTP methods
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.25.2021 04:05
 */
const METHODS = {
	GET: `GET`,
    POST: `POST`,
    PATCH: `PATCH`,
    PUT: `PUT`,
    DELETE: `DELETE`
};

/**
 * The type CONTENT_TYPES
 * 
 * This is an enum with the header content types
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.25.2021 04:05
 */
const CONTENT_TYPES = {
	APPLICATION_JSON: `application/json`,
    APPLICATION_FORM: `application/x-www-form-urlencoded`
};

/**
 * The type HttpQurey
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.11.2021 13:05
 */
var HttpQurey = function(requestObjectFacroty, contentType) {

    /**
	 * The request object factory
	 */
    var _requestObjectFacroty = null;

	/**
	 * public  method for sending the HTTP GET request
	 */
    this.sendGet = function(url, handler, async) {
    	this.sendRequest(url, METHODS.GET, handler, async);
    }

    /**
	 * public  method for sending the HTTP POST request
	 */
    this.sendPost = function(url, handler, async, data) {
    	this.sendRequest(url, METHODS.POST, handler, async, data);
    }

	/**
	 * public  method for sending the HTTP request
	 */
    this.sendRequest = function(url, method, handler, async = true, data = null, contentType = CONTENT_TYPES.APPLICATION_JSON) {
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
    	}
		requestObject.open(method, url, async);
		requestObject.setRequestHeader(`Content-Type`, _contentType);
		requestObject.send(data != null && data != 'undefined' ? 'vari='+encodeURIComponent(data) : data);
    }

	/**
	 * Private constructor method.
	 */
    var _init = function(requestObjectFacroty = new RequestObjectFacroty()) {
    	 _requestObjectFacroty = requestObjectFacroty;
    	 _contentType = contentType;
    }

    _init(requestObjectFacroty = new RequestObjectFacroty());

}

/**
 * The type RequestObjectFacroty
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 24.11.2021 11:05
 */
var RequestObjectFacroty = function() {
	
	/**
	 * public  method for creating the RequestObject instance
	 */
	this.newInstance = function () {
		var instance = null;
		if ((instance = newActiveXObjectInstance("Msxml2.XMLHTTP")) == null) {
			instance = newActiveXObjectInstance("Microsoft.XMLHTTP");
		}
		
		if(!instance && typeof(XMLHttpRequest) != 'undefined') {
            instance = new XMLHttpRequest();
        }
		
		return instance;
    }

    /**
	 * Private method for creating the ActiveXObject instance
	 */
    var newActiveXObjectInstance = function(name) {
    	try {
            return new ActiveXObject(name);
        } catch(e) {
			console.log(`The ActiveXObject didn't with error - ${e}`);
			return null;
        }
    }

    /**
	 * Private constructor method.
	 */
	var _init = function() {}
}