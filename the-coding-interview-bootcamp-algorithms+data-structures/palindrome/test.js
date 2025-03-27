const { checkWithReverseFn, checkWithForLoop } = require('.');

test('Palindrome function is defined', () => {
    expect(checkWithReverseFn).toBeDefined();
    expect(checkWithForLoop).toBeDefined();
});

test('"aba" is a palindrome', () => {
    expect(checkWithReverseFn('aba')).toBeTruthy();
    expect(checkWithForLoop('aba')).toBeTruthy();
  });
  
  test('" aba" is not a palindrome', () => {
    expect(checkWithReverseFn(' aba')).toBeFalsy();
    expect(checkWithForLoop(' aba')).toBeFalsy();
  });
  
  test('"aba " is not a palindrome', () => {
    expect(checkWithReverseFn('aba ')).toBeFalsy();
    expect(checkWithForLoop('aba ')).toBeFalsy();
  });
  
  test('"greetings" is not a palindrome', () => {
    expect(checkWithReverseFn('greetings')).toBeFalsy();
    expect(checkWithForLoop('greetings')).toBeFalsy();
  });
  
  test('"1000000001" a palindrome', () => {
    expect(checkWithReverseFn('1000000001')).toBeTruthy();
    expect(checkWithForLoop('1000000001')).toBeTruthy();
  });
  
  test('"Fish hsif" is not a palindrome', () => {
    expect(checkWithReverseFn('Fish hsif')).toBeFalsy();
    expect(checkWithForLoop('Fish hsif')).toBeFalsy();
  });
  
  test('"pennep" a palindrome', () => {
    expect(checkWithReverseFn('pennep')).toBeTruthy();
    expect(checkWithForLoop('pennep')).toBeTruthy();
  });