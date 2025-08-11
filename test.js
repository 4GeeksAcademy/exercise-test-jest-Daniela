// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js'); 

// primera prueba
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBeCloseTo(3.5 * 1.07, 2);
});

test("Un dolar será 146.26 yenes", function(){
    const yen = fromDollarToYen(2);
    const expected = (2 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected, 2);
});

test("Convertir yenes a pound", function(){
    const pound = fromYenToPound(300);
    const expected = (300 / 156.5) * 0.87;
    expect(pound).toBeCloseTo(expected, 2);
});


console.log(fromYenToPound(300));
