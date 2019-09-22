function Query(reference, handler) {
    this.reference = reference;
    this.handler = handler;
}
Query.prototype.refer = function(name) {
    this.reference = name;
    return this;
}

Query.prototype.where = function(field, operator, expected) {
    return this;
}
Query.prototype.equal = function(field, value) {
    return this;
}
Query.prototype.greaterThan = function(feild, value) {
    return this;
}
Query.prototype.greaterEqual = function(feild, value) {
    return this;
}
Query.prototype.lessThan = function(feild, value) {
    return this;
}
Query.prototype.lessEqual = function(feild, value) {
    return this;
}

Query.prototype.select = function(fields, callback) {
    // return this;
}
Query.prototype.selectOne = function(callback) {
    // return this;
}

Query.prototype.insert = function(data, callback) {
    return true;
}
Query.prototype.insertAll = function(list, callback) {
    return true;
}

Query.prototype.delete = function(conditions, callback) {
    return true;
}

Query.prototype.update = function(conditions, callback) {
    return true;
}
