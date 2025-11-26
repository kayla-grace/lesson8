const appOperations = require('../src/appOperations');

test("multiplcation property of zero",()=>{
    expect(appOperations.multipy(5,0)).toBe(0);
});

test("adding two values",()=>{
    expect(appOperations.add(5,5)).toBe(10);
});