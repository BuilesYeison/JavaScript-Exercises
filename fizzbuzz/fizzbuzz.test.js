const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz',()=>{
    test('just n',()=>{
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });
    test('n is multiple of 3',()=>{
        const expected = "fizz";
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });
    test('n is multiple of 5',()=>{
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });
    test('n is multiple of 3 and n is multiple of 5',()=>{
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });
    test('n is not a number',()=>{
        const expected = "Error: the argument must be a number";
        const result = fizzbuzz("16");
        expect(expected).toBe(result);
    });
});