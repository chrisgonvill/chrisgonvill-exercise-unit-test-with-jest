const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function () {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);


    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test('converts from Dollar to Yen', () => {
    let yen = fromDollarToYen(10);
    expect(yen).toBeCloseTo(1565, 0);
});

test('converts from Yen to Pound', () => {
    let pound = fromYenToPound(10000);
    expect(pound).toBeCloseTo(55.59);
});
const { fromDollarToYen, fromYenToPound } = require('./app.js');
