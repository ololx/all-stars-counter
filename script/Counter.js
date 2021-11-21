/**
 * The type Counter.
 *
 * @author Alexander A. Kropotin
 * @project all-stars-counter
 * @created 21.11.2021 14:40
 */ 
class Counter {

	static ofInitialZero() {
		return new Counter(0);
	}

	static of(initialValue) {
		return new Counter(initialValue);
	}

	_value = 0;

	constructor(initialValue) {
		if (initialValue == null) console.error(`The value couldn't be ${initialValue}`);
		else if (!Number.isInteger(initialValue)) console.error(`The value must be an integer`);

		this._value = initialValue;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	increase() {
		this.increase(1);
	}

	increase(value) {
		this._value += value;
	}

	decrease() {
		this.decrease(1);
	}

	decrease(value) {
		this._value -= value;
	}

	reset() {
		this._value = 0;
	}
}