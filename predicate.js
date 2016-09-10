var people = [];

var Person = function(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
};

var age = function(value) {
	return function(person) {
		return person.age === value;
	};
};

var gender = function(value) {
	return function(person) {
		return person.gender === value;
	};
};

var not = function(predicate) {
	return function(person) {
		return !predicate(person);
	};
};

var and = function(predicate1, predicate2) {
	return function(person) {
		return predicate1(person) && predicate2(person);
	};
};

var or = function(predicate1, predicate2) {
	return function(person) {
		return predicate1(person) || predicate2(person);
	};
};

people.push(new Person("Marc", 39, "M"));
people.push(new Person("Marie", 32, "F"));
people.push(new Person("Julie", 46, "F"));
people.push(new Person("Anne", 12, "F"));
people.push(new Person("Paul", 18, "M"));

console.log(people.filter(or(and(age(18), gender("M")), and(gender("F"), not(age(32))))));
