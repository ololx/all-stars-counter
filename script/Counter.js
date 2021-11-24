/**
 * The type Counter
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.11.2021 14:40
 */ 
var Counter = function(value = 0) {

	/**
	 * The counter value can be increased or decreased by n
	 */
	var _value = 0;

	/**
	 * The counter initial value
	 */
	var _initial = 0;

	/**
	 * The counter value getter
	 */
	this.getValue = function() {
		return _value;
	};

	/**
	 * Public method for increasing the counter value
	 * @param value
	 */
	this.increase = function(value = 1) {
		if (_checkValue(value)) {
			_value += value;
		}
	};

	/**
	 * Public method for decreasing the counter value
	 * @param value
	 */
	this.decrease = function(value = 1) {
		if (_checkValue(value)) {
			_value -= value;
		}
	};

	/**
	 * Public method for reseting the counter value to initial
	 */
	this.reset = function() {
		_value += _initial;
	};
	
	/**
	 * Private method for checking a value for validity.
	 */
	var _checkValue = function(value) {
		if (value == null) {
			console.error(`The value couldn't be ${value}`);

			return false;
		} else if (!Number.isInteger(value)) {
			console.error(`The value must be an integer`);
			return false;
		}

		return true;
		
	};


	/**
	 * Private constructor method.
	 */
	var _init = function(value = 1) {
		if (_checkValue(value)) {
			_initial = value;
		}

		value = _initial;
	};


	_init(value);
}