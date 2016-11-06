var math = require('../modules/math');

exports.test_add = (test) => {
    test.equal(math.add(1, 1), 2);
    test.done();
};

exports.test_subtract = (test) => {
    test.equal(math.subtract(3, 2), 2);
    test.done();
};