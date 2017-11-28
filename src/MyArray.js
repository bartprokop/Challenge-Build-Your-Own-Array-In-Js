function MyArray(initialCapacity) {
    if (initialCapacity === undefined) {
        initialCapacity = 0;
    }

    this.elements = new PlainArray(initialCapacity);
}

MyArray.prototype.length = function () {
    return this.elements.length;
};

MyArray.prototype.push = function (value) {
    var newArray = new PlainArray(this.elements.length + 1);
    for (var i = 0; i < this.elements.length; i++)
        newArray.set(i, this.elements.get(i));
    newArray.set(this.elements.length, value);
    this.elements = newArray;
};

MyArray.prototype.get = function (index) {
    if (index < 0) return undefined;
    if (index >= this.elements.length) return undefined;
    return this.elements.get(index);
};

MyArray.prototype.set = function (index, value) {
    if (index >= this.elements.length) {
        count = index - this.elements.length + 1;
        while (count-- > 0) this.push(undefined);
    }
    this.elements.set(index, value);
};

MyArray.of = function () {
    var newArray = new MyArray();
    for (var v of arguments) {
        newArray.push(v);
    }
    return newArray;
};

MyArray.prototype.pop = function () {
    if (this.elements.length == 0) return undefined;
    var lastVal = this.get(this.elements.length - 1);

    var newArray = new PlainArray(this.elements.length - 1);
    for (var i = 0; i < this.elements.length - 2; i++)
        newArray.set(i, this.elements.get(i));
    this.elements = newArray;

    return lastVal;
};

MyArray.prototype.concat = function (other) {
    if (this.elements.length == 0) return other;
    if (other.length() == 0) return this;

    var newArray = new MyArray();

    for (var i = 0; i < this.elements.length; i++)
        newArray.push(this.elements.get(i));

    for (var i = 0; i < other.length(); i++)
        newArray.push(other.get(i));

    return newArray;
};

MyArray.prototype.indexOf = function (element) {
    for (var i = 0; i < this.elements.length; i++)
        if (this.elements.get(i) === element)
            return i;

    return -1;
};

MyArray.prototype.lastIndexOf = function (element) {
    for (var i = this.elements.length - 1; i >= 0; i--)
        if (this.elements.get(i) === element)
            return i;

    return -1;
};

MyArray.prototype.includes = function (element) {
    for (var i = this.elements.length - 1; i >= 0; i--)
        if (this.elements.get(i) === element)
            return true;

    return false;
};

MyArray.prototype.find = function (fn) {

};

MyArray.prototype.findIndex = function (fn) {

};

MyArray.prototype.equals = function (other) {

};

MyArray.prototype.forEach = function (fn) {

};

MyArray.prototype.join = function (separator) {

};

MyArray.prototype.toString = function () {

};

MyArray.prototype.map = function (fn) {

};

MyArray.prototype.filter = function (fn) {

};

MyArray.prototype.some = function (fn) {

};

MyArray.prototype.every = function (fn) {

};

MyArray.prototype.fill = function (value, start, end) {

};

MyArray.prototype.reverse = function () {

};

MyArray.prototype.shift = function () {

};

MyArray.prototype.unshift = function (element) {

};

MyArray.prototype.slice = function (start, end) {

};

MyArray.prototype.splice = function (start, deleteCount) {

};